
import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import SlideViewer from './components/SlideViewer';
import Navigation from './components/Navigation';
import GridView from './components/GridView';
import NotesPanel from './components/NotesPanel';
import { getPageContent } from './pageContent';
import { getPresentationDecks } from './presentationContent';
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
        <header className="bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 sticky top-0 z-40">
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
  const { PROJECT_DETAILS } = getPageContent(language);
  const PRESENTATIONS = getPresentationDecks(language);

  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [speakerNotesCache, setSpeakerNotesCache] = useState<Record<string, string>>({});
  const [isGeneratingNotes, setIsGeneratingNotes] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const playerRef = useRef<HTMLDivElement>(null);

  const activeDeck = PRESENTATIONS[activeDeckIndex];
  const slides = activeDeck.slides;
  const activeSlide = slides[currentSlideIndex] ?? '';


  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t('presentationsPage.title');
  }, [language, t]);

  const handleDeckSelect = useCallback((index: number, slideIndex = 0) => {
    if (index === activeDeckIndex && slideIndex === currentSlideIndex) return;

    const newDeckSlides = PRESENTATIONS[index].slides;
    const validSlideIndex = Math.max(0, Math.min(slideIndex, newDeckSlides.length - 1));

    setActiveDeckIndex(index);
    setCurrentSlideIndex(validSlideIndex);
    setSpeakerNotesCache({}); // Clear notes for new deck

    const url = new URL(window.location.href);
    url.searchParams.set('deck', index.toString());
    url.searchParams.set('slide', validSlideIndex.toString());
    window.history.pushState({}, '', url);
  }, [PRESENTATIONS, activeDeckIndex, currentSlideIndex]);

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

  const updateSlide = useCallback((newIndex: number) => {
    if (newIndex === currentSlideIndex || newIndex < 0 || newIndex >= slides.length) return;

    setCurrentSlideIndex(newIndex);

    const url = new URL(window.location.href);
    url.searchParams.set('slide', newIndex.toString());
    window.history.pushState({}, '', url);

  }, [currentSlideIndex, slides.length]);

  const handleNext = useCallback(() => updateSlide(currentSlideIndex + 1), [currentSlideIndex, updateSlide]);
  const handlePrev = useCallback(() => updateSlide(currentSlideIndex - 1), [currentSlideIndex, updateSlide]);
  const handleSlideSelect = useCallback((index: number) => { updateSlide(index); setIsGridOpen(false); }, [updateSlide]);

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
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <PageHeader />
          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Corporate Presentations</h2>
                  <p className="text-slate-300/90 max-w-2xl mx-auto">Explore our comprehensive portfolio of AI solutions and business presentations</p>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  <div className="xl:col-span-1">
                      <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/40">
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
                                          className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${
                                              isActive
                                                  ? 'bg-emerald-500/15 border-emerald-400/40 text-white shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-400/20'
                                                  : 'bg-slate-950/60 border-white/10 hover:bg-slate-900/70 hover:border-emerald-400/30 text-slate-300/90'
                                          }`}>
                                          <div className="flex items-start gap-3">
                                              <div className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                                                  isActive ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200' : 'bg-slate-900/70 border-white/10 text-slate-400'
                                              }`}>
                                                  <i data-lucide={deck.icon} className="w-4 h-4"></i>
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                  <h4 className="font-semibold text-sm mb-0.5 text-white">{deck.name}</h4>
                                                  <p className="text-xs text-slate-300/90 mb-1">{deck.subtitle}</p>
                                                  <p className="text-xs text-slate-400/80">{deck.value}</p>
                                              </div>
                                          </div>
                                      </button>
                                  )
                              })}
                          </div>
                      </div>
                  </div>

                  <div className="xl:col-span-2">
                      <div className="bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                          <div className="p-4 border-b border-white/10">
                              <div className="flex items-center justify-between">
                                  <div>
                                      <h3 className="text-lg font-semibold text-white">{activeDeck.title}</h3>
                                      <p className="text-sm text-slate-300/80">
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
                                  <SlideViewer htmlContent={activeSlide} />
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
