/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Globe, MapPin, Activity } from 'lucide-react';

interface FooterProps {
  lang: 'zh' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-zinc-500 py-16 border-t border-white/5 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* Col 1: About Tauva */}
          <div className="md:col-span-1">
            <div className="text-xl font-extrabold tracking-tighter text-white flex items-center mb-4">
              <span>TAUVA</span>
              <span className="text-brand-green ml-0.5">_</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              {lang === 'zh'
                ? 'Tauva Limited 是亚太区主要的金融与人工智能计算企业，根植于香港尖沙咀核心干道，致力于用极端并行运算为金融资产注魂。'
                : 'Tauva Limited is a primary FinTech & Artificial Intelligence cluster firm based in Tsim Sha Tsui, Hong Kong, driving the vanguard of parallel trade computing.'}
            </p>
          </div>

          {/* Col 2: Engaged domains */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              {lang === 'zh' ? '从事业务领域' : 'ENGAGED DOMAINS'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-white transition-colors">◇ {lang === 'zh' ? '神经网络量化引擎 (NQ-Engine)' : 'Neural Multi-Factor Trading'}</li>
              <li className="hover:text-white transition-colors">◇ {lang === 'zh' ? 'FinLLM 金融大语言模型' : 'FinLLM Language Training'}</li>
              <li className="hover:text-white transition-colors">◇ {lang === 'zh' ? 'Aegis 多层自适应风控' : 'Adaptive High-Frequency Hedging'}</li>
              <li className="hover:text-white transition-colors">◇ {lang === 'zh' ? '尖沙咀交易所机房直连' : 'Low Latency Exchange Hub'}</li>
            </ul>
          </div>

          {/* Col 3: Headquarter Specs */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              {lang === 'zh' ? '总部物理区位' : 'HEADQUARTERS LOCATION'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#76b900] flex-shrink-0 mt-0.5" />
                <span>
                  {lang === 'zh' 
                    ? '香港九龙尖沙咀弥敦道' 
                    : 'Nathan Road, Tsim Sha Tsui, Hong Kong'}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#76b900] flex-shrink-0" />
                <a href="mailto:Contact@tauva.hk" className="hover:text-white font-mono transition-colors">
                  Contact@tauva.hk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-[#76b900] flex-shrink-0" />
                <span className="font-mono">www.tauva.hk</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Quicklinks */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
              {lang === 'zh' ? '政策与声明' : 'POLICIES & STATUTORY'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '法律服务条款 (Terms of Service)' : 'Terms of Service'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '隐私合规白皮书 (Privacy Policy)' : 'Privacy Guideline'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '香港证监会 (SFC) 常规牌照合规' : 'SFC Statutory Declarations'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
                  <Activity className="w-3 h-3 text-[#76b900] animate-pulse" />
                  <span>{lang === 'zh' ? '实时算力利用指数: 98.43%' : 'Cluster Load Matrix: 98.43%'}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Dynamic bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] gap-4">
          <div>
            &copy; {currentYear} Tauva Limited. {lang === 'zh' ? '版权所有。扎根香港，智赋全球。' : 'All Rights Reserved. Registered in Hong Kong.'}
          </div>
          <div className="flex space-x-6">
            <span>{lang === 'zh' ? '计算核心: NATHAN_TST_GRID_01' : 'Core Cluster: NATHAN_TST_GRID_01'}</span>
            <span>{lang === 'zh' ? '版本: v2.4.1 (Stable)' : 'Version: v2.4.1 (Stable)'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
