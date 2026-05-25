/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'zh' ? '核心業務' : 'Solutions', href: '#solutions' },
    { label: lang === 'zh' ? '算力終端' : 'AI Terminal', href: '#terminal' },
    { label: lang === 'zh' ? '技術架構' : 'Technology', href: '#tech' },
    { label: lang === 'zh' ? '香港優勢' : 'HK HQ', href: '#hk-advantage' },
    { label: lang === 'zh' ? '聯絡我們' : 'Contact Us', href: '#contact' },
  ];

  return (
    <nav
      id="site-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#03050f]/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center space-x-2 group" id="logo-anchor">
          <div className="text-2xl font-extrabold tracking-tighter text-white flex items-center">
            <span className="brand-logo-main">TAUVA</span>
            <span className="text-zinc-500 text-xs font-normal ml-1.5 hidden sm:inline-block tracking-widest font-sans border-l border-white/10 pl-1.5">無界雲彗</span>
            <span className="text-brand-green animate-pulse ml-0.5">_</span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-[#76b900]/80 h-fit bg-[#76b900]/10 px-1.5 py-0.5 rounded ml-2 border border-[#76b900]/20 uppercase">
            AI & FIN
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-brand-green transition-colors duration-200 py-2 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/10"></div>

          {/* LANGUAGE SELECTOR */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center space-x-1.5 text-xs font-semibold text-zinc-300 hover:text-brand-green transition-all"
            id="lang-toggle-desktop"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? 'ENGLISH' : '繁體中文'}</span>
          </button>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="flex items-center space-x-1 px-4 py-2 bg-brand-green text-brand-dark font-extrabold text-xs uppercase hover:bg-[#86d200] transition-colors duration-200"
            id="cta-contact-desktop"
          >
            <span>{lang === 'zh' ? '建立諮詢' : 'ENQUIRE'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="p-2 text-zinc-400 hover:text-white"
            id="mobile-lang-toggle"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 z-40 transition-all">
          <ul className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-brand-green transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 bg-brand-green text-brand-dark font-extrabold text-xs uppercase hover:bg-[#86d200] transition-colors duration-200"
          >
            {lang === 'zh' ? '建立諮詢' : 'ENQUIRE NOW'}
          </a>
        </div>
      )}
    </nav>
  );
}
