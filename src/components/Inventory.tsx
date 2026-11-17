import React, { useState } from 'react';
import { CarModel } from '../data/cars';
import { 
  Zap, 
  Flame,
  ArrowUpRight,
  Database
} from 'lucide-react';

interface InventoryProps {
  cars: CarModel[];
  onSelectCar: (car: CarModel) => void;
  onOpenAdmin: () => void;
}

export const Inventory: React.FC<InventoryProps> = ({ cars, onSelectCar, onOpenAdmin }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全系列在庫躍馬 (All Stable)' },
    { id: 'icona', label: 'Icona 限量系列 (SP3 / SP2)' },
    { id: 'track', label: 'XX & 賽道特規 (SF90 XX / Pista)' },
    { id: 'hybrid', label: '最新油電混動 (296 GTB)' },
    { id: 'classic', label: '經典自然進氣收藏 (458 Speciale)' },
  ];

  const filteredCars = activeCategory === 'all'
    ? cars
    : cars.filter(car => car.category === activeCategory);

  return (
    <section id="inventory" className="py-24 bg-carbon-800/50 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rosso-corsa/10 border border-rosso-corsa/20 text-rosso-corsa text-xs font-semibold tracking-widest uppercase mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>The Curated Stable</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              在庫躍馬典藏與私洽配額
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light mt-2">
              每一部車輛均由 Monza 親自進行賽道級遙測與底盤幾何檢驗，具備不可複製的極限品相。
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="text-xs font-mono text-gray-300 hover:text-white bg-carbon-900 hover:bg-carbon-700 px-3.5 py-2 rounded-full border border-white/10 hover:border-giallo-modena/50 transition-colors flex items-center gap-2"
            >
              <Database className="w-3.5 h-3.5 text-giallo-modena" />
              <span>管理資料庫 (CRUD)</span>
            </button>
            <span className="text-xs font-mono text-gray-400 bg-carbon-900 px-4 py-2 rounded-full border border-white/10">
              在庫展示：<span className="text-rosso-scuderia font-bold">{filteredCars.length}</span> 部
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-rosso-corsa text-white shadow-lg shadow-rosso-corsa/30'
                  : 'bg-carbon-900 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="carbon-panel rounded-lg overflow-hidden border border-white/10 flex flex-col carbon-panel-hover group"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-carbon-900">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-transparent to-transparent opacity-80" />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md ${
                    car.status === 'In Stock'
                      ? 'bg-emerald-500/80 text-white'
                      : car.status === 'Reserved'
                      ? 'bg-amber-500/80 text-white'
                      : 'bg-rosso-corsa/90 text-white'
                  }`}>
                    {car.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono text-gray-300 bg-carbon-900/80 backdrop-blur-md border border-white/10">
                    {car.year} ｜ {car.categoryLabel}
                  </span>
                </div>

                {/* Specs overlay on hover */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-gray-300 bg-carbon-900/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                  <div className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-giallo-modena" />
                    <span>{car.power.split(' ')[0]} cv</span>
                  </div>
                  <div>0-100: <span className="text-white font-semibold">{car.acceleration.replace('0-100 km/h: ', '')}</span></div>
                  <div>極速: <span className="text-white font-semibold">{car.topSpeed}</span></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-rosso-corsa transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">{car.subtitle}</p>

                  {/* Engine Details */}
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>動力心臟</span>
                      <span className="text-gray-200 font-medium truncate max-w-[180px]">{car.engine}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>里程與外觀</span>
                      <span className="text-gray-200 font-medium">{car.mileage.split(' ')[0]} ｜ {car.exteriorColor.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>底盤編號</span>
                      <span className="text-mono text-[11px] text-gray-300">{car.chassisCode}</span>
                    </div>
                  </div>

                  {/* Monza's Note Snippet */}
                  <div className="mt-4 p-3 rounded bg-carbon-900/70 border-l-2 border-rosso-corsa text-xs text-gray-300 italic line-clamp-2">
                    「{car.monzaVerdict}」
                  </div>
                </div>

                {/* Card Action & Price */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono">ESTIMATED ASSET</div>
                    <div className="text-base sm:text-lg font-bold font-mono text-white">
                      {car.price}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectCar(car)}
                    className="px-4 py-2.5 rounded bg-carbon-700 hover:bg-rosso-corsa text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1.5 group-hover:bg-rosso-corsa"
                  >
                    <span>鑑賞細節</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Sourcing Banner */}
        <div className="mt-16 carbon-panel p-8 rounded-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-display font-bold text-white">
              在庫沒有您尋找的特定躍馬型號？
            </h4>
            <p className="text-xs sm:text-sm text-gray-400">
              Monza 具備歐洲、日本及北美私人藏家車窖之 Off-Market 私密調度權限，歡迎啟動全球代客尋車委託。
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded bg-rosso-corsa hover:bg-rosso-scuderia text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-lg shadow-rosso-corsa/30 whitespace-nowrap"
          >
            啟動全球私密獵車委託
          </a>
        </div>

      </div>
    </section>
  );
};
