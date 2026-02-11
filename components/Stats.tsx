import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface StatItemProps {
  value: string;
  labelKey: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, labelKey }) => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-white">{value}</p>
      <p className="text-lg text-cyan-200 mt-1">{t(labelKey)}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="bg-cyan-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value="8" labelKey="stats.projects" />
          <StatItem value="+50%" labelKey="stats.roi" />
          <StatItem value="100%" labelKey="stats.satisfaction" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
