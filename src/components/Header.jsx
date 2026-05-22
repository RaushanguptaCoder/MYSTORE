import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Search, MapPin, ChevronDown, User, ShoppingBag, Clock } from 'lucide-react';

const locations = [
  { id: '1', address: 'Indiranagar, Bengaluru', time: '12 mins' },
  { id: '2', address: 'Green Park, New Delhi', time: '9 mins' },
  { id: '3', address: 'Bandra West, Mumbai', time: '15 mins' },
  { id: '4', address: 'Salt Lake, Kolkata', time: '11 mins' }
];

export default function Header({ searchQuery, setSearchQuery, onCartClick }) {
  const { totalItems, totalPrice } = useCart();
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const selectLocation = (loc) => {
    setCurrentLocation(loc);
    setIsLocationDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200/80 shadow-sm px-4 md:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Left: Brand logo & Location selector */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Blinkit Inspired Logo */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.location.reload()}>
            <span className="text-2xl font-black tracking-tight text-neutral-900">
              groce<span className="text-[#0c831f]">fast</span>
            </span>
            <span className="text-[9px] uppercase font-bold text-neutral-400 tracking-widest -mt-1">
              Blinkit Clone
            </span>
          </div>

          {/* Location Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="flex flex-col text-left group cursor-pointer hover:bg-neutral-50 p-1.5 rounded-lg transition-colors duration-150"
            >
              <div className="flex items-center gap-1 text-xs font-black text-neutral-900 uppercase tracking-wide">
                <Clock className="w-3.5 h-3.5 text-[#0c831f] shrink-0" />
                <span>Delivery in {currentLocation.time}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-neutral-600 font-medium max-w-[180px] truncate mt-0.5">
                <span className="truncate">{currentLocation.address}</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
              </div>
            </button>

            {/* Location Dropdown */}
            {isLocationDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLocationDropdownOpen(false)}
                />
                <div className="absolute left-0 mt-2 w-64 bg-white border border-neutral-200 rounded-xl shadow-xl z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-neutral-100">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Select Delivery Location</span>
                  </div>
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => selectLocation(loc)}
                      className={`w-full flex items-start gap-2.5 px-4 py-3 text-left hover:bg-neutral-50 transition-colors cursor-pointer ${
                        currentLocation.id === loc.id ? 'bg-emerald-50/50' : ''
                      }`}
                    >
                      <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${
                        currentLocation.id === loc.id ? 'text-[#0c831f]' : 'text-neutral-400'
                      }`} />
                      <div className="flex flex-col">
                        <span className={`text-sm font-semibold ${
                          currentLocation.id === loc.id ? 'text-[#0c831f]' : 'text-neutral-800'
                        }`}>
                          {loc.address}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">ETA: {loc.time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Center: Sticky Instant Search bar */}
        <div className="flex-1 max-w-2xl relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search 'Guduchi', 'Kapur', 'Atta', 'Tomatoes' or 'Milk'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-neutral-100/90 text-sm border-0 rounded-xl text-neutral-800 placeholder-neutral-400 focus:bg-white focus:ring-2 focus:ring-[#0c831f]/20 focus:outline-none transition-all duration-200 shadow-inner font-medium"
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

        {/* Right: Account icon & Cart Pill Button */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Account Button (Simulation only) */}
          <button 
            onClick={() => alert("Login Flow Simulated: Account Settings coming soon!")}
            className="flex items-center gap-1 text-neutral-600 hover:text-[#0c831f] transition-colors p-2 rounded-lg cursor-pointer"
            aria-label="Account Account"
          >
            <User className="w-5 h-5" />
            <span className="hidden lg:inline text-sm font-bold tracking-tight">Login</span>
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

      {/* Mobile Location Selector (Sits beneath header on small screens) */}
      <div className="md:hidden mt-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-xs">
        <button
          onClick={() => setIsLocationDropdownOpen(true)}
          className="flex items-center gap-1.5 font-bold text-neutral-800"
        >
          <MapPin className="w-3.5 h-3.5 text-[#0c831f]" />
          <span>{currentLocation.address}</span>
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
        </button>
        <span className="text-neutral-500 font-bold bg-neutral-100 px-2 py-0.5 rounded-md">
          {currentLocation.time}
        </span>
      </div>
    </header>
  );
}
