import React from 'react';
import { ChevronDown, Gauge, Trophy, Shield, Flame, ArrowUpRight } from 'lucide-react';
import { MONZA_PROFILE } from '../data/monzaProfile';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with Dark Carbon Gradients & Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform animate-pulse duration-[10000ms]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-900 via-carbon-900/80 to-carbon-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rosso-corsa/15 via-transparent to-transparent" />
        {/* Fine grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Heritage Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-carbon-800/90 border border-rosso-corsa/30 mb-8 backdrop-blur-md">
          <Flame className="w-4 h-4 text-rosso-corsa animate-bounce" />
          <span className="text-xs font-semibold tracking-[0.25em] text-gray-200 uppercase">
            Curated by Monza Lin ｜ 米蘭理工車輛工程碩士 × 躍馬私洽
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-none mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            MONZA ATELIER
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-racing font-light tracking-[0.2em] text-rosso-corsa mt-3">
            以秒針丈量生命的獵馬人
          </span>
        </h1>

        {/* Hero Quote */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 italic">
          「{MONZA_PROFILE.heroQuote}」
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="#inventory"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-rosso-corsa hover:bg-rosso-scuderia text-white font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 shadow-xl shadow-rosso-corsa/30 hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <span>鑑賞在庫躍馬典藏</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#pedigree"
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-carbon-800/80 hover:bg-carbon-700 border border-white/10 hover:border-white/30 text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Trophy className="w-4 h-4 text-giallo-modena" />
            <span>Monza 學術與賽道全履歷</span>
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {MONZA_PROFILE.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="carbon-panel p-5 rounded-sm border border-white/5 relative overflow-hidden group hover:border-rosso-corsa/40 transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-rosso-corsa/60 group-hover:bg-rosso-corsa transition-colors" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#about" className="text-gray-400 hover:text-rosso-corsa transition-colors flex flex-col items-center gap-1 group">
            <span className="text-[10px] tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all">EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-rosso-corsa" />
          </a>
        </div>
      </div>
    </section>
  );
};
