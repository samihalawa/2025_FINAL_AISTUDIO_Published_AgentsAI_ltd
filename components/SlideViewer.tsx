import React, { useEffect, useRef } from 'react';

interface SlideViewerProps {
  htmlContent: string;
  isVisible: boolean;
  onLoaded: () => void;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ htmlContent, isVisible, onLoaded }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Only update srcDoc if it's different to prevent iframe reloads
    if (iframeRef.current && iframeRef.current.srcdoc !== htmlContent) {
        iframeRef.current.srcdoc = htmlContent;
    }
  }, [htmlContent]);
  
  return (
    <iframe
      ref={iframeRef}
      onLoad={onLoaded}
      title="幻灯片内容"
      className={`w-full h-full border-0 absolute inset-0 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      sandbox="allow-scripts allow-same-origin allow-forms"
    />
  );
};

export default SlideViewer;