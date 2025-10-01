import React, { useEffect, useRef } from 'react';

interface SlideViewerProps {
  htmlContent: string;
  isVisible: boolean;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ htmlContent, isVisible }) => {
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
      title="幻灯片内容"
      className={`w-full h-full border-0 absolute inset-0 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      sandbox="allow-scripts allow-same-origin allow-forms"
    />
  );
};

export default SlideViewer;