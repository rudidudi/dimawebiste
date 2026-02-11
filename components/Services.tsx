import React from 'react';
import type { Service } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

const KeyIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z" />
  </svg>
);

const PaintBrushIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 003.86.517l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.477-2.387a2 2 0 01.547-1.806z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.25a2.25 2.25 0 01-2.25-2.25V3a2.25 2.25 0 012.25 2.25v5zm0 0l-1.172 1.172a2.25 2.25 0 000 3.182l1.172 1.172" />
  </svg>
);

const ChartBarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const servicesData: Service[] = [
  {
    icon: <KeyIcon />,
    titleKey: 'process.acquisition.title',
    descriptionKey: 'process.acquisition.description'
  },
  {
    icon: <PaintBrushIcon />,
    titleKey: 'process.renovation.title',
    descriptionKey: 'process.renovation.description'
  },
  {
    icon: <ChartBarIcon />,
    titleKey: 'process.resale.title',
    descriptionKey: 'process.resale.description'
  }
];

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('process.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">{t('process.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{t(service.titleKey)}</h3>
              <p className="text-slate-600 leading-relaxed">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
