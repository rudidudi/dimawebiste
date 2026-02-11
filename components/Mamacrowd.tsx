import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Mamacrowd: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="mamacrowd" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('mamacrowd.title')}</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{t('mamacrowd.subtitle')}</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1560026301-8ec5c5e095b3?q=80&w=1920&auto=format&fit=crop" alt={t('mamacrowd.imageAlt')} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-slate-900">{t('mamacrowd.project.title')}</h3>
                        <p className="text-slate-600 leading-relaxed">{t('mamacrowd.project.description')}</p>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                                <span className="text-3xl font-bold text-cyan-600">18</span>
                                <p className="text-slate-500 mt-1">{t('mamacrowd.apartments')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                                <span className="text-3xl font-bold text-cyan-600">18</span>
                                <p className="text-slate-500 mt-1">{t('mamacrowd.garages')}</p>
                            </div>
                        </div>
                        <p className="text-slate-500 italic text-center lg:text-left pt-2">{t('mamacrowd.status')}</p>
                        <div className="text-center lg:text-left">
                            <a href="https://www.mamacrowd.com/browse/real-estate" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                {t('mamacrowd.cta')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mamacrowd;