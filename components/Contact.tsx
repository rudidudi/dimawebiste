import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative py-20 bg-slate-800 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604363255153-9a3b90088b9c?q=80&w=1920&auto=format&fit=crop')" }}></div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{t('contact.title')}</h2>
        <p className="mt-4 mb-8 text-lg text-slate-300 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{t('contact.boxTitle')}</h3>
            <div className="space-y-4 text-left">
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@dimareestate.com" className="hover:text-cyan-300 transition-colors">contact@dimareestate.com</a>
                </p>
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Via Montenapoleone, 20121 Milano MI, Italy</span>
                </p>
                <p className="flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(555) 123-4567</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;