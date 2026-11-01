import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { OurStorySection } from './components/OurStorySection';
import { MenuSection } from './components/MenuSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemModal } from './components/ItemModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { MenuItem, CartItem, OrderDetails } from './types';

export const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  // Cart quantities map for instant badge lookup
  const cartQuantities = useMemo(() => {
    const map: Record<string, number> = {};
    for (const ci of cartItems) {
      map[ci.item.id] = ci.quantity;
    }
    return map;
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem, delta: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (!existing) {
        if (delta > 0) {
          return [...prev, { item, quantity: delta }];
        }
        return prev;
      }
      const newQty = existing.quantity + delta;
      if (newQty <= 0) {
        return prev.filter((ci) => ci.item.id !== item.id);
      }
      return prev.map((ci) =>
        ci.item.id === item.id ? { ...ci, quantity: newQty } : ci
      );
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            return { ...ci, quantity: ci.quantity + delta };
          }
          return ci;
        })
        .filter((ci) => ci.quantity > 0);
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCompleteOrder = (order: OrderDetails) => {
    setCompletedOrder(order);
    setIsCartOpen(false);
    setCartItems([]);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-sans selection:bg-[#e75a43] selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        cartItemCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Flow */}
      <main className="flex-1">
        {/* Editorial Split Hero Section with Active Carousel & Proof Strip */}
        <HeroSlider
          onExploreMenu={handleExploreMenu}
          onAddToCart={handleAddToCart}
        />

        {/* Quality Pillars & Kitchen Story */}
        <OurStorySection />

        {/* Menu Catalog with Filtering, Search & Order Controls */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onSelectItem={setSelectedItem}
          cartQuantities={cartQuantities}
        />

        {/* Social Proof & Campus Testimonials */}
        <TestimonialsSection />

        {/* Visual Gallery with Lightbox */}
        <GallerySection />

        {/* Campus Location, Delivery Info & Interactive Inquiries */}
        <ContactSection />
      </main>

      {/* Sophisticated Dark Footer with Original Credits */}
      <Footer />

      {/* Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCompleteOrder={handleCompleteOrder}
      />

      {/* Food Item Quick View Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Order Confirmation Receipt & WhatsApp Pre-fill Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />
    </div>
  );
};

export default App;
