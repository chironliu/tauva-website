/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CreditCard, Shield, Lock, Zap, BarChart3, Camera, Smartphone, Globe, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CastdiceProductProps {
  lang: 'zh' | 'en';
}

export default function CastdiceProduct({ lang }: CastdiceProductProps) {
  const isZh = lang === 'zh';

  return (
    <section id="castdice" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden min-h-[100dvh]">
      
      {/* Premium Consumer Minimalist Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial gradient to create depth without dark harshness */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(118,185,0,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Product Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-zinc-200/50 rounded-3xl p-1.5 flex items-center justify-center">
              <div className="w-full h-full bg-zinc-50 rounded-[calc(1.5rem-0.375rem)] flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-zinc-800" />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <span className="rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-bold bg-[#76b900]/10 text-[#76b900] ring-1 ring-[#76b900]/20">
              {isZh ? 'Tauva 旗下產品' : 'By Tauva'}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 mb-6 drop-shadow-sm">
            CastDice
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-10 font-medium tracking-tight">
            {isZh 
              ? '智能信用卡消費決策助手。'
              : 'Intelligent Credit Card Decision Assistant.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center space-x-2 px-6 py-2.5 bg-white shadow-sm ring-1 ring-zinc-200 rounded-full hover:shadow-md transition-shadow">
              <Smartphone className="w-4 h-4 text-zinc-400" />
              <span className="text-zinc-600 font-mono text-xs tracking-wide">
                {isZh ? 'iOS 應用程式' : 'iOS Application'}
              </span>
            </div>
            <div className="inline-flex items-center space-x-2 px-6 py-2.5 bg-white shadow-sm ring-1 ring-zinc-200 rounded-full hover:shadow-md transition-shadow">
              <Smartphone className="w-4 h-4 text-[#76b900]" />
              <span className="text-zinc-600 font-mono text-xs tracking-wide">
                {isZh ? 'Android 應用程式' : 'Android Application'}
              </span>
            </div>
          </div>
        </div>

        {/* Apple-style Bento Grid for Consumer Product */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          {/* Main Feature - Large Visual Card */}
          <div className="md:col-span-8 group relative rounded-[2rem] bg-white shadow-[0_8px_40px_rgb(0,0,0,0.03)] ring-1 ring-zinc-100 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)]">
            <div className="p-10 md:p-12 h-full flex flex-col justify-between relative z-10">
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">
                  {isZh ? '您的專屬消費大腦' : 'Your Spending Brain'}
                </h3>
                <p className="text-zinc-500 max-w-md leading-relaxed">
                  {isZh 
                    ? '只需拍攝收據，AI 即可自動提取消費類別與金額，並為您推薦當前情境下回饋最高的信用卡。' 
                    : 'Simply snap a receipt, AI extracts the category and amount, recommending the highest-reward credit card for this exact scenario.'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                <div className="bg-zinc-50/80 rounded-2xl p-6 ring-1 ring-zinc-100 backdrop-blur-sm">
                  <Camera className="w-6 h-6 text-zinc-700 mb-4" />
                  <h4 className="text-base font-bold text-zinc-900 mb-1">{isZh ? '毫秒級收據識別' : 'Instant Recognition'}</h4>
                  <p className="text-sm text-zinc-500">{isZh ? '基於端側 ML Kit，離線安全處理' : 'On-device ML Kit, offline & secure'}</p>
                </div>
                <div className="bg-[#76b900]/5 rounded-2xl p-6 ring-1 ring-[#76b900]/10 backdrop-blur-sm">
                  <BarChart3 className="w-6 h-6 text-[#76b900] mb-4" />
                  <h4 className="text-base font-bold text-[#76b900] mb-1">{isZh ? '回饋收益最大化' : 'Maximize Returns'}</h4>
                  <p className="text-sm text-zinc-600">{isZh ? '智能匹配數百張卡片權益' : 'Smart matching with hundreds of card benefits'}</p>
                </div>
              </div>
            </div>
            
            {/* Decorative gradient corner */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#76b900]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          {/* Privacy & Security - Small Stacked Card */}
          <div className="md:col-span-4 group rounded-[2rem] bg-white shadow-[0_8px_40px_rgb(0,0,0,0.03)] ring-1 ring-zinc-100 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] relative">
            <div className="p-10 h-full flex flex-col justify-center text-center relative z-10">
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-zinc-100">
                <Lock className="w-8 h-8 text-zinc-800" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">
                {isZh ? '隱私與數據安全' : 'Privacy & Data Security'}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                {isZh 
                  ? '所有敏感消費數據與信用卡資訊均在本地採用 AES-256 加密存儲。我們無法讀取您的數據。' 
                  : 'All sensitive spending data and card info are encrypted locally via AES-256. We cannot read your data.'}
              </p>
              
              <ul className="space-y-3 text-sm text-zinc-600 text-left w-max mx-auto">
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#76b900] mr-3 flex-shrink-0" /> {isZh ? '本地數據存儲' : 'Local Storage Only'}</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#76b900] mr-3 flex-shrink-0" /> {isZh ? '隱私清單合規' : 'Privacy Manifest Compliant'}</li>
                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#76b900] mr-3 flex-shrink-0" /> {isZh ? '無雲端備份' : 'No Cloud Backup'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer & Action Section */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
            {isZh
              ? '免責聲明：CastDice 是一個工具類應用，僅提供信用卡使用分析和建議參考。本應用不提供金融建議，重要財務決策請諮詢專業金融顧問。'
              : 'Disclaimer: CastDice is a tool app that provides reference suggestions only. This application does not provide financial advice.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#castdice/privacy" 
              className="px-6 py-3 bg-white text-zinc-700 font-medium rounded-full hover:bg-zinc-50 active:scale-95 transition-all shadow-sm ring-1 ring-zinc-200 text-sm"
            >
              {isZh ? '隱私政策' : 'Privacy Policy'}
            </a>
            
            <a 
              href="#castdice/terms" 
              className="px-6 py-3 bg-white text-zinc-700 font-medium rounded-full hover:bg-zinc-50 active:scale-95 transition-all shadow-sm ring-1 ring-zinc-200 text-sm"
            >
              {isZh ? '用戶條款' : 'Terms of Service'}
            </a>
            
            <a 
              href="#contact" 
              className="group/btn flex items-center px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 active:scale-95 transition-all shadow-lg"
            >
              <span className="font-bold tracking-wide mr-2 text-sm">{isZh ? '商業合作' : 'Business Inquiry'}</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}