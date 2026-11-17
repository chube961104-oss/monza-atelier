import React, { useState } from 'react';
import { ShieldCheck, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onSelectCar: (carId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-carbon-900/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-rosso-corsa to-rosso-dark flex items-center justify-center shadow-lg shadow-rosso-corsa/30 group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-xl tracking-tighter">M</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl tracking-[0.2em] text-white">
                  MONZA
                </span>
                <span className="text-xs uppercase tracking-widest text-rosso-corsa font-semibold px-1.5 py-0.5 rounded bg-rosso-corsa/10 border border-rosso-corsa/20">
                  ATELIER
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase hidden sm:block">
                Curated Ferrari & Racing Heritage
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-rosso-corsa"
            >
              創辦人 Monza
            </a>
            <a 
              href="#pedigree" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-rosso-corsa"
            >
              學歷與賽事履歷
            </a>
            <a 
              href="#inventory" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-rosso-corsa flex items-center gap-1.5"
            >
              <span>在庫躍馬典藏</span>
              <span className="inline-block w-2 h-2 rounded-full bg-rosso-corsa animate-pulse"></span>
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-rosso-corsa"
            >
              專屬旗艦服務
            </a>
            <a 
              href="#manifesto" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-rosso-corsa"
            >
              創辦人自白
            </a>
          </div>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-carbon-800 border border-white/5 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[11px] font-mono tracking-tight text-gray-300">Monza Paddock Online</span>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-sm bg-gradient-to-r from-rosso-corsa to-rosso-scuderia hover:from-rosso-scuderia hover:to-rosso-corsa text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-rosso-corsa/30 hover:shadow-rosso-corsa/50 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>預約私密鑑賞</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-carbon-800 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-rosso-corsa"
          >
            創辦人 Monza
          </a>
          <a
            href="#pedigree"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-rosso-corsa"
          >
            學歷與賽事履歷
          </a>
          <a
            href="#inventory"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-rosso-corsa"
          >
            在庫躍馬典藏 (6 部神車)
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-rosso-corsa"
          >
            專屬旗艦服務
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-rosso-corsa"
          >
            創辦人自白
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center block mt-4 px-4 py-3 rounded bg-rosso-corsa text-white font-semibold text-sm tracking-widest uppercase"
          >
            預約私密鑑賞會談
          </a>
        </div>
      )}
    </nav>
  );
};
