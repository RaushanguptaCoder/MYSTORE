import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import CartDrawer from './components/CartDrawer';

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('veg-fruits');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Two-Column Layout */}
      <MainDashboard
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Slide-out Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
