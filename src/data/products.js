// Real-world, localized quick-commerce inventory dataset for the Blinkit clone.
// Includes categories, subcategories, weight variants, pricing, ETA, and search synonyms.

export const categories = [
  { id: "veg-fruits", name: "Vegetables & Fruits", icon: "Apple" },
  { id: "atta-dal", name: "Atta, Rice & Dal", icon: "Wheat" },
  { id: "puja-essentials", name: "Daily Puja Path Essentials", icon: "Sparkles" },
  { id: "jadi-bootis", name: "Raw Herbs & Jadi Bootis", icon: "Leaf" },
  { id: "snacks-drinks", name: "Snacks & Drinks", icon: "Cookie" },
  { id: "household", name: "Household Items", icon: "Home" }
];

export const products = [
  // --- Vegetables & Fruits ---
  {
    id: "tomato-local",
    name: "Tomato (Local)",
    description: "Fresh, juicy red tomatoes sourced directly from local farms. Perfect for daily curries and salads.",
    category: "veg-fruits",
    subcategory: "Fresh Vegetables",
    eta: "10 MINS",
    synonyms: ["tamatar", "tomato", "salad", "vegetable", "fresh veg"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><circle cx="50" cy="55" r="30" fill="%23ef4444"/><circle cx="42" cy="50" r="28" fill="%23dc2626"/><path d="M50 25 C48 18, 52 18, 50 15 C52 18, 56 18, 50 25" stroke="%2322c55e" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M42 24 L50 25 L58 24 L52 28 L48 28 Z" fill="%2315803d"/></svg>`,
    variants: [
      { weight: "500g", price: 22, mrp: 30 },
      { weight: "1kg", price: 40, mrp: 55 }
    ]
  },
  {
    id: "potato-jyoti",
    name: "Potato (Jyoti)",
    description: "Versatile, premium quality Jyoti potatoes. Ideal for boiling, frying, and baking.",
    category: "veg-fruits",
    subcategory: "Fresh Vegetables",
    eta: "10 MINS",
    synonyms: ["aloo", "alu", "potato", "potatoes", "fresh veg"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><ellipse cx="50" cy="52" rx="32" ry="24" fill="%23eab308" opacity="0.85"/><ellipse cx="48" cy="50" rx="30" ry="22" fill="%23ca8a04" opacity="0.9"/><circle cx="35" cy="45" r="2" fill="%23854d0e"/><circle cx="65" cy="58" r="2.5" fill="%23854d0e"/><circle cx="50" cy="62" r="1.5" fill="%23854d0e"/></svg>`,
    variants: [
      { weight: "1kg", price: 28, mrp: 35 },
      { weight: "2kg", price: 52, mrp: 70 }
    ]
  },
  {
    id: "banana-robusta",
    name: "Banana (Robusta)",
    description: "Sweet and creamy semi-ripe Robusta bananas. Rich in potassium and energy.",
    category: "veg-fruits",
    subcategory: "Fresh Fruits",
    eta: "12 MINS",
    synonyms: ["kela", "banana", "bananas", "fruit", "fruits"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 35 C50 35, 70 45, 75 70 C60 70, 45 55, 30 35" fill="%23facc15" stroke="%23eab308" stroke-width="2"/><path d="M28 32 C30 34, 32 35, 30 35 C28 32, 26 28, 28 26" stroke="%23854d0e" stroke-width="3" fill="none"/></svg>`,
    variants: [
      { weight: "6 pcs", price: 39, mrp: 50 },
      { weight: "12 pcs", price: 75, mrp: 95 }
    ]
  },

  // --- Atta, Rice & Dal ---
  {
    id: "ashirvaad-atta",
    name: "Aashirvaad Shudh Chakki Atta",
    description: "100% pure whole wheat flour processed with traditional chakki grinding. Absorbs more water for softer rotis.",
    category: "atta-dal",
    subcategory: "Atta & Flours",
    eta: "15 MINS",
    synonyms: ["atta", "flour", "wheat", "aashirvaad", "roti", "chapati", "gehu"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23dc2626"/><rect x="36" y="32" width="28" height="18" fill="%23fef08a"/><text x="50" y="44" font-family="sans-serif" font-size="7" font-weight="bold" fill="%23b91c1c" text-anchor="middle">AASHIRVAAD</text><text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">ATTA</text><circle cx="50" cy="58" r="4" fill="%23eab308"/></svg>`,
    variants: [
      { weight: "1kg", price: 60, mrp: 70 },
      { weight: "5kg", price: 270, mrp: 310 }
    ]
  },
  {
    id: "fortune-basmati",
    name: "Fortune Biryani Basmati Rice",
    description: "Extra-long grain Basmati rice with pristine aroma. Perfect for festive biryanis and pulao.",
    category: "atta-dal",
    subcategory: "Rice & Rice Products",
    eta: "15 MINS",
    synonyms: ["chawal", "rice", "basmati", "biryani rice", "fortune"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%230284c7"/><rect x="36" y="32" width="28" height="18" fill="%23ffffff"/><text x="50" y="44" font-family="sans-serif" font-size="8" font-weight="bold" fill="%230369a1" text-anchor="middle">FORTUNE</text><text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">RICE</text><path d="M42 54 C46 52, 54 52, 58 54" stroke="%23eab308" stroke-width="2" fill="none"/></svg>`,
    variants: [
      { weight: "1kg", price: 125, mrp: 150 },
      { weight: "5kg", price: 580, mrp: 700 }
    ]
  },
  {
    id: "tata-toor-dal",
    name: "Tata Sampann Unpolished Toor Dal",
    description: "Rich in protein, unpolished arhar/toor dal sourced from fine farms. Preserves natural taste and nutrients.",
    category: "atta-dal",
    subcategory: "Dals & Pulses",
    eta: "12 MINS",
    synonyms: ["dal", "toor dal", "arhar dal", "pulses", "lentils", "tata sampann"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23ea580c"/><rect x="36" y="32" width="28" height="18" fill="%23ffffff"/><text x="50" y="44" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23c2410c" text-anchor="middle">TATA</text><text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">TOOR DAL</text></svg>`,
    variants: [
      { weight: "500g", price: 95, mrp: 110 },
      { weight: "1kg", price: 180, mrp: 210 }
    ]
  },
  {
    id: "fortune-mustard-oil",
    name: "Fortune Premium Kachi Ghani Mustard Oil",
    description: "Pure cold-pressed mustard oil with a strong aroma and high pungency. Traditional taste for North Indian dishes.",
    category: "atta-dal",
    subcategory: "Edible Oils",
    eta: "12 MINS",
    synonyms: ["oil", "mustard oil", "sarso tel", "fortune oil", "cooking oil"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M40 30 L60 30 L58 85 L42 85 Z" fill="%23ca8a04"/><path d="M45 15 L55 15 L55 30 L45 30 Z" fill="%231e293b"/><rect x="44" y="40" width="12" height="25" fill="%23ffffff"/><text x="50" y="55" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23ca8a04" text-anchor="middle">MUSTARD</text></svg>`,
    variants: [
      { weight: "1L", price: 165, mrp: 195 }
    ]
  },

  // --- Daily Puja Path Essentials ---
  {
    id: "premium-camphor",
    name: "Premium Bhimseni Camphor / Kapur",
    description: "100% pure, organic Bhimseni Kapur. Burns completely without leaving ash. Spreads calming fragrance.",
    category: "puja-essentials",
    subcategory: "Puja Essentials",
    eta: "10 MINS",
    synonyms: ["kapoor", "kapur", "camphor", "bhimseni", "puja", "pooja", "havan"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 35 L70 35 L68 80 L32 80 Z" fill="%23a855f7"/><rect x="36" y="42" width="28" height="15" fill="%23ffffff"/><text x="50" y="52" font-family="sans-serif" font-size="6" font-weight="bold" fill="%237e22ce" text-anchor="middle">CAMPHOR</text><path d="M50 18 L55 25 L45 25 Z" fill="%233b82f6" opacity="0.6"/></svg>`,
    variants: [
      { weight: "50g", price: 45, mrp: 60 },
      { weight: "100g", price: 85, mrp: 110 }
    ]
  },
  {
    id: "ghee-batti",
    name: "Pure Ghee Batti (Cotton Wicks)",
    description: "Ready-to-use cotton wicks soaked in pure cow ghee. Burning time of approximately 20-30 minutes.",
    category: "puja-essentials",
    subcategory: "Puja Essentials",
    eta: "10 MINS",
    synonyms: ["diya batti", "ghee wicks", "cotton wicks", "jyot", "batti", "puja"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><circle cx="50" cy="55" r="22" fill="%23eab308" opacity="0.8"/><circle cx="50" cy="55" r="15" fill="%23ffffff"/><path d="M50 35 C48 20, 52 20, 50 12 C52 20, 56 20, 50 35" fill="%23f97316"/></svg>`,
    variants: [
      { weight: "60 pcs", price: 110, mrp: 140 },
      { weight: "120 pcs", price: 210, mrp: 280 }
    ]
  },
  {
    id: "brass-diya",
    name: "Classic Brass Diya (Medium)",
    description: "Traditional, sturdy brass oil lamp for daily worship. Corrosion-resistant and easily washable.",
    category: "puja-essentials",
    subcategory: "Puja Essentials",
    eta: "10 MINS",
    synonyms: ["diya", "brass diya", "deepak", "brass lamp", "oil lamp", "puja"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 60 C30 75, 70 75, 70 60 Z" fill="%23ca8a04"/><path d="M45 70 L55 70 L58 85 L42 85 Z" fill="%23ca8a04"/><path d="M50 50 C48 40, 52 40, 50 30 C52 40, 56 40, 50 50" fill="%23f97316"/></svg>`,
    variants: [
      { weight: "1 unit", price: 149, mrp: 199 }
    ]
  },
  {
    id: "navratri-kit",
    name: "Curated Navratri Puja Kit (Complete Bundle)",
    description: "Everything you need for Navratri worship: Roli, Moli, Akshat, Kapur, Honey, Dhoop, Matchbox, Gangajal, and Shringar items.",
    category: "puja-essentials",
    subcategory: "Puja Kits",
    eta: "15 MINS",
    synonyms: ["navratra", "pooja set", "complete kit", "puja kit", "navratri kit", "festival kit"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="20" y="30" width="60" height="50" rx="4" fill="%23ea580c"/><rect x="25" y="35" width="50" height="40" fill="%23fef08a" opacity="0.3"/><text x="50" y="60" font-family="sans-serif" font-size="9" font-weight="bold" fill="%23ffffff" text-anchor="middle">NAVRATRI KIT</text><circle cx="35" cy="45" r="3" fill="%23facc15"/><circle cx="65" cy="45" r="3" fill="%23facc15"/></svg>`,
    variants: [
      { weight: "1 Pack", price: 499, mrp: 699 }
    ]
  },

  // --- Raw Herbs & Jadi Bootis ---
  {
    id: "raw-ashwagandha",
    name: "Raw Ashwagandha Root (Sabut)",
    description: "Premium whole dried Ashwagandha roots (Withania Somnifera). Renowned for reducing stress, boosting energy, and improving vitality.",
    category: "jadi-bootis",
    subcategory: "Whole Herbs",
    eta: "12 MINS",
    synonyms: ["ashwagandha", "asgandh", "indian ginseng", "withania somnifera", "stress relief", "root", "vitality", "immunity"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M45 30 C45 30, 48 55, 38 75 M55 30 C55 30, 52 60, 62 80 M50 25 C50 25, 45 45, 52 70" stroke="%23a16207" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M48 24 L52 24 L54 18 C54 18, 48 16, 48 24 Z" fill="%2315803d"/></svg>`,
    variants: [
      { weight: "100g", price: 120, mrp: 160 },
      { weight: "250g", price: 280, mrp: 380 }
    ]
  },
  {
    id: "shatavari-root",
    name: "Shatavari Root (Whole)",
    description: "100% natural, unadulterated Shatavari roots (Asparagus Racemosus). Highly valued in Ayurveda for supporting women's hormonal balance and reproductive health.",
    category: "jadi-bootis",
    subcategory: "Whole Herbs",
    eta: "12 MINS",
    synonyms: ["shatavari", "shatavar", "aspargus racemosus", "women health", "hormonal balance", "herb", "jadi booti"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M40 35 C42 45, 40 65, 32 80 M60 35 C58 45, 60 65, 68 80 M50 30 C50 30, 49 55, 48 82" stroke="%23ca8a04" opacity="0.8" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M38 35 C44 32, 56 32, 62 35" stroke="%23ca8a04" stroke-width="2" fill="none"/></svg>`,
    variants: [
      { weight: "100g", price: 140, mrp: 180 },
      { weight: "250g", price: 320, mrp: 420 }
    ]
  },
  {
    id: "giloy-churna",
    name: "Pure Giloy Churna (Powder)",
    description: "Finely ground Guduchi (Giloy) stem powder. The ultimate Ayurvedic immunity booster. Promotes gut health and combats chronic fevers.",
    category: "jadi-bootis",
    subcategory: "Churna & Powders",
    eta: "10 MINS",
    synonyms: ["guduchi", "immunity booster", "tinospora cordifolia", "giloy powder", "fever remedy", "giloy churna", "churna", "immunity", "fever"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M35 30 L65 30 L60 80 L40 80 Z" fill="%23166534"/><path d="M32 25 L68 25 L68 30 L32 30 Z" fill="%2314532d"/><rect x="42" y="42" width="16" height="14" fill="%23fef08a"/><text x="50" y="51" font-family="sans-serif" font-size="6" font-weight="bold" fill="%2315803d" text-anchor="middle">GILOY</text><circle cx="50" cy="68" r="4" fill="%2322c55e"/></svg>`,
    variants: [
      { weight: "50g", price: 65, mrp: 85 },
      { weight: "100g", price: 120, mrp: 160 }
    ]
  },
  {
    id: "bhringraj-leaves",
    name: "Whole Bhringraj Leaves (Dried)",
    description: "Sun-dried whole Bhringraj (Eclipta Prostrata) leaves. Known as the 'Ruler of Hair' in Ayurveda. Excellent for preparing homemade cooling hair oils.",
    category: "jadi-bootis",
    subcategory: "Whole Herbs",
    eta: "12 MINS",
    synonyms: ["bhringraj", "hair growth", "keshraj", "dried leaves", "eclipta prostrata", "hair oil"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M50 30 C30 50, 45 75, 50 85 C55 75, 70 50, 50 30" fill="%2315803d"/><path d="M50 30 L50 85" stroke="%23166534" stroke-width="2"/><path d="M50 45 L62 40 M50 55 L65 50 M50 65 L60 62" stroke="%23166534" stroke-width="1.5"/><path d="M50 45 L38 40 M50 55 L35 50 M50 65 L40 62" stroke="%23166534" stroke-width="1.5"/></svg>`,
    variants: [
      { weight: "50g", price: 75, mrp: 95 },
      { weight: "100g", price: 140, mrp: 180 }
    ]
  },

  // --- Snacks & Drinks ---
  {
    id: "lays-chips",
    name: "Lay's Magic Masala Chips",
    description: "Crisp potato chips infused with a fusion of spicy, chatpata Indian spices.",
    category: "snacks-drinks",
    subcategory: "Chips & Crisps",
    eta: "10 MINS",
    synonyms: ["chips", "lays", "magic masala", "potato chips", "snacks", "spicy chips"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="25" width="50" height="60" rx="4" fill="%231e3a8a"/><circle cx="50" cy="55" r="14" fill="%23eab308"/><text x="50" y="58" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23dc2626" text-anchor="middle">LAY's</text></svg>`,
    variants: [
      { weight: "50g", price: 20, mrp: 20 }
    ]
  },
  {
    id: "coca-cola",
    name: "Coca-Cola Soft Drink",
    description: "Rejuvenating, crisp sparkling carbonated soft drink. Best enjoyed chilled.",
    category: "snacks-drinks",
    subcategory: "Cold Drinks",
    eta: "10 MINS",
    synonyms: ["coke", "coca cola", "cold drink", "soda", "beverage", "soft drink"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M42 25 L58 25 L56 85 L44 85 Z" fill="%23dc2626"/><ellipse cx="50" cy="25" rx="8" ry="2" fill="%231e293b"/><path d="M42 45 C45 42, 55 42, 58 45" stroke="%23ffffff" stroke-width="3" fill="none"/></svg>`,
    variants: [
      { weight: "300ml", price: 40, mrp: 40 },
      { weight: "750ml", price: 45, mrp: 50 }
    ]
  },

  // --- Household Items ---
  {
    id: "vim-gel",
    name: "Vim Dishwash Liquid Gel (Lemon)",
    description: "Concentrated gel with the power of 100 lemons. Leaves utensils sparkling clean and grease-free.",
    category: "household",
    subcategory: "Cleaning Essentials",
    eta: "10 MINS",
    synonyms: ["vim", "gel", "dishwash", "liquid", "lemon dishwash", "utensil cleaner", "soap"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M38 30 L62 30 L60 85 L40 85 Z" fill="%2322c55e"/><path d="M45 15 L55 15 L55 30 L45 30 Z" fill="%23facc15"/><rect x="42" y="38" width="16" height="28" fill="%23facc15"/><text x="50" y="54" font-family="sans-serif" font-size="8" font-weight="bold" fill="%2315803d" text-anchor="middle">VIM</text></svg>`,
    variants: [
      { weight: "250ml", price: 55, mrp: 60 },
      { weight: "500ml", price: 105, mrp: 115 }
    ]
  },
  {
    id: "surf-excel",
    name: "Surf Excel Easy Wash Detergent Powder",
    description: "Premium washing powder that dissolves easily and removes tough stains in buckets without scrubbing.",
    category: "household",
    subcategory: "Cleaning Essentials",
    eta: "12 MINS",
    synonyms: ["surf", "surf excel", "detergent", "washing powder", "surf powder", "soap powder"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M28 25 L72 25 L67 85 L33 85 Z" fill="%230284c7"/><path d="M30 45 C40 30, 60 30, 70 45" stroke="%23ef4444" stroke-width="4" fill="none"/><text x="50" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">SURF EXCEL</text></svg>`,
    variants: [
      { weight: "1kg", price: 140, mrp: 160 }
    ]
  }
];
