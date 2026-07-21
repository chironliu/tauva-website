/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TauvaPrivacyProps {
  lang: 'zh' | 'en';
}

export default function TauvaPrivacy({ lang }: TauvaPrivacyProps) {
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
              {isZh ? '隱私合規白皮書' : 'Privacy Policy'}
            </h1>
            <p className="text-lg text-zinc-500 font-medium">
              {isZh ? '最後更新日期: 2026年7月21日' : 'Last Updated: July 21, 2026'}
            </p>
          </div>

          {/* Document Content */}
          {isZh ? (
            <article className="text-zinc-400 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-300">
                Tauva Limited 致力於以最高標準保護您的數據隱私。本隱私合規白皮書旨在詳細說明我們在運營 AI 與金融計算集群時的數據處理準則。
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. 簡介與合規框架</h2>
                <p className="mb-4">
                  歡迎訪問 Tauva Limited 官方網站（以下簡稱「我們」或「Tauva」）。我們深知數據安全在金融與人工智能領域的核心地位。
                </p>
                <p>
                  本隱私政策嚴格遵循香港《個人資料（私隱）條例》（第486章）及相關金融監管機構（如香港證監會 SFC）的合規要求。我們作為數據控制者，對您的數據安全負有完全責任。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. 我們收集的數據範疇</h2>
                <p className="mb-4">基於「最小化收集」原則，我們僅在提供企業級服務時收集以下必要信息：</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>企業與聯繫人信息：</strong> 企業名稱、聯繫人姓名、企業郵箱、職務及通訊地址（僅限於業務諮詢與合作對接）。</li>
                  <li><strong>技術訪問數據：</strong> IP 地址、瀏覽器類型、訪問時間、以及對我們基礎設施 API 的調用日誌，用於防範 DDoS 攻擊及系統負載均衡。</li>
                  <li><strong>Cookies 與分析數據：</strong> 用於優化官網瀏覽體驗及分析流量來源，不包含可識別個人身份的敏感特徵。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. 數據的使用與處理</h2>
                <p className="mb-4">收集到的數據將嚴格限於以下用途：</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>回應您的商務諮詢，提供 AI 算力租賃及金融大語言模型（FinLLM）的技術支持。</li>
                  <li>進行內部審計、系統安全監控及防止未經授權的網絡入侵。</li>
                  <li>履行反洗錢 (AML) 及了解您的客戶 (KYC) 等法定合規義務。</li>
                </ul>
                <p className="font-bold text-zinc-300 mt-6">
                  核心承諾：我們絕不會將您的企業數據或個人資料出售、出租或交易給任何第三方廣告商。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. 基礎設施與數據安全</h2>
                <p className="mb-4">
                  Tauva 的核心計算集群部署於香港尖沙咀的高級別數據中心，並採取了極其嚴格的物理與網絡安全隔離措施：
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>端到端加密：</strong> 所有的網絡傳輸均採用 TLS 1.3 協議，靜態數據採用 AES-256 企業級加密。</li>
                  <li><strong>零信任架構：</strong> 內部系統採用零信任（Zero Trust）網絡架構，嚴格限制員工及第三方的數據訪問權限。</li>
                  <li><strong>隔離計算：</strong> 面向金融客戶的 FinLLM 模型訓練與推理均在物理隔離的私有 VPC 環境中進行，確保數據不被交叉污染。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. 跨境數據傳輸</h2>
                <p className="mb-4">
                  Tauva Limited 的主要數據存儲與處理均位於香港特別行政區。如果業務需要進行跨境數據傳輸，我們將嚴格遵守香港私隱專員公署發佈的《跨境資料轉移指引》，確保接收方提供不低於香港法定標準的數據保護。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. 您的數據權利與聯繫方式</h2>
                <p>
                  根據相關法律法規，您有權查閱、更正或要求刪除我們持有的關於您的個人資料。如需行使您的權利或對本隱私合規白皮書有任何疑問，請聯繫我們的數據隱私官 (DPO)：
                  <a href="mailto:privacy@tauva.hk" className="text-nv-primary hover:underline ml-1 font-medium">privacy@tauva.hk</a>。
                </p>
              </section>
            </article>
          ) : (
            <article className="text-zinc-400 leading-loose space-y-8">
              <p className="text-lg font-medium text-zinc-300">
                Tauva Limited is committed to protecting your data privacy at the highest standards. This Privacy Policy details our data processing guidelines when operating AI and financial computing clusters.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Introduction & Compliance Framework</h2>
                <p className="mb-4">
                  Welcome to the official website of Tauva Limited ("we", "us", or "Tauva"). We deeply understand the core importance of data security in the FinTech and AI sectors.
                </p>
                <p>
                  This Privacy Policy strictly complies with Hong Kong's Personal Data (Privacy) Ordinance (Cap. 486) and relevant financial regulatory requirements. As a data controller, we are fully responsible for your data security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Scope of Data Collection</h2>
                <p className="mb-4">Based on the "data minimization" principle, we only collect the following necessary information for enterprise services:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Corporate & Contact Info:</strong> Company name, contact person, corporate email, and address (strictly for business inquiries and partnerships).</li>
                  <li><strong>Technical Access Data:</strong> IP addresses, browser types, access times, and API invocation logs, used for DDoS prevention and load balancing.</li>
                  <li><strong>Cookies & Analytics:</strong> Used to optimize website browsing experience, containing no personally identifiable sensitive characteristics.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Use of Data</h2>
                <p className="mb-4">Collected data is strictly limited to the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Responding to business inquiries and providing technical support for AI computing and FinLLM services.</li>
                  <li>Internal auditing, system security monitoring, and preventing unauthorized network intrusions.</li>
                  <li>Fulfilling statutory compliance obligations such as AML and KYC.</li>
                </ul>
                <p className="font-bold text-zinc-300 mt-6">
                  Core Commitment: We will never sell, rent, or trade your corporate or personal data to any third-party advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Infrastructure & Security</h2>
                <p className="mb-4">
                  Tauva's core computing clusters are deployed in high-tier data centers in Tsim Sha Tsui, Hong Kong, with extreme physical and network security isolation:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>End-to-End Encryption:</strong> All network transmissions use TLS 1.3, and data at rest uses AES-256 enterprise-grade encryption.</li>
                  <li><strong>Zero Trust Architecture:</strong> Internal systems adopt a Zero Trust network architecture, strictly limiting data access permissions.</li>
                  <li><strong>Isolated Computing:</strong> FinLLM model training and inference for financial clients are conducted in physically isolated private VPC environments.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Cross-Border Data Transfer</h2>
                <p className="mb-4">
                  Tauva Limited's primary data storage and processing are located in the Hong Kong SAR. If business requires cross-border data transfer, we will strictly comply with the guidelines issued by the PCPD of Hong Kong.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Contact Us</h2>
                <p>
                  You have the right to access, correct, or request deletion of your personal data. To exercise your rights or if you have any questions, please contact our Data Privacy Officer (DPO) at:
                  <a href="mailto:privacy@tauva.hk" className="text-nv-primary hover:underline ml-1 font-medium">privacy@tauva.hk</a>.
                </p>
              </section>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
