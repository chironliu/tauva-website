/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreSolutions from './components/CoreSolutions';
import InteractiveTerminal from './components/InteractiveTerminal';
import TechStack from './components/TechStack';
import HongKongAdvantage from './components/HongKongAdvantage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  return (
    <div className="bg-[#03050f] text-white min-h-screen font-sans selection:bg-brand-green selection:text-black relative overflow-x-hidden">
      {/* Dynamic Animated Ambient Orbs and Grids */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Atmospheric Glowing Orbs */}
        <div className="absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full nvidia-glow-blob-1 opacity-70" />
        <div className="absolute top-[35%] left-[-15%] w-[80vw] h-[80vw] md:w-[55vw] md:h-[55vw] rounded-full nvidia-glow-blob-2 opacity-60" />
        <div className="absolute bottom-[-10%] right-[10%] w-[75vw] h-[75vw] md:w-[50vw] md:h-[50vw] rounded-full nvidia-glow-blob-3 opacity-60" />
        
        {/* Interactive Deep Grid Overlay */}
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="relative z-10">
        {/* Central Header Navigation */}
        <Header lang={lang} setLang={setLang} />

        {/* Main Structural Modules */}
        <main>
        {/* Full Screen High Tech Hero */}
        <Hero lang={lang} />

        {/* Bento Grid Core Business Solutions */}
        <CoreSolutions lang={lang} />

        {/* Dynamic Sandbox AI Simulator Terminal */}
        <InteractiveTerminal lang={lang} />

        {/* Tech Stack Hardware Specifications */}
        <TechStack lang={lang} />

        {/* Hong Kong Tsim Sha Tsui Nodal Coordinates and Advantage */}
        <HongKongAdvantage lang={lang} />

        {/* Contact Us Form & Copyable E-mail */}
        <ContactSection lang={lang} />
      </main>

      {/* Corporate Legal & Compliance Footer */}
      <Footer lang={lang} />
      </div>
    </div>
  );
}
