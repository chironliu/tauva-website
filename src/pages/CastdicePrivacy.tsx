/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CastdicePrivacyProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

export default function CastdicePrivacy({ lang }: CastdicePrivacyProps) {
  const isZh = lang === 'zh';

  return (
    <div className="bg-white text-zinc-900 min-h-screen font-sans selection:bg-[#76b900]/20 selection:text-zinc-900">
      <main className="pt-28 md:pt-32 pb-32 relative z-10 w-full">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Back Button */}
          <div className="mb-12">
            <a href="#castdice" className="group inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-zinc-50 ring-1 ring-zinc-200 flex items-center justify-center mr-4 group-hover:-translate-x-1 transition-transform duration-300 shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm tracking-wide">
                {isZh ? '返回 CastDice' : 'Back to CastDice'}
              </span>
            </a>
          </div>

          {/* Page Header */}
          <div className="mb-16 pb-12 border-b border-zinc-200">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-zinc-900">
              {isZh ? '隱私政策' : 'Privacy Policy'}
            </h1>
            <p className="text-lg text-zinc-500 font-medium">
              {isZh ? '最後更新日期: 2026年7月21日' : 'Last Updated: July 21, 2026'}
            </p>
          </div>

          {/* Document Content */}
          {isZh ? (
            <article className="text-zinc-700 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-900">
                您的個人數據安全是我們的核心承諾。本政策旨在說明 CastDice 應用程序如何收集、使用、存儲和保護您的個人信息。
              </p>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">1. 簡介</h2>
                <p className="mb-4">
                  歡迎使用 CastDice（以下簡稱「我們」或「本應用」）。我們非常重視您的隱私權，並致力於保護您的個人數據。了解您的需求有助於我們提供智能且高效的信用卡消費決策服務。
                </p>
                <p>
                  我們是您的數據控制者。本政策詳細說明了我們在您使用 CastDice 時的數據處理實踐。使用本應用即表示您同意本政策中描述的數據收集和使用方式。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">2. 我們收集的信息</h2>
                <p className="mb-4">我們僅在提供核心服務所需的最小範圍內收集信息，且絕大部分數據處理均在您的設備本地完成：</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>信用卡基本信息：</strong> 用戶主動輸入的卡片名稱、類型及權益偏好（不包含卡號、安全碼等敏感金融信息）。</li>
                  <li><strong>消費與收據數據：</strong> 通過攝像頭拍攝或相冊導入的收據圖像，僅用於本地機器學習（ML Kit）識別消費類別和金額。</li>
                  <li><strong>設備與技術數據：</strong> 設備型號、操作系統版本及基本的應用崩潰日誌（需您授權），用於改善應用穩定性。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">3. 數據使用方式</h2>
                <p className="mb-4">我們收集的數據嚴格用於以下目的：</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>提供信用卡回饋最優解的智能匹配與計算。</li>
                  <li>分析和提取收據上的消費信息（完全在本地運行）。</li>
                  <li>提升和優化應用的用戶體驗及準確度。</li>
                </ul>
                <p className="font-bold text-zinc-900 mt-6">
                  鄭重聲明：我們絕不會將您的個人數據、消費記錄或信用卡偏好出售、出租或交易給任何第三方廣告商。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">4. 本地存儲與數據安全</h2>
                <p className="mb-4">
                  CastDice 採用「隱私設計 (Privacy by Design)」架構。我們不依賴雲端服務器存儲您的核心敏感數據。
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>本地加密：</strong> 所有信用卡偏好及消費記錄均採用 AES-256 加密標準存儲在您的 iOS / Android 設備本地。</li>
                  <li><strong>離線處理：</strong> 收據圖像的 OCR 識別完全基於端側 (On-device) 機器學習模型，照片不會上傳至任何外部服務器。</li>
                  <li><strong>無雲端備份：</strong> 除非您主動使用系統級別的備份功能（如 iCloud/Google Drive），否則我們不會自動將數據同步至雲端。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">5. Apple 與 Google 隱私合規</h2>
                <p className="mb-4">
                  我們嚴格遵守 App Store 及 Google Play 的隱私政策指南：
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>提供完整的隱私清單（Privacy Manifest）。</li>
                  <li>僅在您明確授權的情況下請求相機或相冊權限。</li>
                  <li>應用內提供一鍵「刪除所有本地數據」的功能。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">6. 聯繫我們</h2>
                <p>
                  如果您對本隱私政策有任何疑問、意見或需要行使您的數據權利，請通過電子郵件與我們的隱私保護團隊聯繫：
                  <a href="mailto:privacy@tauva.hk" className="text-[#76b900] hover:underline ml-1 font-medium">privacy@tauva.hk</a>。
                </p>
              </section>
            </article>
          ) : (
            <article className="text-zinc-700 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-900">
                Your personal data security is our core commitment. This policy explains how the CastDice application collects, uses, stores, and protects your personal information.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to CastDice ("we", "us", or "our"). We highly value your privacy and are committed to protecting your personal data. Understanding your needs helps us provide intelligent and efficient credit card spending decisions.
                </p>
                <p>
                  We act as your data controller. This policy details our data practices when you use CastDice. By using the app, you agree to the data collection and usage described herein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">2. Information We Collect</h2>
                <p className="mb-4">We only collect information within the minimum scope necessary to provide our core services, and almost all data processing is done locally on your device:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Credit Card Basics:</strong> Card names, types, and reward preferences actively entered by you (excluding sensitive financial info like card numbers or CVV).</li>
                  <li><strong>Spending & Receipts:</strong> Receipt images captured via camera or imported from albums are used strictly for local ML Kit recognition of categories and amounts.</li>
                  <li><strong>Device & Technical Data:</strong> Device models, OS versions, and basic crash logs (with your consent) used to improve app stability.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">3. How We Use Your Data</h2>
                <p className="mb-4">Collected data is strictly used for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Providing intelligent matching and calculation for maximum credit card rewards.</li>
                  <li>Analyzing and extracting spending information from receipts (running entirely locally).</li>
                  <li>Improving and optimizing the app's user experience and accuracy.</li>
                </ul>
                <p className="font-bold text-zinc-900 mt-6">
                  Declaration: We will never sell, rent, or trade your personal data, spending records, or credit card preferences to any third-party advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">4. Local Storage & Security</h2>
                <p className="mb-4">
                  CastDice adopts a "Privacy by Design" architecture. We do not rely on cloud servers to store your core sensitive data.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Local Encryption:</strong> All card preferences and spending records are stored locally on your iOS/Android device using AES-256 encryption.</li>
                  <li><strong>Offline Processing:</strong> Receipt OCR recognition is entirely based on on-device machine learning models. Photos are never uploaded to external servers.</li>
                  <li><strong>No Cloud Backup:</strong> Unless you actively use system-level backups (e.g., iCloud/Google Drive), we do not automatically sync data to the cloud.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">5. Apple & Google Compliance</h2>
                <p className="mb-4">
                  We strictly comply with the privacy guidelines of the App Store and Google Play:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Providing a comprehensive Privacy Manifest.</li>
                  <li>Requesting camera or album permissions only with your explicit authorization.</li>
                  <li>Providing a one-click "Delete All Local Data" feature within the app.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">6. Contact Us</h2>
                <p>
                  If you have any questions, comments about this privacy policy, or wish to exercise your data rights, please contact our privacy team via email: 
                  <a href="mailto:privacy@tauva.hk" className="text-[#76b900] hover:underline ml-1 font-medium">privacy@tauva.hk</a>.
                </p>
              </section>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}