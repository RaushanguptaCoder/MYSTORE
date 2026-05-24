import { useState, useEffect } from 'react';
import { products, categories as activeCategoriesList } from '../data/products';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import { ArrowLeft, Flame, HeartPulse, Cookie, Baby } from 'lucide-react';

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
      id: 'atta-dal',
      name: 'Atta, Rice & Dal',
      isActive: true,
      image: '/images/categories/atta_dal.png'
    },
    {
      id: 'puja-essentials',
      name: 'Puja Path',
      isActive: true,
      image: '/images/categories/puja_essentials.jpg'
    },
    {
      id: 'jadi-bootis',
      name: 'Jadi Bootis & Spices',
      isActive: true,
      image: '/images/categories/jadi_booties.avif'
    },
    {
      id: 'biscuits-chocolates',
      name: 'Biscuits & Chocolates',
      isActive: true,
      image: '/images/categories/biscuits_chocolates.png'
    },
    {
      id: 'snacks-munchies',
      name: 'Snacks & Munchies',
      isActive: false,
      image: '/images/categories/snacks_bhujia.png'
    },
    {
      id: 'toffees-mints',
      name: 'Toffees & Mints',
      isActive: false,
      image: '/images/categories/toffees_mints.png'
    },
    {
      id: 'tea-coffee',
      name: 'Tea, Coffee & Milk',
      isActive: false,
      image: '/images/categories/tea_coffee.png'
    },
    {
      id: 'body-care',
      name: 'Personal Care',
      isActive: false,
      image: '/images/categories/body_care.png'
    },
    {
      id: 'baby-care',
      name: 'Baby Care',
      isActive: false,
      image: '/images/categories/baby_care.png'
    },
    {
      id: 'masala-oil',
      name: 'Masala, Oil & More',
      isActive: false,
      image: '/images/categories/masala_oil.png'
    },
    {
      id: 'cleaners',
      name: 'Cleaning Essentials',
      isActive: false,
      image: '/images/categories/cleaners.png'
    },
    {
      id: 'breakfast-instant-food',
      name: 'Breakfast & Instant Food',
      isActive: false,
      image: '/images/categories/breakfast_instant_food.png'
    },
    {
      id: 'pharma',
      name: 'Pharma',
      isActive: false,
      image: '/images/categories/pharma.png'
    }
  ];

  // List of promo cards
  const promoCards = [
    {
      name: 'Pooja Items',
      desc: 'Incense, diya, camphor & more',
      icon: Flame,
      color: 'bg-blue-50/80 border-blue-100 text-blue-700 hover:bg-blue-100/50'
    },
    {
      name: 'Ayurvedic Herbs & basic First-aid',
      desc: 'Wellness, first-aid & OTC products',
      icon: HeartPulse,
      color: 'bg-rose-50/80 border-rose-100 text-rose-700 hover:bg-rose-100/50'
    },
    {
      name: 'Biscuits & Snacks',
      desc: 'Chocolates, chips & quick bites',
      icon: Cookie,
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
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
                Rahul <span className="text-yellow-400">General Store</span>
              </h1>
              <p className="text-s md:text-sm text-emerald-100/90 font-medium leading-relaxed max-w-sm">
                Order your daily <br /> Kirana, Pooja Items & Natural Ayurvedic Herbs at Best Prices.
              </p>
              <button
                onClick={() => setActiveCategory('veg-fruits')}
                className="mt-2 bg-white hover:bg-white text-neutral-900 px-10 py-5 rounded-xl font-extrabold text-sm tracking-wide shadow-lg shadow-white-950/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Shop now
              </button>
            </div>
            {/* Right side banner image */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block select-none pointer-events-none">
              <img
                src="/hero_grocery.png"
                alt="Fresh Grocery Hero"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 "
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-transparent to-transparent" />
            </div>
          </div>

          {/* Promo Services Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-base md:text-lg font-black text-neutral-800 tracking-tight">More instant services</h1>
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
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-4 gap-y-6">
              {homeCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className="w-16 h-16 md:w-26 md:h-26 rounded-2xl flex items-center justify-center shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:shadow-md relative overflow-hidden border border-neutral-200/50 bg-neutral-50"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-neutral-950/5 group-hover:bg-transparent transition-colors duration-200" />
                  </div>
                  <span className="text-[10px] md:text-[15px] font-black text-neutral-700 group-hover:text-[#0c831f] text-center leading-snug mt-2 line-clamp-2 px-1 transition-colors">
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
                    We couldn't find anything matching "{searchQuery}". Try searching for popular items like Rice, kapur, or atta.
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
