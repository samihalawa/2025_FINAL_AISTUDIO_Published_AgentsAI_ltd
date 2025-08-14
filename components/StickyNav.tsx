import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';

interface NavLink {
    href: string;
    text: string;
}

interface StickyNavProps {
    links: NavLink[];
}

const StickyNav: React.FC<StickyNavProps> = ({ links }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const sections = links
        .filter(link => link.href.startsWith('#'))
        .map(link => document.getElementById(link.href.substring(1)))
        .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const heroHeader = document.querySelector('header');
      if (heroHeader && window.scrollY > heroHeader.offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      let currentSectionId = '';
      const navOffset = 150;
      for (const section of sections) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - navOffset) {
              currentSectionId = section.id;
          }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [links]);

  return (
    <nav 
      className={`fixed top-4 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      aria-label={t('mainPage.title')}
    >
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center">
            <div className="w-full max-w-5xl bg-zinc-950/80 backdrop-blur-lg rounded-full shadow-lg border border-zinc-800/50 px-3 py-2 flex items-center justify-between gap-2">
              <div className="flex-1 overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <ul className="flex items-center space-x-1 sm:space-x-2 w-max">
                    {links.map(link => (
                      <li key={link.href}>
                        <a 
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`px-3 py-1.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${activeSection === link.href.substring(1) ? 'text-white bg-gradient-to-r from-emerald-500/30 to-teal-500/30 shadow-inner shadow-black/20' : 'text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/50'}`}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0 pl-2">
                <LanguageSwitcher />
              </div>
            </div>
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </nav>
  );
};

export default StickyNav;