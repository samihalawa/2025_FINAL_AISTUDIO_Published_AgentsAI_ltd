import React, { useEffect, useRef } from 'react';

interface SlideViewerProps {
  htmlContent: string;
}

const SlideViewer: React.FC<SlideViewerProps> = ({ htmlContent }) => {
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
      title="Slide content"
      className="w-full h-full border-0 absolute inset-0"
      sandbox="allow-scripts allow-same-origin allow-forms"
    />
  );
};

export default SlideViewer;