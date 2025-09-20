
import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import SlideViewer from './components/SlideViewer';
import Navigation from './components/Navigation';
import GridView from './components/GridView';
import NotesPanel from './components/NotesPanel';
import { generateSpeakerNotes } from './services/gemini';
import { getPageContent } from './pageContent';
import Spinner from './components/Spinner';
import ContactModal from './components/ContactModal';
import Chatbot from './components/Chatbot';
import { LanguageProvider, useTranslation } from './hooks/useTranslation';
import LanguageSwitcher from './components/LanguageSwitcher';

declare global {
    interface Window {
        lucide: any;
    }
}

const PageHeader: React.FC = () => {
    const { t } = useTranslation();
    return (
        <header className="py-6 px-4 sm:px-6 md:px-8 flex justify-between items-center border-b border-zinc-800/50 bg-zinc-950/30 backdrop-blur-sm">
            <a href="./index.html" className="flex items-center gap-2 sm:gap-3 group">
                <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-400 group-hover:from-white group-hover:to-zinc-300 transition-colors">{t('presentationsPage.header.main')}</h1>
                <span className="text-xl sm:text-2xl font-normal text-zinc-600">/</span>
                <span className="text-xl sm:text-2xl font-semibold text-zinc-300">{t('presentationsPage.header.sub')}</span>
            </a>
            <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <a href="./index.html" className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2">
                  <i data-lucide="arrow-left" className="w-4 h-4 mr-2"></i>
                  {t('presentationsPage.header.back')}
                </a>
            </div>
        </header>
    );
}


const PresentationsApp: React.FC = () => {
  const { t, language } = useTranslation();
  const { PROJECT_DETAILS, PRESENTATIONS, getPageContext } = getPageContent(language);

  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [speakerNotesCache, setSpeakerNotesCache] = useState<Record<string, string>>({});
  const [isGeneratingNotes, setIsGeneratingNotes] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [slideState, setSlideState] = useState({
      key: 'A',
      slideA: { content: '', loaded: false },
      slideB: { content: '', loaded: false },
  });

  const playerRef = useRef<HTMLDivElement>(null);
  
  const activeDeck = PRESENTATIONS[activeDeckIndex];
  const slides = activeDeck.slides;

  const fullPageContext = getPageContext();
  const systemInstruction = t('chatbot.systemInstruction', { context: fullPageContext });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t('presentationsPage.title');
  }, [language, t]);

  const handleDeckSelect = useCallback((index: number, slideIndex = 0) => {
    if (index === activeDeckIndex && slideIndex === currentSlideIndex && slideState.slideA.content) return;

    const newDeckSlides = PRESENTATIONS[index].slides;
    const validSlideIndex = Math.max(0, Math.min(slideIndex, newDeckSlides.length - 1));
    
    setActiveDeckIndex(index);
    setCurrentSlideIndex(validSlideIndex);
    setIsLoading(true);
    setSlideState({
      key: 'A',
      slideA: { content: newDeckSlides[validSlideIndex], loaded: false },
      slideB: { content: '', loaded: false },
    });
    setSpeakerNotesCache({}); // Clear notes for new deck

    const url = new URL(window.location.href);
    url.searchParams.set('deck', index.toString());
    url.searchParams.set('slide', validSlideIndex.toString());
    window.history.pushState({}, '', url);
  }, [activeDeckIndex, currentSlideIndex, slideState.slideA.content, PRESENTATIONS]);
  
  useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const deckIndex = parseInt(params.get('deck') || '0', 10);
      const slideIndex = parseInt(params.get('slide') || '0', 10);

      const validDeckIndex = (deckIndex >= 0 && deckIndex < PRESENTATIONS.length) ? deckIndex : 0;
      handleDeckSelect(validDeckIndex, slideIndex);
  }, [handleDeckSelect, PRESENTATIONS]);
  
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        document.documentElement.style.setProperty('--x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Listen for messages from iframes
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
        if (event.data?.type === 'openContactModal') {
            setIsContactModalOpen(true);
        } else if (event.data?.type === 'openChatbot') {
            window.dispatchEvent(new CustomEvent('open-chatbot'));
        }
    };

    window.addEventListener('message', handleMessage);

    return () => {
        window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      const activeKey = slideState.key;
      if (slideState[activeKey === 'A' ? 'slideA' : 'slideB'].loaded) {
        setIsLoading(false);
      }
    }
  }, [slideState, isLoading]);

  const updateSlide = useCallback((newIndex: number) => {
    if (newIndex === currentSlideIndex || newIndex < 0 || newIndex >= slides.length) return;
    
    const newContent = slides[newIndex];
    if (slideState.key === 'A') {
      setSlideState(s => ({...s, key: 'B', slideB: { content: newContent, loaded: false }}));
    } else {
      setSlideState(s => ({...s, key: 'A', slideA: { content: newContent, loaded: false }}));
    }
    setCurrentSlideIndex(newIndex);
    
    const url = new URL(window.location.href);
    url.searchParams.set('slide', newIndex.toString());
    window.history.pushState({}, '', url);

  }, [slides, currentSlideIndex, slideState.key]);

  const handleNext = useCallback(() => updateSlide(currentSlideIndex + 1), [currentSlideIndex, updateSlide]);
  const handlePrev = useCallback(() => updateSlide(currentSlideIndex - 1), [currentSlideIndex, updateSlide]);
  const handleSlideSelect = useCallback((index: number) => { updateSlide(index); setIsGridOpen(false); }, [updateSlide]);
  const handleSlideLoaded = (key: 'slideA' | 'slideB') => setSlideState(s => ({ ...s, [key]: { ...s[key], loaded: true } }));

  const handleGenerateNotes = useCallback(async () => {
    const cacheKey = `${activeDeckIndex}-${currentSlideIndex}`;
    if (speakerNotesCache[cacheKey]) return;
    setIsGeneratingNotes(true);
    try {
        const notes = await generateSpeakerNotes(slides[currentSlideIndex], language);
        setSpeakerNotesCache(prev => ({ ...prev, [cacheKey]: notes }));
    } catch (error) {
        console.error("Failed to generate speaker notes:", error);
        setSpeakerNotesCache(prev => ({ ...prev, [cacheKey]: t('presentationsPage.notes.error.generic') }));
    } finally {
        setIsGeneratingNotes(false);
    }
  }, [activeDeckIndex, currentSlideIndex, slides, speakerNotesCache, language, t]);

  const toggleFullScreen = useCallback(() => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (document.querySelector('input:focus, textarea:focus, select:focus')) return;
      
      switch(event.key) {
        case 'ArrowRight': handleNext(); break;
        case 'ArrowLeft': handlePrev(); break;
        case 'f': toggleFullScreen(); break;
        case 'g': setIsGridOpen(o => !o); break;
        case 'n': setIsNotesOpen(o => !o); break;
        case 'Escape':
          setIsContactModalOpen(false);
          setIsGridOpen(false);
          setIsNotesOpen(false);
          break;
      }
    };
    const handleFullScreenChange = () => setIsFullScreen(!!document.fullscreenElement);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, [handleNext, handlePrev, toggleFullScreen]);

  const notesCacheKey = `${activeDeckIndex}-${currentSlideIndex}`;
  const currentNotes = speakerNotesCache[notesCacheKey];

  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-950">
          <PageHeader />
          <main className="flex-grow container mx-auto px-6 md:px-12 py-10 sm:py-16 animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3 flex flex-col gap-4">
                      {PROJECT_DETAILS.map((deck, index) => {
                          const isActive = index === activeDeckIndex;
                          return (
                              <div key={deck.name} 
                                  onClick={() => handleDeckSelect(index)}
                                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDeckSelect(index); } }}
                                  role="button"
                                  tabIndex={0}
                                  aria-label={`${t('mainPage.portfolio.viewAria')} ${deck.name}`}
                                  aria-pressed={isActive}
                                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-l-4 flex items-start gap-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-emerald-400 ${isActive ? 'bg-zinc-800 border-emerald-500 shadow-lg shadow-emerald-900/30' : 'bg-zinc-900/50 border-transparent hover:bg-zinc-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-900/20'}`}>
                                  <div className={`flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'text-emerald-400' : 'text-zinc-400 group-hover:text-emerald-400'}`}>
                                    <i data-lucide={deck.icon} className="w-6 h-6"></i>
                                  </div>
                                  <div>
                                      <h3 className={`text-xl font-bold mb-1 transition-colors ${isActive ? 'text-white' : 'text-zinc-200'}`}>{deck.name}</h3>
                                      <p className="font-semibold text-zinc-400 mb-2">{deck.subtitle}</p>
                                      <p className="text-zinc-500 text-sm">{deck.value}</p>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
                  
                  <div ref={playerRef} className={`lg:w-2/3 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800 flex flex-col justify-between transition-all duration-300 ${isFullScreen ? 'fixed inset-0 z-50 p-6' : 'relative'}`} aria-live="polite" aria-atomic="true">
                      <h3 className="sr-only">{t('presentationsPage.viewer.ariaLabel', { project: activeDeck.title })}</h3>
                      <div className="w-full aspect-video bg-black rounded-lg shadow-2xl shadow-black/50 ring-1 ring-white/10 relative overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
                          {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black z-30">
                              <Spinner size="md" />
                            </div>
                          )}
                          <SlideViewer htmlContent={slideState.slideA.content} isVisible={slideState.key === 'A' && !isLoading} onLoaded={() => handleSlideLoaded('slideA')} />
                          <SlideViewer htmlContent={slideState.slideB.content} isVisible={slideState.key === 'B' && !isLoading} onLoaded={() => handleSlideLoaded('slideB')} />
                          <button type="button" onClick={toggleFullScreen} className="absolute top-3 right-3 z-20 p-2 rounded-full text-zinc-300 bg-black/40 hover:bg-white/20 transition-colors" aria-label={t('presentationsPage.toggleFullscreen')}>
                            {isFullScreen ? <i data-lucide="minimize-2" className="w-5 h-5"></i> : <i data-lucide="maximize-2" className="w-5 h-5"></i>}
                          </button>
                      </div>
                      <div className="mt-4">
                        <Navigation
                          onPrev={handlePrev} onNext={handleNext} onSelect={handleSlideSelect}
                          isFirst={currentSlideIndex === 0} isLast={currentSlideIndex === slides.length - 1}
                          current={currentSlideIndex} total={slides.length}
                          onToggleGrid={() => setIsGridOpen(true)}
                          onToggleNotes={() => setIsNotesOpen(o => !o)}
                          isNotesOpen={isNotesOpen}
                        />
                      </div>
                      <GridView isOpen={isGridOpen} onClose={() => setIsGridOpen(false)} slides={slides} onSelect={handleSlideSelect} currentIndex={currentSlideIndex} />
                      <NotesPanel isOpen={isNotesOpen} onClose={() => setIsNotesOpen(false)} onGenerate={handleGenerateNotes} notes={currentNotes} isGenerating={isGeneratingNotes} />
                  </div>
              </div>
          </main>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        projects={PROJECT_DETAILS.map(p => p.name)}
      />
      <Chatbot systemInstruction={systemInstruction} />
    </>
  );
};


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <PresentationsApp />
    </LanguageProvider>
  </React.StrictMode>
);
