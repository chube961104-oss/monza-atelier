import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Lock, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'private-viewing',
    city: 'Taipei',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-carbon-800/40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-rosso-scuderia uppercase tracking-widest px-3 py-1 rounded bg-rosso-corsa/10 border border-rosso-corsa/20">
            PRIVATE COMMISSION & INQUIRY
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight mt-4 mb-4">
            預約私密鑑賞與獵車委託
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            為維護每位層峰藏家的絕對隱私，MONZA ATELIER 採全面預約制。我們將依據您的需求安排一對一私人沙龍會晤。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="carbon-panel p-8 rounded-xl border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                私人會客據點與聯絡渠道
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-carbon-900/60 border border-white/5">
                  <MapPin className="w-5 h-5 text-rosso-corsa shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">台北私人車窖與會客展廳</div>
                    <div className="text-xs text-gray-400 mt-0.5">台北市信義區松仁路頂級私密會所（採預約邀請制）</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-carbon-900/60 border border-white/5">
                  <MapPin className="w-5 h-5 text-rosso-corsa shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">義大利馬拉內羅聯絡處 (Maranello)</div>
                    <div className="text-xs text-gray-400 mt-0.5">Via Abetone Inferiore, 41053 Maranello MO, Italy</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-carbon-900/60 border border-white/5">
                  <Phone className="w-5 h-5 text-giallo-modena shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">專屬禮賓經紀熱線</div>
                    <div className="text-xs font-mono text-gray-300 mt-0.5">+886 2 8780-XXXX ｜ VIP 專線直通</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-carbon-900/60 border border-white/5">
                  <Mail className="w-5 h-5 text-rosso-scuderia shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-white">私密電子郵件通道</div>
                    <div className="text-xs font-mono text-gray-300 mt-0.5">concierge@monza-atelier.com</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-carbon-900/90 border border-rosso-corsa/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-white font-mono">
                  <Lock className="w-4 h-4 text-rosso-corsa" />
                  <span>層峰隱私保密承諾 (Confidentiality)</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  所有來訪藏家身分、名下資產與交易標的，均受嚴格 NDA 保密條款保護，絕不對外公開揭露。
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="carbon-panel p-8 sm:p-10 rounded-xl border border-white/10">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">委託意向已成功送達</h3>
                  <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
                    感謝您的信賴。Monza Lin 創辦人與專屬禮賓秘書已接收您的諮詢，我們將於 24 小時內與您聯繫，確認私人會晤時程。
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded bg-carbon-700 hover:bg-carbon-600 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    發送新的委託
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider border-b border-white/10 pb-4">
                    填寫專屬諮詢意向表
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-2">貴賓姓名 / 尊稱 *</label>
                      <input
                        type="text"
                        required
                        placeholder="例：林總經理 / Mr. Lin"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-2">聯絡手機 / 電話 *</label>
                      <input
                        type="tel"
                        required
                        placeholder="09xx-xxx-xxx"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-2">電子郵件 Email</label>
                      <input
                        type="email"
                        placeholder="client@luxuryholding.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-2">諮詢服務類別 *</label>
                      <select
                        value={form.serviceInterest}
                        onChange={e => setForm({ ...form, serviceInterest: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                      >
                        <option value="private-viewing">在庫現車私人鑑賞 (In-Stock Viewing)</option>
                        <option value="global-sourcing">全球代客尋車委託 (Global Off-Market Sourcing)</option>
                        <option value="track-tuning">賽道交車與動態空力微調 (Dynamics Tuning)</option>
                        <option value="classiche">Ferrari Classiche 原廠古董車認證</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">預約會晤地點</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Taipei (台北)', 'Taichung (台中)', 'Milan / Maranello (義大利)'].map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setForm({ ...form, city: loc })}
                          className={`py-2 px-3 rounded text-xs font-mono text-center border transition-all ${
                            form.city === loc
                              ? 'border-rosso-corsa bg-rosso-corsa/10 text-white font-bold'
                              : 'border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-2">特定車款需求或資產標的備註</label>
                    <textarea
                      rows={3}
                      placeholder="請描述您心儀的法拉利車系（如 488 Pista、SP3、458 Speciale）或任何特殊訂製需求..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-rosso-corsa transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-rosso-corsa to-rosso-scuderia hover:from-rosso-scuderia hover:to-rosso-corsa text-white font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-rosso-corsa/30 hover:shadow-rosso-corsa/50 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>確認送出私密鑑賞委託</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
