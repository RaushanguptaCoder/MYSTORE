import React from 'react';

export default function Sidebar({ subcategories, activeSubcategory, setActiveSubcategory }) {
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <aside className="w-full md:w-32 shrink-0 md:sticky md:top-[85px] md:h-[calc(100vh-85px)] bg-neutral-50 md:bg-neutral-50/50 md:border-r border-neutral-200 overflow-y-auto no-scrollbar md:py-0">
      
      {/* Desktop Version: Vertical Narrow Sidebar (Blinkit Style) */}
      <div className="hidden md:flex flex-col gap-0.5">
        {subcategories.map((subcat) => {
          const isActive = activeSubcategory === subcat.name;

          return (
            <button
              key={subcat.name}
              onClick={() => setActiveSubcategory(subcat.name)}
              className={`flex flex-col items-center justify-center gap-2 w-full py-4 px-2 text-center transition-all duration-200 cursor-pointer border-b border-neutral-200/40 relative ${
                isActive
                  ? 'bg-white text-neutral-900 border-l-[3.5px] border-l-[#0c831f]'
                  : 'bg-neutral-50 text-neutral-500 hover:bg-neutral-100/60 hover:text-neutral-700'
              }`}
            >
              {/* Image Circle Container */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1.5 shadow-2xs border border-neutral-100/80 overflow-hidden shrink-0 transition-transform duration-200 hover:scale-105">
                {subcat.image ? (
                  <img
                    src={subcat.image}
                    alt={subcat.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-400 font-bold">
                    Bag
                  </div>
                )}
              </div>

              {/* Subcategory Label */}
              <span className="text-[10px] font-black leading-tight tracking-wide px-1 line-clamp-2 uppercase">
                {subcat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Version: Horizontal Scrolling Bar */}
      <div className="flex md:hidden items-center gap-2.5 px-4 py-3 bg-white overflow-x-auto no-scrollbar border-b border-neutral-100 shadow-2xs">
        {subcategories.map((subcat) => {
          const isActive = activeSubcategory === subcat.name;

          return (
            <button
              key={subcat.name}
              onClick={() => setActiveSubcategory(subcat.name)}
              className={`flex items-center gap-2 shrink-0 px-3.5 py-1.5 rounded-full font-black text-[10px] tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#0c831f] text-white shadow-xs'
                  : 'bg-neutral-50 text-neutral-500 border border-neutral-200/60 hover:bg-neutral-100'
              }`}
            >
              {subcat.image && (
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shrink-0">
                  <img
                    src={subcat.image}
                    alt={subcat.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              )}
              <span>{subcat.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
