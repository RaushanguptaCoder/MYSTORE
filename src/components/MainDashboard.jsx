import { useState, useEffect } from 'react';
import { products, categories as activeCategoriesList } from '../data/products';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import { ArrowLeft, Printer, HeartPulse, Dog, Baby } from 'lucide-react';

export default function MainDashboard({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) {
  const [toastMessage, setToastMessage] = useState(null);

  // Trigger auto-dismissing toast notifications
  const triggerToast = (itemName) => {
    setToastMessage(itemName);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // List of 20 categories including active and coming-soon categories
  const homeCategories = [
    {
      id: 'veg-fruits',
      name: 'Vegetables & Fruits',
      isActive: true,
      color: 'from-emerald-400 to-green-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="13" r="5" fill="rgba(255,255,255,0.2)" />
          <circle cx="15" cy="13" r="5" fill="rgba(255,255,255,0.2)" />
          <path d="M12 8c.5-1.5 1.5-2.5 3-2.5" />
          <path d="M12 8c-1 .5-2 1-2 2" />
        </svg>
      )
    },
    {
      id: 'atta-dal',
      name: 'Atta, Rice & Dal',
      isActive: true,
      color: 'from-amber-300 to-yellow-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M8 5a4 4 0 0 1 4 4M16 5a4 4 0 0 0-4 4M8 11a4 4 0 0 1 4 4M16 11a4 4 0 0 0-4 4" />
        </svg>
      )
    },
    {
      id: 'puja-essentials',
      name: 'Puja Path',
      isActive: true,
      color: 'from-purple-400 to-indigo-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8" />
          <circle cx="12" cy="12" r="3.5" fill="rgba(255,255,255,0.2)" />
        </svg>
      )
    },
    {
      id: 'jadi-bootis',
      name: 'Jadi Bootis',
      isActive: true,
      color: 'from-teal-400 to-emerald-600',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 22 2c-2.5 5-3 6.5-4.1 12.2A7 7 0 0 1 11 20z" fill="rgba(255,255,255,0.2)" />
          <path d="M9 22l2.5-2.5" />
        </svg>
      )
    },
    {
      id: 'snacks-drinks',
      name: 'Snacks & Drinks',
      isActive: true,
      color: 'from-red-400 to-pink-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="6" width="14" height="14" rx="2" fill="rgba(255,255,255,0.2)" />
          <circle cx="12" cy="13" r="2.5" />
          <path d="M12 3v3" />
        </svg>
      )
    },
    {
      id: 'household',
      name: 'Household',
      isActive: true,
      color: 'from-blue-400 to-sky-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="rgba(255,255,255,0.2)" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      id: 'dairy-bread',
      name: 'Dairy & Bread',
      isActive: false,
      color: 'from-sky-300 to-blue-400',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="2" fill="rgba(255,255,255,0.2)" />
          <line x1="6" y1="18" x2="18" y2="18" />
          <line x1="6" y1="13" x2="18" y2="13" />
        </svg>
      )
    },
    {
      id: 'munchies',
      name: 'Munchies',
      isActive: false,
      color: 'from-orange-400 to-red-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 3h14l-2 18H7L5 3z" fill="rgba(255,255,255,0.2)" />
          <path d="M8 9s2 1 4 0 4 0 4 0" />
        </svg>
      )
    },
    {
      id: 'bakery',
      name: 'Bakery & Cookies',
      isActive: false,
      color: 'from-amber-500 to-amber-700',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" fill="rgba(255,255,255,0.2)" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      id: 'sweets',
      name: 'Ice Creams',
      isActive: false,
      color: 'from-pink-400 to-rose-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5z" fill="rgba(255,255,255,0.2)" />
          <path d="M6 10l6 12 6-12" />
        </svg>
      )
    },
    {
      id: 'instant-food',
      name: 'Instant Food',
      isActive: false,
      color: 'from-yellow-400 to-amber-600',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11h18v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7z" fill="rgba(255,255,255,0.2)" />
          <path d="M8 11V7M12 11V5M16 11V6" />
        </svg>
      )
    },
    {
      id: 'tea-coffee',
      name: 'Tea & Coffee',
      isActive: false,
      color: 'from-amber-600 to-yellow-800',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="rgba(255,255,255,0.2)" />
          <path d="M6 2v2M10 2v2M14 2v2" />
        </svg>
      )
    },
    {
      id: 'personal-care',
      name: 'Personal Care',
      isActive: false,
      color: 'from-teal-300 to-cyan-500',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="12" height="13" rx="2" fill="rgba(255,255,255,0.2)" />
          <path d="M9 8V5a3 3 0 0 1 6 0v3" />
        </svg>
      )
    },
    {
      id: 'baby-care',
      name: 'Baby Care',
      isActive: false,
      color: 'from-indigo-300 to-purple-400',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="4" fill="rgba(255,255,255,0.2)" />
          <path d="M12 14v4M9 20h6" />
        </svg>
      )
    },
    {
      id: 'pet-care',
      name: 'Pet Care',
      isActive: false,
      color: 'from-yellow-500 to-orange-600',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="7" cy="8" r="1.5" />
          <circle cx="17" cy="8" r="1.5" />
          <circle cx="12" cy="6" r="1.5" />
        </svg>
      )
    },
    {
      id: 'meat-seafood',
      name: 'Meat & Seafood',
      isActive: false,
      color: 'from-red-500 to-rose-700',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.4 3.6 8 8 8h2a10 10 0 0 0 10-10V2z" fill="rgba(255,255,255,0.2)" />
          <circle cx="8" cy="8" r="1.5" />
        </svg>
      )
    },
    {
      id: 'cleaners',
      name: 'Cleaners',
      isActive: false,
      color: 'from-teal-255 to-emerald-450',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 21h10V11H7v10z" fill="rgba(255,255,255,0.2)" />
          <path d="M12 11V7M9 7h6M10 4h4" />
        </svg>
      )
    },
    {
      id: 'stationery',
      name: 'Stationery',
      isActive: false,
      color: 'from-purple-300 to-pink-400',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="rgba(255,255,255,0.2)" />
        </svg>
      )
    },
    {
      id: 'pharma',
      name: 'Pharma',
      isActive: false,
      color: 'from-cyan-400 to-blue-600',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="5" width="14" height="14" rx="7" fill="rgba(255,255,255,0.2)" transform="rotate(45 12 12)" />
          <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
        </svg>
      )
    },
    {
      id: 'gourmet',
      name: 'Gourmet',
      isActive: false,
      color: 'from-lime-400 to-green-600',
      svg: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 text-white fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15 8.5 22 9.5 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.5 9 8.5 12 2" fill="rgba(255,255,255,0.2)" />
        </svg>
      )
    }
  ];

  // List of promo cards
  const promoCards = [
    {
      name: 'Printouts & Utilities',
      desc: 'Instant high-quality printing',
      icon: Printer,
      color: 'bg-blue-50/80 border-blue-100 text-blue-700 hover:bg-blue-100/50'
    },
    {
      name: 'Pharmacy Essentials',
      desc: 'Wellness, first-aid & OTC products',
      icon: HeartPulse,
      color: 'bg-rose-50/80 border-rose-100 text-rose-700 hover:bg-rose-100/50'
    },
    {
      name: 'Pet Supplies',
      desc: 'Premium pet food & items',
      icon: Dog,
      color: 'bg-amber-50/80 border-amber-100 text-amber-700 hover:bg-amber-100/50'
    },
    {
      name: 'Baby Care',
      desc: 'Soft diapers, formula & toys',
      icon: Baby,
      color: 'bg-purple-50/80 border-purple-100 text-purple-700 hover:bg-purple-100/50'
    }
  ];

  // Handle category selection
  const handleCategoryClick = (cat) => {
    if (cat.isActive) {
      setActiveCategory(cat.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      triggerToast(cat.name);
    }
  };

  // Filter products based on search query or active category
  const filteredProducts = products.filter((product) => {
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesDesc = product.description.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      const matchesSubcategory = product.subcategory.toLowerCase().includes(query);
      const matchesSynonyms = product.synonyms && product.synonyms.some((syn) => syn.toLowerCase().includes(query));
      return matchesName || matchesDesc || matchesCategory || matchesSubcategory || matchesSynonyms;
    }
    if (activeCategory !== 'home') {
      return product.category === activeCategory;
    }
    return true;
  });

  const activeCategoryName =
    activeCategory !== 'home' ? activeCategoriesList.find((c) => c.id === activeCategory)?.name : 'All Products';

  const isBrowsingOrSearching = activeCategory !== 'home' || searchQuery.trim() !== '';

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      {!isBrowsingOrSearching ? (
        // --- HOMEPAGE VIEW ---
        <div className="flex flex-col gap-10">
          
          {/* Hero Banner Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-700 text-white min-h-[300px] md:min-h-[340px] flex items-center shadow-lg border border-emerald-950/20 group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 px-8 md:px-16 py-12 max-w-xl flex flex-col items-start gap-4">
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest">
                ⚡ 10-Minute Instant Delivery
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
                Rahul <span className="text-yellow-400">General Store</span>
              </h1>
              <p className="text-xs md:text-sm text-emerald-100/90 font-medium leading-relaxed max-w-sm">
                Order fresh vegetables, daily puja essentials, whole grains, and raw medicinal herbs at unbeatable prices.
              </p>
              <button
                onClick={() => setActiveCategory('veg-fruits')}
                className="mt-2 bg-yellow-400 hover:bg-yellow-350 text-neutral-900 px-7 py-3.5 rounded-xl font-extrabold text-xs tracking-wide shadow-lg shadow-yellow-950/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Shop Fresh Vegetables
              </button>
            </div>
            {/* Right side banner image */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block select-none pointer-events-none">
              <img
                src="/hero_grocery.png"
                alt="Fresh Grocery Hero"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-transparent to-transparent" />
            </div>
          </div>

          {/* Promo Services Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-lg font-black text-neutral-800 tracking-tight">More instant services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {promoCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.name}
                    onClick={() => triggerToast(card.name)}
                    className={`border rounded-2xl p-4 flex flex-col justify-between gap-6 cursor-pointer transition-all duration-200 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 ${card.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-white/70 shadow-xs">
                        <CardIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/90 shadow-2xs">
                        Soon
                      </span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xs text-neutral-800">{card.name}</h3>
                      <p className="text-[10px] text-neutral-500 font-bold mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 20 Categories Grid Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base md:text-lg font-black text-neutral-800 tracking-tight">Shop by Category</h2>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-x-4 gap-y-6">
              {homeCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:shadow-md relative overflow-hidden`}
                  >
                    {/* Visual flare inside the circle */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent)]" />
                    {cat.svg}
                  </div>
                  <span className="text-[10px] md:text-[11px] font-black text-neutral-700 group-hover:text-[#0c831f] text-center leading-snug mt-2 line-clamp-2 px-1 transition-colors">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // --- CATEGORY VIEW & SEARCH GRID WITH SIDEBAR ---
        <div className="flex flex-col gap-4">
          {/* Breadcrumb / Back button navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveCategory('home');
                setSearchQuery('');
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-neutral-700 transition-colors bg-white border border-neutral-200 px-3.5 py-1.5 rounded-xl shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </button>
            {searchQuery && (
              <span className="text-xs font-bold text-neutral-400">
                / Search results for "{searchQuery}"
              </span>
            )}
            {!searchQuery && activeCategory !== 'home' && (
              <span className="text-xs font-bold text-neutral-400">
                / {activeCategoryName}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-2">
            {/* Sidebar list on desktop / horizontal bar on mobile */}
            <Sidebar
              categories={activeCategoriesList}
              activeCategory={activeCategory}
              setActiveCategory={(catId) => {
                setSearchQuery(''); // Clear search query when explicitly clicking a sidebar category
                setActiveCategory(catId);
              }}
            />

            {/* Product display grid */}
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-base md:text-lg font-black text-neutral-800 tracking-tight">
                  {searchQuery ? `Search Results (${filteredProducts.length})` : activeCategoryName}
                </h2>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                // Clean empty search state
                <div className="bg-white border border-neutral-200/60 rounded-3xl p-12 text-center max-w-md mx-auto my-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-neutral-400 fill-none stroke-current" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-neutral-800 text-sm mb-1.5">No products found</h3>
                  <p className="text-neutral-500 text-xs font-semibold leading-relaxed max-w-[280px] mb-6">
                    We couldn't find anything matching "{searchQuery}". Try searching for popular items like tomatoes, kapur, or atta.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('veg-fruits');
                    }}
                    className="bg-[#0c831f] hover:bg-[#0a6d1a] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wide shadow-md transition-colors cursor-pointer"
                  >
                    Browse Fresh Vegetables
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modern custom toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-900/95 text-white px-5 py-3.5 rounded-2xl font-extrabold text-xs shadow-2xl flex items-center gap-2 border border-neutral-800 animate-in fade-in slide-in-from-bottom-5 duration-200 max-w-sm text-center">
          <span className="text-emerald-400 text-sm">✨</span>
          <span>"{toastMessage}" is coming soon to Rahul General Store!</span>
        </div>
      )}
    </div>
  );
}
