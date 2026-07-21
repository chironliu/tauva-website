/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TauvaTermsProps {
  lang: 'zh' | 'en';
}

export default function TauvaTerms({ lang }: TauvaTermsProps) {
  const isZh = lang === 'zh';

  return (
    <div className="bg-[#000000] text-zinc-300 min-h-screen font-sans selection:bg-nv-primary/30 selection:text-white">
      <main className="pt-28 md:pt-32 pb-32 relative z-10 w-full">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Back Button */}
          <div className="mb-12">
            <a href="#" className="group inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center mr-4 group-hover:-translate-x-1 transition-transform duration-300 shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm tracking-wide">
                {isZh ? '返回首頁' : 'Back to Home'}
              </span>
            </a>
          </div>

          {/* Page Header */}
          <div className="mb-16 pb-12 border-b border-white/10">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
              {isZh ? '法律服務條款' : 'Terms of Service'}
            </h1>
            <p className="text-lg text-zinc-500 font-medium">
              {isZh ? '最後更新日期: 2026年7月21日' : 'Last Updated: July 21, 2026'}
            </p>
          </div>

          {/* Document Content */}
          {isZh ? (
            <article className="text-zinc-400 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-300">
                請仔細閱讀本法律服務條款。訪問或使用 Tauva Limited 提供的任何網站、API 或計算服務，即表示您同意受這些條款的約束。
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. 服務範圍與性質</h2>
                <p className="mb-4">
                  Tauva Limited（以下簡稱「本公司」）為企業及機構客戶提供金融領域的人工智能計算、量化引擎 (NQ-Engine) 訪問及 FinLLM 大語言模型服務。
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>本公司提供的所有算法、模型輸出及計算結果僅供機構內部決策參考，不構成任何針對公眾的投資、稅務或法律建議。</li>
                  <li>客戶在將本公司的 API 輸出用於實際金融交易時，應自行承擔相應風險，並確保具備相關金融監管機構要求的資質與牌照。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. 許可與訪問限制</h2>
                <p className="mb-4">
                  在遵守本條款及雙方簽署的《服務級別協議 (SLA)》的前提下，本公司授予您非排他性的、不可轉讓的許可，允許您訪問和使用授權的基礎設施。您不得：
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>未經書面許可，轉售、分發或向任何第三方提供對本公司集群或 API 的訪問權限。</li>
                  <li>試圖進行反向工程、探測漏洞、或繞過我們設立的安全及流量限制機制。</li>
                  <li>利用本服務進行洗錢、市場操縱等任何違反香港及國際金融法規的活動。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. 知識產權聲明</h2>
                <p className="mb-4">
                  本網站、基礎架構、量化引擎及 FinLLM 平台中包含的所有內容、算法、數據庫設計、代碼及商標（包括但不限於「Tauva」、「Aegis」、「NQ-Engine」）的知識產權均歸 Tauva Limited 所有。未經明確授權，任何人不得複製或使用。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. 服務中斷與免責聲明</h2>
                <p className="mb-4 uppercase tracking-widest text-xs font-bold text-zinc-500">按「現狀」提供</p>
                <p className="mb-4">
                  我們努力提供 99.99% 的高可用性，但服務按「現狀」提供。我們不對因不可抗力、第三方互聯網故障或硬件損壞導致的延遲或數據丟失承擔責任。
                </p>
                <p>
                  在法律允許的最大範圍內，Tauva Limited 對因使用本公司計算結果或 API 造成的任何直接、間接或懲罰性損失（包括交易虧損、利潤損失）不承擔賠償責任。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. 適用法律與管轄權</h2>
                <p className="mb-4">
                  本條款受中華人民共和國香港特別行政區法律管轄並依其解釋。因本條款引起的任何爭議，雙方應首先尋求友好協商；協商不成的，應提交香港國際仲裁中心 (HKIAC) 根據其仲裁規則進行最終裁決。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. 聯繫與法務部</h2>
                <p>
                  如果您對本法律服務條款有任何疑問，或需要索取正式的 SLA 副本，請聯繫我們的法務與合規部門：
                  <a href="mailto:legal@tauva.hk" className="text-nv-primary hover:underline ml-1 font-medium">legal@tauva.hk</a>。
                </p>
              </section>
            </article>
          ) : (
            <article className="text-zinc-400 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-300">
                Please read these Terms of Service carefully. By accessing or using any website, API, or computing services provided by Tauva Limited, you agree to be bound by these terms.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Scope and Nature of Service</h2>
                <p className="mb-4">
                  Tauva Limited ("the Company") provides enterprise and institutional clients with AI computing, Quantitative Engine (NQ-Engine) access, and FinLLM language model services in the financial sector.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>All algorithms, model outputs, and computing results provided by the Company are strictly for institutional internal decision-making reference and do not constitute investment, tax, or legal advice to the public.</li>
                  <li>Clients utilizing the Company's API outputs for actual financial trading bear all corresponding risks and must ensure they hold the necessary qualifications required by relevant financial regulators.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. License and Access Restrictions</h2>
                <p className="mb-4">
                  Subject to these terms and any signed Service Level Agreement (SLA), the Company grants you a non-exclusive, non-transferable license to access the authorized infrastructure. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Resell, distribute, or provide third-party access to our clusters or APIs without written permission.</li>
                  <li>Attempt to reverse engineer, probe vulnerabilities, or bypass our security and traffic limitation mechanisms.</li>
                  <li>Use the service for money laundering, market manipulation, or any activity violating Hong Kong and international financial laws.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Intellectual Property</h2>
                <p className="mb-4">
                  All content, algorithms, database designs, code, and trademarks (including but not limited to "Tauva", "Aegis", "NQ-Engine") contained within this website, infrastructure, and platform are the intellectual property of Tauva Limited. No one may reproduce or use them without explicit authorization.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Service Interruption & Disclaimer</h2>
                <p className="mb-4 uppercase tracking-widest text-xs font-bold text-zinc-500">Provided "As Is"</p>
                <p className="mb-4">
                  While we strive for 99.99% high availability, the service is provided on an "As Is" basis. We are not liable for delays or data loss caused by force majeure, third-party internet failures, or hardware damage.
                </p>
                <p>
                  To the maximum extent permitted by law, Tauva Limited shall not be liable for any direct, indirect, or punitive damages (including trading losses or lost profits) arising from the use of our computing results or APIs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Applicable Law & Jurisdiction</h2>
                <p className="mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region of the PRC. Any dispute shall be submitted to the Hong Kong International Arbitration Centre (HKIAC) for final arbitration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Contact Legal Department</h2>
                <p>
                  If you have any questions about these terms or wish to request a formal copy of our SLA, please contact our Legal and Compliance Department at:
                  <a href="mailto:legal@tauva.hk" className="text-nv-primary hover:underline ml-1 font-medium">legal@tauva.hk</a>.
                </p>
              </section>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
