/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, MapPin, Send, HelpCircle, Check, Copy, AlertCircle } from 'lucide-react';
import { ContactFormInput } from '../types';

interface ContactSectionProps {
  lang: 'zh' | 'en';
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    company: '',
    subject: 'institutional-trading',
    message: '',
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Contact@tauva.hk');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Basic validation
    if (!formData.name.trim()) {
      setFormError(lang === 'zh' ? '请输入您的姓名' : 'Please provide your full name');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError(lang === 'zh' ? '请输入有效的电子邮箱' : 'Please provide a valid company email');
      return;
    }
    if (!formData.message.trim()) {
      setFormError(lang === 'zh' ? '请输入您的具体咨询或需求' : 'Please outline your query');
      return;
    }

    setIsSubmitting(true);

    // Simulate server side query submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'institutional-trading',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-nv-canvas text-nv-body px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Border block wrapper */}
        <div className="bg-nv-canvas p-8 sm:p-16 md:p-20 border border-nv-hairline rounded-[2px] relative overflow-hidden">
          {/* Signature Corner Square */}
          <div className="nv-corner-square top-0 left-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            
            {/* Left Box (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-block text-nv-primary font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  {lang === 'zh' ? '建立全球机密连接' : 'ESTABLISH SECURE LINK'}
                </div>
                <h2 className="text-4xl sm:text-[36px] font-bold tracking-tight text-nv-ink mb-6 leading-[1.25]">
                  {lang === 'zh' ? '联系我们' : 'Contact Us'}
                </h2>
                <p className="text-nv-mute text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
                  {lang === 'zh'
                    ? '准备好为您的机构组合引入下一代 AI 智能引擎了吗？我们的高级技术咨询团队将在极短时间内评估您的对接方案并建立专线测试账户。'
                    : 'Ready to elevate your portfolios with hyper-clocked quant algorithms? Securely leave your profile, our analysts will follow up.'}
                </p>

                {/* Contact Coordinates */}
                <div className="space-y-6">
                  {/* Dedicated Email Address Card with copy action */}
                  <div className="flex items-center p-4 bg-nv-surface-soft rounded-[2px] border border-nv-hairline group relative overflow-hidden">
                    <div className="w-10 h-10 flex items-center justify-center bg-nv-primary/10 text-nv-primary border border-nv-primary/20 rounded-[2px] mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-nv-mute uppercase tracking-widest font-mono">{lang === 'zh' ? '机构联系邮箱' : 'Global Inquiries Email'}</p>
                      <a href="mailto:Contact@tauva.hk" className="text-sm sm:text-base font-bold text-nv-ink hover:text-nv-primary transition truncate block font-mono">
                        Contact@tauva.hk
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 ml-2 hover:bg-nv-canvas border border-transparent hover:border-nv-hairline rounded-[2px] text-nv-mute hover:text-nv-primary transition cursor-pointer"
                      title={lang === 'zh' ? '复制邮箱地址' : 'Copy Email'}
                      id="copy-email-btn"
                    >
                      {copied ? <Check className="w-4 h-4 text-nv-primary" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Address coordinates */}
                  <div className="flex items-start p-4 bg-nv-surface-soft rounded-[2px] border border-nv-hairline">
                    <div className="w-10 h-10 flex items-center justify-center bg-nv-primary/10 text-nv-primary border border-nv-primary/20 rounded-[2px] mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-nv-mute uppercase tracking-widest font-mono">{lang === 'zh' ? '香港总部运营地址' : 'Hong Kong Headquarter'}</p>
                      <p className="text-sm font-semibold text-nv-ink leading-relaxed mt-0.5">
                        {lang === 'zh'
                          ? '香港九龙尖沙咀弥敦道核心商务大厦'
                          : 'Nathan Road, Tsim Sha Tsui, Kowloon, Hong Kong'}
                      </p>
                      <span className="text-[11px] text-nv-primary font-mono font-bold">
                        {lang === 'zh' ? '★ 直连葵涌和港交所核心算力网点' : '★ Colocated server gateways linked to Kwai Chung server matrix'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal advisory footer */}
              <div className="mt-12 lg:mt-0 font-mono text-[10px] text-nv-mute leading-relaxed border-t border-nv-hairline pt-6 uppercase font-bold">
                SECURE END-TO-END TLS ENCRYPTION ENABLED // INBOX RECON: SUCCESSFUL // REG_ID: TAUVA_HK_90A
              </div>
            </div>

            {/* Right Form (7 Columns) */}
            <div className="lg:col-span-7">
              {submitSuccess ? (
                /* Submission Success Banner Dialog */
                <div className="bg-nv-primary/10 border border-nv-primary/30 rounded-[2px] p-8 text-center flex flex-col items-center justify-center min-h-[380px] animate-fadeIn" id="contact-success-dialog">
                  <div className="w-16 h-16 bg-nv-primary/20 text-nv-primary rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-nv-ink mb-3">
                    {lang === 'zh' ? '咨询信息递交成功' : 'Transmission Completed'}
                  </h3>
                  <p className="text-nv-mute text-sm max-w-md mx-auto leading-relaxed mb-8">
                    {lang === 'zh'
                      ? '您的数据指标包裹已被位于尖沙咀弥敦道节点的服务器成功捕获，算法专员将在 1 小时内向您的企业电子邮箱发送回函及机密算力测试账户。'
                      : 'Our algorithm team in Nathan Road node has successfully logged your details. We will check compatibility thresholds shortly.'}
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 bg-nv-primary text-black font-bold text-xs uppercase tracking-wider rounded-[2px] hover:bg-nv-primary-dark transition-all cursor-pointer"
                  >
                    {lang === 'zh' ? '回返表单' : 'SUBMIT ANOTHER'}
                  </button>
                </div>
              ) : (
                /* Contact Form UI */
                <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
                  {formError && (
                    <div className="bg-nv-error/10 border border-nv-error/20 text-nv-error text-xs p-4 rounded-[2px] flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-nv-mute uppercase tracking-widest mb-2">
                        {lang === 'zh' ? '您的姓名' : 'Your name'} <span className="text-nv-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={lang === 'zh' ? '张经理' : 'e.g. John Doe'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-4 bg-nv-canvas border border-nv-hairline rounded-[2px] focus:border-nv-primary focus:ring-1 focus:ring-nv-primary outline-none text-nv-ink text-sm"
                        id="contact-field-name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-nv-mute uppercase tracking-widest mb-2">
                        {lang === 'zh' ? '机构电子邮箱' : 'Corporate Email'} <span className="text-nv-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@firm.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-4 bg-nv-canvas border border-nv-hairline rounded-[2px] focus:border-nv-primary focus:ring-1 focus:ring-nv-primary outline-none text-nv-ink text-sm"
                        id="contact-field-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-nv-mute uppercase tracking-widest mb-2">
                      {lang === 'zh' ? '企业 / 机构名称' : 'Institution / Firm Name'}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'zh' ? 'e.g. 亚太金融联合会 / 某资产管理机构' : 'e.g. Pacific Asset Management'}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-4 bg-nv-canvas border border-nv-hairline rounded-[2px] focus:border-nv-primary focus:ring-1 focus:ring-nv-primary outline-none text-nv-ink text-sm"
                      id="contact-field-company"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-nv-mute uppercase tracking-widest mb-2">
                      {lang === 'zh' ? '业务涉及咨询方向' : 'Intended Partnership Domain'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-4 bg-nv-canvas border border-nv-hairline rounded-[2px] text-sm text-nv-body outline-none focus:border-nv-primary cursor-pointer"
                      id="contact-field-subject"
                    >
                      <option value="institutional-trading">{lang === 'zh' ? '量化交易与算力赋能合作 (Neural Compute)' : 'Neural Quant Computing'}</option>
                      <option value="finllm-deployment">{lang === 'zh' ? 'FinLLM 机构私有大模型本地部署 (FinLLM Deployment)' : 'FinLLM Proprietary Deployment'}</option>
                      <option value="aegis-consulting">{lang === 'zh' ? 'Aegis 系统全面防空风控接入 (Risk Core Access)' : 'Total Risk Core Integration'}</option>
                      <option value="career">{lang === 'zh' ? '尖沙咀低延迟研究室招聘与加盟 (Recruitment)' : 'Talent Recruitment / Exchange'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-nv-mute uppercase tracking-widest mb-2">
                      {lang === 'zh' ? '您的具体咨询与技术指标需求描述' : 'Enquiry Description'} <span className="text-nv-primary">*</span>
                    </label>
                    <textarea
                      placeholder={lang === 'zh' ? '请简要列出您需要托管的资管容量、感兴趣的模型系列，或者在尖沙咀设立专柜的要求...' : 'Please specify estimated scale, asset class, or specific colocated network requests in Hong Kong...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full p-4 bg-nv-canvas border border-nv-hairline rounded-[2px] focus:border-nv-primary focus:ring-1 focus:ring-nv-primary outline-none text-nv-ink text-sm resize-none"
                      id="contact-field-message"
                    ></textarea>
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    className={`w-full py-4 rounded-[2px] font-bold uppercase text-xs tracking-widest text-center flex items-center justify-center space-x-2 transition-all duration-200 cursor-pointer ${
                      isSubmitting
                        ? 'bg-nv-surface-soft text-nv-ash border border-nv-hairline cursor-not-allowed'
                        : 'bg-nv-primary text-black hover:bg-nv-primary-dark shadow-none'
                    }`}
                    disabled={isSubmitting}
                    id="submit-consultation-btn"
                  >
                    <span>{isSubmitting ? (lang === 'zh' ? '计算数据上传中...' : 'TRANSMITTING...') : (lang === 'zh' ? '递交企业咨询' : 'TRANSMIT ENQUIRY')}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
