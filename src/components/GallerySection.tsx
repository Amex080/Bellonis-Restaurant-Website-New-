import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/menuData';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#faf8f5] border-b border-stone-200/60">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2 font-sans">
            Visual Tour
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            From our Kitchen Counters
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            A glimpse of our daily freshly prepared dishes and meal servings.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.title + index}
              onClick={() => openLightbox(index)}
              className="relative group overflow-hidden rounded-xl bg-stone-100 aspect-4/3 cursor-pointer border border-stone-200/70 shadow-2xs hover:shadow-sm transition-all"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-white">
                <span className="text-[11px] text-orange-200 font-semibold uppercase tracking-wider font-sans">
                  {img.category}
                </span>
                <p className="text-xs sm:text-sm font-bold font-display leading-tight">{img.title}</p>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-xs p-1.5 rounded-lg text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative overflow-hidden rounded-xl bg-black max-h-[75vh]">
                <img
                  src={GALLERY_IMAGES[selectedImageIndex].src}
                  alt={GALLERY_IMAGES[selectedImageIndex].title}
                  className="w-auto h-auto max-h-[75vh] max-w-full object-contain mx-auto"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-3 text-center text-white">
                <h4 className="text-base sm:text-lg font-bold font-display">
                  {GALLERY_IMAGES[selectedImageIndex].title}
                </h4>
                <p className="text-xs text-stone-400 font-mono">
                  {selectedImageIndex + 1} / {GALLERY_IMAGES.length} · {GALLERY_IMAGES[selectedImageIndex].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
