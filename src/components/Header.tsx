/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ArrowUpRight, ChevronDown, Smartphone, Box } from 'lucide-react';

interface HeaderProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/95 backdrop-blur-md py-4 border-b border-nv-hairline-strong shadow-lg'
          : 'bg-[#000000]/50 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center space-x-2 group" id="logo-anchor">
          <div className="text-2xl font-extrabold tracking-tighter text-white flex items-center">
            <span className="text-white hover:text-nv-primary transition-colors">TAUVA</span>
            <span className="text-zinc-500 text-xs font-normal ml-1.5 hidden sm:inline-block tracking-widest font-sans border-l border-white/10 pl-1.5">無界雲彗</span>
            <span className="text-nv-primary animate-pulse ml-0.5">_</span>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-[#76b900] bg-[#76b900]/10 px-1.5 py-0.5 rounded-[2px] ml-2 border border-[#76b900]/20 uppercase hidden md:inline-block">
            AI & FIN
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            {/* Products Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center space-x-1 py-2 transition-colors duration-200 ${productsOpen ? 'text-nv-primary' : 'hover:text-nv-primary'}`}
              >
                <span>{lang === 'zh' ? '產品' : 'Products'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-[#0a0a0a] border border-nv-hairline-strong rounded-xl shadow-2xl p-2 transition-all duration-300 origin-top ${productsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-t border-l border-nv-hairline-strong rotate-45"></div>
                <div className="relative z-10 flex flex-col space-y-1">
                  <a href="#castdice" onClick={() => setProductsOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                    <div className="w-8 h-8 rounded-md bg-nv-primary/10 text-nv-primary flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">CastDice</div>
                      <div className="text-zinc-500 text-[10px] normal-case tracking-normal">{lang === 'zh' ? '信用卡消費決策' : 'Credit Card Assistant'}</div>
                    </div>
                  </a>
                  <a href="#pakrent" onClick={() => setProductsOpen(false)} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                    <div className="w-8 h-8 rounded-md bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">PakRent</div>
                      <div className="text-zinc-500 text-[10px] normal-case tracking-normal">{lang === 'zh' ? '智能租賃平台' : 'Smart Rental Platform'}</div>
                    </div>
                  </a>
                </div>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-nv-primary transition-colors duration-200 py-2 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-nv-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-white/10"></div>

          {/* LANGUAGE SELECTOR */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center space-x-1.5 text-xs font-bold text-zinc-300 hover:text-nv-primary transition-all cursor-pointer"
            id="lang-toggle-desktop"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? 'ENGLISH' : '繁體中文'}</span>
          </button>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="flex items-center space-x-1 px-4 py-2 bg-nv-primary text-black font-bold text-xs uppercase hover:bg-nv-primary-dark transition-colors duration-200 rounded-[2px]"
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
            className="p-2 text-zinc-400 hover:text-white cursor-pointer"
            id="mobile-lang-toggle"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#000000]/95 backdrop-blur-md border-b border-nv-hairline-strong py-6 px-6 z-40 transition-all shadow-2xl">
          <ul className="flex flex-col space-y-4 text-sm font-bold uppercase tracking-wider text-zinc-300 mb-6">
            
            {/* Mobile Products Section */}
            <li className="pb-4 border-b border-white/10">
              <div className="text-zinc-500 text-xs mb-3">{lang === 'zh' ? '產品' : 'Products'}</div>
              <div className="flex flex-col space-y-3 pl-2">
                <a href="#castdice" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 text-white">
                  <Smartphone className="w-4 h-4 text-nv-primary" />
                  <span>CastDice</span>
                </a>
                <a href="#pakrent" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 text-white">
                  <Box className="w-4 h-4 text-blue-500" />
                  <span>PakRent</span>
                </a>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-nv-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 bg-nv-primary text-black font-bold text-xs uppercase hover:bg-nv-primary-dark transition-colors duration-200 rounded-[2px]"
          >
            {lang === 'zh' ? '建立諮詢' : 'ENQUIRE NOW'}
          </a>
        </div>
      )}
    </nav>
  );
}
