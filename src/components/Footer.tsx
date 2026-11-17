export const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon-900 border-t border-white/10 pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-rosso-corsa to-rosso-dark flex items-center justify-center">
                <span className="font-display font-black text-white text-base">M</span>
              </div>
              <span className="font-display font-bold text-lg tracking-[0.2em] text-white">
                MONZA ATELIER
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-md leading-relaxed">
              以秒針丈量生命的獵馬人。前法拉利挑戰賽車手 Monza 親操創立之頂級超跑經紀沙龍。專注於極限賽道特規、自然進氣經典躍馬之私洽、賽道交車與資產託管。
            </p>
            <div className="font-mono text-[11px] text-gray-500">
              OPERATING HUBS: TAIPEI ｜ MILAN ｜ MARANELLO ｜ MONACO
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest font-semibold">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-rosso-corsa transition-colors">關於創辦人 Monza</a></li>
              <li><a href="#pedigree" className="hover:text-rosso-corsa transition-colors">米蘭理工學歷與賽道榮譽</a></li>
              <li><a href="#inventory" className="hover:text-rosso-corsa transition-colors">在庫躍馬典藏 (6 部神車)</a></li>
              <li><a href="#services" className="hover:text-rosso-corsa transition-colors">賽道交車與旗艦服務</a></li>
              <li><a href="#manifesto" className="hover:text-rosso-corsa transition-colors">創辦人自白（Founder's Manifesto）</a></li>
            </ul>
          </div>

          {/* Standards & Philosophy */}
          <div className="space-y-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-widest font-semibold">
              ENGINEERING CRITERIA
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>✦ 100% 賽道光學幾何雷射對焦</li>
              <li>✦ Ferrari Classiche 歷史匹配核驗</li>
              <li>✦ MoTeC 極限動態遙測實測履歷</li>
              <li>✦ 封閉賽道一對一極限教學交付</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>
            © {new Date().getFullYear()} MONZA ATELIER. All rights reserved. 
            <span className="block sm:inline sm:ml-2">
              Ferrari® 與躍馬標誌均為 Ferrari S.p.A. 之註冊商標。MONZA ATELIER 為獨立超跑藏家經紀與賽車工程工作室。
            </span>
          </p>
          <div className="flex items-center gap-1">
            <span>Engineered with passion for</span>
            <span className="text-rosso-scuderia font-semibold">Rosso Corsa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
