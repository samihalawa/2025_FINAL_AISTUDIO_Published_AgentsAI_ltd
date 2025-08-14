
import React from 'react';

interface SlideCounterProps {
  current: number;
  total: number;
}

const SlideCounter: React.FC<SlideCounterProps> = ({ current, total }) => {
  return (
    <div className="px-3 py-1.5 bg-slate-700/60 text-slate-300 rounded-full text-sm font-mono shadow-lg backdrop-blur-sm">
      <span>{current}</span>
      <span className="text-slate-400 mx-1.5">/</span>
      <span>{total}</span>
    </div>
  );
};

export default SlideCounter;
