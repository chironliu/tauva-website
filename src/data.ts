import { Solution, SimulationAsset } from './types';

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: 'nq-engine',
    title: '神經網絡量化引擎 (NQ-Engine)',
    titleEn: 'Neural Quantitative Decision Engine',
    description: '基於先進的高維特徵提取與深層時序 Transformer 網絡，實時解碼極其複雜的全球資本流向與微秒級價格波動規律。',
    descriptionEn: 'Leveraging high-dimensional feature extraction and deep temporal Transformer networks to decode complex global capital flows and microsecond order imbalance.',
    iconName: 'Cpu',
    tag: 'CORE ENGINE',
    details: [
      '微秒級推理延遲與實時價格重構',
      '跨市場(HKEX, NYSE, LSE)多模態流動性特徵感知',
      '自適應在線增量學習，無視政經突發事件的雜訊干擾',
      '毫秒級極限滑點控制與最優訂單路由 (SOR)'
    ],
    detailsEn: [
      'Microsecond inference latency & real-time order-book reconstruction',
      'Multi-market (HKEX, NYSE, LSE) multimodal liquidity analysis',
      'Adaptive online incremental learning to filter macroeconomic anomalies',
      'Sub-millisecond slip management and Smart Order Routing (SOR)'
    ]
  },
  {
    id: 'fin-llm',
    title: 'FinLLM 機構決策系統',
    titleEn: 'FinLLM Institutional Decision System',
    description: '融合十億級金融垂域專屬 Token 語料的高級大語言模型，深度解析財務報告、會議紀要與跨國海量政經文獻。',
    descriptionEn: 'An industry-specific LLM trained on billions of high-quality financial tokens, purpose-built for comprehensive analysis of regulatory filings, earnings transcripts, and global risk macrodynamics.',
    iconName: 'Database',
    tag: 'AI REASONING',
    details: [
      '萬份研報、年報級長上下文語意精確提煉與關聯圖譜建立',
      '對全球金融監管條約(如SFC、SEC法規)的主動性合規篩查',
      '智能識別企業虛偽陳述與管理層情緒隱秘異動',
      '私有化部署架構，保障機構專有研究資產的信息安全'
    ],
    detailsEn: [
      'Semantic distillation of massive filings with associative asset mapping',
      'Proactive compliance auditing matching SFC and SEC statutory guidelines',
      'AI-driven detection of corporate misstatements and dynamic management sentiments',
      'Strict self-hosted deployment keeping proprietary asset data isolated'
    ]
  },
  {
    id: 'aegis-risk',
    title: 'Aegis 智能全面風控核心',
    titleEn: 'Aegis Total Risk Control Hub',
    description: '通過蒙特卡洛神經網絡仿真與多資產連動深度學習網格，在微秒級時間內評估極端黑天鵝事件下的總體資本暴露。',
    descriptionEn: 'Assesses total capital exposure under extreme black swan scenarios synchronously across thousands of assets using deep neural Monte Carlo simulation meshes.',
    iconName: 'ShieldCheck',
    tag: 'SYSTEM COMPLIANCE',
    details: [
      '多資產(權益、商品、衍生品)深度非線性和關聯建模',
      '針對全球性流動性踩踏與極端加息場景的秒級應激推演',
      '實時反洗錢 (AML) 與反欺詐自過濾，全流程符合香港金管局標準',
      '智能化動態倉位對沖提示與最優平倉路徑推導'
    ],
    detailsEn: [
      'Deep non-linear correlation modeling for multi-asset institutional portfolios',
      'Instantaneous stress-testing mirroring global liquidity dry-ups or interest shocks',
      'Real-time AML & Fraud interception complying fully with HKMA standards',
      'Dynamic automated hedging suggestions and optimal exit-liquidation pathways'
    ]
  },
  {
    id: 'hk-infra',
    title: '尖沙咀低延遲計算骨干網',
    titleEn: 'Tsim Sha Tsui Trading Backbone',
    description: '總部設立於香港九龍尖沙咀彌敦道，通過直連港交所 (HKEX) 機房的光纖互聯架構，提供極低物理延遲的金融算力託管平台。',
    descriptionEn: 'Headquartered on Nathan Road in Tsim Sha Tsui, Hong Kong, delivering physical proximity-optimized, high-frequency infrastructure with low-latency links to HKEX core engines.',
    iconName: 'Zap',
    tag: 'INFRASTRUCTURE',
    details: [
      '彌敦道節點直連葵涌港交所數據中心 (HKEX OCG/SD-WAN)',
      '專屬液冷人工智能算力機櫃，運行超頻硬件與超短網絡跳數',
      '全鏈路雙重物理備份，可用性達 99.999% 的金融等級',
      '高吞吐大容量物理隊列，保障亞太核心時區極端波動的無損吞吐'
    ],
    detailsEn: [
      'Nathan Road nodal links directly routed to HKEX data complex in Kwai Chung',
      'Liquid-cooled hyper-frequency compute racks with optimal routing topology',
      'Full dual-path hardware redundancy ensuring 99.999% financial uptime',
      'High-throughput network fabric providing zero packet drop during volatility spikes'
    ]
  }
];

export const SIMULATION_ASSETS: SimulationAsset[] = [
  { symbol: 'HSI.HK', name: '香港恒生指數', nameEn: 'Hang Seng Index', currentPrice: 19480.50, dailyChange: 1.24, volatility: 1.8 },
  { symbol: 'NVDA.US', name: '英偉達公司', nameEn: 'NVIDIA Corporation', currentPrice: 128.45, dailyChange: 3.82, volatility: 3.5 },
  { symbol: 'HKEX.HK', name: '香港交易所', nameEn: 'HKEX Group', currentPrice: 288.60, dailyChange: -0.45, volatility: 1.2 },
  { symbol: 'TAUVA-A', name: '無界雲彗 智能多因子基金', nameEn: 'Tauva Deep Multi-Factor Fund', currentPrice: 1042.80, dailyChange: 2.15, volatility: 0.9 },
];
