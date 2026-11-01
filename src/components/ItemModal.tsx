import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative border border-stone-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Food Image */}
        <div className="relative h-60 w-full bg-stone-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
            <span>{item.category === 'mains' ? 'Main Dish' : item.category === 'proteins' ? 'Protein' : 'Drink'}</span>
            <span aria-hidden="true">·</span>
            <span>Campus Fresh</span>
          </div>

          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-bold text-stone-900 font-display">{item.name}</h3>
            <span className="text-xl font-bold text-stone-900 font-mono tabular-nums">
              {formatNaira(item.price)}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed font-sans">
            {item.description}
          </p>

          {item.spicyLevel && item.spicyLevel > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-stone-700 font-medium mb-6 bg-orange-50/80 px-3 py-1.5 rounded-lg w-fit border border-orange-200/60">
              <Flame className="w-4 h-4 text-[#e75a43]" />
              <span>Pepper level: {item.spicyLevel === 1 ? 'Mild & aromatic' : 'Rich & spicy'}</span>
            </div>
          )}

          {/* Stepper & Action */}
          <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
                disabled={quantity <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center font-bold text-stone-900 text-xs font-mono tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="flex-1 bg-[#e75a43] hover:bg-[#d24630] text-white font-semibold py-2.5 px-4 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              Add {quantity} · {formatNaira(item.price * quantity)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
