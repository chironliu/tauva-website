/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import App from './App';
import CastdiceProduct from './components/CastdiceProduct';
import CastdicePrivacy from './pages/CastdicePrivacy';
import CastdiceTerms from './pages/CastdiceTerms';
import TauvaPrivacy from './pages/TauvaPrivacy';
import TauvaTerms from './pages/TauvaTerms';
import Header from './components/Header';

type Route = 'home' | 'castdice' | 'castdice-privacy' | 'castdice-terms' | 'tauva-privacy' | 'tauva-terms';

export default function AppWithRoutes() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [route, setRoute] = useState<Route>('home');
  const [showCastdice, setShowCastdice] = useState(false);

  // Handle hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#castdice' || hash === '#/castdice') {
        setRoute('castdice');
      } else if (hash === '#castdice/privacy' || hash === '#/castdice/privacy') {
        setRoute('castdice-privacy');
      } else if (hash === '#castdice/terms' || hash === '#/castdice/terms') {
        setRoute('castdice-terms');
      } else if (hash === '#privacy' || hash === '#/privacy') {
        setRoute('tauva-privacy');
      } else if (hash === '#terms' || hash === '#/terms') {
        setRoute('tauva-terms');
      } else {
        setRoute('home');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL when route changes (for navigation)
  useEffect(() => {
    if (route === 'home') {
      window.history.replaceState(null, '', window.location.pathname);
    } else if (route === 'castdice') {
      window.history.replaceState(null, '', '#castdice');
    } else if (route === 'castdice-privacy') {
      window.history.replaceState(null, '', '#castdice/privacy');
    } else if (route === 'castdice-terms') {
      window.history.replaceState(null, '', '#castdice/terms');
    } else if (route === 'tauva-privacy') {
      window.history.replaceState(null, '', '#privacy');
    } else if (route === 'tauva-terms') {
      window.history.replaceState(null, '', '#terms');
    }
  }, [route]);

  // Render based on route
  const renderContent = () => {
    switch (route) {
      case 'castdice':
        return (
          <div className="min-h-screen bg-[#fafafa]">
            <Header lang={lang} setLang={setLang} />
            <div className="max-w-7xl mx-auto pt-24">
              <CastdiceProduct lang={lang} />
            </div>
          </div>
        );
      case 'castdice-privacy':
        return (
          <div className="min-h-screen bg-[#fafafa]">
            <Header lang={lang} setLang={setLang} />
            <div className="pt-24">
              <CastdicePrivacy lang={lang} setLang={setLang} />
            </div>
          </div>
        );
      case 'castdice-terms':
        return (
          <div className="min-h-screen bg-[#fafafa]">
            <Header lang={lang} setLang={setLang} />
            <div className="pt-24">
              <CastdiceTerms lang={lang} setLang={setLang} />
            </div>
          </div>
        );
      case 'tauva-privacy':
        return (
          <div className="min-h-screen bg-[#000000]">
            <Header lang={lang} setLang={setLang} />
            <div className="pt-24">
              <TauvaPrivacy lang={lang} />
            </div>
          </div>
        );
      case 'tauva-terms':
        return (
          <div className="min-h-screen bg-[#000000]">
            <Header lang={lang} setLang={setLang} />
            <div className="pt-24">
              <TauvaTerms lang={lang} />
            </div>
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <App lang={lang} setLang={setLang} />
            {/* Add Castdice section to home page if needed in future */}
            {showCastdice && <CastdiceProduct lang={lang} />}
          </>
        );
    }
  };

  return (
    <div className="bg-[#000000] text-[#1a1a1a] min-h-screen font-sans selection:bg-nv-primary selection:text-black relative overflow-x-hidden">
      {renderContent()}
    </div>
  );
}