export interface SlideDeck {
  title: string;
  slides: string[];
}

export const COMMON_HEAD = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Investor Deck</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
    :root {
        --background: 224 71% 4%;
        --foreground: 210 40% 98%;
        --card: 220 20% 9%;
        --border: 220 13% 25%;
        --primary: 142 60% 55%;
        --primary-foreground: 142 76% 15%;
        --muted-foreground: 220 9% 55%;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 15px -3px hsla(var(--primary), 0.6); }
        50% { box-shadow: 0 0 25px -3px hsla(var(--primary), 0.9); }
    }
    @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }


    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        print-color-adjust: exact; -webkit-print-color-adjust: exact;
        font-size: clamp(14px, 1.5vw, 18px);
        overflow: hidden;
    }
    .slide {
        width: 100%; height: 100%;
        padding: clamp(2rem, 4.5vw, 3.5rem) clamp(2.5rem, 5.5vw, 4.5rem);
        display: flex; flex-direction: column;
        position: relative;
        background-color: hsl(var(--background));
        overflow: hidden;
    }
    .slide-header {
        display: flex; justify-content: space-between; align-items: center;
        margin-bottom: clamp(1rem, 2.5vw, 2rem);
        padding-bottom: clamp(0.75rem, 1.5vw, 1.25rem);
        border-bottom: 1px solid hsl(var(--border));
        flex-shrink: 0;
    }
    .logo, .logo-large { font-size: clamp(1.25rem, 2vw, 1.5rem); font-weight: 700; letter-spacing: -0.02em; display: flex; align-items: center; gap: 0.6em; color: hsl(var(--primary)); }
    .logo-icon, .logo-large-icon { width: 1.2em; height: 1.2em; }
    .slide-number { font-family: monospace; font-size: clamp(0.9rem, 1.25vw, 1.1rem); color: hsl(var(--muted-foreground)); font-weight: 500; }

    /* Cover Slide */
    .slide-cover { align-items: center; justify-content: center; text-align: center; }
    .slide-cover .logo-large { font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: clamp(1rem, 2vw, 2rem); }
    .slide-cover h1 { font-size: clamp(2.25rem, 4.2vw, 3.75rem); font-weight: 800; line-height: 1.15; margin-bottom: clamp(1rem, 2vw, 1.5rem); max-width: 25em; color: hsl(var(--foreground)); letter-spacing: -0.03em; }
    .slide-cover .tagline { font-size: clamp(1.1rem, 1.8vw, 1.5rem); font-weight: 400; color: hsl(var(--muted-foreground)); margin-bottom: clamp(2rem, 4vw, 3.5rem); max-width: 30em; margin-left: auto; margin-right: auto; line-height: 1.5; }
    .slide-cover .meta {
        position: absolute; bottom: clamp(2rem, 4.5vw, 3.5rem); left: clamp(2.5rem, 5.5vw, 4.5rem); right: clamp(2.5rem, 5.5vw, 4.5rem);
        display: flex; justify-content: space-between; font-size: clamp(0.8rem, 1.1vw, 1rem); color: hsl(var(--muted-foreground));
    }

    /* Typography */
    .slide-title { font-size: clamp(2rem, 3.8vw, 3rem); font-weight: 800; color: hsl(var(--foreground)); margin-bottom: clamp(0.75rem, 1.25vw, 1.25rem); letter-spacing: -0.03em; line-height: 1.15; text-align: center; }
    .slide-subtitle { font-size: clamp(1rem, 1.6vw, 1.25rem); color: hsl(var(--muted-foreground)); margin-bottom: clamp(1.5rem, 3vw, 2.5rem); font-weight: 400; max-width: 45em; line-height: 1.6; text-align: center; margin-left: auto; margin-right: auto; }

    /* Unified Theme */
    .highlight, .flow-arrow { color: hsl(var(--primary)); }
    .metric-value:not(.animate-counter) { color: hsl(var(--primary)); }
    .tag { background: hsla(var(--primary), 0.15); color: hsl(var(--primary)); padding: 0.4em 0.8em; border-radius: 99px; font-size: clamp(0.8rem, 1vw, 0.9rem); font-weight: 600; border: 1px solid hsla(var(--primary), 0.3); }

    /* Cards & Grids */
    .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); }
    .card { background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 1rem; padding: clamp(1.25rem, 2.5vw, 2rem); transition: all 0.3s ease; display: flex; flex-direction: column; }
    .card:hover { transform: translateY(-4px); border-color: hsla(var(--primary), 0.7); box-shadow: 0 8px 30px -5px hsla(var(--primary), 0.2), 0 0 10px -5px hsla(var(--primary), 0.3); }
    .card-icon { width: clamp(2.5rem, 4vw, 3.5rem); height: clamp(2.5rem, 4vw, 3.5rem); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: clamp(1.25rem, 2.2vw, 2rem); margin-bottom: clamp(1rem, 1.5vw, 1.25rem); flex-shrink: 0; line-height: 1; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); }
    .card h3 { font-size: clamp(1.1rem, 1.8vw, 1.4rem); font-weight: 600; margin-bottom: clamp(0.5rem, 1vw, 0.75rem); color: hsl(var(--foreground)); }
    .card p { font-size: clamp(0.9rem, 1.2vw, 1rem); color: hsl(var(--muted-foreground)); line-height: 1.6; flex-grow: 1; }

    /* Common Components */
    .metrics-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); margin-top: clamp(1.5rem, 3vw, 3rem); }
    .metric { text-align: center; padding: clamp(1rem, 2vw, 2rem); background: hsl(var(--card)); border-radius: 1rem; border: 1px solid hsl(var(--border)); }
    .metric-value { font-size: clamp(2.5rem, 5.5vw, 4.5rem); font-weight: 800; line-height: 1; margin-bottom: 0.25rem; letter-spacing: -0.04em; }
    .metric-label { font-size: clamp(0.8rem, 1.1vw, 1rem); color: hsl(var(--muted-foreground)); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }

    .cta-box { padding: clamp(2rem, 4.5vw, 3.5rem); border-radius: 1.25rem; text-align: center; margin-top: clamp(1rem, 2vw, 2rem); display: flex; flex-direction: column; align-items: center; justify-content: center; flex-grow: 1; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
    .cta-title { font-size: clamp(1.8rem, 3.6vw, 3rem); font-weight: 800; margin-bottom: clamp(1rem, 1.5vw, 1.25rem); max-width: 25em; line-height: 1.2; color: hsl(var(--foreground)); }
    .cta-text { font-size: clamp(1rem, 1.5vw, 1.1rem); margin-bottom: clamp(1.5rem, 3vw, 2.5rem); color: hsl(var(--muted-foreground)); max-width: 40em; line-height: 1.6; }
    .cta-button { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); font-size: clamp(1rem, 1.4vw, 1.1rem); font-weight: 600; padding: clamp(0.7rem, 1.25vw, 1rem) clamp(1.5rem, 3vw, 2.5rem); border-radius: 99px; text-decoration: none; display: inline-block; transition: all 0.3s ease; cursor: pointer; }
    .cta-button:hover { background: hsl(142 76% 60%); transform: translateY(-2px); box-shadow: 0 10px 15px -3px hsla(var(--primary), 0.25); }

    .cta-button-secondary {
        background: hsl(var(--card)) !important;
        border: 1px solid hsl(var(--border)) !important;
        color: hsl(var(--foreground)) !important;
        box-shadow: none;
    }
    .cta-button-secondary:hover {
        background: hsl(var(--border)) !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px hsla(var(--background), 0.5);
    }

    .progress-bar { background-color: hsl(var(--border)); border-radius: 99px; height: clamp(0.6rem, 1vw, 0.8rem); width: 100%; overflow: hidden; margin-top: 0.5rem; }
    .progress-bar-fill { height: 100%; border-radius: 99px; display:flex; align-items:center; justify-content:flex-end; padding-right:0.6rem; font-size: clamp(0.5rem, 0.7vw, 0.65rem); font-weight:600; background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); transition: width 0.4s ease-out; }

    /* Specific Diagrams & Dark Mode Mockups */
    div, span, p, h1, h2, h3, h4, li, svg, path { transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease; }

    /* The old themes are now obsolete */
    .theme-purple, .theme-green { /* No styles here */ }

    .two-phase-arch, .moat-diagram, .market-path-diagram, .team-grid, .funding-grid { margin-top: clamp(1.5rem, 3vw, 2.5rem); display: flex; gap: clamp(1rem, 2vw, 1.5rem); align-items: stretch; }
    .arch-phase, .moat-pillar, .path-step { background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 1rem; padding: clamp(1.25rem, 2.5vw, 2rem); flex: 1; display: flex; flex-direction: column; justify-content: center; transition: all 0.3s ease; }
    .arch-phase:hover, .moat-pillar:hover, .path-step:hover { transform: translateY(-4px); border-color: hsla(var(--primary), 0.7); box-shadow: 0 8px 30px -5px hsla(var(--primary), 0.15); }
    .arch-phase h4, .moat-pillar h4, .path-step h4, .team-member h3, .funding-use h3, .funding-milestones h3 { font-size: clamp(1rem, 1.6vw, 1.4rem); font-weight: 700; margin-bottom: clamp(0.75rem, 1.25vw, 1rem); color: hsl(var(--foreground)); }

    /* Market Opportunity Circles */
    .market-circles { position: relative; width: clamp(280px, 40vw, 500px); height: clamp(280px, 40vw, 500px); margin: clamp(2rem, 3.5vw, 3rem) auto 0; }
    .circle { border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 1rem; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); background: hsl(var(--card)) !important; border: 1px solid hsl(var(--border)); }
    .circle-label { font-size: clamp(0.9rem, 1.4vw, 1.2rem); font-weight: 600; color: hsl(var(--muted-foreground)); }
    .circle-value { font-size: clamp(1.5rem, 3vw, 2.75rem); font-weight: 800; margin: 0.25rem 0; color: hsl(var(--foreground)); }
    .market-circles .circle:nth-child(1) { width: 100%; height: 100%; z-index: 1; }
    .market-circles .circle:nth-child(2) { width: 75%; height: 75%; background: hsl(var(--background)) !important; z-index: 2; }
    .market-circles .circle:nth-child(3) { width: 50%; height: 50%; background: hsla(var(--primary), 0.15) !important; border: 2px solid hsl(var(--primary)); z-index: 3; }
    .market-circles .circle:nth-child(3) .circle-value { color: hsl(var(--primary)); }
    .market-circles:hover .circle:nth-child(1) { transform: translate(-50%, -50%) scale(1.02); }
    .market-circles:hover .circle:nth-child(2) { transform: translate(-50%, -50%) scale(1.05); }
    .market-circles:hover .circle:nth-child(3) { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 25px hsla(var(--primary), 0.7); }

    /* Universal Dark Mode Mockup Redesign */
    .premium-mockup {
        border-radius: 1rem; background: hsl(var(--card)); box-shadow: 0 20px 45px -10px hsla(0,0%,0%,0.3);
        overflow: hidden; border: 1px solid hsl(var(--border)); display: flex; flex-direction: column;
    }
    .mockup-titlebar { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 1rem; background: hsl(var(--card)); border-bottom: 1px solid hsl(var(--border)); flex-shrink: 0; }
    .mockup-dots-premium { display: flex; gap: 0.5rem; }
    .mockup-dots-premium span { width: 0.75rem; height: 0.75rem; border-radius: 50%; }
    .mockup-dots-premium span:nth-child(1) { background: #ff5f56; }
    .mockup-dots-premium span:nth-child(2) { background: #ffbd2e; }
    .mockup-dots-premium span:nth-child(3) { background: #27c93f; }
    .mockup-titlebar p { color: hsl(var(--muted-foreground)); font-weight: 500; font-size: clamp(0.7rem, 1vw, 0.85rem); }
    .mockup-content { padding: clamp(1rem, 1.5vw, 1.5rem); flex-grow: 1; overflow-y: auto; background: hsl(var(--background)) !important; }
    .mockup-content * { color: hsl(var(--foreground)); } /* Broad override for text color */
    .mockup-content h3, .mockup-content h4 { color: hsl(var(--foreground)) !important; }
    .mockup-content p, .mockup-content label, .mockup-content div, .mockup-content span { color: hsl(var(--muted-foreground)) !important; }
    .mockup-content .font-bold, .mockup-content strong { color: hsl(var(--foreground)) !important; }
    .mockup-content .text-red-600 { color: #f87171 !important; }
    .mockup-content [style*="background: white"] { background: hsl(var(--card)) !important; }
    .mockup-content [style*="border: 1px solid #e5e7eb"] { border-color: hsl(var(--border)) !important; }
    .mockup-content .glass-card { background: hsla(var(--card), 0.7); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; }

    /* Fixing specific inline styles in Apolo slides */
    .slide > div[style*="background-color: #f9fafb"] { background-color: hsl(var(--card)) !important; }
    .slide > div[style*="background-color: #f9fafb"] * { color: hsl(var(--foreground)) !important; }
    .slide > div[style*="background-color: #f9fafb"] [style*="color: #6b7280"] { color: hsl(var(--muted-foreground)) !important; }
    .flow-arrow div { border-color: hsl(var(--primary)) !important; background: hsla(var(--primary), 0.1) !important; }
    .flow-arrow div * { color: hsl(var(--primary)) !important; }
    .pulse-dot { width: 1.25em; height: 1.25em; border-radius: 50%; position: relative; background: hsl(var(--primary)); }
    .pulse-dot::before { content: ''; position: absolute; inset: 0; border-radius: 50%; background: inherit; animation: pulse-glow 2s infinite; }

    /* Universal Button Style inside mockups */
    button, .cta-button, .btn-gradient-blue, .btn-gradient-purple, .btn-gradient-green {
        padding: 0.6em 1.2em; font-weight: 600; color: hsl(var(--primary-foreground)) !important; border-radius: 0.5rem;
        background: hsl(var(--primary)) !important; transition: all 0.3s ease; border: none; cursor: pointer;
        box-shadow: 0 4px 15px hsla(var(--primary), 0.2);
    }
    button:hover, .cta-button:hover, .btn-gradient-blue:hover, .btn-gradient-purple:hover, .btn-gradient-green:hover {
      transform: translateY(-2px); box-shadow: 0 6px 20px hsla(var(--primary), 0.3);
      background: hsl(142 76% 60%) !important;
    }

    .skeleton { position: relative; overflow: hidden; background-color: hsl(var(--border)) !important; border-radius: 4px; }
    .skeleton::after { position: absolute; top: 0; right: 0; bottom: 0; left: 0; transform: translateX(-100%); background-image: linear-gradient(90deg, transparent 0, hsla(var(--foreground), 0.05) 20%, hsla(var(--foreground), 0.1) 60%, transparent 100%); animation: shimmer 1.5s infinite; content: ''; }
    .h-3 { height: 0.75rem; } .h-4 { height: 1rem; } .h-12 { height: 3rem; }
</style>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    // For buttons that should open the contact modal
    const contactButtons = document.querySelectorAll('.cta-contact');
    contactButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        window.parent.postMessage({ type: 'openContactModal' }, '*');
      });
    });

    // For buttons that should open the chatbot
    const chatbotButtons = document.querySelectorAll('.cta-chatbot');
    chatbotButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.parent.postMessage({ type: 'openChatbot' }, '*');
        });
    });

    // For animated counters
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.getAttribute('data-target');
          const duration = 1500;
          let start = 0;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              el.innerText = Math.round(target);
              clearInterval(timer);
            } else {
              el.innerText = Math.round(start);
            }
          }, stepTime);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.animate-counter').forEach(counter => {
        observer.observe(counter);
    });

  });
</script>
`;