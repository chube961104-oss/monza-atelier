import React from 'react';
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
  FileCheck
} from 'lucide-react';
import { MONZA_PROFILE } from '../data/monzaProfile';

export const AboutMonza: React.FC = () => {
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
              <div className="absolute -inset-1 bg-gradient-to-r from-rosso-corsa to-giallo-modena rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative carbon-panel rounded-lg overflow-hidden border border-white/10 p-6 sm:p-8">
                <div className="relative h-96 rounded overflow-hidden mb-6 bg-carbon-800">
                  <img 
                    src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80" 
                    alt="Monza Trackside" 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-rosso-scuderia uppercase tracking-wider">FIA Super License C</div>
                      <div className="text-white font-display font-bold text-xl">Monza Lin</div>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300">
                      Paddock Certified
                    </div>
                  </div>
                </div>

                {/* Identity Highlights */}
                <div className="space-y-3 font-mono text-xs text-gray-300">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">HOMELAND / BASES</span>
                    <span className="text-white font-medium">Maranello ｜ Milan ｜ Taipei</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">ACADEMIC ALMA MATER</span>
                    <span className="text-white font-medium">Politecnico di Milano (M.Sc.)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-gray-500">SPECIALIZATION</span>
                    <span className="text-white font-medium">Aerodynamics & Chassis Tuning</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500">PREFERRED WEAPON</span>
                    <span className="text-rosso-scuderia font-medium">Ferrari 488 Challenge / SP3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-wide">
              「我們不是在販售超跑，而是在替真正的車手交付靈魂。」
            </h3>

            <p className="text-gray-300 leading-relaxed font-light text-base">
              在義大利，汽車不是一種交通工具，而是一種近乎宗教般的藝術信仰。創辦人 <span className="text-white font-semibold">Monza</span> 於米蘭理工大學攻讀車輛工程碩士期間，便深度參與義大利 Motor Valley（馬拉內羅與博洛尼亞）頂尖工程研發專案，專注於極限狀態下的地面效應空氣力學與懸吊阻尼動態模型。
            </p>

            <p className="text-gray-300 leading-relaxed font-light text-base">
              結束歐洲方程式與 Ferrari Challenge 多年征戰後，Monza 帶著 4 座分站冠軍獎盃與原廠最高級別教練認證回到亞洲。他發現傳統超跑交易充斥著投機炒作與資訊黑箱，許多車主擁有了法拉利，卻從未體會過它在極限狀態下那種人車合一的戰慄感。
            </p>

            <div className="p-5 rounded bg-carbon-800/60 border-l-2 border-rosso-corsa space-y-2">
              <div className="text-white font-semibold text-sm">Monza 的三大堅持：</div>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                <li><strong className="text-white">零事故機械檢驗：</strong> 親自使用賽道級遙測與底盤幾何光學儀器，確保單體座艙與主動空力 100% 完美。</li>
                <li><strong className="text-white">歷史與號碼匹配 (Matching Numbers)：</strong> 凡經手經典車款，皆具備 Ferrari Classiche 原廠認證。</li>
                <li><strong className="text-white">親授極限交車儀式：</strong> 全亞洲唯一於封閉賽道親自坐上副駕，陪伴車主釋放最後 1% 潛力的交車模式。</li>
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
