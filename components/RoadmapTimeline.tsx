import React from 'react';

interface TimelineItem {
  phase: string;
  title: string;
  text: string;
}

interface RoadmapTimelineProps {
  items: TimelineItem[];
  onItemClick: (text: string) => void;
  activeItemText: string | null;
}

const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ items, onItemClick, activeItemText }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-zinc-800" aria-hidden="true"></div>
      <div className="relative flex flex-col gap-12">
        {items.map((item, index) => {
          const content = `${item.phase}: ${item.title}. ${item.text}`;
          const isActive = activeItemText === content;
          return (
            <div key={index} className="flex items-center w-full">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                <button type="button"
                  onClick={() => onItemClick(content)}
                  className={`w-full p-5 rounded-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:ring-offset-2 focus:ring-offset-zinc-950 ${isActive ? 'bg-zinc-800/90 ring-2 ring-emerald-500/60 shadow-lg' : 'bg-zinc-900/50 hover:bg-zinc-800'}`}
                  aria-pressed={isActive}
                >
                  <p className="text-sm font-semibold text-emerald-400 mb-1">{item.phase}</p>
                  <h4 className="font-bold text-lg text-zinc-100 mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm">{item.text}</p>
                </button>
              </div>
              <div className="w-1/2 flex justify-center order-1">
                <div className={`z-10 w-5 h-5 rounded-full ring-4 ring-zinc-900 transition-colors ${isActive ? 'bg-emerald-400 ring-emerald-400/20' : 'bg-zinc-700'}`}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
