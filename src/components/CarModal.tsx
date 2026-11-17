import React, { useState, useEffect, useRef } from 'react';
import { CarModel } from '../data/cars';
import { BookingRecord, getStoredBookings, saveStoredBookings } from '../data/bookings';
import { 
  X, 
  Gauge, 
  Zap, 
  ShieldCheck, 
  CheckCircle, 
  Calendar,
  Clock,
  Lock,
  Camera,
  ArrowRight,
  UserCheck,
  Send,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

interface CarModalProps {
  car: CarModel | null;
  onClose: () => void;
  onNewBooking?: (booking: BookingRecord) => void;
}

export const CarModal: React.FC<CarModalProps> = ({ car, onClose, onNewBooking }) => {
  if (!car) return null;

  const [activeImage, setActiveImage] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingRecord | null>(null);
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  // Always reset to Angle 01 (Exterior) whenever a new car is opened
  useEffect(() => {
    setActiveImage(0);
    setShowBookingForm(false);
    setSubmittedBooking(null);
  }, [car?.id]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // default 2 days later
    timeSlot: '下午時段 14:00 - 17:00',
    location: '台北信義私人會客展廳',
    notes: ''
  });

  // Strict 4-Angle Labels with detailed descriptions
  const angleDetails = [
    { 
      number: '01', 
      title: '外觀全貌', 
      desc: '經典流線外觀與車頭姿態 (Exterior Silhouette)',
      badge: 'Exterior 3/4'
    },
    { 
      number: '02', 
      title: '競技座艙', 
      desc: '真實座艙內裝、方向盤與跑車座椅 (Racing Cockpit)',
      badge: 'Cockpit View'
    },
    { 
      number: '03', 
      title: '碳纖空力', 
      desc: '碳纖維空力翼片、導流槽與煞車卡鉗 (Carbon Aero & Brake)',
      badge: 'Aero Dynamics'
    },
    { 
      number: '04', 
      title: '動力核心', 
      desc: '中置引擎室與精密機械工程結構 (Powertrain V8/V12)',
      badge: 'Engine Bay'
    },
  ];

  // Strictly use the car's 4 distinct gallery images
  const galleryImages = [
    car.gallery?.[0] || car.image,
    car.gallery?.[1] || car.image,
    car.gallery?.[2] || car.image,
    car.gallery?.[3] || car.image,
  ];

  // Helper for performance numbers parsing
  const parseHorsepower = (p: string) => {
    const num = parseInt(p.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? 800 : num;
  };
  const parseAcceleration = (a: string) => {
    const match = a.match(/[0-9.]+/);
    return match ? parseFloat(match[0]) : 2.9;
  };
  const parseTopSpeed = (s: string) => {
    const match = s.match(/[0-9]+/);
    return match ? parseInt(match[0], 10) : 330;
  };
  const parseLateralG = (g: string) => {
    const match = g.match(/[0-9.]+/);
    return match ? parseFloat(match[0]) : 1.4;
  };

  const hp = parseHorsepower(car.power);
  const hpPercent = Math.min(100, Math.round((hp / 1100) * 100));

  const accel = parseAcceleration(car.acceleration);
  // 2.0s = 100%, 3.5s = 70%
  const accelPercent = Math.min(100, Math.max(50, Math.round(100 - (accel - 2.0) * 20)));

  const speed = parseTopSpeed(car.topSpeed);
  const speedPercent = Math.min(100, Math.round((speed / 360) * 100));

  const latG = parseLateralG(car.telemetryData.lateralG);
  const latGPercent = Math.min(100, Math.round((latG / 1.65) * 100));

  const handleScrollToBooking = () => {
    setShowBookingForm(true);
    setTimeout(() => {
      bookingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking: BookingRecord = {
      id: 'booking-' + Date.now(),
      bookingCode: 'MZ-' + Math.floor(100000 + Math.random() * 900000),
      carId: car.id,
      carName: car.name,
      clientName: formData.name,
      contact: formData.contact,
      preferredDate: formData.date,
      preferredTime: formData.timeSlot,
      location: formData.location,
      notes: formData.notes,
      createdAt: new Date().toLocaleString('zh-TW', { hour12: false }),
      status: 'pending'
    };

    // Save to localStorage
    const currentList = getStoredBookings();
    const updatedList = [newBooking, ...currentList];
    saveStoredBookings(updatedList);

    if (onNewBooking) {
      onNewBooking(newBooking);
    }

    setSubmittedBooking(newBooking);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-carbon-900 border border-white/15 rounded-xl shadow-2xl overflow-hidden my-6">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-carbon-800/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rosso-corsa animate-pulse" />
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest hidden sm:inline">
              MONZA PRIVATE DOSSIER ｜ {car.chassisCode}
            </span>
            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest sm:hidden">
              {car.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToBooking}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rosso-corsa/10 hover:bg-rosso-corsa/20 border border-rosso-corsa/30 text-rosso-scuderia text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>直接預約鑑賞</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto space-y-8">
          
          {/* Section: Title & Header Info */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono text-rosso-scuderia uppercase tracking-widest px-2 py-0.5 rounded bg-rosso-corsa/10 border border-rosso-corsa/20">
                    {car.year} ｜ {car.categoryLabel}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase ${
                    car.status === 'In Stock'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : car.status === 'Reserved'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-rosso-corsa/20 text-rosso-scuderia border border-rosso-corsa/30'
                  }`}>
                    {car.status}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
                  {car.name}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{car.subtitle}</p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">OFFICIAL ASSET PRICING</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white text-rosso-corsa">
                  {car.price}
                </div>
              </div>
            </div>

            {/* 1. 多角度真實圖庫切換（Multi-Angle Real Gallery Switcher） */}
            <div className="space-y-3.5">
              
              {/* Main Image Viewport with Smooth Transition Key */}
              <div className="relative rounded-lg overflow-hidden bg-black h-80 sm:h-[460px] border border-white/10 group shadow-2xl">
                <img
                  key={`${car.id}-angle-${activeImage}`}
                  src={galleryImages[activeImage]}
                  alt={`${car.name} - ${angleDetails[activeImage]?.title}`}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105 animate-fadeIn"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/90 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge: Active Angle Details */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs text-white font-mono shadow-lg">
                  <Camera className="w-3.5 h-3.5 text-rosso-corsa" />
                  <span className="font-bold text-rosso-scuderia">視角 {angleDetails[activeImage]?.number}</span>
                  <span className="text-gray-400">｜</span>
                  <span>{angleDetails[activeImage]?.desc}</span>
                </div>

                {/* Bottom Left: Vehicle Badge & Model Authenticity Stamp */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-carbon-900/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-xs font-mono text-gray-300">
                  <span className="text-giallo-modena font-bold">100% 原裝部位實拍</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-400">VIN: {car.chassisCode}</span>
                </div>

                {/* Bottom Right: Angle Selector Indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[11px] font-mono text-gray-300">
                  <span>{activeImage + 1}</span>
                  <span className="text-gray-500">/</span>
                  <span className="text-gray-500">4</span>
                </div>
              </div>

              {/* 4 Angle Switcher Buttons (明確標註 01, 02, 03, 04) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {angleDetails.map((detail, idx) => {
                  const isActive = activeImage === idx;
                  const thumbImg = galleryImages[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      type="button"
                      className={`p-2.5 rounded-lg border text-left transition-all duration-300 flex items-center gap-3 relative overflow-hidden group ${
                        isActive
                          ? 'border-rosso-corsa bg-carbon-800 shadow-lg shadow-rosso-corsa/30 scale-[1.02]'
                          : 'border-white/10 bg-carbon-900/80 opacity-75 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      {/* Active indicator stripe */}
                      {isActive && (
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-rosso-corsa" />
                      )}

                      {/* Thumbnail Preview */}
                      <div className="w-14 h-11 rounded overflow-hidden shrink-0 bg-black border border-white/10">
                        <img 
                          src={thumbImg} 
                          alt={detail.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>

                      {/* Text info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-[11px] font-mono font-bold tracking-wider ${
                            isActive ? 'text-rosso-scuderia' : 'text-gray-400'
                          }`}>
                            視角 {detail.number}
                          </span>
                          <span className="text-[10px] font-mono px-1 rounded bg-white/5 text-gray-400 hidden xl:inline">
                            {detail.badge}
                          </span>
                        </div>
                        <div className={`text-xs font-bold font-display truncate ${
                          isActive ? 'text-white' : 'text-gray-200'
                        }`}>
                          {detail.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* 2. 重點性能數據視覺化儀表（Performance Telemetry Gauges） */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-rosso-corsa" />
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                  重點性能數據視覺化 (Performance Telemetry Benchmarks)
                </h3>
              </div>
              <span className="text-[11px] font-mono text-gray-400">
                馬拉內羅原廠標準規格與實測
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 0-100 km/h Gauge */}
              <div className="carbon-panel p-4 rounded-lg border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-400">0-100 KM/H 加速</span>
                  <span className="text-rosso-scuderia font-bold text-sm">{car.acceleration.replace('0-100 km/h: ', '')}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-carbon-900 rounded-full h-2 overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-rosso-corsa rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(212,0,0,0.5)]"
                    style={{ width: `${accelPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>基準 3.5s</span>
                  <span className="text-gray-400">超跑天花板 {accelPercent}%</span>
                </div>
              </div>

              {/* Horsepower Gauge */}
              <div className="carbon-panel p-4 rounded-lg border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-400">最大動力輸出</span>
                  <span className="text-white font-bold text-sm">{hp} cv</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-carbon-900 rounded-full h-2 overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-rosso-dark via-rosso-corsa to-rosso-scuderia rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(212,0,0,0.5)]"
                    style={{ width: `${hpPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>基準 600 cv</span>
                  <span className="text-gray-400">極限指標 {hpPercent}%</span>
                </div>
              </div>

              {/* Top Speed Gauge */}
              <div className="carbon-panel p-4 rounded-lg border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-400">極速最高時速</span>
                  <span className="text-white font-bold text-sm">{car.topSpeed}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-carbon-900 rounded-full h-2 overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-carbon-600 via-amber-500 to-rosso-corsa rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(212,0,0,0.5)]"
                    style={{ width: `${speedPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>基準 300 km/h</span>
                  <span className="text-gray-400">空氣力學表現 {speedPercent}%</span>
                </div>
              </div>

              {/* Lateral G Gauge */}
              <div className="carbon-panel p-4 rounded-lg border border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-400">最大側向重力加速度</span>
                  <span className="text-giallo-modena font-bold text-sm">{car.telemetryData.lateralG}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-carbon-900 rounded-full h-2 overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-giallo-modena to-rosso-corsa rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                    style={{ width: `${latGPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>過彎極限</span>
                  <span className="text-gray-400">賽道抓地力 {latGPercent}%</span>
                </div>
              </div>
            </div>
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
            <div className="pt-2 text-[11px] font-mono text-gray-400 flex flex-wrap items-center justify-between gap-2 border-t border-white/5">
              <span>檢驗項目：底盤幾何光學雷射校正、引擎內部內視鏡探測、碳纖維單體抗扭曲度分析</span>
              <span className="text-emerald-400 font-bold">✓ PASSED 賽道認證合格</span>
            </div>
          </div>

          {/* Detailed Features & Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-white/10 pb-2">
                車輛機械規格明細
              </h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 font-sans">動力心臟 Engine</span>
                  <span className="text-white font-medium">{car.engine}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 font-sans">最大馬力 Horsepower</span>
                  <span className="text-white font-medium">{car.power}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 font-sans">0-100 km/h 加速</span>
                  <span className="text-white font-medium">{car.acceleration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 font-sans">變速系統 Transmission</span>
                  <span className="text-white font-medium">{car.transmission}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400 font-sans">里程紀錄 Mileage</span>
                  <span className="text-white font-medium">{car.mileage}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400 font-sans">車色塗裝 & 內裝</span>
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

          {/* 3. 顯眼的「預約專屬顧問賞車」行動號召條 (Prominent Action Bar) */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-carbon-800 via-carbon-700 to-carbon-800 border border-rosso-corsa/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-rosso-corsa/10">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-giallo-modena" />
                <h4 className="text-base sm:text-lg font-bold text-white font-display">
                  心儀這部 {car.name}？
                </h4>
              </div>
              <p className="text-xs text-gray-300 mt-1">
                Monza Atelier 提供封閉式私密車窖鑑賞與一對一專屬顧問諮詢服務。
              </p>
            </div>

            <button
              onClick={handleScrollToBooking}
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-gradient-to-r from-rosso-corsa via-rosso-scuderia to-rosso-corsa hover:brightness-110 text-white font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 shadow-lg shadow-rosso-corsa/40 hover:scale-105 flex items-center justify-center gap-2 shrink-0 animate-pulse"
            >
              <Calendar className="w-4 h-4" />
              <span>預約專屬顧問賞車</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4. 「預約私人鑑賞 / 線上留資」專用表單區塊 (Dedicated Booking Section) */}
          <div ref={bookingSectionRef} id="booking-section" className="carbon-panel p-6 sm:p-8 rounded-xl border border-rosso-corsa/40 bg-carbon-800/95 space-y-6">
            
            {submittedBooking ? (
              /* 精緻預約成功確認畫面 (VIP Confirmation Voucher) */
              <div className="text-center py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                  <UserCheck className="w-8 h-8" />
                </div>
                
                <div>
                  <span className="text-xs font-mono text-rosso-scuderia uppercase tracking-widest">
                    VIP RESERVATION CONFIRMED ｜ 鑑賞預約已完成建檔
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    感謝您的預約，{submittedBooking.clientName}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto mt-2 leading-relaxed">
                    預約紀錄已正式存入車窖管理系統。Monza 專屬禮賓經理將於 2 小時內透過電話或 Line 與您確認會晤細節。
                  </p>
                </div>

                {/* Voucher Summary Card */}
                <div className="max-w-md mx-auto p-5 rounded-lg bg-carbon-900 border border-white/10 text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">專屬預約代號</span>
                    <span className="text-giallo-modena font-bold tracking-wider">{submittedBooking.bookingCode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">鑑賞車輛</span>
                    <span className="text-white font-medium">{submittedBooking.carName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">預約日期與時段</span>
                    <span className="text-white font-medium">{submittedBooking.preferredDate} ｜ {submittedBooking.preferredTime}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-gray-400">會晤地點</span>
                    <span className="text-white font-medium">{submittedBooking.location}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">聯絡資料</span>
                    <span className="text-white font-medium">{submittedBooking.contact}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-2">
                  <button
                    onClick={() => { setSubmittedBooking(null); setShowBookingForm(false); }}
                    className="px-5 py-2.5 rounded bg-carbon-700 hover:bg-carbon-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    返回車款介紹
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded bg-rosso-corsa hover:bg-rosso-scuderia text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-rosso-corsa/30"
                  >
                    完成並關閉
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmitBooking} className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display uppercase tracking-wider flex items-center gap-2">
                      <span>預約專屬私人鑑賞 ｜ {car.name}</span>
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      提供一對一封閉展廳獨立接待，配備專業遙測工程顧問，全程嚴格遵循 NDA 保密協定。
                    </p>
                  </div>
                  <div className="p-2 rounded bg-carbon-900 border border-white/10 hidden sm:block">
                    <Lock className="w-4 h-4 text-rosso-scuderia" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      客戶尊稱 (Name) <span className="text-rosso-corsa">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例：陳董事長 / 林先生"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      聯絡電話 / Line ID <span className="text-rosso-corsa">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="例：0912-345-678 或 Line: vip_driver"
                      value={formData.contact}
                      onChange={e => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      偏好賞車日期 <span className="text-rosso-corsa">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      偏好賞車時段 <span className="text-rosso-corsa">*</span>
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                    >
                      <option value="上午時段 10:00 - 12:00">上午時段 10:00 - 12:00</option>
                      <option value="下午時段 14:00 - 17:00">下午時段 14:00 - 17:00</option>
                      <option value="晚間私密鑑賞 18:30 - 21:00">晚間私密鑑賞 18:30 - 21:00</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      賞車地點偏好
                    </label>
                    <select
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rosso-corsa transition-colors"
                    >
                      <option value="台北信義私人會客展廳">台北信義私人會客展廳</option>
                      <option value="台中旗艦恆溫車窖">台中旗艦恆溫車窖</option>
                      <option value="封閉賽道動態評測日 (麗寶/大鵬灣)">封閉賽道動態評測日 (麗寶/大鵬灣)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    備註需求或資產置換諮詢（選填）
                  </label>
                  <textarea
                    rows={2}
                    placeholder="例如：詢問配額交期、希望安排既有名車置換估價、需 Monza 本人陪同動態測試說明..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-rosso-corsa transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>資料受最高規格 SSL 加密與隱私協定保護</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded bg-gradient-to-r from-rosso-corsa to-rosso-scuderia hover:from-rosso-scuderia hover:to-rosso-corsa text-white font-bold text-xs tracking-widest uppercase transition-all shadow-xl shadow-rosso-corsa/30 hover:shadow-rosso-corsa/50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>確認送出鑑賞預約</span>
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
