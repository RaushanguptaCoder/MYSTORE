import React from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import { categories, products } from '../data/products';
import { Leaf, SearchSlash } from 'lucide-react';

export default function MainDashboard({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) {
  
  // Client-side search logic including synonyms matching
  const getSearchedProducts = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    return products.filter((product) => {
      const matchTitle = product.name.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchSynonyms = product.synonyms && product.synonyms.some(
        (syn) => syn.toLowerCase().includes(query)
      );
      
      return matchTitle || matchDesc || matchSynonyms;
    });
  };

  const searchedProducts = getSearchedProducts();
  const isSearching = searchQuery.trim().length > 0;

  // Normal browsing: filter by active category
  const activeCategoryObj = categories.find((cat) => cat.id === activeCategory) || categories[0];
  const categoryProducts = products.filter((product) => product.category === activeCategory);

  // Group normal products by subcategory
  const groupedProducts = categoryProducts.reduce((acc, product) => {
    const sub = product.subcategory || "Other";
    if (!acc[sub]) {
      acc[sub] = [];
    }
    acc[sub].push(product);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-1">
      {/* Category Navigation Sidebar */}
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={(catId) => {
          setActiveCategory(catId);
          setSearchQuery(''); // Clear search when switching categories
        }}
      />

      {/* Product Grid Area */}
      <main className="flex-1 bg-neutral-50 p-4 md:p-6 overflow-y-auto custom-scrollbar md:h-[calc(100vh-85px)]">
        {isSearching ? (
          // Search Results View
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <div>
                <h2 className="text-lg font-black text-neutral-800 tracking-tight">Search Results</h2>
                <p className="text-xs text-neutral-400 font-bold mt-1">
                  Found {searchedProducts.length} {searchedProducts.length === 1 ? 'item' : 'items'} matching "{searchQuery}"
                </p>
              </div>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-[#0c831f] hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>

            {searchedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-neutral-200/50">
                <SearchSlash className="w-12 h-12 text-neutral-300 mb-4" />
                <h3 className="text-sm font-black text-neutral-700">No results found</h3>
                <p className="text-xs text-neutral-400 font-semibold max-w-xs mt-1 leading-relaxed">
                  We couldn't find anything matching your search. Try looking for "Giloy", "Guduchi", "Atta", "Tomato" or "Kapur".
                </p>
              </div>
            )}
          </div>
        ) : (
          // Normal Category & Subcategory Browse View
          <div className="flex flex-col gap-8">
            {/* Category Banner Hero (Visually stunning card) */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-800 text-white p-6 shadow-md shadow-emerald-950/10">
              <div className="relative z-10 max-w-md">
                <span className="bg-emerald-500/30 text-emerald-100 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-emerald-400/20">
                  Quick Commerce Hub
                </span>
                <h1 className="text-xl md:text-2xl font-black tracking-tight mt-3">
                  {activeCategoryObj.name}
                </h1>
                <p className="text-xs text-emerald-100/90 font-medium mt-1 leading-relaxed">
                  Handpicked premium quality items delivered to your doorstep in minutes.
                </p>
              </div>
              
              {/* Abstract decorative SVG vector */}
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 flex items-center justify-center pointer-events-none">
                <Leaf className="w-28 h-28 text-white rotate-12" />
              </div>
            </div>

            {/* Subcategory Groups (Micro-rows) */}
            {Object.keys(groupedProducts).map((subCategory) => (
              <div key={subCategory} className="flex flex-col gap-4">
                {/* Subcategory title */}
                <div className="flex items-center gap-2 border-b border-neutral-200/80 pb-2">
                  <span className="w-1.5 h-4 bg-[#0c831f] rounded-full" />
                  <h2 className="text-sm font-black text-neutral-800 uppercase tracking-wider">
                    {subCategory}
                  </h2>
                  <span className="text-[10px] bg-neutral-200 text-neutral-500 font-extrabold px-2 py-0.5 rounded-md">
                    {groupedProducts[subCategory].length}
                  </span>
                </div>

                {/* Subcategory Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {groupedProducts[subCategory].map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
