import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMonza } from './components/AboutMonza';
import { Inventory } from './components/Inventory';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CarModal } from './components/CarModal';
import { AdminModal } from './components/AdminModal';
import { CARS_DATA, CarModel } from './data/cars';
import { BookingRecord, getStoredBookings, saveStoredBookings } from './data/bookings';

const CARS_STORAGE_KEY = 'monza_atelier_cars_inventory_v1';

export function App() {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Cars State
  const [cars, setCars] = useState<CarModel[]>(() => {
    try {
      const saved = localStorage.getItem(CARS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return CARS_DATA;
  });

  // Bookings State
  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    return getStoredBookings();
  });

  useEffect(() => {
    try {
      localStorage.setItem(CARS_STORAGE_KEY, JSON.stringify(cars));
    } catch {
      // ignore
    }
  }, [cars]);

  useEffect(() => {
    saveStoredBookings(bookings);
  }, [bookings]);

  const handleSelectCarById = (carId: string) => {
    const found = cars.find(c => c.id === carId);
    if (found) {
      setSelectedCar(found);
    }
  };

  const handleAddCar = (newCar: CarModel) => {
    setCars(prev => [newCar, ...prev]);
  };

  const handleUpdateCar = (updated: CarModel) => {
    setCars(prev => prev.map(c => c.id === updated.id ? updated : c));
    if (selectedCar && selectedCar.id === updated.id) {
      setSelectedCar(updated);
    }
  };

  const handleDeleteCar = (id: string) => {
    if (window.confirm('確定要從車窖庫存中移除此車輛標的嗎？')) {
      setCars(prev => prev.filter(c => c.id !== id));
      if (selectedCar && selectedCar.id === id) {
        setSelectedCar(null);
      }
    }
  };

  const handleResetCars = () => {
    if (window.confirm('確定要重設回官方預設的 6 部經典法拉利在庫車輛嗎？')) {
      setCars(CARS_DATA);
      localStorage.removeItem(CARS_STORAGE_KEY);
    }
  };

  // Booking handlers
  const handleAddBooking = (newBooking: BookingRecord) => {
    setBookings(prev => [newBooking, ...prev]);
  };

  const handleUpdateBookingStatus = (id: string, status: 'pending' | 'contacted' | 'confirmed') => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const handleDeleteBooking = (id: string) => {
    if (window.confirm('確定要刪除這筆客戶鑑賞預約紀錄嗎？')) {
      setBookings(prev => prev.filter(b => b.id !== id));
    }
  };

  const handleClearAllBookings = () => {
    if (window.confirm('確定要清空所有客戶鑑賞預約名單嗎？')) {
      setBookings([]);
    }
  };

  return (
    <div className="min-h-screen bg-carbon-900 text-gray-100 flex flex-col font-racing selection:bg-rosso-corsa selection:text-white">
      {/* Top Navbar */}
      <Navbar onSelectCar={handleSelectCarById} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <AboutMonza />
        <Inventory 
          cars={cars} 
          onSelectCar={setSelectedCar} 
          onOpenAdmin={() => setIsAdminOpen(true)} 
        />
        <Services />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Car Detail / Inquiry Modal */}
      <CarModal 
        car={selectedCar} 
        onClose={() => setSelectedCar(null)}
        onNewBooking={handleAddBooking}
      />

      {/* Admin CRUD Management Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        cars={cars}
        onAddCar={handleAddCar}
        onUpdateCar={handleUpdateCar}
        onDeleteCar={handleDeleteCar}
        onResetCars={handleResetCars}
        bookings={bookings}
        onUpdateBookingStatus={handleUpdateBookingStatus}
        onDeleteBooking={handleDeleteBooking}
        onClearAllBookings={handleClearAllBookings}
      />
    </div>
  );
}

export default App;
