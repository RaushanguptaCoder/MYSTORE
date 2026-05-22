import React from 'react';
import { Apple, Sparkles, Leaf, Cookie, Home, Wheat } from 'lucide-react';

const iconMap = {
  Apple: Apple,
  Sparkles: Sparkles,
  Leaf: Leaf,
  Cookie: Cookie,
  Home: Home,
  Wheat: Wheat
};

export default function Sidebar({ categories, activeCategory, setActiveCategory }) {
  return (
    <aside className="w-full md:w-64 shrink-0 md:sticky md:top-[85px] md:h-[calc(100vh-85px)] bg-neutral-50 md:bg-white md:border-r border-neutral-200 overflow-y-auto no-scrollbar md:py-4">
      {/* Desktop Version: Vertical Sidebar */}
      <div className="hidden md:flex flex-col gap-1 px-3">
        <div className="px-3 mb-2">
          <span className="text-xs font-black uppercase text-neutral-400 tracking-wider">Categories</span>
        </div>
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Leaf;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-left font-semibold text-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-emerald-50 text-[#0c831f] border-l-4 border-[#0c831f]'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800'
              }`}
            >
              <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? 'bg-emerald-100/80 text-[#0c831f]' : 'bg-neutral-100 text-neutral-500'}`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="truncate">{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Version: Horizontal Scrolling Bar */}
      <div className="flex md:hidden items-center gap-2 px-4 py-3 bg-white overflow-x-auto no-scrollbar border-b border-neutral-100">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Leaf;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 shrink-0 px-3.5 py-2 rounded-full font-bold text-xs transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-[#0c831f] text-white shadow-md shadow-emerald-950/10'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              <IconComponent className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
