
import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import SlideViewer from './components/SlideViewer';
import Navigation from './components/Navigation';
import GridView from './components/GridView';
import NotesPanel from './components/NotesPanel';
import { getPageContent } from './pageContent';
import Spinner from './components/Spinner';
import ContactModal from './components/ContactModal';
import { LanguageProvider, useTranslation } from './hooks/useTranslation';
import LanguageSwitcher from './components/LanguageSwitcher';

declare global {
    interface Window {
        lucide: {
            createIcons: () => void;
        };
    }
}

const PageHeader: React.FC = () => {
    const { t } = useTranslation();
    return (
        <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="./index.html" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <i data-lucide="presentation" className="w-5 h-5 text-white"></i>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <h1 className="text-xl font-bold text-white">{t('presentationsPage.header.main')}</h1>
                            <span className="text-zinc-400">/</span>
                            <span className="text-lg font-medium text-zinc-300">{t('presentationsPage.header.sub')}</span>
                        </div>
                    </a>
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />
                        <a href="./index.html" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200">
                            <i data-lucide="arrow-left" className="w-4 h-4"></i>
                            {t('presentationsPage.header.back')}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}


const PresentationsApp: React.FC = () => {
  const { t, language } = useTranslation();
  const { PROJECT_DETAILS, PRESENTATIONS } = getPageContent(language);

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
    // AI notes generation disabled. Provide a static placeholder.
    const cacheKey = `${activeDeckIndex}-${currentSlideIndex}`;
    if (speakerNotesCache[cacheKey]) return;
    setIsGeneratingNotes(true);
    try {
      const placeholder = t('presentationsPage.notes.error.noApiKey');
      setSpeakerNotesCache(prev => ({ ...prev, [cacheKey]: placeholder }));
    } finally {
      setIsGeneratingNotes(false);
    }
  }, [activeDeckIndex, currentSlideIndex, speakerNotesCache, t]);

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
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Corporate Presentations</h2>
                  <p className="text-zinc-400 max-w-2xl mx-auto">Explore our comprehensive portfolio of AI solutions and business presentations</p>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  <div className="xl:col-span-1">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                              <i data-lucide="folder-open" className="w-5 h-5 text-emerald-400"></i>
                              Portfolio Decks
                          </h3>
                          <div className="space-y-3">
                              {PROJECT_DETAILS.map((deck, index) => {
                                  const isActive = index === activeDeckIndex;
                                  return (
                                      <button
                                          key={deck.name}
                                          onClick={() => handleDeckSelect(index)}
                                          className={`w-full text-left p-4 rounded-lg transition-all duration-200 border ${
                                              isActive 
                                                  ? 'bg-emerald-500/10 border-emerald-500/30 text-white shadow-lg shadow-emerald-900/20' 
                                                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-zinc-300'
                                          }`}>
                                          <div className="flex items-start gap-3">
                                              <div className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                                  isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-zinc-400'
                                              }`}>
                                                  <i data-lucide={deck.icon} className="w-4 h-4"></i>
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                  <h4 className="font-semibold text-sm mb-0.5">{deck.name}</h4>
                                                  <p className="text-xs text-zinc-400 mb-1">{deck.subtitle}</p>
                                                  <p className="text-xs text-zinc-500">{deck.value}</p>
                                              </div>
                                          </div>
                                      </button>
                                  )
                              })}
                          </div>
                      </div>
                  </div>

                  <div className="xl:col-span-2">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                          <div className="p-4 border-b border-white/10">
                              <div className="flex items-center justify-between">
                                  <div>
                                      <h3 className="text-lg font-semibold text-white">{activeDeck.title}</h3>
                                      <p className="text-sm text-zinc-400">
                                          Slide {currentSlideIndex + 1} of {slides.length}
                                      </p>
                                  </div>
                                  <button 
                                      type="button" 
                                      onClick={toggleFullScreen} 
                                      className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                                      aria-label={t('presentationsPage.toggleFullscreen')}
                                  >
                                      {isFullScreen ? <i data-lucide="minimize-2" className="w-5 h-5"></i> : <i data-lucide="maximize-2" className="w-5 h-5"></i>}
                                  </button>
                              </div>
                          </div>
                          
                          <div ref={playerRef} className={`bg-black ${isFullScreen ? 'fixed inset-0 z-50' : ''}`} aria-live="polite" aria-atomic="true">
                              <div className="relative aspect-video bg-black">
                                  {isLoading && (
                                      <div className="absolute inset-0 flex items-center justify-center bg-black z-30">
                                          <Spinner size="md" />
                                      </div>
                                  )}
                                  <SlideViewer htmlContent={slideState.slideA.content} isVisible={slideState.key === 'A' && !isLoading} onLoaded={() => handleSlideLoaded('slideA')} />
                                  <SlideViewer htmlContent={slideState.slideB.content} isVisible={slideState.key === 'B' && !isLoading} onLoaded={() => handleSlideLoaded('slideB')} />
                              </div>
                          </div>
                          
                          <div className="p-4 border-t border-white/10">
                              <Navigation
                                  onPrev={handlePrev} onNext={handleNext} onSelect={handleSlideSelect}
                                  isFirst={currentSlideIndex === 0} isLast={currentSlideIndex === slides.length - 1}
                                  current={currentSlideIndex} total={slides.length}
                                  onToggleGrid={() => setIsGridOpen(true)}
                                  onToggleNotes={() => setIsNotesOpen(o => !o)}
                                  isNotesOpen={isNotesOpen}
                              />
                          </div>
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
