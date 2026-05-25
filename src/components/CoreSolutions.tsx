/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cpu, Database, ShieldCheck, Zap, Check, ArrowRight } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data';
import { Solution } from '../types';

const IconMap: Record<string, React.ComponentType<any>> = {
  Cpu,
  Database,
  ShieldCheck,
  Zap,
};

interface CoreSolutionsProps {
  lang: 'zh' | 'en';
}

export default function CoreSolutions({ lang }: CoreSolutionsProps) {
  const [activeSolution, setActiveSolution] = useState<string>('nq-engine');

  const selectedSolution = SOLUTIONS_DATA.find((s) => s.id === activeSolution) || SOLUTIONS_DATA[0];

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-transparent text-white px-6 border-b border-white/5 relative">
      {/* Decorative vertical coordinates like top-tier tech indices */}
      <div className="absolute top-24 left-6 hidden lg:block text-zinc-800 font-mono text-[9px] uppercase tracking-[0.2em] [writing-mode:vertical-lr]">
        TAUVA INDEX SYSTEM // HK_029
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-4">
          <div>
            <div className="text-brand-green font-mono text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {lang === 'zh' ? '創新科技堆棧' : 'TECHNOLOGY STACK'}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {lang === 'zh' ? '核心前沿業務矩陣' : 'Core Technological Foundations'}
            </h2>
          </div>
          <p className="text-zinc-400 font-medium text-sm sm:text-base max-w-md leading-relaxed">
            {lang === 'zh'
              ? '結合香港深厚金融資本沉澱，我們全力構建了四大世界級 AI 理性金融科技。'
              : 'Orchestrating state-of-the-art computational mechanics for sovereign family offices and multinational quant funds.'}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Grid: Option Selector list (5 columns of 12) */}
          <div className="lg:col-span-5 space-y-4">
            {SOLUTIONS_DATA.map((item) => {
              const IconComp = IconMap[item.iconName] || Cpu;
              const isSelected = item.id === activeSolution;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSolution(item.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start space-x-4 ${
                    isSelected
                      ? 'bg-white/10 border-brand-green/50 shadow-md shadow-[#76b900]/5'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                  }`}
                  id={`solution-tab-${item.id}`}
                >
                  {/* Accent bar on selected */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-brand-green"></div>
                  )}

                  <div className={`p-3 rounded-lg ${isSelected ? 'bg-brand-green/15 text-brand-green' : 'bg-white/5 text-zinc-400'}`}>
                    <IconComp className="w-5 h-5 animate-pulse" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[9px] font-mono tracking-widest text-[#76b900]/80 uppercase bg-[#76b900]/10 px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {lang === 'zh' ? item.title : item.titleEn}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                      {lang === 'zh' ? item.description : item.descriptionEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Grid: Detailed Showcase of selected card (7 columns of 12) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-white/10">
            {/* Ambient decorative light blur */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-brand-green mb-6 uppercase">
                <span>SYSTEM NODE_</span>
                <span className="text-white">{selectedSolution.id.toUpperCase()}</span>
                <span>// FULL_SEC_ACCESS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                {lang === 'zh' ? selectedSolution.title : selectedSolution.titleEn}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {lang === 'zh' ? selectedSolution.description : selectedSolution.descriptionEn}
              </p>

              <div className="h-px bg-white/10 mb-8"></div>

              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                {lang === 'zh' ? '關鍵技術指標與特色' : 'Critical System Frameworks'}
              </h4>

              <div className="space-y-4">
                {(lang === 'zh' ? selectedSolution.details : selectedSolution.detailsEn).map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-zinc-300 text-sm">
                    <div className="mt-0.5 p-0.5 rounded-full bg-brand-green/20 text-brand-green flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-8 relative z-10">
              <span className="text-xs font-mono text-zinc-500">
                STATUS: COMPLIANT WITH HK SFC REGULATIONS // 2026
              </span>
              <a
                href="#contact"
                className="text-xs text-brand-green font-bold hover:text-white transition-colors flex items-center space-x-2 uppercase tracking-wide group"
              >
                <span>{lang === 'zh' ? '索取產品白皮書' : 'Request Technical Specifications'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
