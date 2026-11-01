export type Category = 'all' | 'mains' | 'proteins' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: 'mains' | 'proteins' | 'drinks';
  price: number;
  image: string;
  description: string;
  isPopular?: boolean;
  spicyLevel?: number;
  available?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerPhone: string;
  deliveryType: 'dine-in' | 'pickup' | 'delivery';
  location: string;
  notes?: string;
  items: CartItem[];
  totalAmount: number;
  createdAt: string;
}
