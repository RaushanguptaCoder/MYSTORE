import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ChevronDown, Minus, Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, getVariantQuantity } = useCart();
  
  // Set default variant as the first one available
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get current quantity of the selected variant in the cart
  const quantity = getVariantQuantity(product.id, selectedVariant.weight);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white border border-neutral-200/60 rounded-2xl p-3 flex flex-col justify-between hover:shadow-lg hover:border-neutral-300/40 transition-all duration-300 relative group">
      
      {/* ETA Tag & Image Container */}
      <div className="relative w-full aspect-square bg-neutral-50/50 rounded-xl mb-3 flex items-center justify-center p-2 border border-neutral-100 overflow-hidden">
        {/* ETA Badge */}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-neutral-100/80 shadow-xs flex items-center gap-1 z-10">
          <span className="text-[9px] font-black text-neutral-800 tracking-wider uppercase">{product.eta}</span>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-extrabold text-sm text-neutral-900 leading-snug line-clamp-2 h-10 mb-1.5 group-hover:text-[#0c831f] transition-colors">
            {product.name}
          </h3>
          
          {/* Description (subtle, 1 line limit for clean UI) */}
          <p className="text-[11px] text-neutral-400 font-medium line-clamp-1 mb-2">
            {product.description}
          </p>
        </div>

        {/* Variant Selector Dropdown */}
        <div className="relative mb-3">
          {product.variants.length > 1 ? (
            <>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 px-2.5 py-1.5 rounded-lg text-left text-[11px] font-bold text-neutral-600 cursor-pointer transition-colors"
              >
                <span>{selectedVariant.weight}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)} />
                  <div className="absolute left-0 bottom-full mb-1 w-full bg-white border border-neutral-200 rounded-lg shadow-xl z-30 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
                    {product.variants.map((v) => (
                      <button
                        key={v.weight}
                        onClick={() => handleVariantChange(v)}
                        className={`w-full text-left px-2.5 py-2 text-[11px] font-bold transition-colors cursor-pointer hover:bg-neutral-50 ${
                          selectedVariant.weight === v.weight ? 'text-[#0c831f] bg-emerald-50/40' : 'text-neutral-600'
                        }`}
                      >
                        {v.weight} — ₹{v.price}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="bg-neutral-50 border border-neutral-100 px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-neutral-500 select-none">
              {selectedVariant.weight}
            </div>
          )}
        </div>

        {/* Pricing & ADD button row */}
        <div className="flex items-center justify-between gap-1 mt-auto">
          {/* Price Container */}
          <div className="flex flex-col">
            <span className="text-sm font-black text-neutral-900 leading-none">
              ₹{selectedVariant.price}
            </span>
            {selectedVariant.mrp > selectedVariant.price && (
              <span className="text-[10px] text-neutral-400 font-bold line-through mt-0.5">
                MRP ₹{selectedVariant.mrp}
              </span>
            )}
          </div>

          {/* Quantitative Button Controller */}
          <div className="h-9 w-20 flex items-center justify-center shrink-0">
            {quantity > 0 ? (
              <div className="flex items-center justify-between w-full h-full bg-[#0c831f] text-white rounded-lg shadow-md shadow-emerald-950/10 overflow-hidden font-bold select-none">
                <button
                  onClick={() => removeFromCart(product.id, selectedVariant.weight)}
                  className="flex items-center justify-center w-1/3 h-full hover:bg-[#0a6d1a] cursor-pointer transition-colors active:scale-95"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 stroke-[3]" />
                </button>
                
                <span className="text-xs font-black text-center w-1/3">
                  {quantity}
                </span>

                <button
                  onClick={() => addToCart(product, selectedVariant)}
                  className="flex items-center justify-center w-1/3 h-full hover:bg-[#0a6d1a] cursor-pointer transition-colors active:scale-95"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product, selectedVariant)}
                className="w-full h-full bg-white border border-[#0c831f]/60 text-[#0c831f] hover:bg-emerald-50/40 rounded-lg font-black text-xs uppercase tracking-wider cursor-pointer shadow-xs transition-all duration-200 active:scale-95"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
