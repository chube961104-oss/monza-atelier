import React, { useState } from 'react';
import { CarModel } from '../data/cars';
import { X, Plus, Edit2, Trash2, RotateCcw, Check, ShieldAlert } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: CarModel[];
  onAddCar: (car: CarModel) => void;
  onUpdateCar: (car: CarModel) => void;
  onDeleteCar: (id: string) => void;
  onResetCars: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  cars,
  onAddCar,
  onUpdateCar,
  onDeleteCar,
  onResetCars,
}) => {
  if (!isOpen) return null;

  const [editingCarId, setEditingCarId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

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
      gallery: [
        'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
      ],
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
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdding) {
      const newCar = {
        ...formData,
        id: formData.id || 'ferrari-' + Date.now(),
        gallery: formData.gallery && formData.gallery.length > 0 ? formData.gallery : [formData.image || ''],
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
      onUpdateCar(formData as CarModel);
      setEditingCarId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-carbon-900 border border-white/20 rounded-xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-carbon-800 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rosso-corsa animate-pulse" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                車窖車輛與資產管理後台 (Data Management CRUD)
              </h3>
              <p className="text-xs font-mono text-gray-400">
                期末專題加分項目：實作在庫車輛資料「新增 (Create) / 編輯 (Update) / 刪除 (Delete)」管理功能
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

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Top Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-carbon-800/60 border border-white/5">
            <div className="text-xs text-gray-300">
              當前車窖在庫車輛數：<span className="text-rosso-corsa font-bold text-sm font-mono">{cars.length}</span> 部
              <span className="text-gray-500 ml-2">(變更即時儲存於 LocalStorage，並同步呈現於前端展廳)</span>
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
                <span>重設回預設資料</span>
              </button>
            </div>
          </div>

          {/* Add / Edit Form Modal Segment */}
          {(isAdding || editingCarId) && (
            <form onSubmit={handleSave} className="p-6 rounded-lg bg-carbon-800/90 border border-rosso-corsa/40 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-rosso-scuderia font-display">
                  {isAdding ? '✦ 新增法拉利車輛標的' : `✦ 編輯車輛資訊：${formData.name}`}
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
                  <label className="block text-xs font-mono text-gray-400 mb-1">車輛全名 *</label>
                  <input
                    type="text"
                    required
                    value={formData.name || ''}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">系列副標題 *</label>
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
                    <option value="Reserved">Reserved (已預定)</option>
                    <option value="Off-Market Allocation">Off-Market Allocation (私洽配額)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">定價 / 估值</label>
                  <input
                    type="text"
                    value={formData.price || ''}
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">動力輸出 (Horsepower)</label>
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
                  <label className="block text-xs font-mono text-gray-400 mb-1">里程 Mileage</label>
                  <input
                    type="text"
                    value={formData.mileage || ''}
                    onChange={e => setFormData({ ...formData, mileage: e.target.value })}
                    className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">Monza 創辦人賽道親測短評</label>
                <textarea
                  rows={2}
                  value={formData.monzaVerdict || ''}
                  onChange={e => setFormData({ ...formData, monzaVerdict: e.target.value })}
                  className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">封面圖片網址 (Image URL)</label>
                <input
                  type="url"
                  value={formData.image || ''}
                  onChange={e => setFormData({ ...formData, image: e.target.value })}
                  className="w-full bg-carbon-900 border border-white/15 rounded px-3 py-2 text-xs text-white focus:border-rosso-corsa"
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
                  <th className="p-3">車型與年份</th>
                  <th className="p-3">動力規格</th>
                  <th className="p-3">資產定價</th>
                  <th className="p-3">狀態</th>
                  <th className="p-3 text-right">管理操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {cars.map(car => (
                  <tr key={car.id} className="hover:bg-carbon-800/40 transition-colors">
                    <td className="p-3">
                      <div className="font-bold text-white">{car.name}</div>
                      <div className="text-[10px] text-gray-400 font-mono">{car.year} ｜ {car.chassisCode}</div>
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

      </div>
    </div>
  );
};
