import React from 'react';
import type { ContextualInfo } from '../services/gemini';
import { useTranslation } from '../hooks/useTranslation';

interface ContextPaneProps {
  isLoading: boolean;
  context: ContextualInfo | null;
  onClose: () => void;
  onQuestionClick: (question: string) => void;
  onSlideClick: (deckIndex: number) => void;
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const SkeletonLoader: React.FC = () => (
    <div className="space-y-8 animate-pulse">
      <div>
        <div className="h-5 w-2/5 bg-zinc-700 rounded-md mb-3"></div>
        <div className="space-y-2">
          <div className="h-3 w-full bg-zinc-800 rounded-md"></div>
          <div className="h-3 w-full bg-zinc-800 rounded-md"></div>
          <div className="h-3 w-4/5 bg-zinc-800 rounded-md"></div>
        </div>
      </div>
      <div>
        <div className="h-5 w-2/5 bg-zinc-700 rounded-md mb-3"></div>
        <div className="space-y-3">
          <div className="h-4 w-1/3 bg-zinc-800 rounded-md"></div>
          <div className="h-3 w-full bg-zinc-800 rounded-md"></div>
        </div>
        <div className="space-y-3 mt-3">
          <div className="h-4 w-1/2 bg-zinc-800 rounded-md"></div>
          <div className="h-3 w-full bg-zinc-800 rounded-md"></div>
        </div>
      </div>
       <div>
        <div className="h-5 w-2/5 bg-zinc-700 rounded-md mb-3"></div>
        <div className="space-y-2">
            <div className="h-10 w-full bg-zinc-800 rounded-lg"></div>
            <div className="h-10 w-full bg-zinc-800 rounded-lg"></div>
            <div className="h-10 w-full bg-zinc-800 rounded-lg"></div>
        </div>
      </div>
    </div>
);


const ContextPane: React.FC<ContextPaneProps> = ({ isLoading, context, onClose, onQuestionClick, onSlideClick }) => {
  const { t } = useTranslation();

  if (!isLoading && !context) {
    return (
      <div className="sticky top-24 h-[calc(100vh-8rem)] hidden lg:flex items-center justify-center">
        <div className="text-center text-zinc-600 p-8 border-2 border-dashed border-zinc-800 rounded-2xl">
            <i data-lucide="sparkles" className="w-16 h-16 mx-auto mb-4 text-emerald-500/30"></i>
            <h3 className="font-bold text-lg text-zinc-400">{t('contextPane.placeholder.title')}</h3>
            <p className="text-sm max-w-xs">{t('contextPane.placeholder.body')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] hidden lg:block">
      <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl w-full h-full flex flex-col animate-slide-in-right">
        <header className="flex items-center justify-between p-4 border-b border-zinc-800 flex-shrink-0">
          <h3 className="font-bold text-lg">{t('contextPane.title')}</h3>
          <button onClick={onClose} className="p-2 rounded-full text-zinc-400 hover:bg-zinc-800 transition-colors" aria-label={t('contextPane.close')}>
            <CloseIcon />
          </button>
        </header>

        <div className="flex-grow p-6 overflow-y-auto">
          {isLoading ? (
            <SkeletonLoader />
          ) : context && (
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><i data-lucide="file-text" className="w-5 h-5"></i>{t('contextPane.summary')}</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">{context.summary}</p>
              </div>
              
              {context.keyTerms.length > 0 && (
                <div>
                  <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="key-round" className="w-5 h-5"></i>{t('contextPane.keyTerms')}</h4>
                  <div className="space-y-3">
                    {context.keyTerms.map(item => (
                      <div key={item.term}>
                        <p className="font-semibold text-zinc-200">{item.term}</p>
                        <p className="text-zinc-400 text-sm">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {context.relatedSlide && (
                  <div>
                      <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="presentation" className="w-5 h-5"></i>{t('contextPane.relatedSlide')}</h4>
                      <button 
                        onClick={() => onSlideClick(context.relatedSlide!.deckIndex)}
                        className="w-full text-left bg-zinc-800 hover:bg-zinc-700/70 p-3 rounded-lg transition-colors flex items-center gap-3 border border-zinc-700 hover:border-emerald-500/50">
                        <i data-lucide="sidebar-open" className="w-5 h-5 text-zinc-400 flex-shrink-0"></i>
                        <span className="flex-grow">{t('contextPane.relatedSlide.view')} <span className="font-bold text-emerald-400">{context.relatedSlide.title}</span></span>
                      </button>
                  </div>
              )}

              {context.followUpQuestions.length > 0 && (
                <div>
                  <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><i data-lucide="message-circle-question" className="w-5 h-5"></i>{t('contextPane.deepDive')}</h4>
                  <div className="space-y-2">
                    {context.followUpQuestions.map(q => (
                      <button 
                        key={q} 
                        onClick={() => onQuestionClick(q)}
                        className="w-full text-left text-sm text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 p-3 rounded-lg transition-colors group flex items-center"
                      >
                        <i data-lucide="arrow-right" className="w-4 h-4 mr-2 text-zinc-500 group-hover:text-emerald-400 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"></i>
                        <span>{q}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContextPane;
