import React, { useState, useRef, useEffect } from 'react';

interface PresentationSelectorProps {
  presentations: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const ChevronDownIcon = () => (
    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5"/>
    </svg>
);


const PresentationSelector: React.FC<PresentationSelectorProps> = ({ presentations, selectedIndex, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);
  
  const handleSelect = (index: number) => {
    onSelect(index);
    setIsOpen(false);
  }

  return (
    <div className="relative w-48" ref={wrapperRef}>
      <button type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group appearance-none bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-colors duration-200 flex justify-between items-center"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{presentations[selectedIndex]}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <ul
            className="absolute z-10 mt-1 w-full bg-slate-800 border border-white/20 shadow-lg rounded-lg max-h-60 overflow-auto focus:outline-none animate-fade-in-down"
            role="listbox"
            aria-activedescendant={`option-${selectedIndex}`}
        >
          {presentations.map((title, index) => (
            <li
              key={index}
              id={`option-${index}`}
              role="option"
              aria-selected={index === selectedIndex}
              onClick={() => handleSelect(index)}
              className={`p-2.5 text-sm cursor-pointer flex justify-between items-center transition-colors ${
                index === selectedIndex 
                ? 'font-semibold text-white bg-blue-600/50' 
                : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              <span className="truncate">{title}</span>
              {index === selectedIndex && <CheckIcon />}
            </li>
          ))}
        </ul>
      )}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.2s ease-out; }
      `}</style>
    </div>
  );
};

export default PresentationSelector;
