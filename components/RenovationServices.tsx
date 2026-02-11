import React from 'react';
import type { Service } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

const BlueprintIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
    </svg>
);
const HammerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
);
const BoltIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);
const PaletteIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);

const renovationServicesData: Service[] = [
    {
        icon: <BlueprintIcon />,
        titleKey: 'expertise.design.title',
        descriptionKey: 'expertise.design.description'
    },
    {
        icon: <HammerIcon />,
        titleKey: 'expertise.structural.title',
        descriptionKey: 'expertise.structural.description'
    },
    {
        icon: <BoltIcon />,
        titleKey: 'expertise.systems.title',
        descriptionKey: 'expertise.systems.description'
    },
    {
        icon: <PaletteIcon />,
        titleKey: 'expertise.finishing.title',
        descriptionKey: 'expertise.finishing.description'
    }
];

const RenovationServices: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="renovations" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{t('expertise.title')}</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                       {t('expertise.subtitle')}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {renovationServicesData.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className="inline-block p-4 bg-cyan-100/50 rounded-full mb-5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t(service.titleKey)}</h3>
                            <p className="text-slate-600 leading-relaxed">{t(service.descriptionKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RenovationServices;