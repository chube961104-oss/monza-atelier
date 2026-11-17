import React, { useState } from 'react';
import { CarModel } from '../data/cars';
import { BookingRecord } from '../data/bookings';
import { 
  X, 
  Plus, 
  Edit2, 
  Trash2, 
  RotateCcw, 
  Car, 
  CalendarCheck, 
  CheckCircle2, 
  Clock, 
  Phone, 
  MapPin, 
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: CarModel[];
  onAddCar: (car: CarModel) => void;
  onUpdateCar: (car: CarModel) => void;
  onDeleteCar: (id: string) => void;
  onResetCars: () => void;
  bookings: BookingRecord[];
  onUpdateBookingStatus: (id: string, status: 'pending' | 'contacted' | 'confirmed') => void;
  onDeleteBooking: (id: string) => void;
  onClearAllBookings: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  cars,
  onAddCar,
  onUpdateCar,
  onDeleteCar,
  onResetCars,
  bookings,
  onUpdateBookingStatus,
  onDeleteBooking,
  onClearAllBookings,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'inventory' | 'bookings'>('inventory');
  const [editingCarId, setEditingCarId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Gallery Textarea helper state
  const [galleryText, setGalleryText] = useState('');

  // Form State
  const [formData, setFormData] = useState<Partial<CarModel>>({
    name: '',
    subtitle: '',
    category: 'track',
    categoryLabel: 'XX 賽道特規系列',
    year: 2024,
    engine: '',
    power: '',
    acceleration: '',
    topSpeed: '',
    transmission: '7 速 F1 雙離合器',
    mileage: '0 km (原廠全新配額)',
    exteriorColor: 'Rosso Corsa',
    interiorColor: 'Nero Alcantara',
    price: 'POA',
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    monzaVerdict: '',
    chassisCode: 'ZFF' + Math.floor(100000 + Math.random() * 900000),
  });

  const startEdit = (car: CarModel) => {
    setEditingCarId(car.id);
    setIsAdding(false);
    setFormData(car);
    setGalleryText(car.gallery ? car.gallery.join('\n') : car.image);
  };

  const startAdd = () => {
    setIsAdding(true);
    setEditingCarId(null);
    setFormData({
      id: 'ferrari-' + Date.now(),
      name: 'Ferrari 812 Competizione',
      subtitle: '830 cv 自然進氣 V12 賽道最終極限款',
      category: 'classic',
      categoryLabel: '經典自然進氣收藏',
      year: 2023,
      engine: '6.5L 65° 自然進氣 V12',
      power: '830 cv @ 9,500 rpm',
      acceleration: '0-100 km/h: 2.85s',
      topSpeed: '> 340 km/h',
      transmission: '7 速 F1 雙離合器',
      mileage: '350 km (藏家珍藏新車品相)',
      exteriorColor: 'Giallo Modena',
      interiorColor: 'Nero 賽車級碳纖維座艙',
      price: 'NT$ 36,000,000',
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      monzaVerdict: '轉速直衝 9,500 轉的史詩狂響，後輪主動轉向系統帶來神經刀般的攻彎敏捷度。',
      features: ['全碳纖維一體式後擋風導流板', '四輪獨立主動轉向系統', 'Titanium 鈦合金連桿減輕 40%'],
      telemetryData: {
        lateralG: '1.46 G',
        downforceAt200: '300 kg',
        powerToWeight: '1.79 kg/cv',
        fioranoLapTime: "1'20.0"
      },
      chassisCode: 'ZFF' + Math.floor(100000 + Math.random() * 900000),
    });
    setGalleryText([
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85'
    ].join('\n'));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Parse gallery URLs from textarea
    const parsedGallery = galleryText
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    const finalImage = parsedGallery[0] || formData.image || '';

    if (isAdding) {
      const newCar = {
        ...formData,
        id: formData.id || 'ferrari-' + Date.now(),
        image: finalImage,
        gallery: parsedGallery.length > 0 ? parsedGallery : [finalImage],
        features: formData.features && formData.features.length > 0 ? formData.features : ['原廠 Ferrari Classiche 證書', '全車賽道動態遙測檢驗合格'],
        telemetryData: formData.telemetryData || {
          lateralG: '1.45 G',
          downforceAt200: '320 kg',
          powerToWeight: '1.80 kg/cv',
          fioranoLapTime: "1'21.0"
        }
      } as CarModel;
      onAddCar(newCar);
      setIsAdding(false);
    } else if (editingCarId) {
      onUpdateCar({
        ...formData,
        image: finalImage,
        gallery: parsedGallery.length > 0 ? parsedGallery : [finalImage]
      } as CarModel);
      setEditingCarId(null);
    }
  };

  const pendingBookingsCount = bookings.filter(b => b.status === 'pending').length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-carbon-900 border border-white/20 rounded-xl shadow-2xl overflow-hidden my-6">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-carbon-800 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rosso-corsa animate-pulse" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                MONZA ATELIER ｜ 車窖後台管理中心 (Admin Control)
              </h3>
              <p className="text-xs font-mono text-gray-400">
                期末專題加分項：支援車輛庫存管理 (CRUD) 與客戶線上預約鑑賞即時名單
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 bg-carbon-800/50 border-b border-white/10 flex items-center gap-4">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`py-3.5 px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 ${
              activeTab === 'inventory'
                ? 'border-rosso-corsa text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Car className="w-4 h-4 text-rosso-scuderia" />
            <span>車輛在庫管理 (Inventory CRUD)</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-carbon-700 text-gray-300 font-normal">
              {cars.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-3.5 px-3 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-b-2 ${
              activeTab === 'bookings'
                ? 'border-rosso-corsa text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-giallo-modena" />
            <span>私人鑑賞預約名單 (Private Bookings)</span>
            {pendingBookingsCount > 0 ? (
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-rosso-corsa text-white font-bold animate-pulse">
                {pendingBookingsCount} 待處理
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-carbon-700 text-gray-300 font-normal">
                {bookings.length}
              </span>
            )}
          </button>
        </div>

        {/* Main Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: INVENTORY CRUD */}
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              {/* Actions Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-carbon-800/60 border border-white/5">
                <div className="text-xs text-gray-300">
                  在庫展示車輛：<span className="text-rosso-corsa font-bold text-sm font-mono">{cars.length}</span> 部
                  <span className="text-gray-500 ml-2">(支援多角度細節圖庫自訂、規格編輯與即時刪除)</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={startAdd}
                    className="px-4 py-2 rounded bg-rosso-corsa hover:bg-rosso-scuderia text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-lg shadow-rosso-corsa/30"
                  >
                    <Plus className="w-4 h-4" />
                    <span>新增車輛標的 (Add)</span>
                  </button>
                  <button
                    onClick={onResetCars}
                    className="px-3 py-2 rounded bg-carbon-700 hover:bg-carbon-600 text-gray-300 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                    title="恢復預設 6 部經典法拉利"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>重設預設車型</span>
                  </button>
                </div>
              </div>

              {/* Add / Edit Form */}
              {(isAdding || editingCarId) && (
                <form onSubmit={handleSave} className="p-6 rounded-lg bg-carbon-800/95 border border-rosso-corsa/40 space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-rosso-scuderia font-display flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-giallo-modena" />
                      <span>{isAdding ? '新增法拉利車輛標的' : `編輯車輛資訊：${formData.name}`}</span>
                    </h4>
                    <button
                      type="button"
                      onClick={() => { setIsAdding(false); setEditingCarId(null); }}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      取消
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">車輛名稱 *</label>
                      <input
                        type="text"
                        required
                        value={formData.name || ''}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">副標題 *</label>
                      <input
                        type="text"
                        required
                        value={formData.subtitle || ''}
                        onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">在庫狀態 Status</label>
                      <select
                        value={formData.status || 'In Stock'}
                        onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      >
                        <option value="In Stock">In Stock (在庫現車)</option>
                        <option value="Reserved">Reserved (已預約保留)</option>
                        <option value="Off-Market Allocation">Off-Market Allocation (私洽配額)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">資產定價</label>
                      <input
                        type="text"
                        value={formData.price || ''}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">最大馬力 (Power)</label>
                      <input
                        type="text"
                        value={formData.power || ''}
                        onChange={e => setFormData({ ...formData, power: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">0-100 km/h 加速</label>
                      <input
                        type="text"
                        value={formData.acceleration || ''}
                        onChange={e => setFormData({ ...formData, acceleration: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1">里程紀錄 Mileage</label>
                      <input
                        type="text"
                        value={formData.mileage || ''}
                        onChange={e => setFormData({ ...formData, mileage: e.target.value })}
                        className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                      />
                    </div>
                  </div>

                  {/* Multi-angle Gallery URLs Editor */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">
                      多角度細節圖庫網址 (每行一個圖片 URL，將對應：1. 外觀經典視角、2. 座艙、3. 碳纖空力卡鉗、4. 動力心臟)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="https://images.unsplash.com/...&#10;https://images.unsplash.com/...&#10;https://images.unsplash.com/..."
                      value={galleryText}
                      onChange={e => setGalleryText(e.target.value)}
                      className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs font-mono text-gray-200 focus:border-rosso-corsa"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1">Monza 創辦人賽道親測評語</label>
                    <textarea
                      rows={2}
                      value={formData.monzaVerdict || ''}
                      onChange={e => setFormData({ ...formData, monzaVerdict: e.target.value })}
                      className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa resize-none"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => { setIsAdding(false); setEditingCarId(null); }}
                      className="px-4 py-2 rounded bg-carbon-700 text-gray-300 text-xs hover:text-white"
                    >
                      取消
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded bg-rosso-corsa hover:bg-rosso-scuderia text-white text-xs font-bold uppercase tracking-wider"
                    >
                      {isAdding ? '儲存並上架' : '確認更新車輛'}
                    </button>
                  </div>
                </form>
              )}

              {/* Cars Table */}
              <div className="rounded-lg overflow-hidden border border-white/10">
                <table className="w-full text-left text-xs text-gray-300">
                  <thead className="bg-carbon-800 text-gray-400 font-mono uppercase text-[11px] border-b border-white/10">
                    <tr>
                      <th className="p-3">車型與多角度圖</th>
                      <th className="p-3">動力輸出</th>
                      <th className="p-3">資產定價</th>
                      <th className="p-3">狀態</th>
                      <th className="p-3 text-right">管理操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {cars.map(car => (
                      <tr key={car.id} className="hover:bg-carbon-800/40 transition-colors">
                        <td className="p-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-12 h-9 rounded overflow-hidden shrink-0 bg-black border border-white/10">
                              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div className="font-bold text-white">{car.name}</div>
                              <div className="text-[10px] text-gray-400 font-mono">
                                {car.year} ｜ 圖庫: {car.gallery?.length || 1} 張
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 font-mono">
                          <div>{car.power}</div>
                          <div className="text-gray-500 text-[10px]">{car.acceleration}</div>
                        </td>
                        <td className="p-3 font-mono text-white font-semibold">
                          {car.price}
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                            car.status === 'In Stock'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : car.status === 'Reserved'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-rosso-corsa/20 text-rosso-scuderia border border-rosso-corsa/30'
                          }`}>
                            {car.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => startEdit(car)}
                              className="p-1.5 rounded bg-carbon-700 hover:bg-carbon-600 text-gray-300 hover:text-white transition-colors"
                              title="編輯此車輛 (Edit)"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => onDeleteCar(car.id)}
                              className="p-1.5 rounded bg-carbon-700 hover:bg-rosso-corsa text-gray-300 hover:text-white transition-colors"
                              title="刪除此車輛 (Delete)"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: BOOKINGS LIST (預約名單) */}
          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-carbon-800/60 border border-white/5">
                <div>
                  <div className="text-xs text-white font-bold flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4 text-giallo-modena" />
                    <span>客戶線上預約鑑賞紀錄</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    每位在車款詳情彈窗送出「預約專屬顧問賞車」的紀錄皆自動存檔於此。
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-400">
                    總預約數：<strong className="text-white">{bookings.length}</strong> 筆
                  </span>
                  {bookings.length > 0 && (
                    <button
                      onClick={onClearAllBookings}
                      className="px-3 py-1.5 rounded bg-carbon-700 hover:bg-rosso-dark text-gray-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      清空預約紀錄
                    </button>
                  )}
                </div>
              </div>

              {bookings.length === 0 ? (
                <div className="py-16 text-center rounded-lg border border-dashed border-white/10 space-y-2">
                  <Clock className="w-8 h-8 text-gray-500 mx-auto" />
                  <div className="text-sm font-bold text-gray-300">目前尚無新的賞車預約紀錄</div>
                  <p className="text-xs text-gray-500">
                    您可以在首頁點擊任一車款卡片，並透過彈窗下方的「預約專屬顧問賞車」送出測試預約。
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map(booking => (
                    <div
                      key={booking.id}
                      className="p-5 rounded-lg bg-carbon-800/80 border border-white/10 hover:border-rosso-corsa/40 transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-giallo-modena/10 border border-giallo-modena/30 text-giallo-modena font-mono text-xs font-bold">
                            {booking.bookingCode}
                          </span>
                          <span className="font-display font-bold text-white text-sm">
                            {booking.clientName}
                          </span>
                          <span className="text-xs font-mono text-gray-400">
                            ({booking.contact})
                          </span>
                        </div>

                        {/* Status Switcher */}
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-gray-500">狀態:</span>
                          <select
                            value={booking.status}
                            onChange={e => onUpdateBookingStatus(booking.id, e.target.value as any)}
                            className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase border bg-carbon-900 focus:outline-none ${
                              booking.status === 'confirmed'
                                ? 'text-emerald-400 border-emerald-500/40'
                                : booking.status === 'contacted'
                                ? 'text-blue-400 border-blue-500/40'
                                : 'text-amber-400 border-amber-500/40'
                            }`}
                          >
                            <option value="pending">待聯繫 (Pending)</option>
                            <option value="contacted">已聯繫 (Contacted)</option>
                            <option value="confirmed">已確認鑑賞 (Confirmed)</option>
                          </select>

                          <button
                            onClick={() => onDeleteBooking(booking.id)}
                            className="p-1 rounded bg-carbon-700 hover:bg-rosso-corsa text-gray-400 hover:text-white transition-colors"
                            title="刪除此筆預約"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-gray-300">
                        <div className="flex items-center gap-2">
                          <Car className="w-3.5 h-3.5 text-rosso-corsa shrink-0" />
                          <span className="truncate">車款：<strong className="text-white">{booking.carName}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span>時程：{booking.preferredDate} ｜ {booking.preferredTime.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          <span className="truncate">地點：{booking.location}</span>
                        </div>
                      </div>

                      {booking.notes && (
                        <div className="p-3 rounded bg-carbon-900/60 border border-white/5 text-xs text-gray-400 font-sans">
                          <strong className="text-gray-300">客戶備註：</strong> {booking.notes}
                        </div>
                      )}

                      <div className="text-[10px] text-gray-500 font-mono text-right">
                        預約建立時間：{booking.createdAt}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
