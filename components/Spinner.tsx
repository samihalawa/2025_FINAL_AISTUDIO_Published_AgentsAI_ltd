import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '' }) => {
  const { t } = useTranslation();
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-10 h-10 border-4',
  };

  return (
    <div className={`
      ${sizeClasses[size]}
      border-zinc-700 border-t-emerald-400 rounded-full animate-spin 
      ${className}
    `}>
        <span className="sr-only">{t('spinner.loading')}</span>
    </div>
  );
};

export default Spinner;
