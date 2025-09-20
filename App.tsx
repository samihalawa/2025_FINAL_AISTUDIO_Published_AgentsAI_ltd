
import React, { useState, useCallback, useEffect } from 'react';
import { generateContextualInfo, ContextualInfo } from './services/gemini';
import StickyNav from './components/StickyNav';
import ContactModal from './components/ContactModal';
import Chatbot from './components/Chatbot';
import ContextPane from './components/ContextPane';
import { getPageContent } from './pageContent';
import { useTranslation } from './hooks/useTranslation';
import RoadmapTimeline from './components/RoadmapTimeline';

declare global {
    interface Window {
        lucide: any;
    }
}

const App: React.FC = () => {
  const { t, language } = useTranslation();
  const { PROJECT_DETAILS, PAGE_SECTIONS, NAV_LINKS, BLOG_SECTION, getPageContext } = getPageContent(language);
  const { about, summary, roadmap, whyInvest } = PAGE_SECTIONS;

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const [activeContext, setActiveContext] = useState<ContextualInfo | null>(null);
  const [isContextLoading, setIsContextLoading] = useState(false);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const fullPageContext = getPageContext();
  
  const systemInstruction = t('chatbot.systemInstruction', { context: fullPageContext });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t('mainPage.title');
  }, [language, t]);
  
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
  
  // Spotlight mouse follow effect
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

  const handleContentClick = async (content: string) => {
      setActiveContent(content);
      setIsContextLoading(true);
      setActiveContext(null);
      try {
          const contextInfo = await generateContextualInfo(content, fullPageContext, language);
          const relatedProject = PROJECT_DETAILS.find(p => content.toLowerCase().includes(p.name.toLowerCase()));
          if(relatedProject){
            contextInfo.relatedSlide = {
                deckIndex: PROJECT_DETAILS.indexOf(relatedProject),
                title: relatedProject.name,
            };
          }
          setActiveContext(contextInfo);
      } catch (error) {
          console.error("Failed to generate contextual info:", error);
          const errorInfo = error instanceof Error ? error.message : t('contextPane.error.generic');
          setActiveContext({
              summary: errorInfo,
              keyTerms: [],
              followUpQuestions: []
          });
      } finally {
          setIsContextLoading(false);
      }
  };

  const handleContextSlideClick = (deckIndex: number) => {
    window.location.href = `presentations.html?deck=${deckIndex}`;
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
        if (event.data?.type === 'openContactModal') {
            setIsContactModalOpen(true);
        } else if (event.data?.type === 'openChatbot') {
            window.dispatchEvent(new CustomEvent('open-chatbot'));
        }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isContactModalOpen || document.querySelector('input:focus, textarea:focus, select:focus')) {
        if (event.key === 'Escape') {
          setIsContactModalOpen(false);
          setActiveContext(null);
          setActiveContent(null);
        }
        return;
      }
      
      switch(event.key) {
        case 'Escape':
          setIsContactModalOpen(false);
          setActiveContext(null);
          setActiveContent(null);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isContactModalOpen]);

  return (
    <>
      <StickyNav links={NAV_LINKS} />
      <header className="relative overflow-hidden py-32 md:py-48">
        <div className="container mx-auto px-6 text-center">
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-400">{t('mainPage.header.title')}</h1>
                <p className="text-xl md:text-3xl text-zinc-400 mb-10">{t('mainPage.header.subtitle')}</p>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg text-zinc-400">
                 <span className="flex items-center gap-2"><i data-lucide="map-pin" className="w-5 h-5 text-emerald-400"></i>{t('mainPage.header.location')}</span>
                    <span className="flex items-center gap-2"><i data-lucide="shield-check" className="w-5 h-5 text-emerald-400"></i>{t('mainPage.header.regNo')}: 13374242</span>
                    <span className="flex items-center gap-2"><i data-lucide="mail" className="w-5 h-5 text-emerald-400"></i>hello@agentsai.ltd</span>
                </div>
            </div>
        </div>
      </header>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-2 gap-12">
            <main className="lg:col-span-3 xl:col-span-1 py-16 space-y-28">
              <section id="about" className="scroll-mt-24">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{about.title}</h2>
                   <p className="text-zinc-400 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">{about.content}</p>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {about.stats.map(stat => (
                             <div key={stat.label} className="text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <span className="text-4xl font-bold text-emerald-400 block">{stat.value}</span>
                                <span className="text-zinc-500">{stat.label}</span>
                            </div>
                        ))}
                   </div>
              </section>

              <section id="summary" className="scroll-mt-24">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{summary.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">{summary.content}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                      {summary.metrics.map(metric => {
                          const metricContent = `${metric.label}: ${metric.value}`;
                          const isActive = activeContent === metricContent;
                          return (
                            <div key={metric.label} onClick={() => handleContentClick(metricContent)} className={`p-6 rounded-2xl text-center cursor-pointer transition-all duration-300 ${isActive ? 'bg-zinc-800/90 ring-2 ring-emerald-500/60 shadow-lg' : 'bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 hover:-translate-y-1'}`}>
                                <span className="text-4xl font-bold text-emerald-400 block tracking-tighter">{metric.value}</span>
                                <span className="text-zinc-400">{metric.label}</span>
                            </div>
                          )
                      })}
                  </div>
              </section>

              <section id="roadmap" className="scroll-mt-24">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{roadmap.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">{roadmap.content}</p>
                  <RoadmapTimeline items={roadmap.phases} onItemClick={handleContentClick} activeItemText={activeContent} />
              </section>

              <section id="why-invest" className="scroll-mt-24">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{whyInvest.title}</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">{whyInvest.content}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                      {whyInvest.reasons.map(reason => {
                          const reasonContent = `${reason.title}. ${reason.text}`;
                          const isActive = activeContent === reasonContent;
                          return (
                              <div key={reason.title} onClick={() => handleContentClick(reasonContent)} className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${isActive ? 'bg-zinc-800 ring-2 ring-emerald-500/60 shadow-lg border-transparent' : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 hover:border-emerald-500/30 hover:-translate-y-1'}`}>
                                  <div className="flex items-start gap-4">
                                      <div className="flex-shrink-0 w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400">
                                          <i data-lucide={reason.icon} className="w-6 h-6"></i>
                                      </div>
                                      <div>
                                          <h3 className="text-lg font-bold mb-1 text-white">{reason.title}</h3>
                                          <p className="text-zinc-400 text-sm">{reason.text}</p>
                                      </div>
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </section>

            <section id="portfolio" className="my-28 scroll-mt-24">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{t('mainPage.portfolio.title')}</h2>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-16 text-center">{t('mainPage.portfolio.description')}</p>
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8">
                    {PROJECT_DETAILS.map((deck, index) => (
                        <a key={deck.name} 
                            href={`presentations.html?deck=${index}`}
                            aria-label={`${t('mainPage.portfolio.viewAria')} ${deck.name}`}
                            className="group block p-8 rounded-2xl cursor-pointer transition-all duration-300 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-emerald-400">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center transition-colors text-emerald-400">
                                    <i data-lucide={deck.icon} className="w-8 h-8"></i>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 text-white">{deck.name}</h3>
                                    <p className="font-semibold text-zinc-400 mb-3">{deck.subtitle}</p>
                                    <p className="text-zinc-500 text-sm mb-4">{deck.value}</p>
                                    <span className="font-semibold text-emerald-400/80 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        {t('mainPage.portfolio.viewButton')} <i data-lucide="arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section id="blog" className="my-28 scroll-mt-24">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{BLOG_SECTION.title}</h2>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-12 text-center">{BLOG_SECTION.intro}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {BLOG_SECTION.posts.map(post => {
                        const postContext = `${post.title}. ${post.excerpt} ${post.insight}`;
                        const isActive = activeContent === postContext;
                        return (
                            <article
                                key={post.title}
                                role="button"
                                tabIndex={0}
                                onClick={() => handleContentClick(postContext)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleContentClick(postContext);
                                    }
                                }}
                                className={`p-8 rounded-2xl transition-all duration-300 border ${isActive ? 'bg-zinc-800/90 border-emerald-500/60 shadow-lg shadow-emerald-900/20' : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800 hover:border-emerald-500/30 hover:-translate-y-1'}`}
                                aria-label={`${BLOG_SECTION.title}: ${post.title}`}
                            >
                                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-emerald-400/80 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold">{post.category}</span>
                                    <span className="text-zinc-500 font-mono">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{post.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                <p className="text-emerald-400/90 text-sm font-semibold mb-6">{post.insight}</p>
                                <button type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleContentClick(postContext);
                                    }}
                                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition-colors"
                                >
                                    {BLOG_SECTION.ctaLabel}
                                    <i data-lucide="arrow-up-right" className="w-4 h-4 ml-2"></i>
                                </button>
                            </article>
                        );
                    })}
                </div>
            </section>
            
            <section id="cta" className="my-28 text-center scroll-mt-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-400">{t('mainPage.cta.title')}</h2>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto mb-10">{t('mainPage.cta.description')}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                     <button type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
                        className="btn-secondary text-lg px-8 py-3"
                    >
                        <i data-lucide="message-circle" className="w-6 h-6 mr-3"></i>
                        {t('mainPage.cta.chatButton')}
                    </button>
                    <button type="button" 
                        onClick={() => setIsContactModalOpen(true)}
                        className="btn-primary text-lg px-8 py-3"
                    >
                        <i data-lucide="calendar-plus" className="w-6 h-6 mr-3"></i>
                        {t('mainPage.cta.meetingButton')}
                    </button>
                </div>
            </section>
        </main>

        <aside className="lg:col-span-2 xl:col-span-1 py-16">
            <ContextPane
                isLoading={isContextLoading}
                context={activeContext}
                onClose={() => {
                  setActiveContext(null);
                  setActiveContent(null);
                }}
                onQuestionClick={(q) => {
                    window.dispatchEvent(new CustomEvent('open-chatbot', { detail: q }));
                }}
                onSlideClick={(deckIndex) => handleContextSlideClick(deckIndex)}
            />
        </aside>
      </div>
    </div>


      <footer className="bg-transparent border-t border-zinc-800/50">
        <div className="container mx-auto px-6 py-12 text-center text-zinc-500">
            <p className="mb-2">{t('mainPage.footer.copyright')}</p>
            <p className="mb-4">{t('mainPage.footer.address')}</p>
            <p className="text-sm max-w-3xl mx-auto"><span className="font-bold">{t('mainPage.footer.confidentialityTitle')}</span> {t('mainPage.footer.confidentialityText')}</p>
        </div>
      </footer>
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        projects={PROJECT_DETAILS.map(p => p.name)}
      />
      <Chatbot systemInstruction={systemInstruction} />
    </>
  );
};

export default App;
