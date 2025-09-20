import { COMMON_HEAD } from './common';

// --- English PRESENTATION 4: AutoFootball.ai (Football AI) ---
export const AUTOFOOTBALL_SLIDES_EN = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large">⚽<span>AutoFootball.ai</span></div>
    <h1>AI-Powered Football Coaching Assistant</h1>
    <p class="tagline">Transform your coaching with intelligent analysis, tactical planning, and comprehensive team management. Get data-driven insights to help your team perform at its best.</p>
    <div class="meta"><span>Seed Round Deck</span><span>2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">02 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Challenges for the Modern Football Coach</h2>
        <p class="slide-subtitle">Traditional methods struggle to keep up with the demand for data-driven performance and efficiency.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg></div><h3>Intuitive Decision-Making</h3><p>Lack of objective data leads to biased or suboptimal choices.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div><h3>Manual Planning Overload</h3><p>Coaches spend hours on administrative tasks instead of on coaching.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4zm-2 14H4V6h16v12zM12 10H8v2h4v-2zm4-4h-4v2h4V6z"/></svg></div><h3>Fragmented Tools</h3><p>Juggling spreadsheets, video files, and communication apps creates chaos.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution (UI) -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">03 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Your Unified Coaching Command Center</h2>
        <p class="slide-subtitle">AutoFootball.ai integrates all aspects of coaching into one intelligent, intuitive dashboard.</p>
        <div class="premium-mockup" style="height: 70%; max-width: 90%; margin: 0 auto;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AI Football Coach Dashboard</p></div>
            <div class="mockup-content" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto 1fr; gap: 1.5vw;">
                <div class="glass-card" style="grid-column: 1 / -1; padding: 1vw; display: flex; justify-content: space-around; align-items: center; text-align: center;">
                    <div><h4>Team Performance</h4><p class="metric-value" style="font-size: 1.5em;">+12%</p></div>
                    <div><h4>Ball Possession</h4><p class="metric-value" style="font-size: 1.5em;">68%</p></div>
                    <div><h4>Pass Accuracy</h4><p class="metric-value" style="font-size: 1.5em;">84%</p></div>
                    <div><h4>Win Rate</h4><p class="metric-value" style="font-size: 1.5em;">+40%</p></div>
                </div>
                <div class="glass-card" style="grid-column: 1 / 3; position: relative; background-image: url('https://storage.googleapis.com/maker-media/visual-studio-dev/Presentation%20App/football-pitch.svg'); background-size: cover; background-position: center;">
                    <h4 style="position: absolute; top: 1vw; left: 1vw; font-weight: 700; background: hsla(var(--background), 0.7); padding: 0.2em 0.5em; border-radius: 0.5em;">Formation: 4-3-3</h4>
                </div>
                <div class="glass-card" style="display: flex; flex-direction: column; justify-content: center; text-align: center;">
                    <h4>Players</h4>
                    <p class="metric-value" style="font-size: 3em;">23</p>
                    <p style="font-size: 1em;">on roster</p>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Features -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">04 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Everything You Need to Coach Like a Pro</h2>
        <p class="slide-subtitle">A comprehensive suite of tools designed for the modern football coach, from amateur to professional levels.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, auto); gap: 1.5vw;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div><h3>Analytics Dashboard</h3><p>Advanced performance tracking and insights.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.29 8.29l-2.58-2.58a.996.996 0 00-1.42 0l-9.01 9.01-4-4a.996.996 0 10-1.41 1.41l4.71 4.71c.39.39 1.02.39 1.41 0l9.71-9.71c.39-.39.39-1.03 0-1.42z"/></svg></div><h3>Tactical Planning</h3><p>Interactive formation and strategy builder.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div><h3>Roster Management</h3><p>Complete player and team oversight.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg></div><h3>Training Plans</h3><p>Structured training session management.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 2.5v5.3c0 4.2 3.5 8.2 5.5 9.2 2-1 5.5-5 5.5-9.2V4.5L12 2zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></div><h3>Match Tracking</h3><p>League and tournament management.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg></div><h3>Digital Playbook</h3><p>Organize tactics and strategies.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. Deep Dive -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">05 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">See AutoFootball.ai in Action</h2>
        <p class="slide-subtitle">Dive into our advanced analytics dashboard and see how data can transform your team's performance.</p>
        <div class="premium-mockup" style="height: 70%; max-width: 80%; margin: 0 auto;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>Analytics Dashboard Demo</p></div>
            <div class="mockup-content">
                <div class="glass-card">
                    <h3 style="font-weight: 700; margin-bottom: 1.5vw;">Real-Time Data</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5vw;">
                        <div style="text-align: center;"><p style="font-size: 1.1em;">Goals Scored</p><p class="metric-value" style="font-size: 2.2em;">23</p><p style="font-size: 0.9em;" class="highlight">+15% from last season</p></div>
                        <div style="text-align: center;"><p style="font-size: 1.1em;">Win Rate</p><p class="metric-value" style="font-size: 2.2em;">78%</p><p style="font-size: 0.9em;" class="highlight">12% improvement</p></div>
                    </div>
                </div>
                <div class="glass-card" style="margin-top: 1.5vw;">
                    <h3 style="font-weight: 700; margin-bottom: 1.5vw;">Performance Chart</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div class="skeleton h-4" style="width: 80%;"></div>
                        <div class="skeleton h-4" style="width: 95%;"></div>
                        <div class="skeleton h-4" style="width: 70%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. Testimonials -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">06 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Trusted by Professionals</h2>
        <p class="slide-subtitle">See what coaches around the world are saying about how AutoFootball.ai has transformed their teams.</p>
        <div class="card-grid" style="grid-template-columns: repeat(2, 1fr); gap: 1.5vw;">
            <div class="card">
                <p>"AutoFootball.ai has revolutionized how I analyze my team's performance. The insights are incredibly detailed and have helped us improve our win rate by 40%."</p>
                <div style="margin-top: auto; padding-top: 1em; font-weight: 600;">- Mike Johnson, <span class="highlight">Manchester United Academy</span></div>
            </div>
            <div class="card">
                <p>"The tactical board is a game-changer. I can now visualize formations and player movements like never before. Our passing accuracy has seen a significant boost."</p>
                <div style="margin-top: auto; padding-top: 1em; font-weight: 600;">- Sarah Rodriguez, <span class="highlight">FC Barcelona Femení</span></div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Traction -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">07 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Validated Impact Across the Globe</h2>
        <p class="slide-subtitle">Our platform is already delivering measurable results for thousands of coaches worldwide.</p>
        <div class="metrics-row" style="grid-template-columns: repeat(4, 1fr);">
            <div class="metric"><div class="metric-value">10k+</div><div class="metric-label">Active Coaches</div></div>
            <div class="metric"><div class="metric-value">95%</div><div class="metric-label">Performance Boost</div></div>
            <div class="metric"><div class="metric-value">50+</div><div class="metric-label">Countries</div></div>
            <div class="metric"><div class="metric-value">4.9/5</div><div class="metric-label">User Rating</div></div>
        </div>
        <div style="margin-top: 2.5vw; text-align: center;">
            <h3 style="font-weight: 600; color: hsl(var(--muted-foreground)); margin-bottom: 1.5vw;">Trusted by leading football organizations</h3>
            <div style="display: flex; justify-content: space-around; align-items: center; filter: grayscale(50%) opacity(0.8);">
                <span style="font-size: 1.2em; font-weight: 700;">Man United</span>
                <span style="font-size: 1.2em; font-weight: 700;">FC Barcelona</span>
                <span style="font-size: 1.2em; font-weight: 700;">Bayern Munich</span>
                <span style="font-size: 1.2em; font-weight: 700;">Juventus</span>
                <span style="font-size: 1.2em; font-weight: 700;">PSG</span>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 8. Pricing -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">08 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Flexible Pricing for Every Team</h2>
        <p class="slide-subtitle">Flexible pricing options designed for coaches at all levels.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card" style="text-align: center;">
                <h3>Starter</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value" style="color: hsl(var(--foreground));">$0</span></p>
                <p style="flex-grow: 0; margin-bottom: 1em;">Essential tools for beginners.</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>Basic Analytics</li><li>Up to 15 Players</li><li>Basic Tactical Board</li></ul>
                <button type="button" class="cta-button cta-button-secondary" style="width: 100%;">Start for Free</button>
            </div>
            <div class="card" style="text-align: center; border-color: hsl(var(--primary)); transform: scale(1.05);">
                <h3>Pro</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value">$29</span>/mo</p>
                <p style="flex-grow: 0; margin-bottom: 1em;">For serious coaches needing advanced insights.</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>Advanced Analytics</li><li>Up to 50 Players</li><li>Video Analysis Tools</li></ul>
                <button type="button" class="cta-button" style="width: 100%;">Start Pro Trial</button>
            </div>
            <div class="card" style="text-align: center;">
                <h3>Enterprise</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value">$99</span>/mo</p>
                <p style="flex-grow: 0; margin-bottom: 1em;">For professional clubs and academies.</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>Unlimited Players</li><li>Multi-team Management</li><li>Custom Integrations</li></ul>
                <button type="button" class="cta-button cta-button-secondary" style="width: 100%;">Contact Sales</button>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. CTA -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <h2 class="cta-title">Join Thousands of Successful Coaches</h2>
        <p class="cta-text">Start your AutoFootball.ai journey today and see why coaches everywhere are choosing our platform to elevate their teams.</p>
        <div class="cta-button cta-contact">Start Free Trial</div>
        <p style="margin-top: 1.5em; font-size: 0.9em; opacity: 0.8;">✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime</p>
    </div>
</div></body></html>`
];

// --- Spanish PRESENTATION 4: AutoFootball.ai (IA de Fútbol) ---
export const AUTOFOOTBALL_SLIDES_ES = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large">⚽<span>AutoFootball.ai</span></div>
    <h1>Asistente de Entrenamiento de Fútbol Impulsado por IA</h1>
    <p class="tagline">Transforme su entrenamiento con análisis inteligente, planificación táctica y gestión integral del equipo. Obtenga información basada en datos para ayudar a su equipo a rendir al máximo.</p>
    <div class="meta"><span>Presentación Ronda Semilla</span><span>2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">02 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Desafíos para el Entrenador de Fútbol Moderno</h2>
        <p class="slide-subtitle">Los métodos tradicionales luchan por mantenerse al día con la demanda de rendimiento y eficiencia basados en datos.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg></div><h3>Toma de Decisiones Intuitiva</h3><p>La falta de datos objetivos conduce a elecciones sesgadas o subóptimas.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div><h3>Sobrecarga de Planificación Manual</h3><p>Los entrenadores dedican horas a tareas administrativas en lugar de entrenar.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4zm-2 14H4V6h16v12zM12 10H8v2h4v-2zm4-4h-4v2h4V6z"/></svg></div><h3>Herramientas Fragmentadas</h3><p>Manejar hojas de cálculo, archivos de video y aplicaciones de comunicación crea caos.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution (UI) -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">03 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Su Centro de Mando de Entrenamiento Unificado</h2>
        <p class="slide-subtitle">AutoFootball.ai integra todos los aspectos del entrenamiento en un panel de control inteligente e intuitivo.</p>
        <div class="premium-mockup" style="height: 70%; max-width: 90%; margin: 0 auto;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>Panel de Entrenador de Fútbol con IA</p></div>
            <div class="mockup-content" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto 1fr; gap: 1.5vw;">
                <div class="glass-card" style="grid-column: 1 / -1; padding: 1vw; display: flex; justify-content: space-around; align-items: center; text-align: center;">
                    <div><h4>Rendimiento del Equipo</h4><p class="metric-value" style="font-size: 1.5em;">+12%</p></div>
                    <div><h4>Posesión de Balón</h4><p class="metric-value" style="font-size: 1.5em;">68%</p></div>
                    <div><h4>Precisión de Pases</h4><p class="metric-value" style="font-size: 1.5em;">84%</p></div>
                    <div><h4>Tasa de Victorias</h4><p class="metric-value" style="font-size: 1.5em;">+40%</p></div>
                </div>
                <div class="glass-card" style="grid-column: 1 / 3; position: relative; background-image: url('https://storage.googleapis.com/maker-media/visual-studio-dev/Presentation%20App/football-pitch.svg'); background-size: cover; background-position: center;">
                    <h4 style="position: absolute; top: 1vw; left: 1vw; font-weight: 700; background: hsla(var(--background), 0.7); padding: 0.2em 0.5em; border-radius: 0.5em;">Formación: 4-3-3</h4>
                </div>
                <div class="glass-card" style="display: flex; flex-direction: column; justify-content: center; text-align: center;">
                    <h4>Jugadores</h4>
                    <p class="metric-value" style="font-size: 3em;">23</p>
                    <p style="font-size: 1em;">en plantilla</p>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Features -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">04 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Todo lo que Necesita para Entrenar como un Profesional</h2>
        <p class="slide-subtitle">Un conjunto completo de herramientas diseñadas para el entrenador de fútbol moderno, desde niveles amateur hasta profesionales.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, auto); gap: 1.5vw;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div><h3>Panel de Análisis</h3><p>Seguimiento avanzado del rendimiento e información.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.29 8.29l-2.58-2.58a.996.996 0 00-1.42 0l-9.01 9.01-4-4a.996.996 0 10-1.41 1.41l4.71 4.71c.39.39 1.02.39 1.41 0l9.71-9.71c.39-.39.39-1.03 0-1.42z"/></svg></div><h3>Planificación Táctica</h3><p>Constructor interactivo de formaciones y estrategias.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div><h3>Gestión de Plantilla</h3><p>Supervisión completa de jugadores y equipos.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg></div><h3>Planes de Entrenamiento</h3><p>Gestión estructurada de sesiones de entrenamiento.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 2.5v5.3c0 4.2 3.5 8.2 5.5 9.2 2-1 5.5-5 5.5-9.2V4.5L12 2zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></div><h3>Seguimiento de Partidos</h3><p>Gestión de ligas y torneos.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg></div><h3>Libro de Jugadas Digital</h3><p>Organice tácticas y estrategias.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. Deep Dive -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">05 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Vea AutoFootball.ai en Acción</h2>
        <p class="slide-subtitle">Sumérjase en nuestro panel de análisis avanzado y vea cómo los datos pueden transformar el rendimiento de su equipo.</p>
        <div class="premium-mockup" style="height: 70%; max-width: 80%; margin: 0 auto;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>Demostración del Panel de Análisis</p></div>
            <div class="mockup-content">
                <div class="glass-card">
                    <h3 style="font-weight: 700; margin-bottom: 1.5vw;">Datos en Tiempo Real</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5vw;">
                        <div style="text-align: center;"><p style="font-size: 1.1em;">Goles Marcados</p><p class="metric-value" style="font-size: 2.2em;">23</p><p style="font-size: 0.9em;" class="highlight">+15% desde la temporada pasada</p></div>
                        <div style="text-align: center;"><p style="font-size: 1.1em;">Tasa de Victorias</p><p class="metric-value" style="font-size: 2.2em;">78%</p><p style="font-size: 0.9em;" class="highlight">Mejora del 12%</p></div>
                    </div>
                </div>
                <div class="glass-card" style="margin-top: 1.5vw;">
                    <h3 style="font-weight: 700; margin-bottom: 1.5vw;">Gráfico de Rendimiento</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div class="skeleton h-4" style="width: 80%;"></div>
                        <div class="skeleton h-4" style="width: 95%;"></div>
                        <div class="skeleton h-4" style="width: 70%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. Testimonials -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">06 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Confiado por Profesionales</h2>
        <p class="slide-subtitle">Vea lo que dicen los entrenadores de todo el mundo sobre cómo AutoFootball.ai ha transformado a sus equipos.</p>
        <div class="card-grid" style="grid-template-columns: repeat(2, 1fr); gap: 1.5vw;">
            <div class="card">
                <p>"AutoFootball.ai ha revolucionado la forma en que analizo el rendimiento de mi equipo. Los conocimientos son increíblemente detallados y nos han ayudado a mejorar nuestra tasa de victorias en un 40%."</p>
                <div style="margin-top: auto; padding-top: 1em; font-weight: 600;">- Mike Johnson, <span class="highlight">Academia del Manchester United</span></div>
            </div>
            <div class="card">
                <p>"La pizarra táctica es un cambio de juego. Ahora puedo visualizar formaciones y movimientos de jugadores como nunca antes. Nuestra precisión en los pases ha mejorado significativamente."</p>
                <div style="margin-top: auto; padding-top: 1em; font-weight: 600;">- Sarah Rodriguez, <span class="highlight">FC Barcelona Femení</span></div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Traction -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">07 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Impacto Validado en Todo el Mundo</h2>
        <p class="slide-subtitle">Nuestra plataforma ya está ofreciendo resultados medibles para miles de entrenadores en todo el mundo.</p>
        <div class="metrics-row" style="grid-template-columns: repeat(4, 1fr);">
            <div class="metric"><div class="metric-value">10k+</div><div class="metric-label">Entrenadores Activos</div></div>
            <div class="metric"><div class="metric-value">95%</div><div class="metric-label">Mejora de Rendimiento</div></div>
            <div class="metric"><div class="metric-value">50+</div><div class="metric-label">Países</div></div>
            <div class="metric"><div class="metric-value">4.9/5</div><div class="metric-label">Calificación de Usuario</div></div>
        </div>
        <div style="margin-top: 2.5vw; text-align: center;">
            <h3 style="font-weight: 600; color: hsl(var(--muted-foreground)); margin-bottom: 1.5vw;">Con la confianza de organizaciones de fútbol líderes</h3>
            <div style="display: flex; justify-content: space-around; align-items: center; filter: grayscale(50%) opacity(0.8);">
                <span style="font-size: 1.2em; font-weight: 700;">Man United</span>
                <span style="font-size: 1.2em; font-weight: 700;">FC Barcelona</span>
                <span style="font-size: 1.2em; font-weight: 700;">Bayern Munich</span>
                <span style="font-size: 1.2em; font-weight: 700;">Juventus</span>
                <span style="font-size: 1.2em; font-weight: 700;">PSG</span>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 8. Pricing -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">08 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Precios Flexibles para Cada Equipo</h2>
        <p class="slide-subtitle">Opciones de precios flexibles diseñadas para entrenadores de todos los niveles.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card" style="text-align: center;">
                <h3>Básico</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value" style="color: hsl(var(--foreground));">$0</span></p>
                <p style="flex-grow: 0; margin-bottom: 1em;">Herramientas esenciales para principiantes.</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>Análisis Básico</li><li>Hasta 15 Jugadores</li><li>Pizarra Táctica Básica</li></ul>
                <button type="button" class="cta-button cta-button-secondary" style="width: 100%;">Comenzar Gratis</button>
            </div>
            <div class="card" style="text-align: center; border-color: hsl(var(--primary)); transform: scale(1.05);">
                <h3>Pro</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value">$29</span>/mes</p>
                <p style="flex-grow: 0; margin-bottom: 1em;">Para entrenadores serios que necesitan información avanzada.</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>Análisis Avanzado</li><li>Hasta 50 Jugadores</li><li>Herramientas de Análisis de Video</li></ul>
                <button type="button" class="cta-button" style="width: 100%;">Iniciar Prueba Pro</button>
            </div>
            <div class="card" style="text-align: center;">
                <h3>Empresarial</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value">$99</span>/mes</p>
                <p style="flex-grow: 0; margin-bottom: 1em;">Para clubes profesionales y academias.</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>Jugadores Ilimitados</li><li>Gestión de Múltiples Equipos</li><li>Integraciones Personalizadas</li></ul>
                <button type="button" class="cta-button cta-button-secondary" style="width: 100%;">Contactar Ventas</button>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. CTA -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <h2 class="cta-title">Únase a Miles de Entrenadores Exitosos</h2>
        <p class="cta-text">Comience su viaje con AutoFootball.ai hoy y vea por qué entrenadores de todo el mundo eligen nuestra plataforma para elevar a sus equipos.</p>
        <div class="cta-button cta-contact">Iniciar Prueba Gratuita</div>
        <p style="margin-top: 1.5em; font-size: 0.9em; opacity: 0.8;">✓ 14 días de prueba gratuita ✓ No se requiere tarjeta de crédito ✓ Cancele en cualquier momento</p>
    </div>
</div></body></html>`
];

// --- Chinese PRESENTATION 4: AutoFootball.ai (足球AI) ---
export const AUTOFOOTBALL_SLIDES_ZH = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large">⚽<span>AutoFootball.ai</span></div>
    <h1>AI驱动的足球教练助手</h1>
    <p class="tagline">通过智能分析、战术规划和全面的团队管理来改变您的执教方式。获得数据驱动的见解，帮助您的团队发挥最佳水平。</p>
    <div class="meta"><span>种子轮演示</span><span>2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">02 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">现代足球教练的挑战</h2>
        <p class="slide-subtitle">传统方法难以满足数据驱动性能和效率的需求。</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg></div><h3>直觉决策</h3><p>缺乏客观数据导致有偏见或次优的选择。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div><h3>手动规划过载</h3><p>教练在行政任务上花费数小时，而不是在执教上。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4zm-2 14H4V6h16v12zM12 10H8v2h4v-2zm4-4h-4v2h4V6z"/></svg></div><h3>工具分散</h3><p>处理电子表格、视频文件和通信应用程序会造成混乱。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution (UI) -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">03 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">您的统一教练指挥中心</h2>
        <p class="slide-subtitle">AutoFootball.ai将教练的所有方面整合到一个智能、直观的仪表板中。</p>
        <div class="premium-mockup" style="height: 70%; max-width: 90%; margin: 0 auto;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AI 足球教练仪表板</p></div>
            <div class="mockup-content" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: auto 1fr; gap: 1.5vw;">
                <div class="glass-card" style="grid-column: 1 / -1; padding: 1vw; display: flex; justify-content: space-around; align-items: center; text-align: center;">
                    <div><h4>球队表现</h4><p class="metric-value" style="font-size: 1.5em;">+12%</p></div>
                    <div><h4>控球率</h4><p class="metric-value" style="font-size: 1.5em;">68%</p></div>
                    <div><h4>传球准确率</h4><p class="metric-value" style="font-size: 1.5em;">84%</p></div>
                    <div><h4>胜率</h4><p class="metric-value" style="font-size: 1.5em;">+40%</p></div>
                </div>
                <div class="glass-card" style="grid-column: 1 / 3; position: relative; background-image: url('https://storage.googleapis.com/maker-media/visual-studio-dev/Presentation%20App/football-pitch.svg'); background-size: cover; background-position: center;">
                    <h4 style="position: absolute; top: 1vw; left: 1vw; font-weight: 700; background: hsla(var(--background), 0.7); padding: 0.2em 0.5em; border-radius: 0.5em;">阵型: 4-3-3</h4>
                </div>
                <div class="glass-card" style="display: flex; flex-direction: column; justify-content: center; text-align: center;">
                    <h4>球员</h4>
                    <p class="metric-value" style="font-size: 3em;">23</p>
                    <p style="font-size: 1em;">在册</p>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Features -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">04 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">像专业人士一样执教所需的一切</h2>
        <p class="slide-subtitle">为现代足球教练设计的综合工具，从业余到专业水平。</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, auto); gap: 1.5vw;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div><h3>分析仪表板</h3><p>高级性能跟踪和见解。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.29 8.29l-2.58-2.58a.996.996 0 00-1.42 0l-9.01 9.01-4-4a.996.996 0 10-1.41 1.41l4.71 4.71c.39.39 1.02.39 1.41 0l9.71-9.71c.39-.39.39-1.03 0-1.42z"/></svg></div><h3>战术规划</h3><p>交互式阵型和策略构建器。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div><h3>阵容管理</h3><p>完整的球员和球队监督。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg></div><h3>训练计划</h3><p>结构化的训练课程管理。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-5.5 2.5v5.3c0 4.2 3.5 8.2 5.5 9.2 2-1 5.5-5 5.5-9.2V4.5L12 2zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 6.5 12 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></div><h3>比赛追踪</h3><p>联赛和锦标赛管理。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg></div><h3>数字战术板</h3><p>组织战术和策略。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. Deep Dive -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">05 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">观看 AutoFootball.ai 的实际操作</h2>
        <p class="slide-subtitle">深入了解我们先进的分析仪表板，看看数据如何改变您球队的表现。</p>
        <div class="premium-mockup" style="height: 70%; max-width: 80%; margin: 0 auto;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>分析仪表板演示</p></div>
            <div class="mockup-content">
                <div class="glass-card">
                    <h3 style="font-weight: 700; margin-bottom: 1.5vw;">实时数据</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5vw;">
                        <div style="text-align: center;"><p style="font-size: 1.1em;">进球数</p><p class="metric-value" style="font-size: 2.2em;">23</p><p style="font-size: 0.9em;" class="highlight">比上赛季+15%</p></div>
                        <div style="text-align: center;"><p style="font-size: 1.1em;">胜率</p><p class="metric-value" style="font-size: 2.2em;">78%</p><p style="font-size: 0.9em;" class="highlight">提高了12%</p></div>
                    </div>
                </div>
                <div class="glass-card" style="margin-top: 1.5vw;">
                    <h3 style="font-weight: 700; margin-bottom: 1.5vw;">表现图表</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <div class="skeleton h-4" style="width: 80%;"></div>
                        <div class="skeleton h-4" style="width: 95%;"></div>
                        <div class="skeleton h-4" style="width: 70%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. Testimonials -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">06 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">受到专业人士的信赖</h2>
        <p class="slide-subtitle">看看世界各地的教练们如何评价 AutoFootball.ai 如何改变他们的球队。</p>
        <div class="card-grid" style="grid-template-columns: repeat(2, 1fr); gap: 1.5vw;">
            <div class="card">
                <p>"AutoFootball.ai彻底改变了我分析球队表现的方式。见解非常详细，帮助我们将胜率提高了40%。"</p>
                <div style="margin-top: auto; padding-top: 1em; font-weight: 600;">- Mike Johnson, <span class="highlight">曼联青训营</span></div>
            </div>
            <div class="card">
                <p>"战术板改变了游戏规则。我现在可以前所未有地可视化阵型和球员移动。我们的传球准确率显著提高。"</p>
                <div style="margin-top: auto; padding-top: 1em; font-weight: 600;">- Sarah Rodriguez, <span class="highlight">巴塞罗那女足</span></div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Traction -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">07 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">全球范围内的验证影响</h2>
        <p class="slide-subtitle">我们的平台已经为全球数千名教练带来了可衡量的成果。</p>
        <div class="metrics-row" style="grid-template-columns: repeat(4, 1fr);">
            <div class="metric"><div class="metric-value">10k+</div><div class="metric-label">活跃教练</div></div>
            <div class="metric"><div class="metric-value">95%</div><div class="metric-label">性能提升</div></div>
            <div class="metric"><div class="metric-value">50+</div><div class="metric-label">国家</div></div>
            <div class="metric"><div class="metric-value">4.9/5</div><div class="metric-label">用户评分</div></div>
        </div>
        <div style="margin-top: 2.5vw; text-align: center;">
            <h3 style="font-weight: 600; color: hsl(var(--muted-foreground)); margin-bottom: 1.5vw;">受到领先足球组织的信赖</h3>
            <div style="display: flex; justify-content: space-around; align-items: center; filter: grayscale(50%) opacity(0.8);">
                <span style="font-size: 1.2em; font-weight: 700;">曼联</span>
                <span style="font-size: 1.2em; font-weight: 700;">巴塞罗那</span>
                <span style="font-size: 1.2em; font-weight: 700;">拜仁慕尼黑</span>
                <span style="font-size: 1.2em; font-weight: 700;">尤文图斯</span>
                <span style="font-size: 1.2em; font-weight: 700;">巴黎圣日耳曼</span>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 8. Pricing -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo">⚽ AutoFootball.ai</div><div class="slide-number">08 / 09</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">适合每个团队的灵活定价</h2>
        <p class="slide-subtitle">为各个级别的教练设计的灵活定价选项。</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card" style="text-align: center;">
                <h3>入门版</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value" style="color: hsl(var(--foreground));">$0</span></p>
                <p style="flex-grow: 0; margin-bottom: 1em;">适合初学者的基本工具。</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>基本分析</li><li>最多15名球员</li><li>基础战术板</li></ul>
                <button type="button" class="cta-button cta-button-secondary" style="width: 100%;">免费开始</button>
            </div>
            <div class="card" style="text-align: center; border-color: hsl(var(--primary)); transform: scale(1.05);">
                <h3>专业版</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value">$29</span>/月</p>
                <p style="flex-grow: 0; margin-bottom: 1em;">为需要高级见解的认真教练设计。</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>高级分析</li><li>最多50名球员</li><li>视频分析工具</li></ul>
                <button type="button" class="cta-button" style="width: 100%;">开始专业试用</button>
            </div>
            <div class="card" style="text-align: center;">
                <h3>企业版</h3>
                <p style="font-size: 2.5em; font-weight: 800; margin: 0.5em 0;"><span class="metric-value">$99</span>/月</p>
                <p style="flex-grow: 0; margin-bottom: 1em;">适用于职业俱乐部和青训营。</p>
                <ul style="font-size: 0.9em; text-align: left; list-style: '✔ ' inside; margin-bottom: 1.5em; color: hsl(var(--muted-foreground));"><li>无限球员</li><li>多团队管理</li><li>自定义集成</li></ul>
                <button type="button" class="cta-button cta-button-secondary" style="width: 100%;">联系销售</button>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. CTA -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <h2 class="cta-title">加入数千名成功的教练</h2>
        <p class="cta-text">立即开始您的 AutoFootball.ai 之旅，看看为什么世界各地的教练选择我们的平台来提升他们的团队。</p>
        <div class="cta-button cta-contact">开始免费试用</div>
        <p style="margin-top: 1.5em; font-size: 0.9em; opacity: 0.8;">✓ 14天免费试用 ✓ 无需信用卡 ✓ 随时取消</p>
    </div>
</div></body></html>`
];
