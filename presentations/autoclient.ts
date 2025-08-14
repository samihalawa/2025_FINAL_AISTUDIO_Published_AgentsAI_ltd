import { COMMON_HEAD } from './common';

// --- English PRESENTATION 2: AutoClient.ai (Sales AI) ---
export const AUTOCLIENT_SLIDES_EN = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg><span>AutoClient.ai</span></div>
    <h1>The Autonomous AI Platform for High-Value Lead Generation & Outreach</h1>
    <p class="tagline">Describe your ideal customer. Our AI finds them and starts the conversation.</p>
    <div class="meta"><span>Sami Halawa, Founder & CEO</span><span>Pre-Seed Investor Deck | Jan 2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">02 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">The Growth Paradox: More Tools, Less Connection</h2>
        <p class="slide-subtitle">Modern growth teams are drowning in manual processes, generic outreach tools, and fragmented data. Finding and connecting with high-value prospects has become a full-time job in itself.</p>
        <div class="card-grid" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a9.043 9.043 0 00-1.82-.326l-.37-.556A1.875 1.875 0 006.1 2.25H4.875a1.875 1.875 0 00-1.875 1.875v1.25c0 .54.228 1.04.608 1.386l.569.522a9.043 9.043 0 00-.326 1.82l-.55.09a1.875 1.875 0 00-1.566 1.85v1.5a1.875 1.875 0 001.566 1.85l.55.09c.1.621.249 1.223.43 1.799l-.523.569a1.875 1.875 0 00-1.386.608v1.25c0 1.036.84 1.875 1.875 1.875h1.25c.75 0 1.41-.44 1.711-1.096l.37-.556c.608.1.121.248.182.326l.091.55c.15.903.934 1.566 1.85 1.566h2.344c.916 0 1.699-.663 1.85-1.567l.091-.549a9.043 9.043 0 001.82.326l.37.556A1.875 1.875 0 0017.9 21.75h1.25a1.875 1.875 0 001.875-1.875v-1.25c0-.54-.228-1.04-.608-1.386l-.569-.522c.182-.576.33-1.178.43-1.799l.55-.09a1.875 1.875 0 001.566-1.85v-1.5a1.875 1.875 0 00-1.566-1.85l-.55-.09a9.043 9.043 0 00-.43-1.799l.523-.569A1.875 1.875 0 0022.125 6h-1.25a1.875 1.875 0 00-1.711-1.096l-.37-.556a9.043 9.043 0 00-1.82-.326l-.091-.55C16.723 2.913 15.94 2.25 15.023 2.25H12.68zM12 15a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg></div><h3>Manual Prospecting is Broken</h3><p>Teams spend hundreds of hours on repetitive, low-impact tasks: sifting through databases, guessing emails, and writing generic messages that get ignored.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.75 9.75a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM21 12a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM18 15a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM12.75 4.5a.75.75 0 01-.75.75H8.25a.75.75 0 010-1.5h3.75a.75.75 0 01.75.75zM12 7.5a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h6.75a.75.75 0 01.75.75zM12.75 10.5a.75.75 0 01-.75.75H6a.75.75 0 010-1.5h6a.75.75 0 01.75.75zM3 19.5a3 3 0 013-3h12a3 3 0 013 3v.75a.75.75 0 01-1.5 0V19.5a1.5 1.5 0 00-1.5-1.5H6a1.5 1.5 0 00-1.5 1.5v.75a.75.75 0 01-1.5 0v-.75z" /></svg></div><h3>"Personalization" at Scale is a Myth</h3><p>Shallow personalization from existing tools doesn't resonate. Decision-makers are flooded with templated emails, leading to fatigue and missed opportunities.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">03 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Your Autonomous Growth Engine</h2>
        <p class="slide-subtitle">AutoClient.ai is not just another tool; it's an autonomous system that replicates the workflow of an elite business development team.</p>
        <div class="card-grid" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 3.75a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 01.75-.75zM4.125 4.5c.621 0 1.125.504 1.125 1.125V6.75h1.125c.621 0 1.125.504 1.125 1.125V9h1.125c.621 0 1.125.504 1.125 1.125V12h1.5v1.125c0 .621.504 1.125 1.125 1.125H18a.75.75 0 010 1.5h-1.125a1.125 1.125 0 01-1.125-1.125V13.5h-1.5v-1.125a1.125 1.125 0 01-1.125-1.125H12V9.875a1.125 1.125 0 01-1.125-1.125H9.375V7.125A1.125 1.125 0 018.25 6H6.75V4.875A1.125 1.125 0 015.625 3.75H4.5a.75.75 0 010-1.5h1.125c.621 0 1.125.504 1.125 1.125V3.75h1.125A.75.75 0 018.25 3H9.375a.75.75 0 01.75.75v1.125h1.125a.75.75 0 01.75.75V7.5h1.125a.75.75 0 01.75.75v1.125h1.5a.75.75 0 01.75.75v1.125c0 .621.504 1.125 1.125 1.125H21a.75.75 0 010 1.5h-1.125a1.125 1.125 0 01-1.125-1.125V15h-1.5v-1.125a1.125 1.125 0 01-1.125-1.125H15V11.25a1.125 1.125 0 01-1.125-1.125H12.375V8.625A1.125 1.125 0 0111.25 7.5H9.75V6.375A1.125 1.125 0 018.625 5.25H7.125V4.125A1.125 1.125 0 016 3H4.875a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg></div><h3>Deep, Agnostic Research</h3><p>Our AI agents go beyond keywords. They conduct deep, multi-vector research to understand your ideal customer profile and identify high-value opportunities in any domain.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.522 2.622a.75.75 0 00-1.044 0L8.803 5.42a.75.75 0 00.522 1.298h1.905v3.425a.75.75 0 001.5 0V6.718h1.905a.75.75 0 00.522-1.298l-2.675-2.8zM12 12.25a.75.75 0 00-.75.75v3.425a.75.75 0 001.5 0V13a.75.75 0 00-.75-.75zM15.197 15.197a.75.75 0 011.06 0l2.8 2.803a.75.75 0 01-1.06 1.06l-2.803-2.8a.75.75 0 010-1.06zM8.803 15.197a.75.75 0 00-1.06 0l-2.8 2.803a.75.75 0 101.06 1.06l2.803-2.8a.75.75 0 000-1.06zM6.718 8.803a.75.75 0 00-1.298-.522l-2.8 2.675a.75.75 0 000 1.044l2.8 2.675a.75.75 0 101.044-1.566L5.334 12l2.428-2.399a.75.75 0 00-.522-1.298zM17.282 8.803a.75.75 0 00.522-.522l2.675-2.8a.75.75 0 00-1.044-1.044l-2.675 2.8a.75.75 0 00.522 1.298h.001zM18.666 12l-2.428-2.399a.75.75 0 00-1.044 1.566L16.621 12l-1.427 1.22a.75.75 0 101.044 1.566l2.8-2.675a.75.75 0 000-1.044z" clip-rule="evenodd" /></svg></div><h3>Hyper-Personalized Outreach</h3><p>The system generates genuinely bespoke outreach based on its research, creating a compelling reason for the prospect to engage. It's personalization that can't be faked.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Moat -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">04 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">A Three-Pillar Defensive Moat</h2>
        <p class="slide-subtitle">Our competitive advantage is architectural—three strategic pillars reinforce each other to form an integrated, defensive moat.</p>
        <div class="moat-diagram">
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 1.72a.75.75 0 011.06 0l3 3A.75.75 0 0115 5.25v2.75a.75.75 0 01-1.5 0V6.31L12 7.81l-1.5-1.5V5.25a.75.75 0 01.47-1.53l3-3z" /><path d="M12 10.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75.75z" /><path d="M5.053 7.832a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l2.25-2.25a.75.75 0 011.06 0zm13.894 0a.75.75 0 011.06 0l2.25 2.25a.75.75 0 01-1.06 1.06l-2.25-2.25a.75.75 0 010-1.06z" /><path fill-rule="evenodd" d="M3 19.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM8.25 15a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg></div><h4>Superior Technical Architecture</h4><p>A complex orchestration of autonomous AI agents, built from the ground up. Simulates the reasoning of an elite business analyst and cannot be replicated with off-the-shelf APIs.</p></div>
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.25 7.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM8.25 10.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" /><path d="M3 3.75A2.25 2.25 0 015.25 1.5h13.5A2.25 2.25 0 0121 3.75v16.5A2.25 2.25 0 0118.75 22.5H5.25A2.25 2.25 0 013 20.25V3.75zM5.25 3a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H5.25z" clip-rule="evenodd" /></svg></div><h4>Founder-Product Fit</h4><p>Eliminates the primary cost of an AI startup - an elite engineering team. The founder's unique background provides huge gross margins and infinite financial resilience.</p></div>
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69L15.97 3.53a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clip-rule="evenodd" /></svg></div><h4>Organic Acquisition Flywheel</h4><p>A generous free tier creates a virtuous cycle: immense value → thousands of users providing feedback → higher conversion rates → viral growth.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. UI Mockup 1 -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">05 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Define Target & Discover Leads</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AutoClient.ai | Campaign: European FinTech</p></div>
            <div class="mockup-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem); font-size: clamp(0.7rem, 1vw, 0.9rem);">
                <div class="glass-card" style="display:flex; flex-direction:column; justify-content: space-between;">
                    <h3 style="font-size: 1.5em; font-weight: 700;">1. Define Your Ideal Client</h3>
                    <div>
                        <label style="display: block; font-weight: 600; font-size: 0.9em; margin-bottom: 0.5em;">Enter your criteria:</label>
                        <div class="p-3" style="background: hsl(var(--background)); border-radius: 0.5rem; border: 1px solid hsl(var(--border));">
                            Find me <span class="highlight">CTOs</span> in <span class="highlight">FinTech</span> companies in <span class="highlight">Europe</span> with recent funding...
                        </div>
                    </div>
                    <button style="width:100%; padding: 0.8em; display: flex; align-items: center; justify-content: center; gap: 0.5em;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        Start Discovery
                    </button>
                </div>
                <div class="glass-card">
                    <h3 style="font-size: 1.5em; font-weight: 700;">2. AI-Discovered Leads</h3>
                     <div style="margin-top: 1vw; display:flex; flex-direction:column; gap: 1vw;">
                        <div style="display: flex; align-items: center; gap: 1em; padding: 1em; background: hsl(var(--card)); border: 2px solid hsl(var(--primary)); border-radius: 0.75rem; box-shadow: 0 4px 10px hsla(var(--primary), 0.1);">
                            <div><div style="font-weight: 600;">Maria Schmidt</div><div style="font-size: 0.9em;">CTO @ FinFlow</div></div>
                            <div style="margin-left: auto; font-size: 1.1em; font-weight: 700;" class="highlight">95%</div>
                        </div>
                        <div class="skeleton h-12 rounded-lg"></div>
                        <div class="skeleton h-12 rounded-lg" style="width: 90%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. UI Mockup 2 -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">06 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Enrich Data & AI Outreach</h2>
         <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AutoClient.ai | Lead: Maria Schmidt</p></div>
            <div class="mockup-content" style="font-size: 1vw;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 1em; margin-bottom: 1.5vw;">
                    <div>
                        <h3 style="font-size: 1.6em; font-weight: 700;">Maria Schmidt</h3>
                        <p style="font-size: 1.1em;">CTO @ FinFlow</p>
                    </div>
                    <div class="tag" style="font-size: 1.2em;">95% Match</div>
                </div>
                <div class="glass-card" style="height: calc(100% - 70px); display:flex; flex-direction:column;">
                    <h4 style="font-weight: 700; font-size: 1.1em; margin-bottom: 1rem;">AI-Generated Outreach Draft</h4>
                    <div style="background: hsl(var(--background)); border-radius: 0.5rem; padding: 1rem; flex-grow:1; border: 1px solid hsl(var(--border));">
                        <p><strong>Subject:</strong> Re: Your article on Scaling FinTech Infrastructure</p>
                        <div class="h-px my-3" style="background: hsl(var(--border));"></div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <div class="skeleton h-3"></div>
                            <div class="skeleton h-3" style="width: 90%;"></div>
                            <br>
                            <div class="skeleton h-3" style="width: 95%;"></div>
                            <div class="skeleton h-3" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem;">
                        <button style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); padding: 0.5em 1em; border-radius: 0.5rem; font-weight: 600;">Edit</button>
                        <button style="padding: 0.5em 1em;">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Case Study -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">07 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Real Results: Software Consultancy Case Study</h2>
        <p class="slide-subtitle">Response rate improvement from 2% to 25% when targeting FinTech CTOs.</p>
        <div class="case-study-grid">
            <div class="case-study-before card" style="border-style: dashed;">
                <h3 style="font-size: 1.8vw;">❌ Before AutoClient</h3>
                <p style="font-size: 1.4vw;">Hundreds of hours spent on Linkedin Sales Navigator. Generic messages ignored by a high-end audience.</p>
                <div class="response-rate"><span class="rate" style="color: hsl(var(--muted-foreground));">&lt;2%</span><span style="color: hsl(var(--muted-foreground));">Response Rate</span></div>
            </div>
            <div class="case-study-after card glowing-border">
                <h3 style="font-size: 1.8vw;">✅ After AutoClient</h3>
                <p style="font-size: 1.4vw;">Sent 150 hyper-contextual messages to FinTech CTOs, referencing specific technical challenges from their blog posts.</p>
                <div class="response-rate response-rate-after"><span class="rate">25%</span><span class="highlight">Response Rate</span></div>
            </div>
        </div>
        <p style="text-align: center; margin-top: 3vw; font-weight: 600; font-size: 1.6vw;">Impact: 18 C-level meetings, 3 pilot contracts</p>
    </div>
</div></body></html>`,
`<!-- 8. Market -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">08 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">€150 Billion Global Sales Tech Market</h2>
        <p class="slide-subtitle" style="margin-left: auto; margin-right: auto; margin-bottom: 2.5vw;">Any professional, team, or company that relies on high-value relationships faces the same fundamental challenge.</p>
        <div class="market-circles">
            <div class="circle"><span class="circle-label">TAM: Sales Tech</span><span class="circle-value">€150B</span></div>
            <div class="circle"><span class="circle-label">SAM: B2B Prospecting</span><span class="circle-value">€15B</span></div>
            <div class="circle"><span class="circle-label">SOM (5 Years)</span><span class="circle-value highlight">€500M</span></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. Ask -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">09 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Pre-Seed Investment Opportunity</h2>
        <p class="slide-subtitle">Seeking strategic partners to accelerate development and market entry.</p>
        <div class="funding-grid">
            <div class="funding-use card"><h3>Use of Funds</h3>
                <div class="funding-item" style="margin-bottom: 1rem;"><span>Key Hires</span><span style="float:right; font-weight: 600;">50%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 50%;"></div></div></div>
                <div class="funding-item" style="margin-bottom: 1rem;"><span>Marketing & Growth</span><span style="float:right; font-weight: 600;">30%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 30%;"></div></div></div>
                <div class="funding-item"><span>Infrastructure & Scaling</span><span style="float:right; font-weight: 600;">20%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 20%;"></div></div></div>
            </div>
            <div class="funding-milestones card"><h3>Investment Goals</h3>
                <table style="width: 100%; text-align: left; font-size: 1.2vw; border-collapse: collapse;">
                    <tbody>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">Stage:</td><td style="padding: 0.8vw 0; font-weight: 600;">Pre-Seed</td></tr>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">Timeline:</td><td style="padding: 0.8vw 0; font-weight: 600;">18-24 months to product launch</td></tr>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">Focus:</td><td style="padding: 0.8vw 0; font-weight: 600;">Smart money partners</td></tr>
                    <tr><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground)); vertical-align: top;">Strategic Value:</td><td style="padding: 0.8vw 0; font-weight: 600;">Industry expertise, network access, and guidance on US/EU market entry</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 10. CTA -->
<!DOCTYPE html><html lang="en"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <h2 class="cta-title">Build Sales Automation 2.0 With Us</h2>
        <p class="cta-text">Turn prospecting from manual labor to strategic intelligence • Proven technology • Massive market opportunity</p>
        <div style="display: flex; align-items: center; gap: 3vw;">
          <div class="cta-button cta-contact">Schedule an Investor Call</div>
          <div style="width: 8vw; height: 8vw; border-radius: 1vw; background: hsl(var(--card)); padding: 0.5vw; border: 1px solid hsl(var(--border));" role="img" aria-label="QR code for email">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H35V35H0V0ZM10 10V25H25V10H10Z" fill="hsl(var(--foreground))"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M65 0H100V35H65V0ZM75 10V25H90V10H75Z" fill="hsl(var(--foreground))"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 65H35V100H0V65ZM10 75V90H25V75H10Z" fill="hsl(var(--foreground))"/>
                  <path d="M45 10H55V20H45V10Z" fill="hsl(var(--foreground))"/><path d="M45 45H55V55H45V45Z" fill="hsl(var(--foreground))"/><path d="M70 45H80V55H70V45Z" fill="hsl(var(--foreground))"/><path d="M85 60H95V70H85V60Z" fill="hsl(var(--foreground))"/><path d="M45 80H55V90H45V80Z" fill="hsl(var(--foreground))"/><path d="M60 75H70V85H60V75Z" fill="hsl(var(--foreground))"/><path d="M75 90H85V100H75V90Z" fill="hsl(var(--foreground))"/><path d="M45 25H55V35H45V25Z" fill="hsl(var(--foreground))"/><path d="M60 35H70V45H60V35Z" fill="hsl(var(--foreground))"/><path d="M75 50H85V60H75V50Z" fill="hsl(var(--foreground))"/><path d="M90 40H100V50H90V40Z" fill="hsl(var(--foreground))"/><path d="M55 65H65V75H55V65Z" fill="hsl(var(--foreground))"/>
              </svg>
          </div>
        </div>
        <p style="margin-top: 3.5vw; font-size: 1.25vw; opacity: 0.8;">Sami Halawa | Founder & CEO<br>sami@autoclient.ai | +34 679 794 037</p>
    </div>
</div></body></html>`
];

// --- Spanish PRESENTATION 2: AutoClient.ai (IA de Ventas) ---
export const AUTOCLIENT_SLIDES_ES = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg><span>AutoClient.ai</span></div>
    <h1>La Plataforma de IA Autónoma para Generación y Contacto de Leads de Alto Valor</h1>
    <p class="tagline">Describa a su cliente ideal. Nuestra IA los encuentra e inicia la conversación.</p>
    <div class="meta"><span>Sami Halawa, Fundador y CEO</span><span>Presentación para Inversores Pre-Semilla | Ene 2025</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">02 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">La Paradoja del Crecimiento: Más Herramientas, Menos Conexión</h2>
        <p class="slide-subtitle">Los equipos de crecimiento modernos se ahogan en procesos manuales, herramientas de contacto genéricas y datos fragmentados. Encontrar y conectar con prospectos de alto valor se ha convertido en un trabajo a tiempo completo.</p>
        <div class="card-grid" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a9.043 9.043 0 00-1.82-.326l-.37-.556A1.875 1.875 0 006.1 2.25H4.875a1.875 1.875 0 00-1.875 1.875v1.25c0 .54.228 1.04.608 1.386l.569.522a9.043 9.043 0 00-.326 1.82l-.55.09a1.875 1.875 0 00-1.566 1.85v1.5a1.875 1.875 0 001.566 1.85l.55.09c.1.621.249 1.223.43 1.799l-.523.569a1.875 1.875 0 00-1.386.608v1.25c0 1.036.84 1.875 1.875 1.875h1.25c.75 0 1.41-.44 1.711-1.096l.37-.556c.608.1.121.248.182.326l.091.55c.15.903.934 1.566 1.85 1.566h2.344c.916 0 1.699-.663 1.85-1.567l.091-.549a9.043 9.043 0 001.82.326l.37.556A1.875 1.875 0 0017.9 21.75h1.25a1.875 1.875 0 001.875-1.875v-1.25c0-.54-.228-1.04-.608-1.386l-.569-.522c.182-.576.33-1.178.43-1.799l.55-.09a1.875 1.875 0 001.566-1.85v-1.5a1.875 1.875 0 00-1.566-1.85l-.55-.09a9.043 9.043 0 00-.43-1.799l.523-.569A1.875 1.875 0 0022.125 6h-1.25a1.875 1.875 0 00-1.711-1.096l-.37-.556a9.043 9.043 0 00-1.82-.326l-.091-.55C16.723 2.913 15.94 2.25 15.023 2.25H12.68zM12 15a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg></div><h3>La Prospección Manual Está Rota</h3><p>Los equipos invierten cientos de horas en tareas repetitivas y de bajo impacto: buscar en bases de datos, adivinar correos electrónicos y escribir mensajes genéricos que son ignorados.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.75 9.75a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM21 12a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM18 15a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM12.75 4.5a.75.75 0 01-.75.75H8.25a.75.75 0 010-1.5h3.75a.75.75 0 01.75.75zM12 7.5a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h6.75a.75.75 0 01.75.75zM12.75 10.5a.75.75 0 01-.75.75H6a.75.75 0 010-1.5h6a.75.75 0 01.75.75zM3 19.5a3 3 0 013-3h12a3 3 0 013 3v.75a.75.75 0 01-1.5 0V19.5a1.5 1.5 0 00-1.5-1.5H6a1.5 1.5 0 00-1.5 1.5v.75a.75.75 0 01-1.5 0v-.75z" /></svg></div><h3>La "Personalización" a Escala es un Mito</h3><p>La personalización superficial de las herramientas existentes no conecta. Los responsables de la toma de decisiones están inundados de correos electrónicos con plantillas, lo que genera fatiga y oportunidades perdidas.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">03 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Su Motor de Crecimiento Autónomo</h2>
        <p class="slide-subtitle">AutoClient.ai no es solo otra herramienta; es un sistema autónomo que replica el flujo de trabajo de un equipo de desarrollo de negocio de élite.</p>
        <div class="card-grid" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 3.75a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 01.75-.75zM4.125 4.5c.621 0 1.125.504 1.125 1.125V6.75h1.125c.621 0 1.125.504 1.125 1.125V9h1.125c.621 0 1.125.504 1.125 1.125V12h1.5v1.125c0 .621.504 1.125 1.125 1.125H18a.75.75 0 010 1.5h-1.125a1.125 1.125 0 01-1.125-1.125V13.5h-1.5v-1.125a1.125 1.125 0 01-1.125-1.125H12V9.875a1.125 1.125 0 01-1.125-1.125H9.375V7.125A1.125 1.125 0 018.25 6H6.75V4.875A1.125 1.125 0 015.625 3.75H4.5a.75.75 0 010-1.5h1.125c.621 0 1.125.504 1.125 1.125V3.75h1.125A.75.75 0 018.25 3H9.375a.75.75 0 01.75.75v1.125h1.125a.75.75 0 01.75.75V7.5h1.125a.75.75 0 01.75.75v1.125h1.5a.75.75 0 01.75.75v1.125c0 .621.504 1.125 1.125 1.125H21a.75.75 0 010 1.5h-1.125a1.125 1.125 0 01-1.125-1.125V15h-1.5v-1.125a1.125 1.125 0 01-1.125-1.125H15V11.25a1.125 1.125 0 01-1.125-1.125H12.375V8.625A1.125 1.125 0 0111.25 7.5H9.75V6.375A1.125 1.125 0 018.625 5.25H7.125V4.125A1.125 1.125 0 016 3H4.875a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg></div><h3>Investigación Profunda y Agnóstica</h3><p>Nuestros agentes de IA van más allá de las palabras clave. Realizan una investigación profunda y multivectorial para entender su perfil de cliente ideal e identificar oportunidades de alto valor en cualquier dominio.</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.522 2.622a.75.75 0 00-1.044 0L8.803 5.42a.75.75 0 00.522 1.298h1.905v3.425a.75.75 0 001.5 0V6.718h1.905a.75.75 0 00.522-1.298l-2.675-2.8zM12 12.25a.75.75 0 00-.75.75v3.425a.75.75 0 001.5 0V13a.75.75 0 00-.75-.75zM15.197 15.197a.75.75 0 011.06 0l2.8 2.803a.75.75 0 01-1.06 1.06l-2.803-2.8a.75.75 0 010-1.06zM8.803 15.197a.75.75 0 00-1.06 0l-2.8 2.803a.75.75 0 101.06 1.06l2.803-2.8a.75.75 0 000-1.06zM6.718 8.803a.75.75 0 00-1.298-.522l-2.8 2.675a.75.75 0 000 1.044l2.8 2.675a.75.75 0 101.044-1.566L5.334 12l2.428-2.399a.75.75 0 00-.522-1.298zM17.282 8.803a.75.75 0 00.522-.522l2.675-2.8a.75.75 0 00-1.044-1.044l-2.675 2.8a.75.75 0 00.522 1.298h.001zM18.666 12l-2.428-2.399a.75.75 0 00-1.044 1.566L16.621 12l-1.427 1.22a.75.75 0 101.044 1.566l2.8-2.675a.75.75 0 000-1.044z" clip-rule="evenodd" /></svg></div><h3>Contacto Hiperpersonalizado</h3><p>El sistema genera un contacto verdaderamente personalizado basado en su investigación, creando una razón convincente para que el prospecto interactúe. Es una personalización que no se puede falsificar.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Moat -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">04 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Un Foso Defensivo de Tres Pilares</h2>
        <p class="slide-subtitle">Nuestra ventaja competitiva es arquitectónica: tres pilares estratégicos se refuerzan mutuamente para formar un foso defensivo integrado.</p>
        <div class="moat-diagram">
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 1.72a.75.75 0 011.06 0l3 3A.75.75 0 0115 5.25v2.75a.75.75 0 01-1.5 0V6.31L12 7.81l-1.5-1.5V5.25a.75.75 0 01.47-1.53l3-3z" /><path d="M12 10.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75.75z" /><path d="M5.053 7.832a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l2.25-2.25a.75.75 0 011.06 0zm13.894 0a.75.75 0 011.06 0l2.25 2.25a.75.75 0 01-1.06 1.06l-2.25-2.25a.75.75 0 010-1.06z" /><path fill-rule="evenodd" d="M3 19.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM8.25 15a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg></div><h4>Arquitectura Técnica Superior</h4><p>Una compleja orquestación de agentes de IA autónomos, construida desde cero. Simula el razonamiento de un analista de negocios de élite y no puede ser replicado con APIs listas para usar.</p></div>
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.25 7.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM8.25 10.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" /><path d="M3 3.75A2.25 2.25 0 015.25 1.5h13.5A2.25 2.25 0 0121 3.75v16.5A2.25 2.25 0 0118.75 22.5H5.25A2.25 2.25 0 013 20.25V3.75zM5.25 3a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H5.25z" clip-rule="evenodd" /></svg></div><h4>Ajuste Fundador-Producto</h4><p>Elimina el costo principal de una startup de IA: un equipo de ingeniería de élite. La experiencia única del fundador proporciona enormes márgenes brutos y una infinita resiliencia financiera.</p></div>
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69L15.97 3.53a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clip-rule="evenodd" /></svg></div><h4>Volante de Adquisición Orgánica</h4><p>Un generoso plan gratuito crea un ciclo virtuoso: valor inmenso → miles de usuarios que proporcionan retroalimentación → tasas de conversión más altas → crecimiento viral.</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. UI Mockup 1 -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">05 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Definir Objetivo y Descubrir Leads</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AutoClient.ai | Campaña: FinTech Europea</p></div>
            <div class="mockup-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem); font-size: clamp(0.7rem, 1vw, 0.9rem);">
                <div class="glass-card" style="display:flex; flex-direction:column; justify-content: space-between;">
                    <h3 style="font-size: 1.5em; font-weight: 700;">1. Defina su Cliente Ideal</h3>
                    <div>
                        <label style="display: block; font-weight: 600; font-size: 0.9em; margin-bottom: 0.5em;">Introduzca sus criterios:</label>
                        <div class="p-3" style="background: hsl(var(--background)); border-radius: 0.5rem; border: 1px solid hsl(var(--border));">
                            Encuéntrame <span class="highlight">CTOs</span> en empresas <span class="highlight">FinTech</span> en <span class="highlight">Europa</span> con financiación reciente...
                        </div>
                    </div>
                    <button style="width:100%; padding: 0.8em; display: flex; align-items: center; justify-content: center; gap: 0.5em;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        Iniciar Descubrimiento
                    </button>
                </div>
                <div class="glass-card">
                    <h3 style="font-size: 1.5em; font-weight: 700;">2. Leads Descubiertos por IA</h3>
                     <div style="margin-top: 1vw; display:flex; flex-direction:column; gap: 1vw;">
                        <div style="display: flex; align-items: center; gap: 1em; padding: 1em; background: hsl(var(--card)); border: 2px solid hsl(var(--primary)); border-radius: 0.75rem; box-shadow: 0 4px 10px hsla(var(--primary), 0.1);">
                            <div><div style="font-weight: 600;">Maria Schmidt</div><div style="font-size: 0.9em;">CTO @ FinFlow</div></div>
                            <div style="margin-left: auto; font-size: 1.1em; font-weight: 700;" class="highlight">95%</div>
                        </div>
                        <div class="skeleton h-12 rounded-lg"></div>
                        <div class="skeleton h-12 rounded-lg" style="width: 90%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. UI Mockup 2 -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">06 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">Enriquecer Datos y Contacto IA</h2>
         <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AutoClient.ai | Lead: Maria Schmidt</p></div>
            <div class="mockup-content" style="font-size: 1vw;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 1em; margin-bottom: 1.5vw;">
                    <div>
                        <h3 style="font-size: 1.6em; font-weight: 700;">Maria Schmidt</h3>
                        <p style="font-size: 1.1em;">CTO @ FinFlow</p>
                    </div>
                    <div class="tag" style="font-size: 1.2em;">95% Coincidencia</div>
                </div>
                <div class="glass-card" style="height: calc(100% - 70px); display:flex; flex-direction:column;">
                    <h4 style="font-weight: 700; font-size: 1.1em; margin-bottom: 1rem;">Borrador de Contacto Generado por IA</h4>
                    <div style="background: hsl(var(--background)); border-radius: 0.5rem; padding: 1rem; flex-grow:1; border: 1px solid hsl(var(--border));">
                        <p><strong>Asunto:</strong> Re: Su artículo sobre Escalado de Infraestructura FinTech</p>
                        <div class="h-px my-3" style="background: hsl(var(--border));"></div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <div class="skeleton h-3"></div>
                            <div class="skeleton h-3" style="width: 90%;"></div>
                            <br>
                            <div class="skeleton h-3" style="width: 95%;"></div>
                            <div class="skeleton h-3" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem;">
                        <button style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); padding: 0.5em 1em; border-radius: 0.5rem; font-weight: 600;">Editar</button>
                        <button style="padding: 0.5em 1em;">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Case Study -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">07 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">Resultados Reales: Caso de Estudio de Consultora de Software</h2>
        <p class="slide-subtitle">Mejora de la tasa de respuesta del 2% al 25% al dirigirse a CTOs de FinTech.</p>
        <div class="case-study-grid">
            <div class="case-study-before card" style="border-style: dashed;">
                <h3 style="font-size: 1.8vw;">❌ Antes de AutoClient</h3>
                <p style="font-size: 1.4vw;">Cientos de horas invertidas en Linkedin Sales Navigator. Mensajes genéricos ignorados por una audiencia de alto nivel.</p>
                <div class="response-rate"><span class="rate" style="color: hsl(var(--muted-foreground));">&lt;2%</span><span style="color: hsl(var(--muted-foreground));">Tasa de Respuesta</span></div>
            </div>
            <div class="case-study-after card glowing-border">
                <h3 style="font-size: 1.8vw;">✅ Después de AutoClient</h3>
                <p style="font-size: 1.4vw;">Se enviaron 150 mensajes hipercontextuales a CTOs de FinTech, haciendo referencia a desafíos técnicos específicos de sus blogs.</p>
                <div class="response-rate response-rate-after"><span class="rate">25%</span><span class="highlight">Tasa de Respuesta</span></div>
            </div>
        </div>
        <p style="text-align: center; margin-top: 3vw; font-weight: 600; font-size: 1.6vw;">Impacto: 18 reuniones de alto nivel, 3 contratos piloto</p>
    </div>
</div></body></html>`,
`<!-- 8. Market -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">08 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">Mercado Global de Tecnología de Ventas de 150 Mil Millones de Euros</h2>
        <p class="slide-subtitle" style="margin-left: auto; margin-right: auto; margin-bottom: 2.5vw;">Cualquier profesional, equipo o empresa que dependa de relaciones de alto valor se enfrenta al mismo desafío fundamental.</p>
        <div class="market-circles">
            <div class="circle"><span class="circle-label">TAM: Tec. de Ventas</span><span class="circle-value">€150B</span></div>
            <div class="circle"><span class="circle-label">SAM: Prospección B2B</span><span class="circle-value">€15B</span></div>
            <div class="circle"><span class="circle-label">SOM (5 Años)</span><span class="circle-value highlight">€500M</span></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. Ask -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">09 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">Oportunidad de Inversión Pre-Semilla</h2>
        <p class="slide-subtitle">Buscando socios estratégicos para acelerar el desarrollo y la entrada al mercado.</p>
        <div class="funding-grid">
            <div class="funding-use card"><h3>Uso de los Fondos</h3>
                <div class="funding-item" style="margin-bottom: 1rem;"><span>Contrataciones Clave</span><span style="float:right; font-weight: 600;">50%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 50%;"></div></div></div>
                <div class="funding-item" style="margin-bottom: 1rem;"><span>Marketing y Crecimiento</span><span style="float:right; font-weight: 600;">30%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 30%;"></div></div></div>
                <div class="funding-item"><span>Infraestructura y Escalado</span><span style="float:right; font-weight: 600;">20%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 20%;"></div></div></div>
            </div>
            <div class="funding-milestones card"><h3>Metas de Inversión</h3>
                <table style="width: 100%; text-align: left; font-size: 1.2vw; border-collapse: collapse;">
                    <tbody>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">Etapa:</td><td style="padding: 0.8vw 0; font-weight: 600;">Pre-Semilla</td></tr>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">Cronología:</td><td style="padding: 0.8vw 0; font-weight: 600;">18-24 meses para el lanzamiento</td></tr>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">Enfoque:</td><td style="padding: 0.8vw 0; font-weight: 600;">Socios con "dinero inteligente"</td></tr>
                    <tr><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground)); vertical-align: top;">Valor Estratégico:</td><td style="padding: 0.8vw 0; font-weight: 600;">Experiencia en la industria, acceso a redes y guía para la entrada en los mercados de EE.UU./UE</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 10. CTA -->
<!DOCTYPE html><html lang="es"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <h2 class="cta-title">Construya la Automatización de Ventas 2.0 con Nosotros</h2>
        <p class="cta-text">Convierta la prospección de trabajo manual a inteligencia estratégica • Tecnología probada • Oportunidad de mercado masiva</p>
        <div style="display: flex; align-items: center; gap: 3vw;">
          <div class="cta-button cta-contact">Programar una Llamada con Inversores</div>
          <div style="width: 8vw; height: 8vw; border-radius: 1vw; background: hsl(var(--card)); padding: 0.5vw; border: 1px solid hsl(var(--border));" role="img" aria-label="Código QR para correo electrónico">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H35V35H0V0ZM10 10V25H25V10H10Z" fill="hsl(var(--foreground))"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M65 0H100V35H65V0ZM75 10V25H90V10H75Z" fill="hsl(var(--foreground))"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 65H35V100H0V65ZM10 75V90H25V75H10Z" fill="hsl(var(--foreground))"/>
                  <path d="M45 10H55V20H45V10Z" fill="hsl(var(--foreground))"/><path d="M45 45H55V55H45V45Z" fill="hsl(var(--foreground))"/><path d="M70 45H80V55H70V45Z" fill="hsl(var(--foreground))"/><path d="M85 60H95V70H85V60Z" fill="hsl(var(--foreground))"/><path d="M45 80H55V90H45V80Z" fill="hsl(var(--foreground))"/><path d="M60 75H70V85H60V75Z" fill="hsl(var(--foreground))"/><path d="M75 90H85V100H75V90Z" fill="hsl(var(--foreground))"/><path d="M45 25H55V35H45V25Z" fill="hsl(var(--foreground))"/><path d="M60 35H70V45H60V35Z" fill="hsl(var(--foreground))"/><path d="M75 50H85V60H75V50Z" fill="hsl(var(--foreground))"/><path d="M90 40H100V50H90V40Z" fill="hsl(var(--foreground))"/><path d="M55 65H65V75H55V65Z" fill="hsl(var(--foreground))"/>
              </svg>
          </div>
        </div>
        <p style="margin-top: 3.5vw; font-size: 1.25vw; opacity: 0.8;">Sami Halawa | Fundador y CEO<br>sami@autoclient.ai | +34 679 794 037</p>
    </div>
</div></body></html>`
];

// --- Chinese PRESENTATION 2: AutoClient.ai (销售AI) ---
export const AUTOCLIENT_SLIDES_ZH = [
`<!-- 1. Cover -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide slide-cover">
    <div class="logo-large"><svg class="logo-large-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg><span>AutoClient.ai</span></div>
    <h1>高价值销售线索生成与触达的自主AI平台</h1>
    <p class="tagline">描述您的理想客户。我们的AI会找到他们并发起对话。</p>
    <div class="meta"><span>Sami Halawa, 创始人兼CEO</span><span>种子前轮投资者演示文稿 | 2025年1月</span></div>
</div></body></html>`,
`<!-- 2. Problem -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">02 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">增长的悖论：工具越多，连接越少</h2>
        <p class="slide-subtitle">现代增长团队正淹没在手动流程、通用触达工具和碎片化数据中。寻找并与高价值潜在客户建立联系本身已成为一项全职工作。</p>
        <div class="card-grid" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a9.043 9.043 0 00-1.82-.326l-.37-.556A1.875 1.875 0 006.1 2.25H4.875a1.875 1.875 0 00-1.875 1.875v1.25c0 .54.228 1.04.608 1.386l.569.522a9.043 9.043 0 00-.326 1.82l-.55.09a1.875 1.875 0 00-1.566 1.85v1.5a1.875 1.875 0 001.566 1.85l.55.09c.1.621.249 1.223.43 1.799l-.523.569a1.875 1.875 0 00-1.386.608v1.25c0 1.036.84 1.875 1.875 1.875h1.25c.75 0 1.41-.44 1.711-1.096l.37-.556c.608.1.121.248.182.326l.091.55c.15.903.934 1.566 1.85 1.566h2.344c.916 0 1.699-.663 1.85-1.567l.091-.549a9.043 9.043 0 001.82.326l.37.556A1.875 1.875 0 0017.9 21.75h1.25a1.875 1.875 0 001.875-1.875v-1.25c0-.54-.228-1.04-.608-1.386l-.569-.522c.182-.576.33-1.178.43-1.799l.55-.09a1.875 1.875 0 001.566-1.85v-1.5a1.875 1.875 0 00-1.566-1.85l-.55-.09a9.043 9.043 0 00-.43-1.799l.523-.569A1.875 1.875 0 0022.125 6h-1.25a1.875 1.875 0 00-1.711-1.096l-.37-.556a9.043 9.043 0 00-1.82-.326l-.091-.55C16.723 2.913 15.94 2.25 15.023 2.25H12.68zM12 15a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg></div><h3>手动勘探已失效</h3><p>团队花费数百小时进行重复性、低影响的任务：筛选数据库、猜测电子邮件地址、撰写被忽略的通用信息。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.75 9.75a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM21 12a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM18 15a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zM12.75 4.5a.75.75 0 01-.75.75H8.25a.75.75 0 010-1.5h3.75a.75.75 0 01.75.75zM12 7.5a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h6.75a.75.75 0 01.75.75zM12.75 10.5a.75.75 0 01-.75.75H6a.75.75 0 010-1.5h6a.75.75 0 01.75.75zM3 19.5a3 3 0 013-3h12a3 3 0 013 3v.75a.75.75 0 01-1.5 0V19.5a1.5 1.5 0 00-1.5-1.5H6a1.5 1.5 0 00-1.5 1.5v.75a.75.75 0 01-1.5 0v-.75z" /></svg></div><h3>规模化“个性化”是一个神话</h3><p>现有工具的浅层个性化无法引起共鸣。决策者被模板化的电子邮件淹没，导致疲劳和机会错失。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 3. Solution -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">03 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">您的自主增长引擎</h2>
        <p class="slide-subtitle">AutoClient.ai不仅仅是另一个工具；它是一个能够复制顶尖业务拓展团队工作流程的自主系统。</p>
        <div class="card-grid" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 3.75a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 01.75-.75zM4.125 4.5c.621 0 1.125.504 1.125 1.125V6.75h1.125c.621 0 1.125.504 1.125 1.125V9h1.125c.621 0 1.125.504 1.125 1.125V12h1.5v1.125c0 .621.504 1.125 1.125 1.125H18a.75.75 0 010 1.5h-1.125a1.125 1.125 0 01-1.125-1.125V13.5h-1.5v-1.125a1.125 1.125 0 01-1.125-1.125H12V9.875a1.125 1.125 0 01-1.125-1.125H9.375V7.125A1.125 1.125 0 018.25 6H6.75V4.875A1.125 1.125 0 015.625 3.75H4.5a.75.75 0 010-1.5h1.125c.621 0 1.125.504 1.125 1.125V3.75h1.125A.75.75 0 018.25 3H9.375a.75.75 0 01.75.75v1.125h1.125a.75.75 0 01.75.75V7.5h1.125a.75.75 0 01.75.75v1.125h1.5a.75.75 0 01.75.75v1.125c0 .621.504 1.125 1.125 1.125H21a.75.75 0 010 1.5h-1.125a1.125 1.125 0 01-1.125-1.125V15h-1.5v-1.125a1.125 1.125 0 01-1.125-1.125H15V11.25a1.125 1.125 0 01-1.125-1.125H12.375V8.625A1.125 1.125 0 0111.25 7.5H9.75V6.375A1.125 1.125 0 018.625 5.25H7.125V4.125A1.125 1.125 0 016 3H4.875a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg></div><h3>深度、跨领域研究</h3><p>我们的AI智能体超越关键词。它们进行深度、多维度的研究，以理解您的理想客户画像，并在任何领域识别高价值机会。</p></div>
            <div class="card"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12.522 2.622a.75.75 0 00-1.044 0L8.803 5.42a.75.75 0 00.522 1.298h1.905v3.425a.75.75 0 001.5 0V6.718h1.905a.75.75 0 00.522-1.298l-2.675-2.8zM12 12.25a.75.75 0 00-.75.75v3.425a.75.75 0 001.5 0V13a.75.75 0 00-.75-.75zM15.197 15.197a.75.75 0 011.06 0l2.8 2.803a.75.75 0 01-1.06 1.06l-2.803-2.8a.75.75 0 010-1.06zM8.803 15.197a.75.75 0 00-1.06 0l-2.8 2.803a.75.75 0 101.06 1.06l2.803-2.8a.75.75 0 000-1.06zM6.718 8.803a.75.75 0 00-1.298-.522l-2.8 2.675a.75.75 0 000 1.044l2.8 2.675a.75.75 0 101.044-1.566L5.334 12l2.428-2.399a.75.75 0 00-.522-1.298zM17.282 8.803a.75.75 0 00.522-.522l2.675-2.8a.75.75 0 00-1.044-1.044l-2.675 2.8a.75.75 0 00.522 1.298h.001zM18.666 12l-2.428-2.399a.75.75 0 00-1.044 1.566L16.621 12l-1.427 1.22a.75.75 0 101.044 1.566l2.8-2.675a.75.75 0 000-1.044z" clip-rule="evenodd" /></svg></div><h3>超个性化触达</h3><p>系统根据其研究生成真正定制化的触达信息，为潜在客户创造一个引人入胜的互动理由。这是无法伪造的个性化。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 4. Moat -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">04 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">三位一体的防御护城河</h2>
        <p class="slide-subtitle">我们的竞争优势是架构性的——三大战略支柱相互加强，形成一个整合的、防御性的护城河。</p>
        <div class="moat-diagram">
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 1.72a.75.75 0 011.06 0l3 3A.75.75 0 0115 5.25v2.75a.75.75 0 01-1.5 0V6.31L12 7.81l-1.5-1.5V5.25a.75.75 0 01.47-1.53l3-3z" /><path d="M12 10.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75.75z" /><path d="M5.053 7.832a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l2.25-2.25a.75.75 0 011.06 0zm13.894 0a.75.75 0 011.06 0l2.25 2.25a.75.75 0 01-1.06 1.06l-2.25-2.25a.75.75 0 010-1.06z" /><path fill-rule="evenodd" d="M3 19.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM8.25 15a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg></div><h4>卓越的技术架构</h4><p>从头开始构建的复杂自主AI智能体编排。模拟顶尖业务分析师的推理过程，无法用现成的API复制。</p></div>
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8.25 7.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM8.25 10.5a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" /><path d="M3 3.75A2.25 2.25 0 015.25 1.5h13.5A2.25 2.25 0 0121 3.75v16.5A2.25 2.25 0 0118.75 22.5H5.25A2.25 2.25 0 013 20.25V3.75zM5.25 3a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75H5.25z" clip-rule="evenodd" /></svg></div><h4>创始人与产品的契合</h4><p>消除了AI初创公司的主要成本——顶尖的工程团队。创始人的独特背景提供了巨大的毛利率和无限的财务弹性。</p></div>
            <div class="moat-pillar"><div class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69L15.97 3.53a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clip-rule="evenodd" /></svg></div><h4>有机获客飞轮</h4><p>慷慨的免费套餐创造了一个良性循环：巨大的价值 → 成千上万的用户提供反馈 → 更高的转化率 → 病毒式增长。</p></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 5. UI Mockup 1 -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">05 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">定义目标与发现线索</h2>
        <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AutoClient.ai | 市场活动: 欧洲金融科技</p></div>
            <div class="mockup-content" style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 1.5vw, 1.5rem); font-size: clamp(0.7rem, 1vw, 0.9rem);">
                <div class="glass-card" style="display:flex; flex-direction:column; justify-content: space-between;">
                    <h3 style="font-size: 1.5em; font-weight: 700;">1. 定义您的理想客户</h3>
                    <div>
                        <label style="display: block; font-weight: 600; font-size: 0.9em; margin-bottom: 0.5em;">输入您的标准:</label>
                        <div class="p-3" style="background: hsl(var(--background)); border-radius: 0.5rem; border: 1px solid hsl(var(--border));">
                            为我找到<span class="highlight">欧洲</span><span class="highlight">金融科技</span>公司中最近获得融资的<span class="highlight">CTO</span>...
                        </div>
                    </div>
                    <button style="width:100%; padding: 0.8em; display: flex; align-items: center; justify-content: center; gap: 0.5em;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1.2em; height:1.2em;" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                        开始发现
                    </button>
                </div>
                <div class="glass-card">
                    <h3 style="font-size: 1.5em; font-weight: 700;">2. AI发现的线索</h3>
                     <div style="margin-top: 1vw; display:flex; flex-direction:column; gap: 1vw;">
                        <div style="display: flex; align-items: center; gap: 1em; padding: 1em; background: hsl(var(--card)); border: 2px solid hsl(var(--primary)); border-radius: 0.75rem; box-shadow: 0 4px 10px hsla(var(--primary), 0.1);">
                            <div><div style="font-weight: 600;">Maria Schmidt</div><div style="font-size: 0.9em;">CTO @ FinFlow</div></div>
                            <div style="margin-left: auto; font-size: 1.1em; font-weight: 700;" class="highlight">95%</div>
                        </div>
                        <div class="skeleton h-12 rounded-lg"></div>
                        <div class="skeleton h-12 rounded-lg" style="width: 90%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 6. UI Mockup 2 -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">06 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title" style="font-size: clamp(1.8rem, 3.5vw, 3rem); margin-bottom: 2vw;">丰富数据与AI触达</h2>
         <div class="premium-mockup" style="height: 85%;">
            <div class="mockup-titlebar"><div class="mockup-dots-premium"><span></span><span></span><span></span></div><p>AutoClient.ai | 线索: Maria Schmidt</p></div>
            <div class="mockup-content" style="font-size: 1vw;">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 1em; margin-bottom: 1.5vw;">
                    <div>
                        <h3 style="font-size: 1.6em; font-weight: 700;">Maria Schmidt</h3>
                        <p style="font-size: 1.1em;">CTO @ FinFlow</p>
                    </div>
                    <div class="tag" style="font-size: 1.2em;">95% 匹配度</div>
                </div>
                <div class="glass-card" style="height: calc(100% - 70px); display:flex; flex-direction:column;">
                    <h4 style="font-weight: 700; font-size: 1.1em; margin-bottom: 1rem;">AI生成的触达草稿</h4>
                    <div style="background: hsl(var(--background)); border-radius: 0.5rem; padding: 1rem; flex-grow:1; border: 1px solid hsl(var(--border));">
                        <p><strong>主题:</strong> 关于您关于扩展金融科技基础设施的文章</p>
                        <div class="h-px my-3" style="background: hsl(var(--border));"></div>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <div class="skeleton h-3"></div>
                            <div class="skeleton h-3" style="width: 90%;"></div>
                            <br>
                            <div class="skeleton h-3" style="width: 95%;"></div>
                            <div class="skeleton h-3" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem;">
                        <button style="background: hsl(var(--card)); border: 1px solid hsl(var(--border)); padding: 0.5em 1em; border-radius: 0.5rem; font-weight: 600;">编辑</button>
                        <button style="padding: 0.5em 1em;">发送</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 7. Case Study -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">07 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: stretch;">
        <h2 class="slide-title">真实结果：软件咨询公司案例研究</h2>
        <p class="slide-subtitle">针对金融科技CTO的回复率从2%提高到25%。</p>
        <div class="case-study-grid">
            <div class="case-study-before card" style="border-style: dashed;">
                <h3 style="font-size: 1.8vw;">❌ 使用AutoClient之前</h3>
                <p style="font-size: 1.4vw;">在Linkedin Sales Navigator上花费数百小时。通用信息被高端受众忽略。</p>
                <div class="response-rate"><span class="rate" style="color: hsl(var(--muted-foreground));">&lt;2%</span><span style="color: hsl(var(--muted-foreground));">回复率</span></div>
            </div>
            <div class="case-study-after card glowing-border">
                <h3 style="font-size: 1.8vw;">✅ 使用AutoClient之后</h3>
                <p style="font-size: 1.4vw;">向金融科技CTO发送了150封超上下文相关的消息，引用了他们博客文章中的具体技术挑战。</p>
                <div class="response-rate response-rate-after"><span class="rate">25%</span><span class="highlight">回复率</span></div>
            </div>
        </div>
        <p style="text-align: center; margin-top: 3vw; font-weight: 600; font-size: 1.6vw;">影响：18次C级会议，3个试点合同</p>
    </div>
</div></body></html>`,
`<!-- 8. Market -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">08 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h2 class="slide-title">1500亿欧元的全球销售技术市场</h2>
        <p class="slide-subtitle" style="margin-left: auto; margin-right: auto; margin-bottom: 2.5vw;">任何依赖高价值关系的专业人士、团队或公司都面临着同样根本的挑战。</p>
        <div class="market-circles">
            <div class="circle"><span class="circle-label">TAM: 销售技术</span><span class="circle-value">€150B</span></div>
            <div class="circle"><span class="circle-label">SAM: B2B勘探</span><span class="circle-value">€15B</span></div>
            <div class="circle"><span class="circle-label">SOM (5年)</span><span class="circle-value highlight">€500M</span></div>
        </div>
    </div>
</div></body></html>`,
`<!-- 9. Ask -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide">
    <div class="slide-header"><div class="logo"><svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z" fill="currentColor" fill-opacity=".2"/><path d="M11.9998 15.75a.75.75 0 01-.75-.75V9.31L7.72 11.84a.75.75 0 01-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.53-3.53V15a.75.75 0 01-.75.75z" fill="currentColor"/></svg>AutoClient.ai</div><div class="slide-number">09 / 10</div></div>
    <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
        <h2 class="slide-title">种子前轮投资机会</h2>
        <p class="slide-subtitle">寻求战略合作伙伴以加速开发和市场进入。</p>
        <div class="funding-grid">
            <div class="funding-use card"><h3>资金用途</h3>
                <div class="funding-item" style="margin-bottom: 1rem;"><span>关键招聘</span><span style="float:right; font-weight: 600;">50%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 50%;"></div></div></div>
                <div class="funding-item" style="margin-bottom: 1rem;"><span>市场与增长</span><span style="float:right; font-weight: 600;">30%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 30%;"></div></div></div>
                <div class="funding-item"><span>基础设施与扩展</span><span style="float:right; font-weight: 600;">20%</span><div class="progress-bar"><div class="progress-bar-fill" style="width: 20%;"></div></div></div>
            </div>
            <div class="funding-milestones card"><h3>投资目标</h3>
                <table style="width: 100%; text-align: left; font-size: 1.2vw; border-collapse: collapse;">
                    <tbody>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">阶段:</td><td style="padding: 0.8vw 0; font-weight: 600;">种子前轮</td></tr>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">时间线:</td><td style="padding: 0.8vw 0; font-weight: 600;">18-24个月产品发布</td></tr>
                    <tr style="border-bottom: 1px solid hsl(var(--border));"><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground));">重点:</td><td style="padding: 0.8vw 0; font-weight: 600;">智能资金合作伙伴</td></tr>
                    <tr><td style="padding: 0.8vw 0; color: hsl(var(--muted-foreground)); vertical-align: top;">战略价值:</td><td style="padding: 0.8vw 0; font-weight: 600;">行业专业知识、网络渠道和美国/欧盟市场进入指导</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div></body></html>`,
`<!-- 10. CTA -->
<!DOCTYPE html><html lang="zh"><head>${COMMON_HEAD}</head><body>
<div class="slide" style="padding: 0;">
    <div class="cta-box" style="height: 100%; border-radius: 0;">
        <h2 class="cta-title">与我们共建销售自动化2.0</h2>
        <p class="cta-text">将勘探从体力劳动转变为战略智能 • 经过验证的技术 • 巨大的市场机会</p>
        <div style="display: flex; align-items: center; gap: 3vw;">
          <div class="cta-button cta-contact">安排投资者电话会议</div>
          <div style="width: 8vw; height: 8vw; border-radius: 1vw; background: hsl(var(--card)); padding: 0.5vw; border: 1px solid hsl(var(--border));" role="img" aria-label="电子邮件二维码">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H35V35H0V0ZM10 10V25H25V10H10Z" fill="hsl(var(--foreground))"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M65 0H100V35H65V0ZM75 10V25H90V10H75Z" fill="hsl(var(--foreground))"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 65H35V100H0V65ZM10 75V90H25V75H10Z" fill="hsl(var(--foreground))"/>
                  <path d="M45 10H55V20H45V10Z" fill="hsl(var(--foreground))"/><path d="M45 45H55V55H45V45Z" fill="hsl(var(--foreground))"/><path d="M70 45H80V55H70V45Z" fill="hsl(var(--foreground))"/><path d="M85 60H95V70H85V60Z" fill="hsl(var(--foreground))"/><path d="M45 80H55V90H45V80Z" fill="hsl(var(--foreground))"/><path d="M60 75H70V85H60V75Z" fill="hsl(var(--foreground))"/><path d="M75 90H85V100H75V90Z" fill="hsl(var(--foreground))"/><path d="M45 25H55V35H45V25Z" fill="hsl(var(--foreground))"/><path d="M60 35H70V45H60V35Z" fill="hsl(var(--foreground))"/><path d="M75 50H85V60H75V50Z" fill="hsl(var(--foreground))"/><path d="M90 40H100V50H90V40Z" fill="hsl(var(--foreground))"/><path d="M55 65H65V75H55V65Z" fill="hsl(var(--foreground))"/>
              </svg>
          </div>
        </div>
        <p style="margin-top: 3.5vw; font-size: 1.25vw; opacity: 0.8;">Sami Halawa | 创始人兼CEO<br>sami@autoclient.ai | +34 679 794 037</p>
    </div>
</div></body></html>`
];
