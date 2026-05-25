/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Solution {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  iconName: string; // Lucide icon identifier
  details: string[];
  detailsEn: string[];
  tag: string;
}

export interface SimulationAsset {
  symbol: string;
  name: string;
  nameEn: string;
  currentPrice: number;
  dailyChange: number;
  volatility: number;
}

export interface SimulationResult {
  assetSymbol: string;
  strategy: 'neural-momentum' | 'adaptive-risk' | 'predictive-hft';
  projectedReturn: number;
  confidence: number;
  executionTimeMs: number;
  riskScore: number;
  recommendation: 'STRONG_BUY' | 'ACCUMULATE' | 'NEUTRAL' | 'HEDGE';
  chartData: { time: string; baseline: number; simulated: number }[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
