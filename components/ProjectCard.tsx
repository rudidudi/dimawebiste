import React, { useState } from 'react';
import type { Project } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 sm:p-8">
            <div className="flex justify-between items-start mb-4">
                 <h2 className="text-3xl font-bold text-slate-800">{t(project.titleKey)}</h2>
                 <button onClick={onClose} className="text-slate-500 hover:text-slate-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 </button>
            </div>
          <p className="text-cyan-600 font-semibold mb-4">{t(project.locationKey)}</p>
          <p className="text-slate-600 mb-6">{t(project.descriptionKey)}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center text-slate-700">{t('modal.before')}</h3>
              <img src={project.beforeImageUrl} alt={`${t('modal.before')} ${t(project.titleKey)}`} className="rounded-lg w-full h-auto object-cover aspect-video" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center text-slate-700">{t('modal.after')}</h3>
              <img src={project.afterImageUrl} alt={`${t('modal.after')} ${t(project.titleKey)}`} className="rounded-lg w-full h-auto object-cover aspect-video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  
  const description = t(project.descriptionKey);

  return (
    <>
      <div
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          <img src={project.imageUrl} alt={t(project.titleKey)} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-xl font-bold text-white">{t(project.titleKey)}</h3>
            <p className="text-cyan-300 text-sm">{t(project.locationKey)}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-slate-600 mb-4">{description.substring(0, 100)}...</p>
          <span className="font-semibold text-cyan-600 hover:text-cyan-700">{t('card.viewTransformation')} &rarr;</span>
        </div>
      </div>
      {isModalOpen && <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;
