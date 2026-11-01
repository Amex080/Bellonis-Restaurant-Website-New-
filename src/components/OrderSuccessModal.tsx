import React from 'react';
import { CheckCircle2, MessageSquare, X, MapPin, Phone, User, Receipt } from 'lucide-react';
import { OrderDetails } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;

  const itemsListText = order.items
    .map((item) => `- ${item.quantity}x ${item.item.name} (${formatNaira(item.item.price * item.quantity)})`)
    .join('\n');

  const messageText = `🍽️ *NEW ORDER - BELLONIS PLACE*
Ref: *${order.orderId}*
Customer: *${order.customerName}*
Phone: ${order.customerPhone}
Type: *${order.deliveryType.toUpperCase()}*
Location: ${order.location}
${order.notes ? `Notes: ${order.notes}\n` : ''}
*Ordered Dishes:*
${itemsListText}

*Total Payable: ${formatNaira(order.totalAmount)}*
Thank you!`;

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.cleanPhone}?text=${encodeURIComponent(
    messageText
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative border border-stone-200 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold font-display">Order Created</h3>
          <p className="text-stone-300 text-xs mt-1 font-mono">
            Reference: {order.orderId}
          </p>
        </div>

        {/* Receipt Content */}
        <div className="p-6 space-y-4 font-sans">
          <div className="bg-[#faf8f5] rounded-xl p-4 border border-stone-200/80 space-y-2 text-xs">
            <div className="flex items-center justify-between text-stone-700">
              <span className="flex items-center gap-1.5 text-stone-500">
                <User className="w-3.5 h-3.5" /> Customer:
              </span>
              <span className="font-bold text-stone-900">{order.customerName}</span>
            </div>
            <div className="flex items-center justify-between text-stone-700">
              <span className="flex items-center gap-1.5 text-stone-500">
                <Phone className="w-3.5 h-3.5" /> Phone:
              </span>
              <span className="font-mono text-stone-900">{order.customerPhone}</span>
            </div>
            <div className="flex items-center justify-between text-stone-700">
              <span className="flex items-center gap-1.5 text-stone-500">
                <MapPin className="w-3.5 h-3.5" /> Destination:
              </span>
              <span className="font-medium text-stone-900 text-right max-w-[200px] truncate">
                {order.location}
              </span>
            </div>
          </div>

          {/* Breakdown */}
          <div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
              <Receipt className="w-3.5 h-3.5 text-stone-400" /> Order Summary
            </div>
            <div className="border border-stone-200/80 rounded-xl divide-y divide-stone-100 overflow-hidden">
              {order.items.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="p-2.5 flex items-center justify-between text-xs bg-white"
                >
                  <span className="text-stone-800">
                    <span className="font-mono font-bold text-stone-900">{cartItem.quantity}x</span>{' '}
                    {cartItem.item.name}
                  </span>
                  <span className="font-mono font-bold text-stone-900">
                    {formatNaira(cartItem.item.price * cartItem.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grand total */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-200">
            <span className="font-bold text-stone-900 text-sm">Total Payable:</span>
            <span className="text-xl font-bold text-stone-900 font-mono tabular-nums">
              {formatNaira(order.totalAmount)}
            </span>
          </div>

          {/* WhatsApp dispatch */}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-4 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-2xs transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4" /> Send Receipt to Kitchen via WhatsApp
            </a>

            <button
              onClick={onClose}
              className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Close Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
