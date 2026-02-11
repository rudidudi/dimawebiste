import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-light"
           style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('hero.cta.viewWork')}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/50 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('hero.cta.partner')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;