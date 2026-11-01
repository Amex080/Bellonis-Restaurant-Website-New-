import React from 'react';
import { VALUE_PROPOSITIONS, RESTAURANT_INFO } from '../data/menuData';

export const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="py-14 sm:py-20 bg-white border-b border-stone-200/60">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2 font-sans">
            Our Kitchen Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Honest campus cooking, prepared with dedication.
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Founded within the Ekiti State University Faculty of Engineering, Bellonis Place was established to bring clean, deeply flavorful Nigerian dishes and express campus delivery to students, lecturers, and visitors.
          </p>
        </div>

        {/* 3 Pillars / Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={prop.title}
              className="p-6 rounded-xl bg-[#faf8f5] border border-stone-200/70 space-y-3"
            >
              <div className="font-mono text-xs font-bold text-[#e75a43]">
                0{idx + 1}.
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">
                {prop.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Campus Location Callout Strip */}
        <div className="mt-12 p-6 rounded-xl bg-stone-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs text-orange-200 uppercase tracking-wider font-semibold mb-1">
              Campus Dine-In & Takeaway
            </div>
            <h4 className="text-lg font-bold text-white font-display">
              Visit our eatery counter at {RESTAURANT_INFO.shortAddress}
            </h4>
            <p className="text-xs text-stone-300 mt-0.5">
              Open Monday through Saturday 8:00 AM – 9:00 PM for walk-in dining or quick lecture takeout.
            </p>
          </div>
          <a
            href="tel:+2347069248829"
            className="px-5 py-2.5 bg-[#e75a43] hover:bg-[#d24630] text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 font-sans"
          >
            Call Counter (+234 706 924 8829)
          </a>
        </div>
      </div>
    </section>
  );
};
