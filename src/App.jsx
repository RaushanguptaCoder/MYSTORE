import { useState } from 'react';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import CartDrawer from './components/CartDrawer';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const handleLogoClick = () => {
    setActiveCategory('home');
    setSearchQuery('');
  };

  if (isAdminMode) {
    return <AdminPanel onClose={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={handleLogoClick}
        onAdminClick={() => setIsAdminMode(true)}
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

      {/* Footer */}
      <Footer onCategoryClick={(categoryId) => {
        setActiveCategory(categoryId);
        setSearchQuery('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ProductProvider>
  );
}

