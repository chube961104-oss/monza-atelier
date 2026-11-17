import React from 'react';
import { Flag, Globe2, Wrench, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Flag,
      title: "Trackside Handover 賽道交車禮遇",
      subtitle: "全亞洲首創 ｜ 封閉賽道副駕動態交接",
      description: "交付一輛具備 700 匹以上馬力的猛獸，不應只在冷氣展廳簽名握手。在合法封閉賽道上，由 Monza 本人親自坐上副駕，帶您跑出車輛最後 1% 的真實潛能，並透過 MoTeC 遙測系統設定個人化循跡敏感度。",
      highlights: [
        "Monza 親自擔任賽道副駕指引與煞車點教學",
        "MoTeC 電子遙測數據分析車輛極限側向 G 值",
        "客製化四輪胎壓、阻尼硬度與轉向角度微調",
        "原廠認證賽車安全帽與賽車服量身套裝"
      ]
    },
    {
      icon: Globe2,
      title: "Global Off-Market Sourcing 全球私密獵車",
      subtitle: "非公開網絡 ｜ 歐美日層峰車庫直購",
      description: "最稀有的躍馬永遠不會出現在公開二手市場。Monza 憑藉多年在歐洲賽事累積的人脈網絡，直通義大利、摩納哥、瑞士與日本頂級藏家私人車窖，為您獵尋稀有特殊色、XX 賽道系列與未掛牌全新配額。",
      highlights: [
        "專屬一對一極致保密合約（NDA）簽署",
        "直接與第一手海外歐洲藏家家族接洽交涉",
        "提供完整車架無重大衝擊認證與遙測檢驗",
        "全套台灣空運/海運專案通關與法規諮詢"
      ]
    },
    {
      icon: Wrench,
      title: "Dynamics & Aerodynamics Tuning 賽道工程微調",
      subtitle: "米蘭理工工法 ｜ 極致空氣力學與底盤設定",
      description: "超跑原廠設定為考量全球公路通用性，多半留有妥協空間。Monza 工程團隊以賽車工程標準，針對台灣路況與特定賽道（如麗寶、大鵬灣）特性，微調主動式空力導流、傾角（Camber）、前束（Toe）與差速器鎖定反應。",
      highlights: [
        "高精密雷射光學四輪幾何定位與配重微調",
        "下壓力空力翼片角度動態阻力風阻比最佳化",
        "陶瓷煞車（CCM）熱衰竭臨界點監測與散熱導管升級",
        "由具備米蘭理工車輛工程背景技師團隊操刀"
      ]
    },
    {
      icon: Shield,
      title: "Ferrari Classiche & Escrow 原廠認證與資產託管",
      subtitle: "世代傳承 ｜ 匹配號碼（Matching Numbers）溯源",
      description: "經典法拉利是抗通膨的硬資產。我們協助藏家向馬拉內羅原廠申請 Ferrari Classiche 經典車紅皮書認證，並提供獨立恆溫、恆濕、24小時動態電流養護的頂級私密車窖代管，讓您的藏品資產隨歲月持續增值。",
      highlights: [
        "原廠底盤、引擎與變速箱號碼完整溯源鑑定",
        "馬拉內羅原廠檔案館歷史出廠配置檔案調閱",
        "台北與台中雙據點恆溫恆濕無塵私密車窖",
        "每季定期動態引擎運轉與液壓避震油封保養"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-carbon-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono text-rosso-scuderia uppercase tracking-widest px-3 py-1 rounded bg-rosso-corsa/10 border border-rosso-corsa/20">
            THE ATELIER PROTOCOLS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight mt-4 mb-4">
            專屬頂級旗艦服務
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            結合正統義大利工程底蘊與國際賽道實戰經驗，打造超越傳統經銷商的極致白手套尊榮服務。
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div
                key={index}
                className="carbon-panel p-8 sm:p-10 rounded-xl border border-white/10 hover:border-rosso-corsa/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-carbon-800 border border-white/10 flex items-center justify-center text-rosso-corsa group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">SERVICE 0{index + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:text-rosso-corsa transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-mono text-rosso-scuderia uppercase tracking-wider mb-4">
                    {srv.subtitle}
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {srv.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-rosso-scuderia shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors"
                  >
                    <span>諮詢此項專屬服務</span>
                    <ArrowRight className="w-3.5 h-3.5 text-rosso-corsa group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
