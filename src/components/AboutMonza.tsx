import React, { useState } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  BookOpen, 
  Gauge, 
  Compass, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Flame,
  FileCheck,
  User,
  ShieldCheck,
  Flag
} from 'lucide-react';
import { MONZA_PROFILE } from '../data/monzaProfile';

export const AboutMonza: React.FC = () => {
  const [portraitSrc, setPortraitSrc] = useState<string>(
    MONZA_PROFILE.portraitImage
  );

  return (
    <section id="about" className="py-24 bg-carbon-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rosso-corsa/10 border border-rosso-corsa/20 text-rosso-corsa text-xs font-semibold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>The Founder & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
            關於創辦人 蒙札（Monza）
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            米蘭理工車輛工程碩士 × 前 Ferrari Challenge 領獎台車手 × 終極躍馬藏家私洽顧問
          </p>
        </div>

        {/* Founder Story Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Column: Visual Portrait / Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing backing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-rosso-corsa via-rosso-scuderia to-giallo-modena rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
              
              <div className="relative carbon-panel rounded-xl overflow-hidden border border-white/10 p-5 sm:p-7 shadow-2xl">
                {/* 創辦人真人肖像照展示框 (約 50 歲義大利血統前業餘賽車手，身穿碳灰賽車夾克與蒙札賽道風) */}
                <div className="relative h-[420px] sm:h-[460px] rounded-lg overflow-hidden mb-6 bg-black border border-white/10 group-hover:border-rosso-corsa/40 transition-colors duration-500 shadow-2xl">
                  <img 
                    src={portraitSrc}
                    onError={() => {
                      if (portraitSrc !== MONZA_PROFILE.portraitImage) {
                        setPortraitSrc(MONZA_PROFILE.portraitImage);
                      }
                    }}
                    alt="Monza Lin 創辦人真人肖像 - 50歲義大利血統前業餘賽車手" 
                    className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-700 filter contrast-105 brightness-95"
                  />
                  
                  {/* Subtle cinema vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-black/35 pointer-events-none"></div>
                  
                  {/* Top-left Badge: Official Portrait Stamp */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-xs text-white font-mono shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-rosso-corsa animate-pulse" />
                    <span className="font-bold text-rosso-scuderia">創辦人肖像</span>
                    <span className="text-gray-400">｜</span>
                    <span className="text-[11px] text-gray-200">Founder Portrait</span>
                  </div>

                  {/* Top-right Badge: Monza Paddock Heritage */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300">
                    <Flag className="w-3 h-3 text-rosso-corsa" />
                    <span>Monza Paddock</span>
                  </div>

                  {/* Bottom Portrait Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-rosso-scuderia uppercase tracking-wider mb-0.5 font-semibold">
                        50 Y.O. ｜ Italian-Taiwanese Heritage
                      </div>
                      <div className="text-white font-display font-bold text-2xl sm:text-3xl tracking-wide drop-shadow-md">
                        Monza Lin (林蒙札)
                      </div>
                      <div className="text-xs text-gray-300 font-mono mt-0.5">
                        Former Amateur Challenge Racer & Engineer
                      </div>
                    </div>
                    <div className="px-2.5 py-1.5 rounded bg-black/85 backdrop-blur-md border border-rosso-corsa/30 text-[11px] font-mono text-giallo-modena font-semibold shadow-lg text-right shrink-0">
                      <div>FIA Super License C</div>
                      <div className="text-[9px] text-gray-400 font-normal">Paddock Certified</div>
                    </div>
                  </div>
                </div>

                {/* Identity Highlights Table */}
                <div className="space-y-2.5 font-mono text-xs text-gray-300">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">年齡與血統 / HERITAGE</span>
                    <span className="text-white font-medium">50 歲 ｜ 義大利波隆那 × 台灣</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">賽道基地 / BASES</span>
                    <span className="text-white font-medium">Monza ｜ Maranello ｜ Milan ｜ Taipei</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">最高學歷 / ALMA MATER</span>
                    <span className="text-white font-medium">Politecnico di Milano (車輛工程碩士)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">核心專長 / SPECIALIZATION</span>
                    <span className="text-white font-medium">極限空氣力學 ＆ 賽道動態調校</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500">賽道戰袍 / SIGNATURE GEAR</span>
                    <span className="text-rosso-scuderia font-medium">碳灰賽車夾克 ｜ 488 Challenge EVO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide leading-snug">
              「我們不是在販售超跑，而是在替真正的車手交付靈魂。」
            </h3>

            <p className="text-gray-300 leading-relaxed font-light text-base">
              在義大利，汽車不是一種代步工具，而是一種近乎宗教般的藝術信仰。創辦人 <span className="text-white font-semibold">Monza</span> 現年 50 歲，具備深厚的義大利波隆那與台灣雙重家族血緣，早年於義大利著名的米蘭理工大學攻讀車輛工程碩士，深度扎根於義大利 Motor Valley（馬拉內羅與博洛尼亞）賽車工業心臟，專注於極限狀態下的地面效應空氣力學與懸吊阻尼動態模型。
            </p>

            <p className="text-gray-300 leading-relaxed font-light text-base">
              身為前業餘賽車手，Monza 曾多年征戰歐洲方程式與 Ferrari Challenge Trofeo Pirelli 挑戰賽，並在被譽為「速度神殿」的蒙札賽道 (Autodromo Nazionale Monza) 與比利時斯帕賽道多次斬獲分站冠軍與桿位榮譽。累積超過 15 年賽道調校經驗的他，回到亞洲創辦 MONZA ATELIER，致力於打破傳統中古超跑市場的不透明黑箱，專為層峰藏家尋找並調校具備賽道靈魂的極限躍馬。
            </p>

            <div className="p-5 rounded-lg bg-carbon-800/70 border-l-2 border-rosso-corsa space-y-2.5">
              <div className="text-white font-semibold text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rosso-corsa" />
                <span>Monza 創辦人的三大技術堅持：</span>
              </div>
              <ul className="text-xs text-gray-300 space-y-2 list-none pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rosso-scuderia shrink-0 mt-0.5" />
                  <span><strong className="text-white">零事故賽道機械檢驗：</strong> 親自使用賽道級遙測與底盤幾何光學儀器，確保碳纖維單體座艙與主動空力 100% 完美。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rosso-scuderia shrink-0 mt-0.5" />
                  <span><strong className="text-white">歷史與號碼匹配 (Matching Numbers)：</strong> 凡經手經典自然進氣與限量車款，皆通過 Ferrari Classiche 原廠嚴格認證。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rosso-scuderia shrink-0 mt-0.5" />
                  <span><strong className="text-white">封閉賽道極限交車儀式：</strong> 全亞洲唯一於封閉賽道親自坐上副駕，陪伴車主釋放最後 1% 人車合一極限潛力的交車模式。</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#manifesto"
                className="inline-flex items-center gap-2 text-rosso-scuderia hover:text-white font-medium text-sm transition-colors group"
              >
                <span>閱讀完整創辦人自白（Founder's Manifesto）</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Academic & Motorsport Pedigree Timeline */}
        <div id="pedigree" className="pt-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              學術背景與賽道全履歷
            </h3>
            <p className="text-gray-400 text-sm mt-2 font-mono">ACADEMIC EXCELLENCE & MOTORSPORT RECORD</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Academic Training */}
            <div className="carbon-panel p-8 rounded-lg border border-white/5 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-rosso-corsa">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">學術與工程訓練</h4>
                  <p className="text-xs text-gray-400 font-mono">Vehicle Dynamics & Aerodynamics</p>
                </div>
              </div>

              <div className="space-y-6">
                {MONZA_PROFILE.education.map((edu, index) => (
                  <div key={index} className="space-y-2 border-l border-white/10 pl-4 relative">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-rosso-corsa" />
                    <div className="text-xs font-mono text-rosso-scuderia">{edu.period}</div>
                    <div className="text-base font-bold text-white">{edu.institution}</div>
                    <div className="text-sm text-gray-300 font-medium">{edu.degree}</div>
                    <div className="text-xs text-gray-400 italic">研究方向：{edu.focus}</div>
                    <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside pt-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Racing Track Record */}
            <div className="carbon-panel p-8 rounded-lg border border-white/5 space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-giallo-modena">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">賽道競技戰績</h4>
                  <p className="text-xs text-gray-400 font-mono">Ferrari Challenge & GT Honors</p>
                </div>
              </div>

              <div className="space-y-6">
                {MONZA_PROFILE.racingRecords.map((race, index) => (
                  <div key={index} className="space-y-2 border-l border-white/10 pl-4 relative">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-giallo-modena" />
                    <div className="text-xs font-mono text-giallo-modena">{race.year}</div>
                    <div className="text-base font-bold text-white">{race.series}</div>
                    <div className="text-sm text-gray-300 font-medium">擔綱角色：{race.role}</div>
                    <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside pt-1">
                      {race.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Official Factory Certifications */}
          <div className="carbon-panel p-8 rounded-lg border border-white/10 mb-20">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
              <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-rosso-scuderia">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider font-display">原廠官方資格與國際授權背書</h4>
                <p className="text-xs text-gray-400 font-mono">OFFICIAL FACTORY CERTIFICATIONS</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MONZA_PROFILE.certifications.map((cert, index) => (
                <div key={index} className="p-5 rounded bg-carbon-800/80 border border-white/5 space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-rosso-corsa/10 text-rosso-scuderia border border-rosso-corsa/20">
                    {cert.badge}
                  </span>
                  <div className="font-bold text-white text-base">{cert.title}</div>
                  <div className="text-xs text-gray-400 font-mono">頒發機構：{cert.issuer}</div>
                  <p className="text-xs text-gray-300 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder's Manifesto Reading Block */}
          <div id="manifesto" className="max-w-4xl mx-auto carbon-panel p-8 sm:p-12 rounded-lg border border-rosso-corsa/30 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-rosso-corsa text-white font-mono text-xs font-bold uppercase tracking-widest shadow-lg shadow-rosso-corsa/50">
              Founder's Manifesto ｜ 創辦人自白
            </div>

            <div className="space-y-6 pt-4 text-gray-200 font-light leading-relaxed text-base sm:text-lg">
              <h4 className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-8">
                《在極限之外，尋找那匹屬於你的躍馬》
              </h4>

              {MONZA_PROFILE.manifestoParagraphs.map((para, i) => (
                <p key={i} className="first-letter:text-4xl first-letter:font-display first-letter:text-rosso-corsa first-letter:mr-1">
                  {para}
                </p>
              ))}

              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 text-sm font-mono text-gray-400">
                <div>
                  <span className="text-gray-500">SIGNATURE: </span>
                  <span className="text-white font-bold font-display text-lg tracking-wider ml-1">Monza 蒙札</span>
                </div>
                <div className="mt-2 sm:mt-0 text-xs text-rosso-scuderia">
                  MONZA ATELIER FOUNDER & PRINCIPAL
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
