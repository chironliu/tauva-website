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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent pt-24 pb-12 hero-grid px-6">
      {/* Dynamic Glow Mesh background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-brand-green/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-cyan/6 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none"></div>
      
      {/* Tiny subtle aesthetic lines from NVIDIA element ideas */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-white/[0.015] pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/4 border-t border-white/[0.015] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
        {/* Status indicator */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900/90 border border-zinc-800 rounded-full mb-8" id="hero-badge">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#76b900] flex items-center gap-1">
            {lang === 'zh' ? '香港尖沙咀總部連線' : 'HONG KONG TSIM SHA TSUI HQ ONLINE'}
          </span>
        </div>

        {/* Catchy headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 select-none leading-[1.1]">
          {lang === 'zh' ? (
            <>
              為金融注入<br />
              <span className="accent-gradient-green text-glow-green">智能算力之魂</span>
            </>
          ) : (
            <>
              Injecting AI into <br />
              <span className="accent-gradient-green text-glow-green">The Soul of Finance</span>
            </>
          )}
        </h1>

        {/* Sub-description */}
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-12 px-2 text-center">
          {lang === 'zh'
            ? '無界雲彗有限公司 (Tauva Limited) 是一家總部設立於香港尖沙咀核心區位的先鋒金融科技公司。我們憑藉世界領先的神經網絡並行解算基座、FinLLM技術與超低延遲硬件架構，為全球專業投資機構提供無可匹敵的智能決策、極端風控與量化賦能。'
            : 'Tauva Limited is a premier financial & AI technology powerhouse based on Nathan Road, Tsim Sha Tsui, Hong Kong. We orchestrate microsecond-level quantitative networks, FinLLM research models, and bank-grade risks architecture to redefine capital efficiency worldwide.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-6 mb-20">
          <a
            href="#terminal"
            className="px-8 py-3.5 bg-brand-green hover:bg-[#86d200] text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center space-x-2"
          >
            <span>{lang === 'zh' ? '交互式 AI 算力終端' : 'LAUNCH INTERACTIVE TERMINAL'}</span>
          </a>
          <a
            href="#solutions"
            className="px-8 py-3.5 border border-white/10 hover:border-brand-green/50 bg-white/5 hover:bg-white/10 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 text-center"
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
                className="glass-panel p-6 rounded-lg relative overflow-hidden flex flex-col justify-between border border-white/5"
              >
                {/* Decorative background grid element */}
                <div className="absolute top-2 right-2 text-white/[0.02] font-mono text-7xl font-black select-none pointer-events-none">
                  0{i + 1}
                </div>
                <div>
                  <div className="p-2 w-10 h-10 bg-brand-green/10 rounded flex items-center justify-center mb-4">
                    <Icon className="text-brand-green w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono mb-1">
                    {stat.title}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
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
          <span className="text-[9px] font-mono tracking-widest uppercase">{lang === 'zh' ? '向下瀏覽' : 'SCROLL DOWN'}</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
