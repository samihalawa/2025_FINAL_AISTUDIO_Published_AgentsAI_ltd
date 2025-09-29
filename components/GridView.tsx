import React from 'react';
import Spinner from './Spinner';
import { useTranslation } from '../hooks/useTranslation';

interface GridViewProps {
  isOpen: boolean;
  onClose: () => void;
  slides: string[];
  onSelect: (index: number) => void;
  currentIndex: number;
}

const GridView: React.FC<GridViewProps> = ({ isOpen, onClose, slides, onSelect, currentIndex }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-40 flex items-center justify-center animate-fade-in-backdrop"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="w-full h-full p-8 md:p-16"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">{t('presentationsPage.grid.title')}</h2>
            <button type="button" onClick={onClose} className="p-2 rounded-full text-slate-300 hover:bg-white/10 transition-colors" aria-label={t('presentationsPage.grid.close')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 overflow-y-auto h-[calc(100%-60px)] pr-4">
          {slides.map((slide, index) => (
            <div 
              key={index}
              onClick={() => onSelect(index)}
              className={`aspect-video rounded-lg cursor-pointer transition-all duration-200 relative overflow-hidden ring-2 ${currentIndex === index ? 'ring-blue-500 scale-105' : 'ring-transparent hover:ring-blue-500/70'}`}
              aria-label={`${t('presentationsPage.grid.goto')} ${index + 1}`}
            >
              <div className="absolute inset-0 bg-slate-950 flex items-center justify-center text-slate-200/60">
                  <Spinner size="sm" />
              </div>
              <iframe
                srcDoc={slide}
                title={`${t('presentationsPage.grid.goto')} ${index + 1}`}
                className="w-full h-full border-0 absolute inset-0"
                scrolling="no"
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="absolute bottom-1 right-2 px-2 py-0.5 bg-black/50 text-white text-xs font-mono rounded">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridView;
