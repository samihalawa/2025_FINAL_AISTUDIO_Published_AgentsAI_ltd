import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter-container mt-8">
      <iframe
        data-tally-src="https://tally.so/embed/mY1V66?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height={157}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="NEWSLETTER"
        style={{ background: 'transparent' }}
      ></iframe>
    </div>
  );
};

export default Newsletter;
