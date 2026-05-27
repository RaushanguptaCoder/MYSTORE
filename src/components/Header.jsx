import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Shield } from 'lucide-react';

export default function Header({ searchQuery, setSearchQuery, onCartClick, onLogoClick, onAdminClick }) {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200/80 shadow-sm px-4 md:px-8 py-3 sm:py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8">

        {/* Brand logo (left) & Mobile actions (right) */}
        <div className="flex items-center justify-between md:justify-start gap-4 shrink-0 w-full md:w-auto">
          {/* Logo */}
          <div className="flex flex-col cursor-pointer" onClick={onLogoClick}>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 leading-none">
              Rahul<span className="text-[#0c831f]"> General Store</span>
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-bold text-neutral-400 tracking-widest mt-1">
              Best Quality Products
            </span>
          </div>

          {/* Mobile Actions: Rendered here on mobile, hidden on desktop */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Owner Portal */}
            <button
              onClick={onAdminClick}
              className="flex items-center justify-center text-neutral-600 hover:text-neutral-950 bg-neutral-100 active:bg-neutral-200/60 p-2.5 rounded-xl transition-all cursor-pointer border border-neutral-200/40"
              title="Owner Control Panel"
            >
              <Shield className="w-4 h-4 text-[#0c831f]" />
            </button>

            {/* Cart Pill */}
            <button
              onClick={onCartClick}
              className="flex items-center gap-1.5 bg-[#0c831f] active:bg-[#0a6d1a] text-white px-3 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="text-xs font-extrabold tracking-tight">
                {totalItems > 0 ? `₹${totalPrice}` : 'Cart'}
              </span>
            </button>
          </div>
        </div>

        {/* Center: Search bar (full width on mobile, middle flex on desktop) */}
        <div className="w-full md:flex-1 md:max-w-2xl relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search 'Rice', 'Kapur', 'Atta', 'Sugar' or 'Salt'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2 sm:py-2.5 bg-neutral-100/90 text-xs sm:text-sm border-0 rounded-xl text-neutral-800 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#0c831f]/20 focus:outline-none transition-all duration-200 shadow-inner font-medium animate-in fade-in duration-150"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-semibold text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Desktop Actions: Hidden on mobile, rendered on desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Owner Portal Shortcut */}
          <button
            onClick={onAdminClick}
            className="flex items-center gap-1.5 text-neutral-650 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 px-3.5 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all duration-200 cursor-pointer border border-neutral-200/40"
            title="Owner Control Panel"
          >
            <Shield className="w-4 h-4 text-[#0c831f] shrink-0" />
            <span>Owner Portal</span>
          </button>

          {/* Cart Pill */}
          <button
            onClick={onCartClick}
            className="flex items-center gap-2 bg-[#0c831f] text-white px-4 py-2.5 rounded-xl hover:bg-[#0a6d1a] transition-all duration-200 shadow-md shadow-emerald-950/10 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            {totalItems > 0 ? (
              <div className="flex flex-col text-left shrink-0">
                <span className="text-xs font-extrabold leading-none tracking-wide">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
                <span className="text-xs font-bold leading-none mt-1">₹{totalPrice}</span>
              </div>
            ) : (
              <span className="text-sm font-extrabold tracking-tight">My Cart</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}


