import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xl font-bold text-white">
                Dima <span className="font-light text-cyan-600">{t('re-estate')}</span>
              </span>
            </a>
            <p className="text-sm">{t('footer.tagline')}</p>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>&copy; {currentYear} Dima Re-Estate. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;