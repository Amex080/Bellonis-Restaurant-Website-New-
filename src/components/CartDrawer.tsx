import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, ArrowRight, User, Phone, MapPin, FileText } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onCompleteOrder: (order: OrderDetails) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCompleteOrder,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'dine-in' | 'pickup' | 'delivery'>('pickup');
  const [location, setLocation] = useState('Faculty of Engineering');
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const newOrder: OrderDetails = {
      orderId: 'BEL-' + Math.floor(100000 + Math.random() * 900000),
      customerName,
      customerPhone,
      deliveryType,
      location,
      notes,
      items,
      totalAmount,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    onCompleteOrder(newOrder);
    setStep('cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#faf8f5] border-b border-stone-200 text-stone-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#e75a43]" />
              <h2 className="text-base sm:text-lg font-bold font-display">
                Your Order ({totalItemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {items.length === 0 ? (
            /* Empty state */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center font-sans">
              <div className="w-14 h-14 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-stone-900 font-display mb-1">Your order is empty</h3>
              <p className="text-xs text-stone-500 max-w-xs mb-6 leading-relaxed">
                Add delicious dishes like Ewa Agoyin, Jollof Rice, Chicken, or chilled drinks to start your order.
              </p>
              <button
                onClick={onClose}
                className="bg-stone-900 hover:bg-[#e75a43] text-white font-semibold px-5 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : step === 'cart' ? (
            /* Step 1: Cart Items List */
            <>
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 font-sans">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-stone-200/80 bg-[#faf8f5] transition-colors"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-14 h-14 rounded-lg object-cover bg-stone-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate font-display">
                        {cartItem.item.name}
                      </h4>
                      <div className="text-[11px] text-stone-500 font-mono tabular-nums">
                        {formatNaira(cartItem.item.price)} each
                      </div>
                      <div className="text-xs font-bold text-stone-900 font-mono tabular-nums mt-0.5">
                        {formatNaira(cartItem.item.price * cartItem.quantity)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(cartItem.item.id)}
                        className="text-stone-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 text-xs cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-stone-900 font-mono tabular-nums">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100 text-xs cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={onClearCart}
                  className="text-xs text-red-600 hover:underline flex items-center gap-1 mx-auto pt-2 cursor-pointer font-sans"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear whole order
                </button>
              </div>

              {/* Summary and Proceed Button */}
              <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#faf8f5] font-sans">
                <div className="flex items-center justify-between text-xs text-stone-600 mb-1.5">
                  <span>Total Items</span>
                  <span className="font-semibold text-stone-900 font-mono tabular-nums">{totalItemCount}</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-stone-900 mb-4">
                  <span>Grand Total</span>
                  <span className="text-xl font-bold text-stone-900 font-mono tabular-nums">{formatNaira(totalAmount)}</span>
                </div>

                <button
                  onClick={() => setStep('checkout')}
                  className="w-full bg-[#e75a43] hover:bg-[#d24630] text-white font-semibold py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  Proceed to Order Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* Step 2: Checkout Details */
            <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col justify-between overflow-y-auto font-sans">
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    &larr; Back to Items
                  </button>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider text-[11px]">Campus Fulfillment</span>
                </div>

                {/* Fulfillment Method */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Order Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'pickup', label: 'Counter Pickup' },
                      { id: 'dine-in', label: 'Dine-In' },
                      { id: 'delivery', label: 'Hostel Delivery' },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setDeliveryType(mode.id as any)}
                        className={`py-2 px-1 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                          deliveryType === mode.id
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Tunde Balogun"
                      className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e75a43]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 08070692488"
                      className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e75a43]"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    {deliveryType === 'delivery' ? 'Campus Hostel & Room Number' : 'Pickup / Seating Spot'}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder={
                        deliveryType === 'delivery'
                          ? 'e.g. Hall 3, Block B, Room 14'
                          : 'Faculty of Engineering, Ground floor counter'
                      }
                      className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e75a43]"
                    />
                  </div>
                </div>

                {/* Meal Notes */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Meal Instructions (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Extra stew on the beans, chilled drink..."
                      className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e75a43]"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Total & Submit */}
              <div className="p-4 sm:p-5 border-t border-stone-200 bg-[#faf8f5]">
                <div className="flex items-center justify-between text-base font-bold text-stone-900 mb-3">
                  <span>Payable Amount</span>
                  <span className="text-xl font-bold text-stone-900 font-mono tabular-nums">{formatNaira(totalAmount)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e75a43] hover:bg-[#d24630] text-white font-semibold py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" /> Place Order & Generate WhatsApp Receipt
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
