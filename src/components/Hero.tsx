/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Activity, Cpu, ArrowDown } from 'lucide-react';

interface HeroProps {
  lang: 'zh' | 'en';
}

export default function Hero({ lang }: HeroProps) {
  const stats = [
    { title: '0.14 ms', desc: lang === 'zh' ? '平均指令推理時延' : 'Average Inference Latency', icon: Cpu },
    { title: '99.999%', desc: lang === 'zh' ? '骨幹計算系統可用性' : 'Backbone System Uptime', icon: ShieldCheck },
    { title: 'HK$ 12.8B+', desc: lang === 'zh' ? '日均模擬量化處理容量' : 'Daily Simulated Vol', icon: Activity },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#000000] pt-28 pb-16 px-6">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-50" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://www.confluxfortune.com/media/cg_hk_bg.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/40 to-[#000000]"></div>
      </div>

      {/* Decorative vertical hairline coordinate lines (NVIDIA technical style) */}
      <div className="absolute right-12 top-0 w-px h-full bg-nv-hairline-strong/20 pointer-events-none z-10"></div>
      <div className="absolute left-12 bottom-0 w-full h-px bg-nv-hairline-strong/20 pointer-events-none z-10"></div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        {/* Status indicator */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1a1a1a] border border-[#5e5e5e] rounded-[2px] mb-8" id="hero-badge">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nv-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nv-primary"></span>
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-nv-primary flex items-center gap-1">
            {lang === 'zh' ? '香港尖沙咀總部連線' : 'HONG KONG TSIM SHA TSUI HQ ONLINE'}
          </span>
        </div>

        {/* Catchy headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[48px] font-bold tracking-tight text-white mb-6 select-none leading-[1.25]">
          {lang === 'zh' ? (
            <>
              為金融注入 <span className="text-nv-primary">智能算力之魂</span>
            </>
          ) : (
            <>
              Injecting AI into <span className="text-nv-primary">The Soul of Finance</span>
            </>
          )}
        </h1>

        {/* Sub-description */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-12 px-2 text-center">
          {lang === 'zh'
            ? '無界雲彗有限公司 (Tauva Limited) 是一家總部設立於香港尖沙咀核心區位的先鋒金融科技公司。我們憑藉世界領先的神經網絡並行解算基座、FinLLM技術與超低延遲硬件架構，為全球專業投資機構提供無可匹敵的智能決策、極端風控與量化賦能。'
            : 'Tauva Limited is a premier financial & AI technology powerhouse based on Nathan Road, Tsim Sha Tsui, Hong Kong. We orchestrate microsecond-level quantitative networks, FinLLM research models, and bank-grade risks architecture to redefine capital efficiency worldwide.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-6 mb-20">
          <a
            href="#terminal"
            className="px-8 py-3.5 bg-nv-primary hover:bg-nv-primary-dark text-black font-bold text-xs uppercase tracking-wider transition-colors duration-200 text-center flex items-center justify-center space-x-2 rounded-[2px]"
          >
            <span>{lang === 'zh' ? '交互式 AI 算力終端' : 'LAUNCH INTERACTIVE TERMINAL'}</span>
          </a>
          <a
            href="#solutions"
            className="px-8 py-3.5 border border-white hover:border-nv-primary hover:text-nv-primary bg-transparent text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center rounded-[2px]"
          >
            {lang === 'zh' ? '了解核心業務' : 'EXPLORE SYSTEM SOLUTIONS'}
          </a>
        </div>

        {/* Grid Statistics inspired by high-end tech cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left" id="hero-metrics">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-[#000000] p-6 rounded-[2px] relative overflow-hidden flex flex-col justify-between border border-nv-hairline-strong min-h-[160px]"
              >
                {/* Signature Decorative Corner Square */}
                <div className="nv-corner-square top-0 left-0"></div>
                
                {/* Decorative background grid element */}
                <div className="absolute top-2 right-2 text-white/[0.03] font-mono text-7xl font-bold select-none pointer-events-none">
                  0{i + 1}
                </div>
                <div>
                  <div className="p-2 w-10 h-10 bg-nv-primary/10 rounded-[2px] flex items-center justify-center mb-4">
                    <Icon className="text-nv-primary w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce hidden md:block">
        <a href="#solutions" className="flex flex-col items-center space-y-1">
          <span className="text-[11px] font-mono tracking-widest uppercase">{lang === 'zh' ? '向下瀏覽' : 'SCROLL DOWN'}</span>
          <ArrowDown className="w-3.5 h-3.5 text-nv-primary" />
        </a>
      </div>
    </section>
  );
}
