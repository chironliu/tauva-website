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
    <section id="solutions" className="py-16 bg-nv-canvas text-nv-body px-6 border-b border-nv-hairline relative">
      {/* Decorative vertical coordinates like top-tier tech indices */}
      <div className="absolute top-16 left-6 hidden lg:block text-nv-mute font-mono text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-lr]">
        TAUVA INDEX SYSTEM // HK_029
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-4">
          <div>
            <div className="text-nv-primary font-mono text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {lang === 'zh' ? '創新科技堆棧' : 'TECHNOLOGY STACK'}
            </div>
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-nv-ink leading-[1.25]">
              {lang === 'zh' ? '核心前沿業務矩陣' : 'Core Technological Foundations'}
            </h2>
          </div>
          <p className="text-nv-mute font-medium text-sm sm:text-base max-w-md leading-relaxed">
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
                  className={`w-full text-left p-6 rounded-[2px] border transition-all duration-200 relative overflow-hidden flex items-start space-x-4 cursor-pointer ${
                    isSelected
                      ? 'bg-nv-ink border-nv-ink text-white shadow-none'
                      : 'bg-nv-surface-soft border-nv-hairline text-nv-ink hover:border-nv-mute'
                  }`}
                  id={`solution-tab-${item.id}`}
                >
                  {/* Signature Corner Square on selected tab */}
                  {isSelected && (
                    <div className="nv-corner-square top-0 left-0"></div>
                  )}

                  <div className={`p-3 rounded-[2px] ${isSelected ? 'bg-nv-primary/20 text-nv-primary' : 'bg-nv-canvas border border-nv-hairline text-nv-body'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`text-[11px] font-mono tracking-widest uppercase bg-nv-primary/10 px-1.5 py-0.5 rounded-[2px] ${isSelected ? 'text-nv-primary bg-nv-primary/20' : 'text-nv-primary'}`}>
                        {item.tag}
                      </span>
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isSelected ? 'text-white' : 'text-nv-ink'}`}>
                      {lang === 'zh' ? item.title : item.titleEn}
                    </h3>
                    <p className={`text-xs mt-1 line-clamp-2 leading-relaxed ${isSelected ? 'text-zinc-400' : 'text-nv-mute'}`}>
                      {lang === 'zh' ? item.description : item.descriptionEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Grid: Detailed Showcase of selected card (7 columns of 12) */}
          <div className="lg:col-span-7 bg-nv-canvas p-8 sm:p-12 rounded-[2px] relative overflow-hidden flex flex-col justify-between border border-nv-hairline">
            {/* Signature Corner Square */}
            <div className="nv-corner-square top-0 left-0"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-nv-primary mb-6 uppercase">
                <span>SYSTEM NODE_</span>
                <span className="text-nv-ink">{selectedSolution.id.toUpperCase()}</span>
                <span className="text-nv-mute">// FULL_SEC_ACCESS</span>
              </div>

              <h3 className="text-2xl sm:text-[24px] font-bold text-nv-ink tracking-tight mb-4">
                {lang === 'zh' ? selectedSolution.title : selectedSolution.titleEn}
              </h3>

              <p className="text-nv-body text-sm sm:text-base leading-relaxed mb-8">
                {lang === 'zh' ? selectedSolution.description : selectedSolution.descriptionEn}
              </p>

              <div className="h-px bg-nv-hairline mb-8"></div>

              <h4 className="text-xs font-bold text-nv-mute uppercase tracking-widest mb-4">
                {lang === 'zh' ? '關鍵技術指標與特色' : 'Critical System Frameworks'}
              </h4>

              <div className="space-y-4">
                {(lang === 'zh' ? selectedSolution.details : selectedSolution.detailsEn).map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-nv-body text-sm">
                    <div className="mt-0.5 p-0.5 rounded-[2px] bg-nv-primary/10 text-nv-primary border border-nv-primary/20 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-nv-hairline pt-8 relative z-10">
              <span className="text-xs font-mono text-nv-mute">
                STATUS: COMPLIANT WITH HK SFC REGULATIONS // 2026
              </span>
              <a
                href="#contact"
                className="text-xs text-nv-primary font-bold hover:text-nv-primary-dark transition-colors flex items-center space-x-2 uppercase tracking-wide group"
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
