import React from 'react';
import Spinner from './Spinner';
import { useTranslation } from '../hooks/useTranslation';

interface NotesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: () => void;
  notes?: string;
  isGenerating: boolean;
}

const NotesPanel: React.FC<NotesPanelProps> = ({ isOpen, onClose, onGenerate, notes, isGenerating }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 right-0 h-full w-96 bg-zinc-900 border-l border-zinc-800 z-30 shadow-2xl animate-slide-in-right flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-zinc-800 flex-shrink-0">
            <h2 className="text-lg font-bold text-white">{t('presentationsPage.notes.title')}</h2>
            <button type="button" onClick={onClose} className="p-2 rounded-full text-zinc-400 hover:bg-zinc-800 transition-colors" aria-label={t('presentationsPage.notes.close')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
            </button>
        </header>
        
        <div className="p-6 overflow-y-auto flex-grow">
            {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-400">
                    <Spinner size="md" className="mb-4" />
                    <p>{t('presentationsPage.notes.generating')}</p>
                    <p className="text-sm text-zinc-500">{t('presentationsPage.notes.analyzing')}</p>
                </div>
            ) : notes ? (
                <div 
                    className="prose prose-invert prose-sm text-zinc-300"
                    dangerouslySetInnerHTML={{ __html: notes }}
                />
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <button type="button" 
                        onClick={onGenerate} 
                        disabled={isGenerating}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-zinc-600 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {t('presentationsPage.notes.generateButton')}
                    </button>
                    <p className="text-sm text-zinc-500 mt-4">{t('presentationsPage.notes.generateHint')}</p>
                </div>
            )}
        </div>
        
        <footer className="p-4 border-t border-zinc-800 text-center text-xs text-zinc-600 flex-shrink-0">
            {t('presentationsPage.notes.poweredBy')}
        </footer>
        <style>{`
            .prose { max-width: none; }
            .prose-invert h1, .prose-invert h2, .prose-invert h3 { color: white; }
            .prose-invert p { color: #d4d4d8; }
            .prose-invert ul { list-style-type: disc; padding-left: 1.5rem; }
            .prose-invert li { color: #d4d4d8; margin-top: 0.25em; margin-bottom: 0.25em; }
        `}</style>
    </aside>
  );
};

export default NotesPanel;
