import React from 'react';
import { ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-800/80">
          <div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display mb-1.5">
              Bellonis Place
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed font-sans">
              Serving Ekiti State University students, faculty, and campus visitors with freshly prepared Nigerian & continental favorites daily.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-stone-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="#story" className="hover:text-white transition-colors">Our Kitchen</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-[#e75a43] text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div>
            <span>{RESTAURANT_INFO.shortAddress}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Tel: {RESTAURANT_INFO.phone}</span>
          </div>

          <div>
            &copy; 2024 Designed by Amex Team. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
