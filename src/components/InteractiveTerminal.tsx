/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, AlertTriangle, Cpu, TrendingUp, Info, Activity } from 'lucide-react';
import { SIMULATION_ASSETS } from '../data';
import { SimulationAsset, SimulationResult } from '../types';

interface InteractiveTerminalProps {
  lang: 'zh' | 'en';
}

export default function InteractiveTerminal({ lang }: InteractiveTerminalProps) {
  const [selectedAsset, setSelectedAsset] = useState<SimulationAsset>(SIMULATION_ASSETS[0]);
  const [selectedStrategy, setSelectedStrategy] = useState<'neural-momentum' | 'adaptive-risk' | 'predictive-hft'>('neural-momentum');
  const [timeHorizon, setTimeHorizon] = useState<30 | 90 | 180>(90);
  const [riskFactor, setRiskFactor] = useState<number>(65); // percentage slider

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);

  // Generate initial simulation output
  useEffect(() => {
    generateMockResult();
  }, [selectedAsset, selectedStrategy, timeHorizon, riskFactor]);

  const strategyDescriptions = {
    'neural-momentum': {
      cn: '神经网络趋势策略：基于大参数量时间序列模型，寻找多因子协同动能，适合中短期捕捉高上行极值。',
      en: 'Neural Momentum: Leverages deep temporal transformers to unlock absolute multi-factor momentum indicators.'
    },
    'adaptive-risk': {
      cn: '资产自适应对冲策略：实时跟踪宏观利率、汇率波动，自适应改变配比防御暴跌踩踏。',
      en: 'Adaptive Risk Hedging: Autonomously maps micro-variables & correlations to form ultra-robust drawdown defense shields.'
    },
    'predictive-hft': {
      cn: '微秒级高频预测策略：追踪香港本地HKEX与海外交易所订单簿不均衡度，进行微毫秒差价套益。',
      en: 'Predictive HFT Arbitrage: Decodes limit order book (LOB) dynamics to execute sub-millisecond spread arbitrage.'
    }
  };

  const generateMockResult = () => {
    // Deterministic simulation math based on selected combinations
    let projectedReturn = 0;
    let confidence = 0;
    let executionTimeMs = 0.05 + Math.random() * 0.15;
    let riskScore = 0;
    let recommendation: 'STRONG_BUY' | 'ACCUMULATE' | 'NEUTRAL' | 'HEDGE' = 'NEUTRAL';

    const assetMultiplier = selectedAsset.symbol === 'HSI.HK' ? 1.0 : selectedAsset.symbol === 'NVDA.US' ? 1.8 : selectedAsset.symbol === 'HKEX.HK' ? 0.8 : 1.3;
    const strategyFactor = selectedStrategy === 'neural-momentum' ? 14.5 : selectedStrategy === 'adaptive-risk' ? 7.2 : 22.8;

    // Projected Return math
    projectedReturn = (strategyFactor * assetMultiplier * (riskFactor / 100) * (timeHorizon / 90)).toFixed(2) as any;
    confidence = Math.min(98.8, 85.0 + (100 - riskFactor) * 0.12 + Math.random() * 3);
    riskScore = Math.min(99, Math.round(riskFactor + (selectedStrategy === 'predictive-hft' ? 10 : 0)));

    if (projectedReturn > 15) {
      recommendation = 'STRONG_BUY';
    } else if (projectedReturn > 8) {
      recommendation = 'ACCUMULATE';
    } else if (projectedReturn < 4 && selectedStrategy === 'adaptive-risk') {
      recommendation = 'HEDGE';
    } else {
      recommendation = 'NEUTRAL';
    }

    // Generate coordinate lines for SVG drawing
    const pointsCount = 10;
    const chartData = [];
    let prevBaseline = 100;
    let prevSimulated = 100;

    for (let i = 0; i < pointsCount; i++) {
      const timeLabel = `T+${Math.round((i * timeHorizon) / (pointsCount - 1))}`;
      const baselineNoise = (Math.random() - 0.5) * 5;
      const simulatedNoise = (Math.random() - 0.4) * (selectedStrategy === 'neural-momentum' ? 9 : 4);
      
      const newBaseline = prevBaseline + (selectedAsset.dailyChange * 0.5) + baselineNoise;
      const newSimulated = prevSimulated + (Number(projectedReturn) / pointsCount) + simulatedNoise;

      chartData.push({
        time: timeLabel,
        baseline: parseFloat(newBaseline.toFixed(2)),
        simulated: parseFloat(newSimulated.toFixed(2)),
      });

      prevBaseline = newBaseline;
      prevSimulated = newSimulated;
    }

    setSimulationResult({
      assetSymbol: selectedAsset.symbol,
      strategy: selectedStrategy,
      projectedReturn: Number(projectedReturn),
      confidence: parseFloat(confidence.toFixed(1)),
      executionTimeMs: parseFloat(executionTimeMs.toFixed(3)),
      riskScore,
      recommendation,
      chartData,
    });
  };

  const handleRunTest = () => {
    setIsRunning(true);
    setCurrentProgress(0);
    setTerminalLogs([]);

    const logMessages = [
      `[INFO] [${new Date().toISOString().slice(11, 19)}] Connecting to Nathan Road cluster server...`,
      `[INFO] Loading historic ticks database for asset [${selectedAsset.symbol}]`,
      `[SYS] Initializing high-dimensional GPU neural vector tensor map`,
      `[AI] Transformer network processing: Horizon=${timeHorizon}D; TargetVolatility=${selectedAsset.volatility}%`,
      `[COMPUTE] Executing deep stress simulations over global market liquidity metrics`,
      `[SUCCESS] Backtest optimized. Calculated in Nathan Road server infrastructure.`
    ];

    let logCounter = 0;
    const interval = setInterval(() => {
      if (logCounter < logMessages.length) {
        setTerminalLogs(prev => [...prev, logMessages[logCounter]]);
        setCurrentProgress(Math.round(((logCounter + 1) / logMessages.length) * 100));
        logCounter++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        generateMockResult();
      }
    }, 450);
  };

  // Convert SVG coordinate helpers
  const getSvgPathStr = (data: { baseline: number; simulated: number }[], field: 'baseline' | 'simulated', minVal: number, maxVal: number) => {
    const w = 480;
    const h = 200;
    const padding = 15;
    const spaceX = (w - padding * 2) / (data.length - 1);
    
    return data.map((d, index) => {
      const x = padding + index * spaceX;
      // normalize y
      const valueRange = maxVal - minVal || 1;
      const val = d[field];
      const y = h - padding - ((val - minVal) / valueRange) * (h - padding * 2);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  // Min Max for layout scaling
  const allValues = simulationResult
    ? [...simulationResult.chartData.map(d => d.baseline), ...simulationResult.chartData.map(d => d.simulated)]
    : [90, 110];
  const minVal = Math.min(...allValues) - 2;
  const maxVal = Math.max(...allValues) + 2;

  return (
    <section id="terminal" className="py-16 bg-nv-surface-soft text-nv-body border-b border-nv-hairline relative px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-nv-primary font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {lang === 'zh' ? '交互式高階應用沙盒' : 'INTERACTIVE QUANT SANDBOX'}
          </div>
          <h2 className="text-3xl sm:text-[36px] font-bold tracking-tight text-nv-ink mb-4 leading-[1.25]">
            {lang === 'zh' ? '智算金融決策終端' : 'Smart AI Quant Terminal'}
          </h2>
          <p className="text-nv-mute text-sm sm:text-base leading-relaxed">
            {lang === 'zh' 
              ? '實時運行由 Tauva Limited (無界雲彗有限公司) 部署的高維量化測算策略，並在真實的測試環境下評估香港與全球資產的預計增值區間。' 
              : 'Directly launch our cloud backtesting model client-side to forecast index pathways and system parameters.'}
          </p>
        </div>

        {/* Master Board Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="terminal-grid">
          {/* Controls Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-nv-canvas p-6 sm:p-8 rounded-[2px] flex flex-col justify-between border border-nv-hairline relative">
            {/* Signature Corner Square */}
            <div className="nv-corner-square top-0 left-0"></div>

            <div>
              <div className="text-sm font-bold uppercase text-nv-ink tracking-wider mb-6 flex items-center space-x-2">
                <span className="p-1 rounded-[2px] bg-nv-primary/10 text-nv-primary border border-nv-primary/20">
                  <Cpu className="w-4 h-4" />
                </span>
                <span>{lang === 'zh' ? '模型輸入參數配置' : 'Simulation Configurations'}</span>
              </div>

              {/* Asset choice */}
              <div className="mb-6">
                <label className="block text-[11px] font-bold text-nv-mute uppercase tracking-widest mb-3">
                  {lang === 'zh' ? '1. 測算標的資產' : '1. Target Asset / Index'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SIMULATION_ASSETS.map((asset) => (
                    <button
                      key={asset.symbol}
                      onClick={() => !isRunning && setSelectedAsset(asset)}
                      className={`p-3 text-left rounded-[2px] border text-xs transition duration-200 cursor-pointer ${
                        selectedAsset.symbol === asset.symbol
                          ? 'border-nv-primary bg-nv-primary/10 text-nv-ink font-bold'
                          : 'border-nv-hairline bg-nv-canvas text-nv-body hover:border-nv-mute'
                      }`}
                      disabled={isRunning}
                    >
                      <div className="font-mono text-nv-primary font-bold">{asset.symbol}</div>
                      <div className="mt-0.5 truncate">{lang === 'zh' ? asset.name : asset.nameEn}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy Choice */}
              <div className="mb-6">
                <label className="block text-[11px] font-bold text-nv-mute uppercase tracking-widest mb-3">
                  {lang === 'zh' ? '2. 執行 AI 演算法策略' : '2. Executable AI Strategy'}
                </label>
                <div className="space-y-2">
                  {(['neural-momentum', 'adaptive-risk', 'predictive-hft'] as const).map((strat) => (
                    <button
                      key={strat}
                      onClick={() => !isRunning && setSelectedStrategy(strat)}
                      className={`w-full p-3 text-left rounded-[2px] border text-xs transition flex items-center justify-between cursor-pointer ${
                        selectedStrategy === strat
                          ? 'border-nv-primary bg-nv-primary/10 text-nv-ink font-bold'
                          : 'border-nv-hairline bg-nv-canvas text-nv-body hover:border-nv-mute'
                      }`}
                      disabled={isRunning}
                    >
                      <div>
                        <div className="uppercase tracking-wider font-bold font-mono text-left">
                          {strat.replace('-', ' ')}
                        </div>
                        <div className="text-[11px] text-nv-mute mt-0.5 text-left line-clamp-1">
                          {lang === 'zh' ? strategyDescriptions[strat].cn : strategyDescriptions[strat].en}
                        </div>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedStrategy === strat ? 'bg-nv-primary animate-pulse' : 'bg-transparent'}`}></span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Horizon & Risk Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-[11px] font-bold text-nv-mute uppercase tracking-widest mb-3">
                    {lang === 'zh' ? '3. 模擬測算時間跨度' : '3. Forecasting Horizon'}
                  </label>
                  <div className="flex space-x-1 p-1 bg-nv-surface-soft rounded-[2px] border border-nv-hairline">
                    {([30, 90, 180] as const).map((hor) => (
                      <button
                        key={hor}
                        onClick={() => !isRunning && setTimeHorizon(hor)}
                        className={`flex-1 text-center py-2 text-xs rounded-[2px] transition font-bold cursor-pointer ${
                          timeHorizon === hor
                            ? 'bg-nv-ink text-white shadow-none'
                            : 'text-nv-mute hover:text-nv-ink'
                        }`}
                        disabled={isRunning}
                      >
                        {hor}D
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest mb-3 text-nv-mute">
                    {lang === 'zh' ? '4. 波動風險承受閾值' : '4. Adaptive Risk Level'}
                  </label>
                  <div className="px-1 text-center">
                    <input
                      type="range"
                      min="20"
                      max="95"
                      value={riskFactor}
                      onChange={(e) => !isRunning && setRiskFactor(Number(e.target.value))}
                      className="w-full accent-nv-primary cursor-pointer h-1.5 bg-nv-surface-soft rounded-[2px] appearance-none"
                      disabled={isRunning}
                    />
                    <div className="flex justify-between text-[11px] text-nv-mute font-mono mt-1">
                      <span>MIN (LOW)</span>
                      <span className="text-nv-primary font-bold">{riskFactor}%</span>
                      <span>MAX (HIGH)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Actions */}
            <button
              onClick={handleRunTest}
              className={`w-full py-4 rounded-[2px] font-bold uppercase text-xs tracking-widest text-center flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer ${
                isRunning
                  ? 'bg-nv-surface-soft text-nv-ash border border-nv-hairline cursor-not-allowed'
                  : 'bg-nv-primary text-black hover:bg-nv-primary-dark shadow-none'
              }`}
              disabled={isRunning}
              id="run-calculation-btn"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isRunning ? (lang === 'zh' ? `並行計算引擎加載中 ${currentProgress}%` : `COMPUTING TENSORS ${currentProgress}%`) : (lang === 'zh' ? '運行 AI 量化回溯測算' : 'RUN AI BACKTEST COMPILING')}</span>
            </button>
          </div>

          {/* Interactive Screen & Render Charts (7 Cols) */}
          <div className="lg:col-span-7 bg-nv-canvas p-6 sm:p-8 rounded-[2px] border border-nv-hairline flex flex-col justify-between relative">
            {/* Signature Corner Square */}
            <div className="nv-corner-square top-0 left-0"></div>

            {/* Screen Header */}
            <div>
              <div className="flex items-center justify-between border-b border-nv-hairline pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-nv-primary"></span>
                  </span>
                  <span className="text-xs font-mono text-nv-mute font-bold uppercase tracking-widest">
                    {lang === 'zh' ? '超大規模機群算力回顯' : 'TAUVA CLOUD REPORT SUMMARY'}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-nv-mute">
                  REF: TX_72_M8
                </div>
              </div>

              {/* Running state simulator logs */}
              {isRunning ? (
                <div className="bg-nv-surface-soft font-mono text-xs rounded-[2px] p-6 border border-nv-hairline min-h-[350px] flex flex-col justify-between" id="terminal-monitor">
                  <div className="space-y-3">
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className="text-nv-body animate-fadeIn">
                        {log}
                      </div>
                    ))}
                    <div className="text-nv-primary animate-pulse">■ WAITING FOR QUANT CORES MATRIX INTEGRATION...</div>
                  </div>
                  <div>
                    <div className="w-full bg-nv-hairline rounded-[2px] h-1 overflow-hidden">
                      <div className="bg-nv-primary h-full transition-all duration-300" style={{ width: `${currentProgress}%` }}></div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Data Showcase Dashboard */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                  {/* Digital Metrics Box */}
                  <div className="md:col-span-12 lg:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4">
                    {simulationResult && (
                      <>
                        {/* Projected return */}
                        <div className="bg-nv-surface-soft p-4 rounded-[2px] border border-nv-hairline flex flex-col justify-center">
                          <span className="text-[10px] text-nv-mute uppercase font-bold tracking-wider">{lang === 'zh' ? '預測超額收益率' : 'Alpha Return'}</span>
                          <span className="text-3xl font-bold text-nv-primary font-mono mt-1">
                            +{simulationResult.projectedReturn}%
                          </span>
                        </div>

                        {/* Confidence score */}
                        <div className="bg-nv-surface-soft p-4 rounded-[2px] border border-nv-hairline flex flex-col justify-center">
                          <span className="text-[10px] text-nv-mute uppercase font-bold tracking-wider">{lang === 'zh' ? '系統決策置信度' : 'AI Confidence'}</span>
                          <span className="text-2xl font-bold text-nv-ink font-mono mt-1 flex items-center space-x-1.5">
                            <Activity className="w-4 h-4 text-nv-primary animate-pulse" />
                            <span>{simulationResult.confidence}%</span>
                          </span>
                        </div>

                        {/* Inference latency */}
                        <div className="bg-nv-surface-soft p-4 rounded-[2px] border border-nv-hairline flex flex-col justify-center">
                          <span className="text-[10px] text-nv-mute uppercase font-bold tracking-wider">{lang === 'zh' ? 'GPU 推理算力耗時' : 'Inference Latency'}</span>
                          <span className="text-xl font-bold text-nv-body font-mono mt-1">
                            {simulationResult.executionTimeMs} ms
                          </span>
                        </div>

                        {/* Institutional recommendation */}
                        <div className="bg-nv-surface-soft p-4 rounded-[2px] border border-nv-hairline flex flex-col justify-center">
                          <span className="text-[10px] text-nv-mute uppercase font-bold tracking-wider">{lang === 'zh' ? '戰術決策建議' : 'Action Signal'}</span>
                          <span className="text-sm font-bold text-nv-primary uppercase tracking-widest mt-1">
                            ◇ {simulationResult.recommendation}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Dynamic SVG Vector Line Graph */}
                  <div className="md:col-span-7 bg-nv-surface-soft rounded-[2px] p-4 border border-nv-hairline flex flex-col justify-between min-h-[250px]">
                    <div className="flex justify-between items-center text-[10px] font-mono text-nv-mute">
                      <span>SIMULATED MODEL (TIME SERIES PROJECTION)</span>
                      <div className="flex space-x-2">
                        <span className="flex items-center space-x-1">
                          <span className="w-2 h-0.5 bg-nv-stone inline-block"></span>
                          <span>{lang === 'zh' ? '大市基準' : 'Baseline'}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span className="w-2 h-0.5 bg-nv-primary inline-block"></span>
                          <span>{lang === 'zh' ? 'AI 擬合' : 'AI Mode'}</span>
                        </span>
                      </div>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
                      {simulationResult && (
                        <svg viewBox="0 0 480 200" className="w-full h-full text-nv-hairline">
                          {/* Grid Lines */}
                          <line x1="15" y1="15" x2="465" y2="15" stroke="rgba(0,0,0,0.06)" />
                          <line x1="15" y1="100" x2="465" y2="100" stroke="rgba(0,0,0,0.06)" />
                          <line x1="15" y1="185" x2="465" y2="185" stroke="rgba(0,0,0,0.06)" />

                          {/* baseline curve drawing */}
                          <path
                             d={getSvgPathStr(simulationResult.chartData, 'baseline', minVal, maxVal)}
                             fill="none"
                             stroke="#898989"
                             strokeWidth="2"
                             strokeDasharray="4 3"
                          />

                          {/* simulated curve drawing */}
                          <path
                            d={getSvgPathStr(simulationResult.chartData, 'simulated', minVal, maxVal)}
                            fill="none"
                            stroke="#76b900"
                            strokeWidth="3.5"
                          />

                          {/* Data pointer dots */}
                          {(() => {
                            const size = simulationResult.chartData.length;
                            const dLast = simulationResult.chartData[size - 1];
                            const x = 465;
                            const normYSim = 200 - 15 - ((dLast.simulated - minVal) / (maxVal - minVal || 1)) * (200 - 30);
                            return (
                              <g>
                                <circle cx={x - 15} cy={normYSim} r="5" fill="#76b900" className="animate-ping" style={{ transformOrigin: `${x - 15}px ${normYSim}px` }} />
                                <circle cx={x - 15} cy={normYSim} r="3" fill="#76b900" />
                              </g>
                            );
                          })()}
                        </svg>
                      )}
                    </div>

                    <div className="flex justify-between font-mono text-[10px] text-nv-mute border-t border-nv-hairline pt-2">
                      <span>T=0 (TODAY)</span>
                      <span>T+{Math.round(timeHorizon / 2)}D</span>
                      <span>T+{timeHorizon}D (END)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Note info */}
            <div className="mt-8 bg-nv-surface-soft border border-nv-hairline p-4 rounded-[2px] flex items-start space-x-3 text-nv-mute text-xs leading-relaxed">
              <Info className="w-4 h-4 text-nv-primary flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'zh'
                  ? '重要披露：上述擬合訊號旨在展示由 Tauva Limited (無界雲彗有限公司) 承製的專有並行演算法在數學回溯時的加速驗證性能。並不對未來實際資本交易提供任何剛性保證聲明。'
                  : 'SFC Regulatory Disclosure: The signals generated from this terminal client demonstrate the structural calculation framework of Tauva Limited and should be used strictly for sandbox research, not direct solicitation.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
