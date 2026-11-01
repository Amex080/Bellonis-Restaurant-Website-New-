import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Kitchen', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5'
          : 'bg-[#faf8f5] border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-[#e75a43] transition-colors font-display"
        >
          Bellonis Place
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e75a43] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 bg-[#e75a43] hover:bg-[#d24630] text-white font-semibold px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 text-sm cursor-pointer active:scale-98"
            aria-label="View current meal order"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order</span>
            {cartItemCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-white text-[#e75a43] rounded-full text-xs font-bold font-mono">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 md:hidden rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-800 hover:text-[#e75a43] font-medium text-base py-2 border-b border-stone-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+2347069248829"
              className="text-xs text-stone-500 pt-2 font-mono"
            >
              Hotline: +234 706 924 8829
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
