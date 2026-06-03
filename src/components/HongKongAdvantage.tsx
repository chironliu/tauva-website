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
    <section id="hk-advantage" className="py-16 bg-nv-surface-soft text-nv-body px-6 border-b border-nv-hairline relative">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-block text-nv-primary font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {lang === 'zh' ? '香港资本前沿枢纽' : 'HONG KONG GOLDEN NUCLEUS'}
          </div>
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-nv-ink mb-6 leading-[1.25]">
            {lang === 'zh' ? '扎根九龙尖沙咀，智胜全球金融战场' : 'Headquartered in Nathan Road, Tsim Sha Tsui'}
          </h2>
          <p className="text-nv-mute text-sm sm:text-base leading-relaxed">
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
                className="bg-nv-canvas p-8 rounded-[2px] relative overflow-hidden border border-nv-hairline flex flex-col justify-between"
              >
                {/* Signature Decorative Corner Square */}
                <div className="nv-corner-square top-0 left-0"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-[2px] bg-nv-primary/10 text-nv-primary mb-6 border border-nv-primary/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-nv-ink mb-3 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-nv-body text-xs sm:text-sm leading-relaxed mb-6">
                    {point.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-nv-mute border-t border-nv-hairline pt-4">
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
