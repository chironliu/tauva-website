/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cpu, Server, Network, Thermometer, Radio, Zap } from 'lucide-react';

interface TechStackProps {
  lang: 'zh' | 'en';
}

export default function TechStack({ lang }: TechStackProps) {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'algorithms' | 'telemetry'>('infrastructure');

  const tabsInfo = {
    infrastructure: {
      title: lang === 'zh' ? '高性能金融计算底座' : 'High Performance Financial Compute Node',
      icon: Server,
      specs: [
        { name: lang === 'zh' ? '算力集群总核数' : 'Total TPU/GPU Kernels', value: '41,200+ Core Arrays' },
        { name: lang === 'zh' ? '光纤骨干跳数' : 'Direct Exchange Hops', value: '1 Node Hop To HKEX' },
        { name: lang === 'zh' ? '物理备份可用性' : 'Network Hot Uptime', value: '99.9999% SLA' },
        { name: lang === 'zh' ? '每秒算力包吞吐' : 'Packet Process Speed', value: '3,200 Million Pkt/sec' },
      ],
      desc: lang === 'zh' 
        ? '在香港尖沙咀总部弥敦道机柜与葵涌主力机群，我们托管了数以万计的超高频神经网络处理单元。配备直连光纤通信与智能硬件自整定网格，过滤微秒级极端滑点噪声。'
        : 'Sovereign financial grade hardware array residing directly in high-density Hong Kong datacenters. Equipped with InfiniBand network interfaces and ultra-fast optical pipelines.'
    },
    algorithms: {
      title: lang === 'zh' ? '高深度神经网络模型' : 'Temporal Neural Architectures',
      icon: Cpu,
      specs: [
        { name: lang === 'zh' ? '主模型参数量' : 'FinLLM Parameters', value: '34B Optimized Vectors' },
        { name: lang === 'zh' ? '学习参数类型' : 'Supervised Train Inputs', value: '1.2 Trillion Financial Tokens' },
        { name: lang === 'zh' ? '模型反应时间' : 'Model State Shift Rate', value: '0.04 ms Dynamic Delay' },
        { name: lang === 'zh' ? '实时评判变量' : 'Simultaneous Stress Variables', value: '180,000 Dimensions' },
      ],
      desc: lang === 'zh'
        ? '基于高维时间序列 Transformer 核心的对冲与因子预测架构。模型针对低信噪比的金融时序进行高强度对数降噪，实现真正的概率极限拟合。'
        : 'Temporal transformers trained on extensive cross-border tick data files to provide dynamic non-linear trend evaluations and automated portfolio hedging ratios.'
    },
    telemetry: {
      title: lang === 'zh' ? '液冷与绿色计算监测' : 'Real-time Telemetry & Optimization',
      icon: Thermometer,
      specs: [
        { name: lang === 'zh' ? '平均冷却系数' : 'PUE Grid Score', value: '1.14 Global Superb Class' },
        { name: lang === 'zh' ? '运行舱室平均温度' : 'Liquid Core Core Temp', value: '18.4°C Hydro-cooling' },
        { name: lang === 'zh' ? '断电设备延时' : 'UPS Swap-In Delta', value: '0.00 ms (True Seamless)' },
        { name: lang === 'zh' ? '系统防漏阈值' : 'Dynamic Flow Guard', value: 'Automated Micro-leak Intercept' },
      ],
      desc: lang === 'zh'
        ? 'Tauva Limited 致力于打造环境友好型的低碳算力金融。我们的香港自建算力排柜全面支持先进的双重液态循环散热，热交换功率高达 94%，比常规风冷机房能耗降低 40%。'
        : 'Hydro-cooling mechanisms keeping hyper-clocked GPUs at absolute peak efficacy. Integrated dynamic power phase shifting to maintain sustainability and lower operational footprints.'
    }
  };

  const SelectedInfo = tabsInfo[activeTab];
  const TabIcon = SelectedInfo.icon;

  return (
    <section id="tech" className="py-16 bg-nv-canvas text-nv-body relative px-6 border-b border-nv-hairline">
      {/* Decorative absolute hairline grid coordinate line */}
      <div className="absolute top-0 right-12 w-px h-full bg-nv-hairline/25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text panel (Left: 5 columns equivalent) */}
          <div className="w-full lg:w-5/12">
            <div className="inline-block text-nv-primary font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
              {lang === 'zh' ? '智算硬件与技术硬核' : 'PHYSICAL HARDWARE COMPLEX'}
            </div>
            <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-nv-ink mb-8 leading-[1.25]">
              {lang === 'zh' ? '致敬巔峰算力底座' : 'Powering Tomorrow with Supercomputing'}
            </h2>

            {/* Tab Switches */}
            <div className="space-y-3 mb-10">
              {(['infrastructure', 'algorithms', 'telemetry'] as const).map((tab) => {
                const isCurrent = tab === activeTab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full p-4 rounded-[2px] border text-xs sm:text-sm font-bold text-left transition flex items-center space-x-4 uppercase tracking-wider cursor-pointer ${
                      isCurrent
                        ? 'bg-nv-ink border-nv-ink text-white shadow-none'
                        : 'bg-nv-surface-soft border-nv-hairline text-nv-body hover:text-nv-ink hover:border-nv-mute'
                    }`}
                  >
                    <span>{tab === 'infrastructure' ? '01' : tab === 'algorithms' ? '02' : '03'}</span>
                    <span className="flex-1">
                      {tab === 'infrastructure' 
                        ? (lang === 'zh' ? '硬件物理底座' : 'Physical Compute Node')
                        : tab === 'algorithms'
                        ? (lang === 'zh' ? '时间序列算法层' : 'Temporal Logic Models')
                        : (lang === 'zh' ? '绿色液态冷却监测' : 'Hydro Thermal Telemetry')}
                    </span>
                    <Zap className={`w-4 h-4 ${isCurrent ? 'opacity-100 text-nv-primary' : 'opacity-20 text-nv-mute'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive display board (Right: 7 columns equivalent) */}
          <div className="w-full lg:w-7/12 bg-nv-canvas border border-nv-hairline rounded-[2px] p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            {/* Signature Corner Square */}
            <div className="nv-corner-square top-0 left-0"></div>

            {/* Top row */}
            <div>
              <div className="flex items-center justify-between border-b border-nv-hairline pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-nv-primary/10 text-nv-primary border border-nv-primary/20 rounded-[2px]">
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-nv-ink text-lg sm:text-xl tracking-tight">
                    {SelectedInfo.title}
                  </h3>
                </div>
                <div className="text-[11px] font-mono text-nv-primary bg-nv-primary/10 border border-nv-primary/20 px-2.5 py-1 rounded-[2px]">
                  SYS_OK_V26
                </div>
              </div>

              <p className="text-nv-body text-sm sm:text-base leading-relaxed mb-8">
                {SelectedInfo.desc}
              </p>
            </div>

            {/* Bottom details specifications array */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-nv-hairline pt-8">
              {SelectedInfo.specs.map((spec, i) => (
                <div key={i} className="bg-nv-surface-soft p-4 rounded-[2px] border border-nv-hairline flex flex-col">
                  <span className="text-[10px] text-nv-mute font-bold uppercase tracking-wider mb-1">
                    {spec.name}
                  </span>
                  <span className="text-sm font-bold text-nv-ink font-mono tracking-tight">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
