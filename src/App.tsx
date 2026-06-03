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
    <div className="bg-[#000000] text-[#1a1a1a] min-h-screen font-sans selection:bg-nv-primary selection:text-black relative overflow-x-hidden">
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Central Header Navigation */}
        <Header lang={lang} setLang={setLang} />

        {/* Main Structural Modules */}
        <main className="flex-1">
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

