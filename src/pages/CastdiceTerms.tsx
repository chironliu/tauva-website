/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CastdiceTermsProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

export default function CastdiceTerms({ lang }: CastdiceTermsProps) {
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
              {isZh ? '用戶協議與服務條款' : 'Terms of Service'}
            </h1>
            <p className="text-lg text-zinc-500 font-medium">
              {isZh ? '最後更新日期: 2026年7月21日' : 'Last Updated: July 21, 2026'}
            </p>
          </div>

          {/* Document Content */}
          {isZh ? (
            <article className="text-zinc-700 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-900">
                請仔細閱讀本用戶協議。下載、安裝或使用 CastDice 應用即表示您同意受這些條款的約束。這些條款旨在保護您的權益並明確我們的責任界限。
              </p>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">1. 服務概述與應用性質</h2>
                <p className="mb-4">
                  CastDice 是一個智能工具類應用，旨在幫助用戶分析信用卡消費並獲取最大化回饋的建議。
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 font-medium text-zinc-800">
                  <li>本應用提供的所有分析結果、信用卡推薦和回饋計算僅供參考，不構成任何形式的財務、投資、稅務或法律建議。</li>
                  <li>我們不保證推薦結果的絕對準確性，因為銀行政策和信用卡權益可能隨時發生變更。用戶在做出最終財務決策前，應以發卡銀行的官方信息為準。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">2. 許可與使用限制</h2>
                <p className="mb-4">
                  在您同意遵守本條款的前提下，Tauva Limited 授予您一項有限的、非排他性的、不可轉讓的許可，允許您在您擁有或控制的設備上使用本應用。您不得：
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>將本應用用於任何非法、欺詐或未經授權的目的。</li>
                  <li>反向工程、反編譯、反彙編或試圖獲取應用的源代碼。</li>
                  <li>利用本應用進行商業諮詢服務或向第三方收取費用。</li>
                  <li>干擾或破壞應用的安全功能或嘗試繞過本地數據加密。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">3. 數據與隱私</h2>
                <p className="mb-4">
                  我們尊重您的隱私並致力於保護您的個人數據。我們不會收集或在服務器上存儲您的信用卡號碼或敏感交易信息。所有核心數據均在您的設備本地進行加密存儲和處理。
                </p>
                <p>
                  清除應用緩存或卸載應用將導致所有本地存儲的消費記錄和設置被永久刪除且無法恢復。詳細信息請參閱我們的 <a href="#castdice/privacy" className="text-[#76b900] hover:underline font-medium">隱私政策</a>。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">4. 免責聲明</h2>
                <p className="mb-4 uppercase tracking-widest text-xs font-bold text-zinc-500">按「現狀」提供</p>
                <p className="mb-4">
                  本應用及其服務按「現狀（As Is）」和「現有（As Available）」提供，不作任何明示或暗示的保證。我們不保證服務將免受干擾、及時、安全或無錯誤。
                </p>
                <p>
                  Tauva Limited 在任何情況下均不對因您使用或無法使用本應用而導致的任何直接、間接、附帶、特殊、懲罰性或後果性損害（包括但不限於利潤損失、數據丟失或業務中斷）承擔責任。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">5. 條款修改與終止</h2>
                <p className="mb-4">
                  我們保留隨時修改本條款的權利。重大變更將通過應用內通知或網站更新的方式告知您。繼續使用本應用即表示您接受修改後的條款。
                </p>
                <p>
                  如果您違反本條款的任何規定，我們有權立即終止您對應用的使用許可，恕不另行通知。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">6. 聯繫方式</h2>
                <p>
                  如果您對本條款有任何疑問，請通過電子郵件與我們聯繫：
                  <a href="mailto:legal@tauva.hk" className="text-[#76b900] hover:underline ml-1 font-medium">legal@tauva.hk</a>。
                </p>
              </section>
            </article>
          ) : (
            <article className="text-zinc-700 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-900">
                Please read these Terms of Service carefully. By downloading, installing, or using the CastDice app, you agree to be bound by these terms.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">1. Service Overview</h2>
                <p className="mb-4">
                  CastDice is a smart tool designed to help users analyze credit card spending and maximize rewards.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 font-medium text-zinc-800">
                  <li>All analysis results and card recommendations are for reference only and do not constitute financial, investment, tax, or legal advice.</li>
                  <li>We do not guarantee absolute accuracy, as bank policies and rewards may change. Always verify with official bank information before making financial decisions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">2. License & Restrictions</h2>
                <p className="mb-4">
                  Subject to your compliance with these Terms, Tauva Limited grants you a limited, non-exclusive, non-transferable license to use the app. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use the app for illegal, fraudulent, or unauthorized purposes.</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code.</li>
                  <li>Use the app to provide commercial consulting services or charge third parties.</li>
                  <li>Interfere with security features or attempt to bypass local encryption.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">3. Data & Privacy</h2>
                <p className="mb-4">
                  We do not collect or store your credit card numbers on any servers. All core data is encrypted and processed locally on your device.
                </p>
                <p>
                  Uninstalling the app will permanently delete all locally stored records. For details, see our <a href="#castdice/privacy" className="text-[#76b900] hover:underline font-medium">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">4. Disclaimer of Warranties</h2>
                <p className="mb-4 uppercase tracking-widest text-xs font-bold text-zinc-500">Provided "As Is"</p>
                <p className="mb-4">
                  The app is provided on an "As Is" and "As Available" basis. We do not warrant that the service will be uninterrupted, secure, or error-free.
                </p>
                <p>
                  In no event shall Tauva Limited be liable for any damages (including loss of profits or data) arising from your use or inability to use the app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">5. Changes & Termination</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms. Continued use constitutes acceptance of updated terms.
                </p>
                <p>
                  We may terminate your license immediately without notice if you violate these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6">6. Contact</h2>
                <p>
                  If you have questions about these terms, contact us at:
                  <a href="mailto:legal@tauva.hk" className="text-[#76b900] hover:underline ml-1 font-medium">legal@tauva.hk</a>.
                </p>
              </section>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}