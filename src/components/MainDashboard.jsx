import { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import { ArrowLeft, Flame, HeartPulse, Cookie, Baby } from 'lucide-react';

const seoContent = {
  "Atta & Flours": {
    title: "Atta & Flours Online",
    desc: "Get fresh whole wheat chakki atta, multigrain atta, maida, and suji online. Experience soft, nutritious rotis every day with premium brands milled to perfection."
  },
  "Rice & Rice Products": {
    title: "Premium Rice Online",
    desc: "Explore a wide range of basmati rice, kolam rice, jasmine rice, and brown rice online. Perfect for biryani, pulao, or daily meals with authentic aroma and long grains."
  },
  "Dals & Pulses": {
    title: "Unpolished Dals & Pulses",
    desc: "Order protein-rich, unpolished dals, lentils, rajma, and chana online. Free from artificial polishing, keeping natural nutrients and authentic taste intact."
  },
  "Puja Essentials": {
    title: "Daily Puja Essentials Online",
    desc: "Ensure a serene worship experience with pure Bhimseni camphor, cotton wicks, cow ghee batti, brass diyas, incense sticks, and fresh flowers delivered to you instantly."
  },
  "Puja Kits": {
    title: "Complete Puja Kits & Bundles",
    desc: "Get curated festive puja kits for Navratri, Diwali, Ganesh Chaturthi, and daily rituals. Complete with roli, moli, akshat, and shringar items."
  },
  "Whole Herbs": {
    title: "Ayurvedic Whole Herbs & Jadi Bootis",
    desc: "Discover traditional sun-dried herbs like raw Ashwagandha roots, Shatavari, Bhringraj leaves, and Giloy. Authentically sourced wellness herbs for home remedies."
  },
  "Churna & Powders": {
    title: "Ayurvedic Churna & Herbal Powders",
    desc: "Shop immunity-boosting herbal powders like Giloy churna, Ashwagandha churna, and Triphala powder. Prepared traditionally for natural health and vigor."
  },
  "Biscuits & Cookies": {
    title: "Biscuits & Cookies Online",
    desc: "Treat yourself to sweet, crispy butter cookies, glucose biscuits, digestive cookies, and cream biscuits from Britannia, Parle, and Sunfeast."
  },
  "Chocolates": {
    title: "Chocolates & Sweet Treats",
    desc: "Indulge in creamy milk chocolates, dark chocolate bars, wafer chocolates, and gift packs. Enjoy Dairy Milk, KitKat, and premium treats delivered fresh."
  },
  "Chips & Crisps": {
    title: "Snacks, Chips & Crisps Online",
    desc: "Crack open a bag of crisp potato chips, Lay's magic masala, Pringles, and tortilla chips. The perfect accompaniment for your movie nights or work breaks."
  },
  "Namkeen & Bhujia": {
    title: "Traditional Indian Namkeen & Bhujia",
    desc: "Enjoy authentic, crunchy alu bhujia, sev, mixture, kurkure, and roasted peanuts. Spiced traditionally for a perfect chatpata evening snack."
  },
  "Toffees & Candies": {
    title: "Toffees, Candies & Sweets",
    desc: "Relish your favorite nostalgic candies, sweet toffees, caramel chews, and tangy green mango candies. Perfect little sweet treats for everyone."
  },
  "Mints & Gums": {
    title: "Fresh Mints & Chewing Gums",
    desc: "Keep your breath fresh with cool peppermint rolls, spearmint chewing gums, and cooling mouth fresheners from Mentos, Center Fresh, and Orbit."
  },
  "Cold Drinks & Juices": {
    title: "Cold Drinks & Juices Online",
    desc: "Quench your thirst with chilled carbonated soft drinks, fruit juices, mango drinks, and carbonated water. Best served cold for instant refreshment."
  },
  "Tea & Coffee": {
    title: "Tea & Coffee Online",
    desc: "Brew your perfect cup with premium CTC tea leaves, green tea, instant coffee, and gourmet coffee beans. Rich aroma and taste for your morning energy boost."
  },
  "Milk & Dairy": {
    title: "Fresh Milk & Dairy Products",
    desc: "Order pasteurized full cream milk, toned milk, fresh curd, paneer, and butter online. Delivered fresh to start your day with healthy dairy essentials."
  },
  "Bath & Handwash": {
    title: "Personal Care & Bath Essentials",
    desc: "Keep clean and protected with antiseptic handwashes, moisturizing bathing soaps, shower gels, and body washes from Dove, Dettol, and Lifebuoy."
  },
  "Oral Care": {
    title: "Toothpaste & Oral Hygiene",
    desc: "Maintain brilliant dental health with anticavity toothpaste, soft-bristle toothbrushes, mouthwashes, and dental floss for fresh breath and strong teeth."
  },
  "Diapers & Wipes": {
    title: "Baby Diapers & Wet Wipes",
    desc: "Keep your baby dry and comfortable with ultra-soft baby pant diapers, wet wipes with aloe vera, and baby powder from Pampers, MamyPoko, and Himalaya."
  },
  "Baby Nutrition": {
    title: "Baby Foods & Nutrition",
    desc: "Nourish your little ones with iron-rich baby cereals, milk formula, and organic baby foods. Carefully formulated for baby growth and digestion."
  },
  "Cooking Oils": {
    title: "Edible Cooking Oils Online",
    desc: "Cook delicious meals with pure Kachi Ghani mustard oil, refined sunflower oil, rice bran oil, and pure cow ghee. Heart-healthy options for everyday cooking."
  },
  "Spices & Masalas": {
    title: "Spices & Powdered Masalas",
    desc: "Enhance your curries with rich turmeric powder, Kashmiri red chili powder, garam masala, and coriander powder. Sourced from fine farms for natural aroma."
  },
  "Dishwashing": {
    title: "Dishwashing Liquids & Gels",
    desc: "Get grease-free, sparkling clean plates with concentrated lemon dishwash gels, dishwash bars, and scrub pads. Tough on grease, gentle on hands."
  },
  "Laundry": {
    title: "Laundry Detergents & Powders",
    desc: "Keep your clothes bright and fresh with easy-wash washing powders, liquid detergents, and fabric conditioners that dissolve quickly and remove tough stains."
  },
  "OTC Medicine": {
    title: "First Aid & OTC Medicines",
    desc: "Be prepared with quick pain relief sprays, muscle gels, digestion tablets, antiseptic liquids, and band-aids. Essential over-the-counter wellness products."
  }
};

export default function MainDashboard({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) {
  const { products, categories: activeCategoriesList } = useProducts();
  const [activeSubcategory, setActiveSubcategory] = useState('');

  // Automatically default activeSubcategory to the first subcategory when activeCategory changes
  useEffect(() => {
    if (activeCategory !== 'home') {
      const categoryProducts = products.filter((p) => p.category === activeCategory);
      const uniqueSubcats = Array.from(new Set(categoryProducts.map((p) => p.subcategory)));
      if (uniqueSubcats.length > 0) {
        setActiveSubcategory(uniqueSubcats[0]);
      } else {
        setActiveSubcategory('');
      }
    } else {
      setActiveSubcategory('');
    }
  }, [activeCategory]);

  // Extract subcategories and their representative product images for the active category
  const activeSubcategories = activeCategory !== 'home'
    ? Array.from(
      new Set(
        products
          .filter((p) => p.category === activeCategory)
          .map((p) => p.subcategory)
      )
    ).map((subcatName) => {
      const firstProd = products.find(
        (p) => p.category === activeCategory && p.subcategory === subcatName
      );
      return {
        name: subcatName,
        image: firstProd ? firstProd.image : ''
      };
    })
    : [];

  // List of all homepage categories - all active and functional
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
      isActive: true,
      image: '/images/categories/snacks_bhujia.png'
    },
    {
      id: 'toffees-mints',
      name: 'Toffees & Mints',
      isActive: true,
      image: '/images/categories/toffees_mints.png'
    },
    {
      id: 'tea-coffee',
      name: 'Tea, Coffee & Milk',
      isActive: true,
      image: '/images/categories/tea_coffee.png'
    },
    {
      id: 'body-care',
      name: 'Personal Care',
      isActive: true,
      image: '/images/categories/body_care.png'
    },
    {
      id: 'baby-care',
      name: 'Baby Care',
      isActive: true,
      image: '/images/categories/baby_care.png'
    },
    {
      id: 'masala-oil',
      name: 'Masala, Oil & More',
      isActive: true,
      image: '/images/categories/masala_oil.png'
    },
    {
      id: 'cleaners',
      name: 'Cleaning Essentials',
      isActive: true,
      image: '/images/categories/cleaners.png'
    },
    {
      id: 'breakfast-instant-food',
      name: 'Breakfast & Instant Food',
      isActive: true,
      image: '/images/categories/breakfast_instant_food.png'
    },
    {
      id: 'pharma',
      name: 'Pharma',
      isActive: true,
      image: '/images/categories/pharma.png'
    }
  ];

  // List of promo cards
  const promoCards = [
    {
      name: 'Pooja Items (पूजा सामग्री)',
      desc: 'Incense, diya, camphor & more',
      color: 'border-blue-100 text-blue-700 hover:bg-blue-100/50',
      categoryId: 'puja-essentials',
      bgImage: '/images/categories/Puja.png'
    },
    {
      name: 'Ayurvedic Herbs & basic First-aid (जड़ी बूटी)',
      desc: 'Wellness, first-aid & OTC products',
      color: 'border-rose-100 text-rose-700 hover:bg-rose-100/50',
      categoryId: 'jadi-bootis',
      bgImage: '/images/categories/Ayurvedic.png'
    },
    {
      name: 'Biscuits & Snacks (बिस्कुट और नमकीन)',
      desc: 'Chocolates, chips & quick bites',
      color: ' border-amber-100 text-amber-700 hover:bg-amber-100/50',
      categoryId: 'biscuits-chocolates',
      bgImage: '/images/categories/Biscuits.png'
    },
    {
      name: 'Baby Care',
      desc: 'Soft diapers, formula & toys',
      color: ' border-purple-100 text-purple-700 hover:bg-purple-100/50',
      categoryId: 'baby-care',
      bgImage: '/images/categories/Baby.png'
    }
  ];

  // Handle category selection from home categories grid
  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter products based on search query or active category & subcategory
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
      if (activeSubcategory) {
        return product.category === activeCategory && product.subcategory === activeSubcategory;
      }
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
                onClick={() => setActiveCategory('atta-dal')}
                className="mt-2 bg-white hover:bg-white text-neutral-900 px-6 py-3 sm:px-10 sm:py-4.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-white-950/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
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
            <h1 className="text-base md:text-xl font-black text-neutral-800 tracking-tight">More instant services</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {promoCards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.name}
                    onClick={() => handleCategoryClick({ id: card.categoryId })}
                    className={`group relative overflow-hidden border rounded-2xl p-3 sm:p-4 flex flex-col justify-between min-h-[135px] sm:min-h-[150px] md:min-h-[170px] gap-4 cursor-pointer transition-all duration-200 shadow-xs ${card.color}`}
                  >
                    {/* Background Image with custom opacity overlay */}
                    {card.bgImage && (
                      <div className="absolute inset-0 z- pointer-events-none select-none rounded-2xl">
                        <img
                          src={card.bgImage}
                          alt=""
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-white/10" />
                      </div>
                    )}

                    {/* Content Container */}
                    <div className="relative z-20 flex flex-col h-full justify-between gap-3">
                      <div>
                        <h3 className="font-extrabold text-xs sm:text-sm md:text-base text-black leading-snug">{card.name}</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm text-neutral-800 font-semibold mt-0.5 sm:mt-1 leading-normal">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 13 Categories Grid Section */}
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
                    className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xs transition-all duration-200 group-hover:scale-105 group-hover:shadow-md relative overflow-hidden border border-neutral-200/50 bg-neutral-50"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-neutral-950/5 group-hover:bg-transparent transition-colors duration-200" />
                  </div>
                  <span className="text-[9px] sm:text-xs md:text-sm font-black text-neutral-700 group-hover:text-[#0c831f] text-center leading-snug mt-1.5 sm:mt-2 line-clamp-2 px-1 transition-colors">
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
              <>
                <span className="text-xs font-bold text-neutral-400">
                  / {activeCategoryName}
                </span>
                {activeSubcategory && (
                  <span className="text-xs font-bold text-neutral-500">
                    / {activeSubcategory}
                  </span>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-2">
            {/* Sidebar list on desktop / horizontal bar on mobile */}
            {!searchQuery && (
              <Sidebar
                subcategories={activeSubcategories}
                activeSubcategory={activeSubcategory}
                setActiveSubcategory={setActiveSubcategory}
              />
            )}

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
                    Browse Groceries
                  </button>
                </div>
              )}

              {/* SEO Content Block (Blinkit Style) */}
              {!searchQuery && activeSubcategory && seoContent[activeSubcategory] && (
                <div className="mt-12 pt-8 border-t border-neutral-200/50 bg-white rounded-3xl p-6 md:p-8 shadow-2xs">
                  <h1 className="text-sm md:text-base font-black text-neutral-800 mb-2">
                    {seoContent[activeSubcategory].title}
                  </h1>
                  <p className="text-[11px] md:text-xs text-neutral-500 font-semibold leading-relaxed">
                    {seoContent[activeSubcategory].desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
