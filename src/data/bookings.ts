export interface BookingRecord {
  id: string;
  bookingCode: string;
  carId: string;
  carName: string;
  clientName: string;
  contact: string; // phone or line id
  preferredDate: string;
  preferredTime: string; // 'morning' | 'afternoon' | 'evening'
  location: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'confirmed';
}

export const BOOKINGS_STORAGE_KEY = 'monza_atelier_bookings_v1';

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'booking-init-1',
    bookingCode: 'MZ-882104',
    carId: 'ferrari-daytona-sp3',
    carName: 'Ferrari Daytona SP3',
    clientName: '陳董事長',
    contact: '0912-888-999 / Line: chen_vip',
    preferredDate: '2026-11-25',
    preferredTime: '下午時段 14:00 - 17:00',
    location: '台北信義私人會客展廳',
    notes: '詢問現車配額轉讓與海外通關流程，預計置換名下 488 Pista。',
    createdAt: '2026-11-17 14:30',
    status: 'contacted'
  },
  {
    id: 'booking-init-2',
    bookingCode: 'MZ-394109',
    carId: 'ferrari-sf90-xx-stradale',
    carName: 'Ferrari SF90 XX Stradale',
    clientName: '林特助 (代家族辦公室)',
    contact: '0933-111-222 / Line: lin_office',
    preferredDate: '2026-11-28',
    preferredTime: '上午時段 10:00 - 12:00',
    location: '封閉賽道動態評測日 (麗寶賽車場)',
    notes: '安排 Monza 本人親自副駕動態遙測教學，確認賽道空力翼片配置。',
    createdAt: '2026-11-17 18:20',
    status: 'confirmed'
  }
];

export function getStoredBookings(): BookingRecord[] {
  try {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }
  return INITIAL_BOOKINGS;
}

export function saveStoredBookings(bookings: BookingRecord[]): void {
  try {
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
  } catch {
    // ignore
  }
}
