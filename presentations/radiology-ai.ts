import { COMMON_HEAD } from './common';

// --- English PRESENTATION 3: RadiologyAI ---
export const RADIOLOGY_AI_SLIDES_EN = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg><span>RadiologyAI</span></div>
    <h1>AI-Powered Medical Imaging Analysis</h1>
    <p class="tagline">Providing faster, more accurate radiology insights to improve patient outcomes.</p>
    <div class="meta"><span>The RadiologyAI Team</span><span>Project Pitch | 2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">02 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">The Growing Pressure on Radiology</h2>
        <p class="slide-subtitle">Increasing workloads and massive data volumes are pushing radiologists to their limits, impacting patient care and turnaround times.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/></svg></div><h3>Image Volume Explosion</h3><p>The number of scans is growing exponentially, creating unmanageable backlogs for many departments.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div><h3>Diagnostic Complexity</h3><p>Subtle, early-stage pathologies are difficult to detect, requiring intense focus and time.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.99-.16-1.94-.46-2.82l-1.46 1.46c.1.45.16.91.16 1.36 0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7c.45 0 .91.06 1.36.16L14.82 3.46C13.94 3.16 12.99 3 12 3zm8.94 4.06L12 16l-4.94-4.94 1.41-1.41L12 13.17l6.53-6.53 1.41 1.42z"/></svg></div><h3>Clinician Burnout</h3><p>Repetitive tasks and high-stakes pressure lead to fatigue and an increased risk of error.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">03 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">RadiologyAI: Your Intelligent Co-Pilot</h2>
        <p class="slide-subtitle">Our AI platform enhances the expertise of radiologists, automating routine tasks and highlighting key findings for greater diagnostic confidence.</p>
        <div class="card-grid">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8H9v-2h6v2zm-6-3h6V6H9v2z"/></svg></div><h3>Automated Triage</h3><p>Prioritizes exams based on urgency, ensuring critical cases are reviewed first.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg></div><h3>AI-Powered Detection</h3><p>Highlights potential abnormalities and provides quantitative analysis to speed up interpretation.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div><h3>Smart Reporting</h3><p>Generates structured, pre-populated report drafts to significantly reduce dictation time.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. UI Mockup -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">04 / 06</div></div>
     <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">AI-Powered Reporting</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>RadiologyAI | Report Editor</p>
            </div>
            <div class="mockup-content">
                <div class="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="pulse-dot"></div>
                            <div>
                                <p class="font-bold">Report Generation Successful</p>
                                <p class="text-sm">Case #RAD-2025-0847 | Accuracy: 98.5%</p>
                            </div>
                        </div>
                        <div style="font-size: 1.5em; font-weight: bold;">⚡</div>
                    </div>
                </div>
                <div class="glass-card" style="display: flex; flex-direction: column; gap: 1.5vw;">
                    <div>
                        <h4 class="text-lg font-bold mb-2">Key Findings</h4>
                        <div class="space-y-2">
                            <div class="h-3 skeleton" style="width: 85%;"></div>
                            <div class="h-3 skeleton" style="width: 100%;"></div>
                            <div class="h-3 skeleton" style="width: 70%;"></div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold mb-2">Impression</h4>
                        <div class="space-y-2">
                            <div class="h-3 skeleton" style="width: 90%;"></div>
                            <div class="h-3 skeleton" style="width: 60%;"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex items-center justify-end gap-3">
                     <button type="button" style="background: hsl(var(--card)) !important; border: 1px solid hsl(var(--border)) !important; color: hsl(var(--foreground)) !important; padding: 0.6em 1.2em; border-radius: 0.5rem; font-weight: 600;">Edit</button>
                     <button type="button">Approve & Sign</button>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. Key Benefits -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">05 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Transforming Radiology Practice</h2>
        <p class="slide-subtitle">Measurable improvements in efficiency, accuracy, and job satisfaction based on pilot studies.</p>
        <div class="metrics-row">
            <div class="metric"><div class="metric-value animate-counter" data-target="40">0</div><div class="metric-label">Faster Reporting</div></div>
            <div class="metric"><div class="metric-value animate-counter" data-target="15">0</div><div class="metric-label">Improved Detection</div></div>
            <div class="metric"><div class="metric-value animate-counter" data-target="90">0</div><div class="metric-label">User Satisfaction</div></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. CTA -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <div class="logo-large" style="margin-bottom: clamp(1rem, 2vw, 1.5rem);"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg><span>RadiologyAI</span></div>
        <h2 class="cta-title">The Future of Radiology is Here</h2>
        <p class="cta-text">Partner with us to bring the power of AI into your practice. Let's work together to elevate patient care through technology.</p>
        <div class="cta-button cta-contact">Request a Demo</div>
    </div>
</div></body></html>`
];

// --- Spanish PRESENTATION 3: RadiologyAI (IA de Radiología) ---
export const RADIOLOGY_AI_SLIDES_ES = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg><span>RadiologyAI</span></div>
    <h1>Análisis de Imágenes Médicas Impulsado por IA</h1>
    <p class="tagline">Ofreciendo conocimientos radiológicos más rápidos y precisos para mejorar los resultados de los pacientes.</p>
    <div class="meta"><span>El equipo de RadiologyAI</span><span>Presentación de Proyecto | 2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">02 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">La Creciente Presión sobre la Radiología</h2>
        <p class="slide-subtitle">El aumento de las cargas de trabajo y los enormes volúmenes de datos están llevando a los radiólogos al límite, afectando la atención al paciente y los tiempos de respuesta.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/></svg></div><h3>Explosión del Volumen de Imágenes</h3><p>El número de exploraciones está creciendo exponencialmente, creando retrasos inmanejables para muchos departamentos.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div><h3>Complejidad Diagnóstica</h3><p>Las patologías sutiles y en etapa temprana son difíciles de detectar, lo que requiere una intensa concentración y tiempo.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.99-.16-1.94-.46-2.82l-1.46 1.46c.1.45.16.91.16 1.36 0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7c.45 0 .91.06 1.36.16L14.82 3.46C13.94 3.16 12.99 3 12 3zm8.94 4.06L12 16l-4.94-4.94 1.41-1.41L12 13.17l6.53-6.53 1.41 1.42z"/></svg></div><h3>Agotamiento del Clínico</h3><p>Las tareas repetitivas y la presión de alto riesgo conducen a la fatiga y a un mayor riesgo de error.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">03 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">RadiologyAI: Su Copiloto Inteligente</h2>
        <p class="slide-subtitle">Nuestra plataforma de IA mejora la experiencia de los radiólogos, automatizando tareas rutinarias y destacando hallazgos clave para una mayor confianza diagnóstica.</p>
        <div class="card-grid">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8H9v-2h6v2zm-6-3h6V6H9v2z"/></svg></div><h3>Triaje Automatizado</h3><p>Prioriza los exámenes según la urgencia, asegurando que los casos críticos se revisen primero.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg></div><h3>Detección Impulsada por IA</h3><p>Destaca posibles anomalías y proporciona análisis cuantitativos para acelerar la interpretación.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div><h3>Informes Inteligentes</h3><p>Genera borradores de informes estructurados y pre-poblados para reducir significativamente el tiempo de dictado.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. UI Mockup -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">04 / 06</div></div>
     <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Informes Impulsados por IA</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>RadiologyAI | Editor de Informes</p>
            </div>
            <div class="mockup-content">
                <div class="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="pulse-dot"></div>
                            <div>
                                <p class="font-bold">Generación de Informe Exitosa</p>
                                <p class="text-sm">Caso #RAD-2025-0847 | Precisión: 98.5%</p>
                            </div>
                        </div>
                        <div style="font-size: 1.5em; font-weight: bold;">⚡</div>
                    </div>
                </div>
                <div class="glass-card" style="display: flex; flex-direction: column; gap: 1.5vw;">
                    <div>
                        <h4 class="text-lg font-bold mb-2">Hallazgos Clave</h4>
                        <div class="space-y-2">
                            <div class="h-3 skeleton" style="width: 85%;"></div>
                            <div class="h-3 skeleton" style="width: 100%;"></div>
                            <div class="h-3 skeleton" style="width: 70%;"></div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold mb-2">Impresión Diagnóstica</h4>
                        <div class="space-y-2">
                            <div class="h-3 skeleton" style="width: 90%;"></div>
                            <div class="h-3 skeleton" style="width: 60%;"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex items-center justify-end gap-3">
                     <button type="button" style="background: hsl(var(--card)) !important; border: 1px solid hsl(var(--border)) !important; color: hsl(var(--foreground)) !important; padding: 0.6em 1.2em; border-radius: 0.5rem; font-weight: 600;">Editar</button>
                     <button type="button">Aprobar y Firmar</button>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. Key Benefits -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>RadiologyAI</div><div class="slide-number">05 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Transformando la Práctica Radiológica</h2>
        <p class="slide-subtitle">Mejoras medibles en eficiencia, precisión y satisfacción laboral basadas en estudios piloto.</p>
        <div class="metrics-row">
            <div class="metric"><div class="metric-value animate-counter" data-target="40">0</div><div class="metric-label">Informes más Rápidos</div></div>
            <div class="metric"><div class="metric-value animate-counter" data-target="15">0</div><div class="metric-label">Mejora en Detección</div></div>
            <div class="metric"><div class="metric-value animate-counter" data-target="90">0</div><div class="metric-label">Satisfacción del Usuario</div></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. CTA -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <div class="logo-large" style="margin-bottom: clamp(1rem, 2vw, 1.5rem);"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg><span>RadiologyAI</span></div>
        <h2 class="cta-title">El Futuro de la Radiología está Aquí</h2>
        <p class="cta-text">Asóciese con nosotros para llevar el poder de la IA a su práctica. Trabajemos juntos para elevar la atención al paciente a través de la tecnología.</p>
        <div class="cta-button cta-contact">Solicitar una Demostración</div>
    </div>
</div></body></html>`
];

// --- Chinese PRESENTATION 3: RadiologyAI (放射科AI) ---
export const RADIOLOGY_AI_SLIDES_ZH = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg><span>放射科AI</span></div>
    <h1>AI驱动的医学影像分析</h1>
    <p class="tagline">提供更快速、更准确的放射学见解，以改善患者预后。</p>
    <div class="meta"><span>放射科AI团队</span><span>项目推介 | 2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>放射科AI</div><div class="slide-number">02 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">放射科面临的日益增长的压力</h2>
        <p class="slide-subtitle">不断增加的工作量和海量数据正将放射科医生推向极限，影响了患者护理和周转时间。</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/></svg></div><h3>影像数量爆炸式增长</h3><p>扫描数量呈指数级增长，给许多科室造成了难以管理的积压。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></div><h3>诊断复杂性</h3><p>微妙的、早期的病变难以检测，需要高度集中和时间。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.99-.16-1.94-.46-2.82l-1.46 1.46c.1.45.16.91.16 1.36 0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7c.45 0 .91.06 1.36.16L14.82 3.46C13.94 3.16 12.99 3 12 3zm8.94 4.06L12 16l-4.94-4.94 1.41-1.41L12 13.17l6.53-6.53 1.41 1.42z"/></svg></div><h3>临床医生职业倦怠</h3><p>重复性任务和高风险压力导致疲劳和错误风险增加。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>放射科AI</div><div class="slide-number">03 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">放射科AI：您的智能副驾驶</h2>
        <p class="slide-subtitle">我们的AI平台增强了放射科医生的专业知识，自动化常规任务并突出关键发现，以提高诊断信心。</p>
        <div class="card-grid">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8H9v-2h6v2zm-6-3h6V6H9v2z"/></svg></div><h3>自动化分诊</h3><p>根据紧急程度对检查进行优先排序，确保首先审查关键病例。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg></div><h3>AI驱动的检测</h3><p>突出潜在的异常情况并提供定量分析以加快解读速度。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></div><h3>智能报告</h3><p>生成结构化的、预填充的报告草稿，以显著减少口述时间。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. UI Mockup -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>放射科AI</div><div class="slide-number">04 / 06</div></div>
     <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">AI驱动的报告</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>放射科AI | 报告编辑器</p>
            </div>
            <div class="mockup-content">
                <div class="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="pulse-dot"></div>
                            <div>
                                <p class="font-bold">报告生成成功</p>
                                <p class="text-sm">案例 #RAD-2025-0847 | 准确率: 98.5%</p>
                            </div>
                        </div>
                        <div style="font-size: 1.5em; font-weight: bold;">⚡</div>
                    </div>
                </div>
                <div class="glass-card" style="display: flex; flex-direction: column; gap: 1.5vw;">
                    <div>
                        <h4 class="text-lg font-bold mb-2">关键发现</h4>
                        <div class="space-y-2">
                            <div class="h-3 skeleton" style="width: 85%;"></div>
                            <div class="h-3 skeleton" style="width: 100%;"></div>
                            <div class="h-3 skeleton" style="width: 70%;"></div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold mb-2">诊断印象</h4>
                        <div class="space-y-2">
                            <div class="h-3 skeleton" style="width: 90%;"></div>
                            <div class="h-3 skeleton" style="width: 60%;"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex items-center justify-end gap-3">
                     <button type="button" style="background: hsl(var(--card)) !important; border: 1px solid hsl(var(--border)) !important; color: hsl(var(--foreground)) !important; padding: 0.6em 1.2em; border-radius: 0.5rem; font-weight: 600;">编辑</button>
                     <button type="button">批准并签署</button>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. Key Benefits -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg>放射科AI</div><div class="slide-number">05 / 06</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">改变放射科实践</h2>
        <p class="slide-subtitle">基于试点研究，在效率、准确性和工作满意度方面取得可衡量的改进。</p>
        <div class="metrics-row">
            <div class="metric"><div class="metric-value animate-counter" data-target="40">0</div><div class="metric-label">报告速度提升</div></div>
            <div class="metric"><div class="metric-value animate-counter" data-target="15">0</div><div class="metric-label">检测率提高</div></div>
            <div class="metric"><div class="metric-value animate-counter" data-target="90">0</div><div class="metric-label">用户满意度</div></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. CTA -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <div class="logo-large" style="margin-bottom: clamp(1rem, 2vw, 1.5rem);"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" fill="currentColor" fill-opacity=".2"/><path d="M12 7.5a.75.75 0 01.75.75v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-1.5 0v-3h-3a.75.75 0 010-1.5h3v-3A.75.75 0 0112 7.5z" fill="currentColor"/></svg><span>放射科AI</span></div>
        <h2 class="cta-title">放射学的未来已来</h2>
        <p class="cta-text">与我们合作，将AI的力量带入您的实践。让我们共同努力，通过技术提升患者护理水平。</p>
        <div class="cta-button cta-contact">请求演示</div>
    </div>
</div></body></html>`
];
