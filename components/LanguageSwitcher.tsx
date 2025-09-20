import React from 'react';
import { useTranslation, Language } from '../hooks/useTranslation';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage, t } = useTranslation();

    const languages: { code: Language; name: string; flag: string }[] = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
    ];

    return (
        <div className="flex items-center gap-1 bg-zinc-800/50 p-1 rounded-full" aria-label={t('languageSwitcher.label')}>
            {languages.map(lang => (
                <button type="button"
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-9 h-7 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 ${
                        language === lang.code
                            ? 'bg-zinc-700'
                            : 'hover:bg-zinc-700/50'
                    }`}
                    aria-pressed={language === lang.code}
                    title={lang.name}
                >
                    <span role="img" aria-label={lang.name}>{lang.flag}</span>
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;