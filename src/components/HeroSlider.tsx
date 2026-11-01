import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Plus, Check } from 'lucide-react';
import { SLIDER_SLIDES, MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';

interface HeroSliderProps {
  onExploreMenu: () => void;
  onAddToCart: (item: MenuItem, quantity?: number) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onExploreMenu, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const slideCount = SLIDER_SLIDES.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 5000ms auto slide
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused, slideCount]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  const activeSlide = SLIDER_SLIDES[currentIndex];

  // Match active slide to a menu item for quick order
  const matchedMenuItem = MENU_ITEMS.find(
    (item) => item.name.toLowerCase().includes(activeSlide.title.toLowerCase().split(' ')[1] || '')
  ) || MENU_ITEMS[0];

  const handleQuickAdd = () => {
    onAddToCart(matchedMenuItem, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <section id="home" className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#faf8f5] border-b border-stone-200/60">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Value Context */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-stone-500 uppercase">
              <span>EKSU Faculty of Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Hot Express Kitchen</span>
              <span aria-hidden="true">·</span>
              <span>Fresh Daily</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] font-display text-balance">
              Authentic Nigerian flavors, prepared with care.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-lg">
              From our slow-simmered, smoky Ewa Agoyin to firewood party Jollof and golden peppered proteins, we serve hearty campus meals that comfort and satisfy.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="bg-[#e75a43] hover:bg-[#d24630] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-xs hover:shadow cursor-pointer flex items-center gap-2"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-lg text-sm font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                Campus Location & Hours
              </a>
            </div>

            {/* Quantitative proof strip */}
            <div className="pt-4 border-t border-stone-200/80 flex items-center gap-6 text-xs text-stone-500">
              <div>
                <span className="font-bold text-stone-900 text-sm font-mono block">1,500+</span>
                <span>Campus meals served</span>
              </div>
              <div className="w-px h-7 bg-stone-200" aria-hidden="true" />
              <div>
                <span className="font-bold text-stone-900 text-sm font-mono block">4.9 / 5.0</span>
                <span>Student satisfaction</span>
              </div>
              <div className="w-px h-7 bg-stone-200" aria-hidden="true" />
              <div>
                <span className="font-bold text-stone-900 text-sm font-mono block">&lt; 25 min</span>
                <span>Hostel delivery speed</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Showcase Carousel */}
          <div className="lg:col-span-7">
            <div
              className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden shadow-lg bg-stone-900 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slides */}
              {SLIDER_SLIDES.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-103 transition-transform duration-700"
                    />

                    {/* High-legibility contrast scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                      <div className="text-xs text-orange-200/90 font-medium tracking-wide mb-1.5 font-sans">
                        {slide.category}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight mb-2 drop-shadow-sm text-balance">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-stone-200 max-w-lg mb-4 line-clamp-2 leading-relaxed font-sans">
                        {slide.subtitle}
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleQuickAdd}
                          className="bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          {justAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Added to Order</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Order This Dish (₦{matchedMenuItem.price.toLocaleString()})</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Navigation controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer opacity-70 group-hover:opacity-100"
                aria-label="Previous dish"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer opacity-70 group-hover:opacity-100"
                aria-label="Next dish"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Pagination indicators */}
              <div className="absolute bottom-4 right-6 z-20 flex items-center gap-1.5">
                {SLIDER_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === idx ? 'w-6 bg-[#e75a43]' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
