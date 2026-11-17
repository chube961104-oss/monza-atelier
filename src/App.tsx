import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMonza } from './components/AboutMonza';
import { Inventory } from './components/Inventory';
import { Services } from './components/Services';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CarModal } from './components/CarModal';
import { CARS_DATA, CarModel } from './data/cars';

export function App() {
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);

  const handleSelectCarById = (carId: string) => {
    const found = CARS_DATA.find(c => c.id === carId);
    if (found) {
      setSelectedCar(found);
    }
  };

  return (
    <div className="min-h-screen bg-carbon-900 text-gray-100 flex flex-col font-racing selection:bg-rosso-corsa selection:text-white">
      {/* Top Navbar */}
      <Navbar onSelectCar={handleSelectCarById} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <AboutMonza />
        <Inventory onSelectCar={setSelectedCar} />
        <Services />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Car Detail / Inquiry Modal */}
      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}

export default App;
