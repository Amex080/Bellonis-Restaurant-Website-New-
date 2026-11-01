import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus, Check, Eye } from 'lucide-react';
import { MenuItem, Category } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity?: number) => void;
  onSelectItem: (item: MenuItem) => void;
  cartQuantities: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onSelectItem,
  cartQuantities,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'mains', label: 'Mains & Swallows' },
    { id: 'proteins', label: 'Crispy Proteins' },
    { id: 'drinks', label: 'Chilled Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item, 1);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId((curr) => (curr === item.id ? null : curr));
    }, 1200);
  };

  const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#faf8f5] border-b border-stone-200/60">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-2 font-sans">
            Prepared Fresh Daily
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Our Kitchen Menu
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Order authentic meals cooked to perfection with traditional Nigerian recipes and seasonings.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jollof, chicken, beans..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#e75a43] focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Food Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center text-stone-500 max-w-md mx-auto border border-stone-200/80">
            <p className="text-base font-semibold text-stone-800 mb-1">No items match your search</p>
            <p className="text-xs text-stone-500 mb-4">
              Try searching for something else or reset the category filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#e75a43] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const currentQty = cartQuantities[item.id] || 0;
              const isAdded = justAddedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Food Photo Container */}
                    <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Clean hover view pill */}
                      <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-stone-900/80 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-sm">
                          <Eye className="w-3.5 h-3.5" /> Details
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Zero-Pill Metadata */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                        <span>{item.category === 'mains' ? 'Main Dish' : item.category === 'proteins' ? 'Protein' : 'Drink'}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.spicyLevel && item.spicyLevel > 1 ? 'Spicy & Flavorful' : 'House Recipe'}</span>
                      </div>

                      <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#e75a43] transition-colors font-display line-clamp-1 mb-1">
                        {item.name}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4 h-8 font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">Price</span>
                        <span className="text-lg font-bold text-stone-900 font-mono tabular-nums">
                          {formatNaira(item.price)}
                        </span>
                      </div>

                      {/* Stepper or Add button */}
                      {currentQty > 0 ? (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(item, -1);
                            }}
                            className="w-7 h-7 rounded-md bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center text-xs shadow-2xs cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-stone-900 font-mono tabular-nums">
                            {currentQty}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(item, 1);
                            }}
                            className="w-7 h-7 rounded-md bg-[#e75a43] text-white hover:bg-[#d24630] flex items-center justify-center text-xs shadow-2xs cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => handleAdd(item, e)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-700 text-white'
                              : 'bg-stone-900 hover:bg-[#e75a43] text-white shadow-2xs'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Added
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" /> Order
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
