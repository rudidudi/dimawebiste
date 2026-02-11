import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { useTranslation } from '../contexts/LanguageContext';

const Logo: React.FC = () => {
    const { t } = useTranslation();
    return (
        <a href="#" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-2xl font-bold text-slate-800">
            Dima <span className="font-light text-cyan-700">{t('re-estate')}</span>
            </span>
        </a>
    );
};

const ExternalLinkIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ItalianFlagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
        <path fill="#009246" d="M0 0h1v2H0z"/>
        <path fill="#fff" d="M1 0h1v2H1z"/>
        <path fill="#ce2b37" d="M2 0h1v2H2z"/>
    </svg>
);

const UKFlagIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 5 3" className={className} aria-hidden="true">
        <rect width="5" height="3" fill="#012169"/>
        <path d="M0,0L5,3 M0,3L5,0" stroke="#fff" strokeWidth="0.6"/>
        <path d="M0,0L5,3 M0,3L5,0" stroke="#C8102E" strokeWidth="0.4"/>
        <path d="M-1,1.5H6 M2.5,-1V4" stroke="#fff" strokeWidth="1"/>
        <path d="M-1,1.5H6 M2.5,-1V4" stroke="#C8102E" strokeWidth="0.6"/>
    </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{href: string, labelKey: string, external?: boolean, isMobile?: boolean, onClick?: () => void}> = ({ href, labelKey, external, isMobile, onClick }) => {
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Handle smooth scrolling for internal anchor links
      if (href.startsWith('#') && !external) {
        e.preventDefault();
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 80; // Approximate height of the sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      // Close mobile menu if onClick handler is provided
      if (onClick) {
        onClick();
      }
    };
    
    return (
        <a
            href={href}
            onClick={handleNavClick}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : undefined}
            className={`flex items-center justify-center transition-colors duration-300 font-medium ${isMobile ? 'text-slate-600 hover:text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`}
        >
            {t(labelKey)}
            {external && <ExternalLinkIcon />}
        </a>
    );
  };
  
  const LanguageSwitcher = ({ isMobile }: { isMobile?: boolean }) => (
      <div className={`flex items-center space-x-4 ${isMobile ? 'justify-center' : ''}`}>
          <button
              onClick={() => setLanguage('it')}
              aria-label={t('aria.switchToItalian')}
              className={`transition-opacity duration-300 ${language !== 'it' ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}
          >
              <ItalianFlagIcon className="w-7 h-5 rounded-sm shadow-sm" />
          </button>
          <button
              onClick={() => setLanguage('en')}
              aria-label={t('aria.switchToEnglish')}
              className={`transition-opacity duration-300 ${language !== 'en' ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}
          >
              <UKFlagIcon className="w-7 h-5 rounded-sm shadow-sm" />
          </button>
      </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
            <div className="ml-8">
                <LanguageSwitcher />
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 focus:outline-none" aria-label={t('aria.openMenu')}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} isMobile onClick={() => setIsOpen(false)} />
              ))}
              <div className="pt-4 mt-4 border-t border-slate-200">
                  <LanguageSwitcher isMobile />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;