import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const BuyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.955 8.955M3 10.5v.75a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5v-.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V15a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 15v6" />
    </svg>
);

const RenewIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);

const ResellIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
);


const processSteps = [
    {
        icon: <BuyIcon />,
        titleKey: 'reestate.buy.title',
        descriptionKey: 'reestate.buy.description',
    },
    {
        icon: <RenewIcon />,
        titleKey: 'reestate.renew.title',
        descriptionKey: 'reestate.renew.description',
    },
    {
        icon: <ResellIcon />,
        titleKey: 'reestate.resell.title',
        descriptionKey: 'reestate.resell.description',
    },
];

const Projects: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('projects.title')}</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-50 bg-white mb-5">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{t(step.titleKey)}</h3>
                            <p className="text-slate-600 leading-relaxed">{t(step.descriptionKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;