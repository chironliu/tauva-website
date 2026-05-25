/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Globe, Shield, Landmark } from 'lucide-react';

interface HongKongAdvantageProps {
  lang: 'zh' | 'en';
}

export default function HongKongAdvantage({ lang }: HongKongAdvantageProps) {
  const points = [
    {
      icon: MapPin,
      title: lang === 'zh' ? '弥敦道高配骨干算力舱' : 'Nathan Road Optical Hub',
      desc: lang === 'zh'
        ? '总部坐拥香港著名地标尖沙咀弥敦道商务核心，配备独立高频光纤干道，是无损处理超大规模亚太交易信号的终极地契网络。'
        : 'Our central command node is strategically stationed on Nathan Road, Tsim Sha Tsui, with dedicated trunk links to core exchanges.',
    },
    {
      icon: Globe,
      title: lang === 'zh' ? '全球资本自由交互枢纽' : 'Global Capital Ingress Gateway',
      desc: lang === 'zh'
        ? '香港作为连接中外金融资本的超级联系人，拥有完美的自由资金调度、零遗产税等特许便利，助力跨国对冲基金超效率分配。'
        : 'Aligning top-tier global funds and Eastern capital, Hong Kong stands as an irrepressible sovereign gateway for institutional assets.',
    },
    {
      icon: Shield,
      title: lang === 'zh' ? '双重法定合规监审合议' : 'Strict Compliant Framework',
      desc: lang === 'zh'
        ? '全面符合香港证监会 (SFC) 与金管局 (HKMA) 双重合规制度。我们建立由前沿算法自诊断的交易监查，保护合作机构专有资产安全。'
        : 'SFC compliant transaction monitoring coupled with internal audit algorithms to shield proprietary institutional assets.',
    },
    {
      icon: Landmark,
      title: lang === 'zh' ? '亚太区极限算力托管' : 'Asia-Pacific Core Sovereign Node',
      desc: lang === 'zh'
        ? '尖沙咀黄金节点的地理与辐射范围，使得 Tauva Limited 的智算指令能够以数毫秒速通东京、新加坡、首尔等主流交易大市。'
        : 'Our Tsim Sha Tsui nodal core maintains millisecond links to Tokyo, Singapore, and Seoul, making us a truly global compute node.',
    }
  ];

  return (
    <section id="hk-advantage" className="py-24 sm:py-32 bg-transparent text-white px-6 border-b border-white/5 relative">
      {/* Decorative gradient glowing ball */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-block text-brand-gold font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {lang === 'zh' ? '香港资本前沿枢纽' : 'HONG KONG GOLDEN NUCLEUS'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            {lang === 'zh' ? '扎根九龙尖沙咀，智胜全球金融战场' : 'Headquartered in Nathan Road, Tsim Sha Tsui'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {lang === 'zh'
              ? '尖沙咀弥敦道不仅是香港的核心地轴线，更是东方先进金融制度、深厚流动资金池与极低物理延迟大市信息的交会高地。Tauva Limited 借助自建硬件机架，全自主掌控跨期数据计算骨干。'
              : 'Our coordinates represent more than just a historical landmark. Nathan Road acts as a sovereign tech node, providing a unique launchpad into dynamic international exchanges.'}
          </p>
        </div>

        {/* Advantage Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="hk-cards">
          {points.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl relative overflow-hidden border border-white/5 flex flex-col justify-between"
              >
                {/* Visual subtle geometric background asset */}
                <div className="absolute -bottom-10 -right-10 text-white/[0.01] select-none pointer-events-none">
                  <IconComp className="w-56 h-56" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-lg bg-brand-gold/10 text-brand-gold mb-6 border border-brand-gold/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {point.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-4">
                  <span>LOCATION: TSIM SHA TSUI HQ</span>
                  <span>NODE_0{index + 1} // COMPLIANT</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
