import React, {useRef} from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  isFirst: boolean;
  isLast: boolean;
  current: number;
  total: number;
  onToggleGrid: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, onSelect, isFirst, isLast, current, total, onToggleGrid, onToggleNotes, isNotesOpen }) => {
  const { t } = useTranslation();
  const buttonBaseClasses = "transition-all duration-200 ease-in-out transform flex items-center justify-center p-2 rounded-full text-zinc-200";
  const enabledClasses = "bg-zinc-800/50 hover:bg-zinc-800 hover:scale-105";
  const disabledClasses = "opacity-40 cursor-not-allowed";
  
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const slideIndex = Math.round(percentage * (total - 1));
    onSelect(slideIndex);
  };

  const progressPercentage = total > 1 ? (current / (total - 1)) * 100 : 0;

  return (
    <div className="flex items-center space-x-4 p-2 rounded-full bg-zinc-900/70 border border-zinc-700/50 shadow-lg backdrop-blur-md">
      <button
        onClick={onPrev}
        disabled={isFirst}
        aria-label={t('presentationsPage.nav.prev')}
        className={`${buttonBaseClasses} ${isFirst ? disabledClasses : enabledClasses}`}
      >
        <i data-lucide="arrow-left" className="w-6 h-6"></i>
      </button>

      <div className="flex items-center gap-3 w-full">
          <div className="text-zinc-400 text-sm font-mono whitespace-nowrap">
            <span>{String(current + 1).padStart(2, '0')}</span>
            <span className="text-zinc-600 mx-1">/</span>
            <span>{String(total).padStart(2, '0')}</span>
          </div>
          <div 
            ref={progressBarRef}
            onClick={handleProgressBarClick}
            className="w-full h-2 bg-zinc-800 rounded-full cursor-pointer group"
          >
            <div 
              className="h-full bg-zinc-300 rounded-full transition-all duration-300 ease-out group-hover:bg-white" 
              style={{ width: `${progressPercentage}%`}}
            ></div>
          </div>
      </div>
      
      <button
        onClick={onNext}
        disabled={isLast}
        aria-label={t('presentationsPage.nav.next')}
        className={`${buttonBaseClasses} ${isLast ? disabledClasses : enabledClasses}`}
      >
        <i data-lucide="arrow-right" className="w-6 h-6"></i>
      </button>

      <div className="h-6 w-px bg-zinc-700/50"></div>
      
      <button
        onClick={onToggleGrid}
        aria-label={t('presentationsPage.nav.grid')}
        className={`${buttonBaseClasses} ${enabledClasses}`}
      >
        <i data-lucide="layout-grid" className="w-5 h-5"></i>
      </button>
      
      <button
        onClick={onToggleNotes}
        aria-label={t('presentationsPage.nav.notes')}
        className={`${buttonBaseClasses} ${isNotesOpen ? 'bg-emerald-500 hover:bg-emerald-400 text-white' : enabledClasses}`}
      >
        <i data-lucide="notebook-text" className="w-5 h-5"></i>
      </button>
    </div>
  );
};

export default Navigation;
