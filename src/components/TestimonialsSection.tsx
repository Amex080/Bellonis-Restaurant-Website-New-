import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2 font-sans">
            Campus Reputation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Loved by students & faculty across EKSU.
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Real feedback from our regular guests visiting between classes and ordering to campus halls.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#faf8f5] border border-stone-200/70 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label="5 stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <blockquote className="text-sm text-stone-700 leading-relaxed font-sans mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-stone-200/60">
                <div className="font-bold text-stone-900 text-sm font-display">
                  {t.name}
                </div>
                <div className="text-xs text-stone-500 font-sans mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
