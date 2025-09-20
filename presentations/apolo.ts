import { COMMON_HEAD } from './common';

// --- English PRESENTATION 1: Apolo (Medical AI) ---
export const APOLO_SLIDES_EN = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg><span>Apolo</span></div>
    <h1>Leading Medical AI into a New Era of Safety, Trust, and Efficiency</h1>
    <p class="tagline">A Privacy-First, Dually-Explainable, Locally-Deployable Medical Imaging AI Framework</p>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">02 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Core Challenges in Clinical Adoption of Medical AI</h2>
        <p class="slide-subtitle">Existing AI solutions struggle to gain clinical trust and widespread adoption due to fundamental design flaws.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg></div><h3>Data Privacy & Security Risks</h3><p>Uploading sensitive patient data to the cloud introduces data breach risks and compliance challenges.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49 1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22-.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></div><h3>Lack of Trust in "Black Box" Models</h3><p>The opaque decision-making process of AI makes it difficult for doctors to understand and trust.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div><h3>High Deployment & Computational Costs</h3><p>High computational and deployment costs hinder in-hospital deployment.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">03 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Solution: A Revolutionary Dual-Stage Architecture</h2>
        <p class="slide-subtitle">Apolo's unique "Describe-then-Reason" architecture solves the core pain points of security, transparency, and efficiency.</p>
        <div class="two-phase-arch">
            <div class="arch-phase"><h4>Phase 1: Apolo Medical Vision</h4><p style="font-size: clamp(0.9rem, 1.25vw, 1.1rem);">Image Analysis & Objective Description<br/>Output: Purely objective, non-diagnostic text description</p></div>
            <div class="flow-arrow" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; flex-grow: 0.5; gap: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                <div style="padding: 0.75rem 1rem; border-radius: 1rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                    <span style="font-size: clamp(0.8rem, 1.25vw, 1rem); font-weight:600;">Privacy Boundary</span>
                    <p style="font-size: clamp(0.7rem, 1vw, 0.85rem);">Image data never leaves the premises</p>
                </div>
            </div>
            <div class="arch-phase"><h4>Phase 2: Apolo Medical Instruct</h4><p style="font-size: clamp(0.9rem, 1.25vw, 1.1rem);">Text Comprehension & Diagnostic Reasoning<br/>Output: Explainable reasoning + diagnostic suggestions</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Workflow 1 -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">04 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Workflow: Image Input</h2>
        <p class="slide-subtitle">Fully automated processing of raw medical images, no pre-processing required. Directly ingests DICOM, PNG, and other standard images from PACS or imaging devices.</p>
        <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 2vw; border-radius: 1.5vw; padding: 2vw;">
            <!-- Sources -->
            <div style="display: flex; flex-direction: column; gap: 1.5vw; animation: fadeIn 0.8s ease-out both;">
                <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">PACS / DICOM</span>
                </div>
                <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">MRI / CT Scans</span>
                </div>
                 <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">X-Ray & Others</span>
                </div>
            </div>
            <!-- Arrow -->
            <div style="font-size: clamp(4rem, 6vw, 5rem); font-weight: 100; color: hsl(var(--muted-foreground)); animation: pulse 1.5s infinite;">&rarr;</div>
            <!-- Destination -->
            <div class="card" style="padding: 5vw 6vw; text-align: center; border-color: hsl(var(--primary)); animation: fadeIn 0.8s ease-out 0.2s both;">
                <svg style="width: 5vw; height: 5vw; margin: 0 auto 1.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>
                <h4 style="font-size: clamp(1.2rem, 2vw, 1.75rem); font-weight: 700;">Apolo Vision Engine</h4>
                <p style="font-size: clamp(0.8rem, 1.2vw, 1rem); max-width: 20vw;">Local, privacy-first image analysis</p>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. UI Mockup -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">05 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">AI-Assisted Diagnostic Interface</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>Apolo | Diagnostic Workstation | Patient: LI_YANG_4521</p>
            </div>
            <div class="mockup-content" style="display: flex; flex-direction: column; gap: clamp(1rem, 1.5vw, 1.5rem);">
                
                <div style="flex: 2; display: grid; grid-template-columns: 2fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem);">
                    <!-- Image Panel -->
                    <div style="background: #111827; border-radius: 0.75rem; position: relative; overflow:hidden; border: 1px solid hsl(var(--border));">
                        <img src="https://storage.googleapis.com/maker-media/visual-studio-dev/Presentation%20App/ct-scan.png" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
                        <div style="position: absolute; top: 45%; left: 55%; width: 20%; height: 20%; border: 3px solid #ef4444; border-radius: 50%; box-shadow: 0 0 20px #ef4444; animation: pulse 1.5s infinite ease-in-out;"></div>
                    </div>

                    <!-- Instruct Insights Panel -->
                    <div class="glass-card" style="padding: clamp(1rem, 1.5vw, 1.5rem); display: flex; flex-direction: column; gap: 1rem;">
                        <h3 style="font-weight: 700; font-size: 1.1em; color: hsl(var(--primary)); display:flex; align-items:center; gap: 0.5em;"><svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>AI Clinical Insights</h3>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.5em;">Confidence</h4>
                            <div class="progress-bar"><div class="progress-bar-fill" style="width: 92%;">92% MALIGNANT</div></div>
                        </div>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.5em;">Recommendations</h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9em;">
                                <div style="background: hsla(var(--primary), 0.1); padding: 0.5em 0.75em; border-radius: 0.5rem;">Percutaneous Lung Biopsy</div>
                                <div style="background: hsla(var(--primary), 0.1); padding: 0.5em 0.75em; border-radius: 0.5rem;">PET-CT Examination</div>
                            </div>
                        </div>
                         <div style="margin-top: auto;">
                            <button type="button" style="width: 100%;">Generate Draft Report</button>
                         </div>
                    </div>
                </div>

                 <!-- Vision Description Panel -->
                <div class="glass-card" style="padding: clamp(1rem, 1.5vw, 1.5rem); flex: 1;">
                     <h3 style="font-weight: 700; font-size: 1.1em; margin-bottom: 0.75rem; display:flex; align-items:center; gap: 0.5em;"><svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>AI Objective Description</h3>
                     <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div class="h-3 skeleton" style="width: 85%;"></div>
                        <div class="h-3 skeleton" style="width: 100%;"></div>
                        <div class="h-3 skeleton" style="width: 70%;"></div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. NEW UI Mockup: Feedback Loop -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">06 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Continuous Learning Loop</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>Apolo | Clinical Feedback Module</p>
            </div>
            <div class="mockup-content">
                <div class="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                    <div class="flex items-center gap-3">
                        <div class="pulse-dot"></div>
                        <div>
                            <p class="font-bold">AI Suggestion Ready for Review</p>
                            <p class="text-sm">Case #LI_YANG_4521</p>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem); height: calc(100% - 70px);">
                    <div class="glass-card">
                        <h4 class="font-bold mb-3">AI Analysis</h4>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9em;">
                           <p><strong>Finding:</strong> Solid nodule in left upper lobe</p>
                           <p><strong>Size:</strong> 2.5cm x 2.2cm</p>
                           <p><strong>Features:</strong> Spiculated margins, pleural traction</p>
                           <p><strong>Suggestion:</strong> <span class="font-bold text-red-600">Highly suggestive of malignancy</span></p>
                        </div>
                    </div>
                    
                    <div class="glass-card" style="display:flex; flex-direction:column; justify-content: space-between;">
                        <h4 class="font-bold">Physician Feedback</h4>
                         <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(142, 76%, 51%, 0.1) !important; color: hsl(142, 76%, 70%) !important; border: 1px solid hsl(142, 76%, 51%) !important; font-weight: 600;">Agree with AI Diagnosis</button>
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(39, 92%, 66%, 0.1) !important; color: hsl(39, 92%, 75%) !important; border: 1px solid hsl(39, 92%, 66%) !important; font-weight: 600;">Modify & Comment</button>
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(0, 84%, 60%, 0.1) !important; color: hsl(0, 84%, 70%) !important; border: 1px solid hsl(0, 84%, 60%) !important; font-weight: 600;">Incorrect</button>
                        </div>
                        <button type="button" style="width:100%;">Submit Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Moat -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">07 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Our Moat</h2>
        <p class="slide-subtitle">Three strategic pillars create an insurmountable competitive advantage.</p>
        <div class="moat-diagram">
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg></div><h4>Architectural Moat</h4><p>Unique "Describe-then-Reason" architecture fundamentally ensures privacy and transparency.</p></div>
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.071L12.732 4H3.75A2.25 2.25 0 001.5 6.25v7.5A2.25 2.25 0 003.75 16h.75a.75.75 0 000-1.5h-.75a.75.75 0 01-.75-.75v-7.5c0-.414.336-.75.75-.75h9.432l-1.84 1.84a.75.75 0 101.06 1.061l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25zM21 18.75a2.25 2.25 0 00-2.25-2.25h-.75a.75.75 0 000 1.5h.75c.414 0 .75.336.75.75v3.75a.75.75 0 01-.75-.75h-9.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-1.5 0v3.75A2.25 2.25 0 0011.25 24h9.75A2.25 2.25 0 0023.25 21v-2.25a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v.01z" clip-rule="evenodd" /></svg></div><h4>Data Ecosystem Moat</h4><p>Builds a unique dataset based on fine-tuning open-source models with expert data.</p></div>
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg></div><h4>Regulatory Compliance Moat</h4><p>Forward-thinking compliance design accelerates market access and builds credibility.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 8. Market Access -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">08 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Clear Path to Market Access</h2>
        <p class="slide-subtitle">Reviewed by an independent regulatory analyst, confirming our clear and executable path to commercialization.</p>
        <div style="display: flex; align-items: center; justify-content: space-around; gap: 2vw; margin-top: 4vw; width: 100%;">
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/eu.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">EU MDR</h4><p style="font-size: 1.4vw;">Class IIa</p></div>
            <div style="color: hsl(var(--border)); font-size: 3vw; font-weight: 100;">&rarr;</div>
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/us.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">US FDA</h4><p style="font-size: 1.4vw;">Category II</p></div>
            <div style="color: hsl(var(--border)); font-size: 3vw; font-weight: 100;">&rarr;</div>
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/un.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">IMDRF SaMD</h4><p style="font-size: 1.4vw;">CDS Exempt</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. Market Opportunity -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">09 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">A $150 Billion Global Market Opportunity</h2>
        <p class="slide-subtitle" style="margin-left: auto; margin-right: auto;">We are at a massive market inflection point driven by technology and regulation.</p>
        <div class="market-circles">
            <div class="circle"><span class="circle-label">TAM: Healthcare AI</span><span class="circle-value">$150B</span></div>
            <div class="circle"><span class="circle-label">SAM: Medical Imaging</span><span class="circle-value">$15B</span></div>
            <div class="circle"><span class="circle-label">SOM (5 Years)</span><span class="circle-value highlight">$500M</span></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 10. Team -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">10 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">Visionary Expert Team</h2>
        <p class="slide-subtitle">The founder's deep technical background and industry insight are the core drivers of success.</p>
        <div class="team-grid" style="grid-template-columns: 1fr; max-width: 45vw; margin-left: auto; margin-right: auto;"><div class="team-member">
            <div class="avatar" style="width: clamp(6rem, 9vw, 8rem); height: clamp(6rem, 9vw, 8rem); background: hsl(var(--border)); color: hsl(var(--foreground)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; margin: 0 auto 1.25rem; border: 3px solid hsl(var(--border));">SH</div>
            <h3 style="font-size: 2vw; margin-bottom: 0.3vw;">Sami Halawa</h3>
            <p style="font-size: 1.6vw; font-weight: 600;" class="highlight">Founder & Chief Architect</p>
            <p style="max-width: 40vw; margin: 1.25vw auto 0; color: hsl(var(--muted-foreground)); font-size: 1.35vw;">Possesses a deep interdisciplinary background in medical AI, vision-language models, and privacy-enhancing technologies. Dedicated to building AI tools that can be trusted and widely used in clinical practice.</p>
        </div></div>
    </div>
</div></body></html>`,
`<!-- 11. Ask -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0; display: flex; flex-direction: column;">
    <div style="padding: clamp(2rem, 4.5vw, 3.5rem) clamp(2.5rem, 5.5vw, 4.5rem) clamp(1rem, 2vw, 2rem);">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">11 / 11</div></div>
    <h2 class="slide-title">Seeking <span class="highlight">€500K</span> Seed Funding</h2>
    <p class="slide-subtitle">We are seeking seed funding to accelerate our already-validated path to commercialization.</p>
    <div class="funding-grid">
        <div class="funding-use card"><h3>Use of Funds</h3>
            <div class="funding-item" style="margin-bottom: 1rem;"><span>Productization & Certification</span><span style="float:right; font-weight: 600;">50%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 50%;"></div></div></div>
            <div class="funding-item" style="margin-bottom: 1rem;"><span>Market Expansion</span><span style="float:right; font-weight: 600;">30%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 30%;"></div></div></div>
            <div class="funding-item"><span>R&D Deepening</span><span style="float:right; font-weight: 600;">20%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 20%;"></div></div></div>
        </div>
        <div class="funding-milestones card"><h3>Key Milestones</h3><ul style="list-style: '✔ ' inside; padding-left: 0; font-size: 1.2vw; color: hsl(var(--muted-foreground));">
            <li style="margin-bottom: 1.25vw;"><span style="color: hsl(var(--foreground));">Achieve CE Mark within 12-18 months</span></li>
            <li style="margin-bottom: 1.25vw;"><span style="color: hsl(var(--foreground));">Sign paid pilot agreements with 3-5 lighthouse hospitals</span></li>
            <li><span style="color: hsl(var(--foreground));">Launch Oncology or Pathology application Beta</span></li>
        </ul></div>
    </div></div>
    <div class="cta-box" style="border-radius: 0; flex-grow: 1; border-left:0; border-right:0; border-bottom:0;">
        <h2 class="cta-title">Join Us in Defining the Future of Medical AI</h2>
        <p class="cta-text" style="font-size: 1.2vw;">We invite you to join us in bringing this revolutionary technology to millions of patients and doctors in need worldwide.</p>
        <div class="cta-button cta-contact">Contact Us</div>
    </div>
</div></body></html>`
];

// --- Spanish PRESENTATION 1: Apolo (IA Médica) ---
export const APOLO_SLIDES_ES = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg><span>Apolo</span></div>
    <h1>Liderando la IA Médica hacia una Nueva Era de Seguridad, Confianza y Eficiencia</h1>
    <p class="tagline">Un Marco de IA para Imágenes Médicas Priorizando la Privacidad, Doblemente Explicable y de Despliegue Local</p>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">02 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Retos Centrales en la Adopción Clínica de la IA Médica</h2>
        <p class="slide-subtitle">Las soluciones de IA existentes luchan por ganar la confianza clínica y una adopción generalizada debido a fallas de diseño fundamentales.</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg></div><h3>Riesgos de Privacidad y Seguridad de Datos</h3><p>Subir datos sensibles de pacientes a la nube introduce riesgos de filtración de datos y desafíos de cumplimiento.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49 1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22-.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></div><h3>Falta de Confianza en Modelos "Caja Negra"</h3><p>El proceso opaco de toma de decisiones de la IA dificulta que los médicos lo entiendan y confíen en él.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div><h3>Altos Costos de Despliegue y Computación</h3><p>Los altos costos computacionales y de despliegue impiden la implementación en hospitales.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">03 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Solución: Una Arquitectura Revolucionaria de Doble Etapa</h2>
        <p class="slide-subtitle">La arquitectura única de Apolo "Describe-luego-Razona" resuelve los problemas centrales de seguridad, transparencia y eficiencia.</p>
        <div class="two-phase-arch">
            <div class="arch-phase"><h4>Fase 1: Apolo Medical Vision</h4><p style="font-size: clamp(0.9rem, 1.25vw, 1.1rem);">Análisis de Imagen y Descripción Objetiva<br/>Resultado: Descripción de texto puramente objetiva, no diagnóstica</p></div>
            <div class="flow-arrow" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; flex-grow: 0.5; gap: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                <div style="padding: 0.75rem 1rem; border-radius: 1rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                    <span style="font-size: clamp(0.8rem, 1.25vw, 1rem); font-weight:600;">Límite de Privacidad</span>
                    <p style="font-size: clamp(0.7rem, 1vw, 0.85rem);">Los datos de imagen nunca salen de las instalaciones</p>
                </div>
            </div>
            <div class="arch-phase"><h4>Fase 2: Apolo Medical Instruct</h4><p style="font-size: clamp(0.9rem, 1.25vw, 1.1rem);">Comprensión de Texto y Razonamiento Diagnóstico<br/>Resultado: Razonamiento explicable + sugerencias diagnósticas</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Workflow 1 -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">04 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Flujo de Trabajo: Entrada de Imágenes</h2>
        <p class="slide-subtitle">Procesamiento totalmente automatizado de imágenes médicas en bruto, sin necesidad de pre-procesamiento. Ingiere directamente DICOM, PNG y otras imágenes estándar desde PACS o dispositivos de imagen.</p>
        <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 2vw; border-radius: 1.5vw; padding: 2vw;">
            <!-- Sources -->
            <div style="display: flex; flex-direction: column; gap: 1.5vw; animation: fadeIn 0.8s ease-out both;">
                <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">PACS / DICOM</span>
                </div>
                <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">RM / TC</span>
                </div>
                 <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">Rayos X y Otros</span>
                </div>
            </div>
            <!-- Arrow -->
            <div style="font-size: clamp(4rem, 6vw, 5rem); font-weight: 100; color: hsl(var(--muted-foreground)); animation: pulse 1.5s infinite;">&rarr;</div>
            <!-- Destination -->
            <div class="card" style="padding: 5vw 6vw; text-align: center; border-color: hsl(var(--primary)); animation: fadeIn 0.8s ease-out 0.2s both;">
                <svg style="width: 5vw; height: 5vw; margin: 0 auto 1.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>
                <h4 style="font-size: clamp(1.2rem, 2vw, 1.75rem); font-weight: 700;">Motor Apolo Vision</h4>
                <p style="font-size: clamp(0.8rem, 1.2vw, 1rem); max-width: 20vw;">Análisis de imagen local y privado</p>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. UI Mockup -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">05 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Interfaz de Diagnóstico Asistido por IA</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>Apolo | Estación de Trabajo Diagnóstica | Paciente: LI_YANG_4521</p>
            </div>
            <div class="mockup-content" style="display: flex; flex-direction: column; gap: clamp(1rem, 1.5vw, 1.5rem);">
                
                <div style="flex: 2; display: grid; grid-template-columns: 2fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem);">
                    <!-- Image Panel -->
                    <div style="background: #111827; border-radius: 0.75rem; position: relative; overflow:hidden; border: 1px solid hsl(var(--border));">
                        <img src="https://storage.googleapis.com/maker-media/visual-studio-dev/Presentation%20App/ct-scan.png" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
                        <div style="position: absolute; top: 45%; left: 55%; width: 20%; height: 20%; border: 3px solid #ef4444; border-radius: 50%; box-shadow: 0 0 20px #ef4444; animation: pulse 1.5s infinite ease-in-out;"></div>
                    </div>

                    <!-- Instruct Insights Panel -->
                    <div class="glass-card" style="padding: clamp(1rem, 1.5vw, 1.5rem); display: flex; flex-direction: column; gap: 1rem;">
                        <h3 style="font-weight: 700; font-size: 1.1em; color: hsl(var(--primary)); display:flex; align-items:center; gap: 0.5em;"><svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>Perspectivas Clínicas IA</h3>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.5em;">Confianza</h4>
                            <div class="progress-bar"><div class="progress-bar-fill" style="width: 92%;">92% MALIGNO</div></div>
                        </div>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.5em;">Recomendaciones</h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9em;">
                                <div style="background: hsla(var(--primary), 0.1); padding: 0.5em 0.75em; border-radius: 0.5rem;">Biopsia Pulmonar Percutánea</div>
                                <div style="background: hsla(var(--primary), 0.1); padding: 0.5em 0.75em; border-radius: 0.5rem;">Examen PET-CT</div>
                            </div>
                        </div>
                         <div style="margin-top: auto;">
                            <button type="button" style="width: 100%;">Generar Borrador de Informe</button>
                         </div>
                    </div>
                </div>

                 <!-- Vision Description Panel -->
                <div class="glass-card" style="padding: clamp(1rem, 1.5vw, 1.5rem); flex: 1;">
                     <h3 style="font-weight: 700; font-size: 1.1em; margin-bottom: 0.75rem; display:flex; align-items:center; gap: 0.5em;"><svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>AI Descripción Objetiva</h3>
                     <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div class="h-3 skeleton" style="width: 85%;"></div>
                        <div class="h-3 skeleton" style="width: 100%;"></div>
                        <div class="h-3 skeleton" style="width: 70%;"></div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. NEW UI Mockup: Feedback Loop -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">06 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Bucle de Aprendizaje Continuo</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>Apolo | Módulo de Retroalimentación Clínica</p>
            </div>
            <div class="mockup-content">
                <div class="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                    <div class="flex items-center gap-3">
                        <div class="pulse-dot"></div>
                        <div>
                            <p class="font-bold">Sugerencia de IA Lista para Revisión</p>
                            <p class="text-sm">Caso #LI_YANG_4521</p>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem); height: calc(100% - 70px);">
                    <div class="glass-card">
                        <h4 class="font-bold mb-3">Análisis de IA</h4>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9em;">
                           <p><strong>Hallazgo:</strong> Nódulo sólido en lóbulo superior izquierdo</p>
                           <p><strong>Tamaño:</strong> 2.5cm x 2.2cm</p>
                           <p><strong>Características:</strong> Márgenes espiculados, tracción pleural</p>
                           <p><strong>Sugerencia:</strong> <span class="font-bold text-red-600">Altamente sugerente de malignidad</span></p>
                        </div>
                    </div>
                    
                    <div class="glass-card" style="display:flex; flex-direction:column; justify-content: space-between;">
                        <h4 class="font-bold">Retroalimentación del Médico</h4>
                         <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(142, 76%, 51%, 0.1) !important; color: hsl(142, 76%, 70%) !important; border: 1px solid hsl(142, 76%, 51%) !important; font-weight: 600;">De acuerdo con Diagnóstico IA</button>
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(39, 92%, 66%, 0.1) !important; color: hsl(39, 92%, 75%) !important; border: 1px solid hsl(39, 92%, 66%) !important; font-weight: 600;">Modificar y Comentar</button>
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(0, 84%, 60%, 0.1) !important; color: hsl(0, 84%, 70%) !important; border: 1px solid hsl(0, 84%, 60%) !important; font-weight: 600;">Incorrecto</button>
                        </div>
                        <button type="button" style="width:100%;">Enviar Retroalimentación</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Moat -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">07 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Nuestro Foso Competitivo</h2>
        <p class="slide-subtitle">Tres pilares estratégicos crean una ventaja competitiva insuperable.</p>
        <div class="moat-diagram">
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg></div><h4>Foso Arquitectónico</h4><p>La arquitectura única "Describe-luego-Razona" garantiza fundamentalmente la privacidad y la transparencia.</p></div>
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.071L12.732 4H3.75A2.25 2.25 0 001.5 6.25v7.5A2.25 2.25 0 003.75 16h.75a.75.75 0 000-1.5h-.75a.75.75 0 01-.75-.75v-7.5c0-.414.336-.75.75-.75h9.432l-1.84 1.84a.75.75 0 101.06 1.061l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25zM21 18.75a2.25 2.25 0 00-2.25-2.25h-.75a.75.75 0 000 1.5h.75c.414 0 .75.336.75.75v3.75a.75.75 0 01-.75-.75h-9.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-1.5 0v3.75A2.25 2.25 0 0011.25 24h9.75A2.25 2.25 0 0023.25 21v-2.25a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v.01z" clip-rule="evenodd" /></svg></div><h4>Foso del Ecosistema de Datos</h4><p>Construye un conjunto de datos único basado en el ajuste fino de modelos de código abierto con datos de expertos.</p></div>
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg></div><h4>Foso de Cumplimiento Regulatorio</h4><p>El diseño de cumplimiento con visión de futuro acelera el acceso al mercado y genera credibilidad.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 8. Market Access -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">08 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Camino Claro hacia el Acceso al Mercado</h2>
        <p class="slide-subtitle">Revisado por un analista regulatorio independiente, confirmando nuestro camino claro y ejecutable hacia la comercialización.</p>
        <div style="display: flex; align-items: center; justify-content: space-around; gap: 2vw; margin-top: 4vw; width: 100%;">
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/eu.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">MDR UE</h4><p style="font-size: 1.4vw;">Clase IIa</p></div>
            <div style="color: hsl(var(--border)); font-size: 3vw; font-weight: 100;">&rarr;</div>
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/us.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">FDA EE.UU.</h4><p style="font-size: 1.4vw;">Categoría II</p></div>
            <div style="color: hsl(var(--border)); font-size: 3vw; font-weight: 100;">&rarr;</div>
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/un.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">IMDRF SaMD</h4><p style="font-size: 1.4vw;">Exento de CDS</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. Market Opportunity -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">09 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">Una Oportunidad de Mercado Global de $150 Mil Millones</h2>
        <p class="slide-subtitle" style="margin-left: auto; margin-right: auto;">Estamos en un punto de inflexión masivo del mercado impulsado por la tecnología y la regulación.</p>
        <div class="market-circles">
            <div class="circle"><span class="circle-label">TAM: IA en Salud</span><span class="circle-value">$150B</span></div>
            <div class="circle"><span class="circle-label">SAM: Imagen Médica</span><span class="circle-value">$15B</span></div>
            <div class="circle"><span class="circle-label">SOM (5 Años)</span><span class="circle-value highlight">$500M</span></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 10. Team -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">10 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">Equipo de Expertos Visionarios</h2>
        <p class="slide-subtitle">La profunda formación técnica y la visión de la industria del fundador son los principales impulsores del éxito.</p>
        <div class="team-grid" style="grid-template-columns: 1fr; max-width: 45vw; margin-left: auto; margin-right: auto;"><div class="team-member">
            <div class="avatar" style="width: clamp(6rem, 9vw, 8rem); height: clamp(6rem, 9vw, 8rem); background: hsl(var(--border)); color: hsl(var(--foreground)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; margin: 0 auto 1.25rem; border: 3px solid hsl(var(--border));">SH</div>
            <h3 style="font-size: 2vw; margin-bottom: 0.3vw;">Sami Halawa</h3>
            <p style="font-size: 1.6vw; font-weight: 600;" class="highlight">Fundador y Arquitecto Jefe</p>
            <p style="max-width: 40vw; margin: 1.25vw auto 0; color: hsl(var(--muted-foreground)); font-size: 1.35vw;">Posee una profunda formación interdisciplinaria en IA médica, modelos de visión-lenguaje y tecnologías que mejoran la privacidad. Dedicado a construir herramientas de IA que puedan ser confiables y ampliamente utilizadas en la práctica clínica.</p>
        </div></div>
    </div>
</div></body></html>`,
`<!-- 11. Ask -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0; display: flex; flex-direction: column;">
    <div style="padding: clamp(2rem, 4.5vw, 3.5rem) clamp(2.5rem, 5.5vw, 4.5rem) clamp(1rem, 2vw, 2rem);">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">11 / 11</div></div>
    <h2 class="slide-title">Buscando <span class="highlight">€500K</span> de Financiación Inicial</h2>
    <p class="slide-subtitle">Buscamos financiación inicial para acelerar nuestro camino ya validado hacia la comercialización.</p>
    <div class="funding-grid">
        <div class="funding-use card"><h3>Uso de los Fondos</h3>
            <div class="funding-item" style="margin-bottom: 1rem;"><span>Productización y Certificación</span><span style="float:right; font-weight: 600;">50%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 50%;"></div></div></div>
            <div class="funding-item" style="margin-bottom: 1rem;"><span>Expansión de Mercado</span><span style="float:right; font-weight: 600;">30%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 30%;"></div></div></div>
            <div class="funding-item"><span>Profundización en I+D</span><span style="float:right; font-weight: 600;">20%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 20%;"></div></div></div>
        </div>
        <div class="funding-milestones card"><h3>Hitos Clave</h3><ul style="list-style: '✔ ' inside; padding-left: 0; font-size: 1.2vw; color: hsl(var(--muted-foreground));">
            <li style="margin-bottom: 1.25vw;"><span style="color: hsl(var(--foreground));">Lograr la marca CE en 12-18 meses</span></li>
            <li style="margin-bottom: 1.25vw;"><span style="color: hsl(var(--foreground));">Firmar acuerdos piloto pagados con 3-5 hospitales de referencia</span></li>
            <li><span style="color: hsl(var(--foreground));">Lanzar la Beta de la aplicación de Oncología o Patología</span></li>
        </ul></div>
    </div></div>
    <div class="cta-box" style="border-radius: 0; flex-grow: 1; border-left:0; border-right:0; border-bottom:0;">
        <h2 class="cta-title">Únase a Nosotros para Definir el Futuro de la IA Médica</h2>
        <p class="cta-text" style="font-size: 1.2vw;">Le invitamos a unirse a nosotros para llevar esta tecnología revolucionaria a millones de pacientes y médicos necesitados en todo el mundo.</p>
        <div class="cta-button cta-contact">Contáctenos</div>
    </div>
</div></body></html>`
];

// --- Chinese PRESENTATION 1: Apolo (医疗AI) ---
export const APOLO_SLIDES_ZH = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg><span>Apolo</span></div>
    <h1>引领医疗AI进入安全、信任、高效的新纪元</h1>
    <p class="tagline">一个隐私优先、双重可解释、本地部署的医学影像AI框架</p>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">02 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">医疗AI临床应用的核心挑战</h2>
        <p class="slide-subtitle">现有的AI解决方案因根本性的设计缺陷，难以获得临床信任和广泛采用。</p>
        <div class="card-grid" style="grid-template-columns: repeat(3, 1fr); align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg></div><h3>数据隐私与安全风险</h3><p>将敏感的患者数据上传到云端，带来了数据泄露风险和合规挑战。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49 1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22-.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg></div><h3>对“黑箱”模型缺乏信任</h3><p>AI不透明的决策过程，让医生难以理解和信任。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div><h3>高昂的部署与计算成本</h3><p>高昂的计算和部署成本阻碍了院内部署。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">03 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">解决方案：革命性的双阶架构</h2>
        <p class="slide-subtitle">Apolo独特的“描述-再推理”架构，解决了安全、透明和效率的核心痛点。</p>
        <div class="two-phase-arch">
            <div class="arch-phase"><h4>第一阶段: Apolo Medical Vision</h4><p style="font-size: clamp(0.9rem, 1.25vw, 1.1rem);">图像分析与客观描述<br/>输出: 纯客观、非诊断性的文本描述</p></div>
            <div class="flow-arrow" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; flex-grow: 0.5; gap: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                <div style="padding: 0.75rem 1rem; border-radius: 1rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 2zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                    <span style="font-size: clamp(0.8rem, 1.25vw, 1rem); font-weight:600;">隐私边界</span>
                    <p style="font-size: clamp(0.7rem, 1vw, 0.85rem);">影像数据永不离院</p>
                </div>
            </div>
            <div class="arch-phase"><h4>第二阶段: Apolo Medical Instruct</h4><p style="font-size: clamp(0.9rem, 1.25vw, 1.1rem);">文本理解与诊断推理<br/>输出: 可解释的推理 + 诊断建议</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Workflow 1 -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">04 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">工作流程：影像输入</h2>
        <p class="slide-subtitle">全自动处理原始医学影像，无需预处理。直接从PACS或影像设备中提取DICOM、PNG等标准图像。</p>
        <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 2vw; border-radius: 1.5vw; padding: 2vw;">
            <!-- Sources -->
            <div style="display: flex; flex-direction: column; gap: 1.5vw; animation: fadeIn 0.8s ease-out both;">
                <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">PACS / DICOM</span>
                </div>
                <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">核磁共振/CT扫描</span>
                </div>
                 <div class="card" style="flex-direction: row; align-items: center; gap: 1vw; padding: 1.5vw 2vw;">
                    <svg style="width: 2.5vw; height: 2.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                    <span style="font-size: clamp(1rem, 1.4vw, 1.25rem); font-weight: 600;">X光及其他</span>
                </div>
            </div>
            <!-- Arrow -->
            <div style="font-size: clamp(4rem, 6vw, 5rem); font-weight: 100; color: hsl(var(--muted-foreground)); animation: pulse 1.5s infinite;">&rarr;</div>
            <!-- Destination -->
            <div class="card" style="padding: 5vw 6vw; text-align: center; border-color: hsl(var(--primary)); animation: fadeIn 0.8s ease-out 0.2s both;">
                <svg style="width: 5vw; height: 5vw; margin: 0 auto 1.5vw;" class="highlight" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>
                <h4 style="font-size: clamp(1.2rem, 2vw, 1.75rem); font-weight: 700;">Apolo Vision 引擎</h4>
                <p style="font-size: clamp(0.8rem, 1.2vw, 1rem); max-width: 20vw;">本地、隐私优先的影像分析</p>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. UI Mockup -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">05 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">AI辅助诊断界面</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>Apolo | 诊断工作站 | 患者: LI_YANG_4521</p>
            </div>
            <div class="mockup-content" style="display: flex; flex-direction: column; gap: clamp(1rem, 1.5vw, 1.5rem);">
                
                <div style="flex: 2; display: grid; grid-template-columns: 2fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem);">
                    <!-- Image Panel -->
                    <div style="background: #111827; border-radius: 0.75rem; position: relative; overflow:hidden; border: 1px solid hsl(var(--border));">
                        <img src="https://storage.googleapis.com/maker-media/visual-studio-dev/Presentation%20App/ct-scan.png" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;">
                        <div style="position: absolute; top: 45%; left: 55%; width: 20%; height: 20%; border: 3px solid #ef4444; border-radius: 50%; box-shadow: 0 0 20px #ef4444; animation: pulse 1.5s infinite ease-in-out;"></div>
                    </div>

                    <!-- Instruct Insights Panel -->
                    <div class="glass-card" style="padding: clamp(1rem, 1.5vw, 1.5rem); display: flex; flex-direction: column; gap: 1rem;">
                        <h3 style="font-weight: 700; font-size: 1.1em; color: hsl(var(--primary)); display:flex; align-items:center; gap: 0.5em;"><svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>AI临床见解</h3>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.5em;">置信度</h4>
                            <div class="progress-bar"><div class="progress-bar-fill" style="width: 92%;">92% 恶性</div></div>
                        </div>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.5em;">建议</h4>
                            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9em;">
                                <div style="background: hsla(var(--primary), 0.1); padding: 0.5em 0.75em; border-radius: 0.5rem;">经皮肺活检</div>
                                <div style="background: hsla(var(--primary), 0.1); padding: 0.5em 0.75em; border-radius: 0.5rem;">PET-CT检查</div>
                            </div>
                        </div>
                         <div style="margin-top: auto;">
                            <button type="button" style="width: 100%;">生成报告草稿</button>
                         </div>
                    </div>
                </div>

                 <!-- Vision Description Panel -->
                <div class="glass-card" style="padding: clamp(1rem, 1.5vw, 1.5rem); flex: 1;">
                     <h3 style="font-weight: 700; font-size: 1.1em; margin-bottom: 0.75rem; display:flex; align-items:center; gap: 0.5em;"><svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>AI客观描述</h3>
                     <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div class="h-3 skeleton" style="width: 85%;"></div>
                        <div class="h-3 skeleton" style="width: 100%;"></div>
                        <div class="h-3 skeleton" style="width: 70%;"></div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. NEW UI Mockup: Feedback Loop -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">06 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">持续学习闭环</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar">
                <div class="mockup-dots-premium"><span></span><span></span><span></span></div>
                <p>Apolo | 临床反馈模块</p>
            </div>
            <div class="mockup-content">
                <div class="mb-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg">
                    <div class="flex items-center gap-3">
                        <div class="pulse-dot"></div>
                        <div>
                            <p class="font-bold">AI建议待审核</p>
                            <p class="text-sm">病例 #LI_YANG_4521</p>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem); height: calc(100% - 70px);">
                    <div class="glass-card">
                        <h4 class="font-bold mb-3">AI分析</h4>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9em;">
                           <p><strong>发现:</strong> 左上肺叶实性结节</p>
                           <p><strong>尺寸:</strong> 2.5cm x 2.2cm</p>
                           <p><strong>特征:</strong> 边缘毛刺，胸膜牵拉</p>
                           <p><strong>建议:</strong> <span class="font-bold text-red-600">高度怀疑恶性</span></p>
                        </div>
                    </div>
                    
                    <div class="glass-card" style="display:flex; flex-direction:column; justify-content: space-between;">
                        <h4 class="font-bold">医生反馈</h4>
                         <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(142, 76%, 51%, 0.1) !important; color: hsl(142, 76%, 70%) !important; border: 1px solid hsl(142, 76%, 51%) !important; font-weight: 600;">同意AI诊断</button>
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(39, 92%, 66%, 0.1) !important; color: hsl(39, 92%, 75%) !important; border: 1px solid hsl(39, 92%, 66%) !important; font-weight: 600;">修改并评论</button>
                           <button type="button" style="width: 100%; text-align:left; padding: 0.75rem; border-radius: 0.5rem; background: hsla(0, 84%, 60%, 0.1) !important; color: hsl(0, 84%, 70%) !important; border: 1px solid hsl(0, 84%, 60%) !important; font-weight: 600;">不正确</button>
                        </div>
                        <button type="button" style="width:100%;">提交反馈</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Moat -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">07 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">我们的护城河</h2>
        <p class="slide-subtitle">三大战略支柱构筑了不可逾越的竞争优势。</p>
        <div class="moat-diagram">
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" /></svg></div><h4>架构护城河</h4><p>独特的“描述-再推理”架构从根本上保证了隐私和透明度。</p></div>
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.071L12.732 4H3.75A2.25 2.25 0 001.5 6.25v7.5A2.25 2.25 0 003.75 16h.75a.75.75 0 000-1.5h-.75a.75.75 0 01-.75-.75v-7.5c0-.414.336-.75.75-.75h9.432l-1.84 1.84a.75.75 0 101.06 1.061l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25zM21 18.75a2.25 2.25 0 00-2.25-2.25h-.75a.75.75 0 000 1.5h.75c.414 0 .75.336.75.75v3.75a.75.75 0 01-.75-.75h-9.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-1.5 0v3.75A2.25 2.25 0 0011.25 24h9.75A2.25 2.25 0 0023.25 21v-2.25a.75.75 0 00-.75-.75h-.75a.75.75 0 00-.75.75v.01z" clip-rule="evenodd" /></svg></div><h4>数据生态护城河</h4><p>基于开源模型微调和专家数据，构建独特的数据集。</p></div>
            <div class="moat-pillar"><div class="card-icon" style="margin: 0 auto 1.8vw;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg></div><h4>法规遵从护城河</h4><p>前瞻性的合规设计，加速市场准入并建立信誉。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 8. Market Access -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">08 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">清晰的市场准入路径</h2>
        <p class="slide-subtitle">经独立法规分析师审查，确认我们有明确且可执行的商业化路径。</p>
        <div style="display: flex; align-items: center; justify-content: space-around; gap: 2vw; margin-top: 4vw; width: 100%;">
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/eu.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">欧盟MDR</h4><p style="font-size: 1.4vw;">IIa类</p></div>
            <div style="color: hsl(var(--border)); font-size: 3vw; font-weight: 100;">&rarr;</div>
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/us.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">美国FDA</h4><p style="font-size: 1.4vw;">II类</p></div>
            <div style="color: hsl(var(--border)); font-size: 3vw; font-weight: 100;">&rarr;</div>
            <div style="flex: 1; text-align: center;"><img src="https://hatscripts.github.io/circle-flags/flags/un.svg" style="width: 6vw; height: 6vw; margin: 0 auto 1.5vw; border-radius: 50%; box-shadow: 0 0 0 4px hsl(var(--card));"><h4 style="font-size: 1.8vw; font-weight: 700;">IMDRF SaMD</h4><p style="font-size: 1.4vw;">CDS豁免</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. Market Opportunity -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">09 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">1500亿美元的全球市场机遇</h2>
        <p class="slide-subtitle" style="margin-left: auto; margin-right: auto;">我们正处于技术和法规驱动的巨大市场拐点。</p>
        <div class="market-circles">
            <div class="circle"><span class="circle-label">TAM: 医疗AI</span><span class="circle-value">1500亿</span></div>
            <div class="circle"><span class="circle-label">SAM: 医学影像</span><span class="circle-value">150亿</span></div>
            <div class="circle"><span class="circle-label">SOM (5年)</span><span class="circle-value highlight">5亿</span></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 10. Team -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">10 / 11</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">富有远见的专家团队</h2>
        <p class="slide-subtitle">创始人的深厚技术背景和行业洞察力是成功的核心驱动力。</p>
        <div class="team-grid" style="grid-template-columns: 1fr; max-width: 45vw; margin-left: auto; margin-right: auto;"><div class="team-member">
            <div class="avatar" style="width: clamp(6rem, 9vw, 8rem); height: clamp(6rem, 9vw, 8rem); background: hsl(var(--border)); color: hsl(var(--foreground)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; margin: 0 auto 1.25rem; border: 3px solid hsl(var(--border));">SH</div>
            <h3 style="font-size: 2vw; margin-bottom: 0.3vw;">Sami Halawa</h3>
            <p style="font-size: 1.6vw; font-weight: 600;" class="highlight">创始人兼首席架构师</p>
            <p style="max-width: 40vw; margin: 1.25vw auto 0; color: hsl(var(--muted-foreground)); font-size: 1.35vw;">在医疗AI、视觉语言模型和隐私增强技术方面拥有深厚的跨学科背景。致力于打造可在临床实践中被信赖和广泛使用的AI工具。</p>
        </div></div>
    </div>
</div></body></html>`,
`<!-- 11. Ask -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0; display: flex; flex-direction: column;">
    <div style="padding: clamp(2rem, 4.5vw, 3.5rem) clamp(2.5rem, 5.5vw, 4.5rem) clamp(1rem, 2vw, 2rem);">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" fill-opacity="0.2"/><path d="M50 15L84.64 32.5V67.5L50 85L15.36 67.5V32.5L50 15Z" fill="currentColor"/></svg>Apolo</div><div class="slide-number">11 / 11</div></div>
    <h2 class="slide-title">寻求 <span class="highlight">50万欧元</span> 种子轮融资</h2>
    <p class="slide-subtitle">我们正在寻求种子资金，以加速我们已经验证的商业化道路。</p>
    <div class="funding-grid">
        <div class="funding-use card"><h3>资金用途</h3>
            <div class="funding-item" style="margin-bottom: 1rem;"><span>产品化与认证</span><span style="float:right; font-weight: 600;">50%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 50%;"></div></div></div>
            <div class="funding-item" style="margin-bottom: 1rem;"><span>市场扩张</span><span style="float:right; font-weight: 600;">30%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 30%;"></div></div></div>
            <div class="funding-item"><span>研发深化</span><span style="float:right; font-weight: 600;">20%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 20%;"></div></div></div>
        </div>
        <div class="funding-milestones card"><h3>关键里程碑</h3><ul style="list-style: '✔ ' inside; padding-left: 0; font-size: 1.2vw; color: hsl(var(--muted-foreground));">
            <li style="margin-bottom: 1.25vw;"><span style="color: hsl(var(--foreground));">12-18个月内获得CE标志</span></li>
            <li style="margin-bottom: 1.25vw;"><span style="color: hsl(var(--foreground));">与3-5家灯塔医院签订付费试点协议</span></li>
            <li><span style="color: hsl(var(--foreground));">启动肿瘤学或病理学应用的测试版</span></li>
        </ul></div>
    </div></div>
    <div class="cta-box" style="border-radius: 0; flex-grow: 1; border-left:0; border-right:0; border-bottom:0;">
        <h2 class="cta-title">与我们共同定义医疗AI的未来</h2>
        <p class="cta-text" style="font-size: 1.2vw;">我们邀请您加入我们，将这项革命性技术带给全球数百万有需要的患者和医生。</p>
        <div class="cta-button cta-contact">联系我们</div>
    </div>
</div></body></html>`
];
