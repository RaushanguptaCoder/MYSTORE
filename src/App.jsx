import { useState } from 'react';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogoClick = () => {
    setActiveCategory('home');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={handleLogoClick}
      />

      {/* Main Content Dashboard */}
      <main className="flex-1">
        <MainDashboard
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </main>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
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
