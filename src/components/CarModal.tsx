import React, { useState } from 'react';
import { CarModel } from '../data/cars';
import { 
  X, 
  Gauge, 
  Zap, 
  ShieldCheck, 
  Compass, 
  PhoneCall, 
  CheckCircle, 
  Calendar,
  Share2,
  Lock
} from 'lucide-react';

interface CarModalProps {
  car: CarModel | null;
  onClose: () => void;
}

export const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  const [activeImage, setActiveImage] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    viewingType: 'private-showroom',
    note: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-carbon-900 border border-white/15 rounded-xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-carbon-800/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rosso-corsa animate-pulse" />
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
              MONZA PRIVATE DOSSIER ｜ {car.chassisCode}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Main Visual & Title */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-rosso-scuderia uppercase tracking-widest">
                  {car.year} ｜ {car.categoryLabel}
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-black text-white mt-1">
                  {car.name}
                </h2>
                <p className="text-gray-400 text-sm">{car.subtitle}</p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs font-mono text-gray-400 uppercase">OFFICIAL ASSET PRICING</span>
                <div className="text-2xl font-bold font-mono text-white text-rosso-corsa">
                  {car.price}
                </div>
              </div>
            </div>

            {/* Gallery Viewer */}
            <div className="relative rounded-lg overflow-hidden bg-black h-80 sm:h-96 mb-3">
              <img
                src={car.gallery[activeImage] || car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded bg-black/70 backdrop-blur-md text-xs font-mono text-gray-200">
                {car.status}
              </div>
            </div>

            {/* Thumbnails */}
            {car.gallery.length > 1 && (
              <div className="flex gap-2">
                {car.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-16 w-24 rounded overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-rosso-corsa scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Monza's Personal Engineering Verdict */}
          <div className="carbon-panel p-6 rounded-lg border-l-4 border-rosso-corsa space-y-3">
            <div className="flex items-center gap-2 text-rosso-scuderia font-display font-bold text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Monza 創辦人賽道親測評語（Founder's Dynamic Evaluation）</span>
            </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light italic">
              「{car.monzaVerdict}」
            </p>
            <div className="pt-2 text-[11px] font-mono text-gray-400">
              檢驗項目：底盤幾何光學雷射校正、引擎內部內視鏡探測、碳纖維單體抗扭曲度分析 — <span className="text-emerald-400">PASSED</span>
            </div>
          </div>

          {/* Telemetry & Technical Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded bg-carbon-800/80 border border-white/5">
              <div className="text-[10px] font-mono text-gray-400 uppercase">最大側向重力加速度</div>
              <div className="text-xl font-bold font-mono text-white mt-1">{car.telemetryData.lateralG}</div>
              <div className="text-[10px] text-gray-500 mt-1">Monza 賽道實測極限</div>
            </div>

            <div className="p-4 rounded bg-carbon-800/80 border border-white/5">
              <div className="text-[10px] font-mono text-gray-400 uppercase">時速 200KM/H 下壓力</div>
              <div className="text-xl font-bold font-mono text-white mt-1">{car.telemetryData.downforceAt200}</div>
              <div className="text-[10px] text-gray-500 mt-1">地面效應空力套件</div>
            </div>

            <div className="p-4 rounded bg-carbon-800/80 border border-white/5">
              <div className="text-[10px] font-mono text-gray-400 uppercase">推重比 (KG/CV)</div>
              <div className="text-xl font-bold font-mono text-white mt-1">{car.telemetryData.powerToWeight}</div>
              <div className="text-[10px] text-gray-500 mt-1">極限輕量化車體</div>
            </div>

            <div className="p-4 rounded bg-carbon-800/80 border border-white/5">
              <div className="text-[10px] font-mono text-gray-400 uppercase">費奧拉諾 (FIORANO) 參考單圈</div>
              <div className="text-xl font-bold font-mono text-rosso-scuderia mt-1">{car.telemetryData.fioranoLapTime}</div>
              <div className="text-[10px] text-gray-500 mt-1">官方基準單圈</div>
            </div>
          </div>

          {/* Detailed Features & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-white/10 pb-2">
                車輛機械規格明細
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">動力心臟 Engine</span>
                  <span className="text-white font-medium">{car.engine}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">最大馬力 Horsepower</span>
                  <span className="text-white font-medium">{car.power}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">0-100 km/h 加速</span>
                  <span className="text-white font-medium">{car.acceleration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">變速系統 Transmission</span>
                  <span className="text-white font-medium">{car.transmission}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">里程紀錄 Mileage</span>
                  <span className="text-white font-medium">{car.mileage}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">車色塗裝 & 內裝</span>
                  <span className="text-white font-medium">{car.exteriorColor} / {car.interiorColor}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-white/10 pb-2">
                專屬選配與典藏價值
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {car.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-rosso-scuderia shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Private Inquiry & Booking Form */}
          <div className="carbon-panel p-6 rounded-lg border border-rosso-corsa/30 bg-carbon-800/90">
            {inquirySent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-white">專屬私洽委託已建檔</h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Monza 助理與私密禮賓經理將於 2 小時內透過電話或專用通訊軟體與您聯繫，為您安排封閉展廳預約鑑賞。
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="text-xs text-rosso-scuderia hover:underline pt-2 inline-block"
                >
                  填寫另一份預約
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-white font-display uppercase tracking-wider">
                      預約這部 {car.name} 專屬私洽會談
                    </h4>
                    <p className="text-xs text-gray-400">提供封閉式賞車空間與賽道試駕顧問服務，嚴格遵循藏家隱私保密協定。</p>
                  </div>
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">貴賓尊稱 *</label>
                    <input
                      type="text"
                      required
                      placeholder="陳先生 / 董事長"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-rosso-corsa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">聯絡電話 / 手機 *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0912-345-678"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-rosso-corsa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">私洽偏好型態</label>
                    <select
                      value={formData.viewingType}
                      onChange={e => setFormData({ ...formData, viewingType: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-rosso-corsa"
                    >
                      <option value="private-showroom">私人車窖一對一鑑賞</option>
                      <option value="track-test">封閉賽道動態評測日</option>
                      <option value="confidential-call">電話保密諮詢資產配額</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">特殊備註或資產置換提問（選填）</label>
                  <textarea
                    rows={2}
                    placeholder="例如：詢問目前海外配額交期，或既有超跑車輛置換方案..."
                    value={formData.note}
                    onChange={e => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-rosso-corsa resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-gray-500 font-mono">
                    ✦ 委託將由 Monza 本人親自審閱
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded bg-rosso-corsa hover:bg-rosso-scuderia text-white text-xs font-bold tracking-widest uppercase transition-colors shadow-lg shadow-rosso-corsa/30"
                  >
                    送出私密鑑賞委託
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
