// Real-world, localized quick-commerce inventory dataset for the Blinkit clone.
// Includes categories, subcategories, weight variants, pricing, ETA, and search synonyms.

export const categories = [
  { id: "atta-dal", name: "Atta, Rice & Dal", icon: "Wheat" },
  { id: "puja-essentials", name: "Daily Puja Path Essentials", icon: "Sparkles" },
  { id: "jadi-bootis", name: "Raw Herbs & Jadi Bootis", icon: "Leaf" },
  { id: "biscuits-chocolates", name: "Biscuits & Chocolates", icon: "Cookie" },
  { id: "snacks-munchies", name: "Snacks & Munchies", icon: "Flame" },
  { id: "toffees-mints", name: "Toffees & Mints", icon: "Sparkles" },
  { id: "tea-coffee", name: "Tea, Coffee & Milk", icon: "Coffee" },
  { id: "body-care", name: "Personal Care", icon: "HeartPulse" },
  { id: "baby-care", name: "Baby Care", icon: "Baby" },
  { id: "masala-oil", name: "Masala, Oil & More", icon: "Flame" },
  { id: "cleaners", name: "Cleaning Essentials", icon: "Home" },
  { id: "breakfast-instant-food", name: "Breakfast & Instant Food", icon: "Cookie" },
  { id: "pharma", name: "Pharma", icon: "HeartPulse" }
];

export const products = [
  // --- Atta, Rice & Dal (atta-dal) ---
  {
    id: "ashirvaad-atta",
    name: "Aashirvaad Shudh Chakki Atta",
    description: "100% pure whole wheat flour processed with traditional chakki grinding. Absorbs more water for softer rotis.",
    category: "atta-dal",
    subcategory: "Atta & Flours",
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
    synonyms: ["dal", "toor dal", "arhar dal", "pulses", "lentils", "tata sampann"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23ea580c"/><rect x="36" y="32" width="28" height="18" fill="%23ffffff"/><text x="50" y="44" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23c2410c" text-anchor="middle">TATA</text><text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">TOOR DAL</text></svg>`,
    variants: [
      { weight: "500g", price: 95, mrp: 110 },
      { weight: "1kg", price: 180, mrp: 210 }
    ]
  },

  // --- Daily Puja Path Essentials (puja-essentials) ---
  {
    id: "premium-camphor",
    name: "Premium Bhimseni Camphor / Kapur",
    description: "100% pure, organic Bhimseni Kapur. Burns completely without leaving ash. Spreads calming fragrance.",
    category: "puja-essentials",
    subcategory: "Puja Essentials",
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
    synonyms: ["navratra", "pooja set", "complete kit", "puja kit", "navratri kit", "festival kit"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="20" y="30" width="60" height="50" rx="4" fill="%23ea580c"/><rect x="25" y="35" width="50" height="40" fill="%23fef08a" opacity="0.3"/><text x="50" y="60" font-family="sans-serif" font-size="9" font-weight="bold" fill="%23ffffff" text-anchor="middle">NAVRATRI KIT</text><circle cx="35" cy="45" r="3" fill="%23facc15"/><circle cx="65" cy="45" r="3" fill="%23facc15"/></svg>`,
    variants: [
      { weight: "1 Pack", price: 499, mrp: 699 }
    ]
  },

  // --- Raw Herbs & Jadi Bootis (jadi-bootis) ---
  {
    id: "raw-ashwagandha",
    name: "Raw Ashwagandha Root (Sabut)",
    description: "Premium whole dried Ashwagandha roots (Withania Somnifera). Renowned for reducing stress, boosting energy, and improving vitality.",
    category: "jadi-bootis",
    subcategory: "Whole Herbs",
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
    synonyms: ["bhringraj", "hair growth", "keshraj", "dried leaves", "eclipta prostrata", "hair oil"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M50 30 C30 50, 45 75, 50 85 C55 75, 70 50, 50 30" fill="%2315803d"/><path d="M50 30 L50 85" stroke="%23166534" stroke-width="2"/><path d="M50 45 L62 40 M50 55 L65 50 M50 65 L60 62" stroke="%23166534" stroke-width="1.5"/><path d="M50 45 L38 40 M50 55 L35 50 M50 65 L40 62" stroke="%23166534" stroke-width="1.5"/></svg>`,
    variants: [
      { weight: "50g", price: 75, mrp: 95 },
      { weight: "100g", price: 140, mrp: 180 }
    ]
  },

  // --- Biscuits & Chocolates (biscuits-chocolates) ---
  {
    id: "good-day-butter",
    name: "Britannia Good Day Butter Cookies",
    description: "Delicious butter cookies loaded with rich butter, crunchy cashews, and nuts. The perfect tea-time snack.",
    category: "biscuits-chocolates",
    subcategory: "Biscuits & Cookies",
    synonyms: ["biscuit", "biscuits", "good day", "butter biscuit", "cookies", "britannia"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><circle cx="50" cy="50" r="30" fill="%23eab308"/><circle cx="50" cy="50" r="26" fill="%23ca8a04"/><path d="M35 50 C40 45, 45 45, 50 50 C55 55, 60 55, 65 50" stroke="%23854d0e" stroke-width="3" fill="none"/><path d="M35 40 C40 35, 45 35, 50 40 C55 45, 60 45, 65 40" stroke="%23854d0e" stroke-width="3" fill="none"/><path d="M35 60 C40 55, 45 55, 50 60 C55 65, 60 65, 65 60" stroke="%23854d0e" stroke-width="3" fill="none"/></svg>`,
    variants: [
      { weight: "200g", price: 30, mrp: 35 },
      { weight: "400g", price: 58, mrp: 70 }
    ]
  },
  {
    id: "parle-g-gold",
    name: "Parle-G Gold Gluco Biscuits",
    description: "Premium rich milk and wheat glucose biscuits. Loved by generations across India.",
    category: "biscuits-chocolates",
    subcategory: "Biscuits & Cookies",
    synonyms: ["biscuit", "biscuits", "parle g", "glucose biscuit", "parle"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="32" width="50" height="36" rx="3" fill="%23ea580c"/><rect x="29" y="36" width="42" height="28" fill="%23fef08a"/><text x="50" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23c2410c" text-anchor="middle">Parle-G</text></svg>`,
    variants: [
      { weight: "1kg", price: 80, mrp: 90 }
    ]
  },
  {
    id: "dairy-milk-silk",
    name: "Cadbury Dairy Milk Silk Chocolate",
    description: "Rich, smooth, and creamy chocolate bar that melts in your mouth. Perfect for sharing or treating yourself.",
    category: "biscuits-chocolates",
    subcategory: "Chocolates",
    synonyms: ["chocolate", "cadbury", "dairy milk", "silk", "sweet"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="28" y="22" width="44" height="56" rx="4" fill="%236b21a8"/><rect x="32" y="26" width="36" height="48" fill="%23581c87"/><text x="50" y="44" font-family="sans-serif" font-size="7" font-weight="bold" fill="%23eab308" text-anchor="middle">Cadbury</text><text x="50" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff" text-anchor="middle">SILK</text></svg>`,
    variants: [
      { weight: "60g", price: 80, mrp: 80 },
      { weight: "150g", price: 175, mrp: 185 }
    ]
  },
  {
    id: "kitkat-bar",
    name: "Nestle KitKat chocolate Share Bag",
    description: "Crispy wafer fingers covered with smooth milk chocolate. Have a break, have a KitKat.",
    category: "biscuits-chocolates",
    subcategory: "Chocolates",
    synonyms: ["chocolate", "kitkat", "wafer", "nestle", "sweet"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="30" width="50" height="40" rx="3" fill="%23dc2626"/><rect x="30" y="35" width="40" height="30" fill="%23ffffff"/><text x="50" y="55" font-family="sans-serif" font-size="9" font-weight="bold" fill="%23dc2626" text-anchor="middle">KitKat</text></svg>`,
    variants: [
      { weight: "38.5g", price: 25, mrp: 30 }
    ]
  },

  // --- Snacks & Munchies (snacks-munchies) ---
  {
    id: "lays-chips",
    name: "Lay's Magic Masala Chips",
    description: "Crisp potato chips infused with a fusion of spicy, chatpata Indian spices.",
    category: "snacks-munchies",
    subcategory: "Chips & Crisps",
    synonyms: ["chips", "lays", "magic masala", "potato chips", "snacks", "spicy chips"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="25" width="50" height="60" rx="4" fill="%231e3a8a"/><circle cx="50" cy="55" r="14" fill="%23eab308"/><text x="50" y="58" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23dc2626" text-anchor="middle">LAY's</text></svg>`,
    variants: [
      { weight: "50g", price: 20, mrp: 20 }
    ]
  },
  {
    id: "pringles-original",
    name: "Pringles Potato Chips (Original)",
    description: "Perfectly seasoned, iconic stacked potato chips with a classic salted crunch.",
    category: "snacks-munchies",
    subcategory: "Chips & Crisps",
    synonyms: ["pringles", "chips", "potato chips", "snacks", "original pringles"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="38" y="20" width="24" height="64" rx="12" fill="%23dc2626"/><ellipse cx="50" cy="40" rx="9" ry="12" fill="%23eab308"/><path d="M44 38 C42 45, 58 45, 56 38" stroke="%231e293b" stroke-width="2" fill="none"/></svg>`,
    variants: [
      { weight: "107g", price: 105, mrp: 120 }
    ]
  },
  {
    id: "haldirams-bhujia",
    name: "Haldiram's Alu Bhujia",
    description: "A spicy, crunchy potato noodle snack seasoned with mint and lemon. A classic Indian munchie.",
    category: "snacks-munchies",
    subcategory: "Namkeen & Bhujia",
    synonyms: ["bhujia", "alu bhujia", "namkeen", "haldiram", "munchies", "snacks"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="25" width="50" height="60" rx="4" fill="%23ea580c"/><rect x="32" y="32" width="36" height="24" fill="%23ffffff"/><text x="50" y="44" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23c2410c" text-anchor="middle">HALDIRAM'S</text><text x="50" y="51" font-family="sans-serif" font-size="6" font-weight="bold" fill="%2315803d" text-anchor="middle">ALU BHUJIA</text></svg>`,
    variants: [
      { weight: "150g", price: 35, mrp: 40 },
      { weight: "350g", price: 75, mrp: 85 }
    ]
  },
  {
    id: "kurkure-masala",
    name: "Kurkure Masala Munch",
    description: "Crunchy, spicy, and tangy corn puff twists. Extremely chatpata and irresistible.",
    category: "snacks-munchies",
    subcategory: "Namkeen & Bhujia",
    synonyms: ["kurkure", "masala munch", "namkeen", "snacks", "spicy snacks"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="26" y="24" width="48" height="62" rx="4" fill="%23ea580c"/><polygon points="40,40 60,45 38,55 58,60 36,70" stroke="%23facc15" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
    variants: [
      { weight: "82g", price: 20, mrp: 20 }
    ]
  },

  // --- Toffees & Mints (toffees-mints) ---
  {
    id: "pulse-candy",
    name: "Pass Pass Pulse Candy (Kachcha Aam)",
    description: "Kachcha Aam candy with a tangy, chatpata powder core. Spreads a burst of flavor in the mouth.",
    category: "toffees-mints",
    subcategory: "Toffees & Candies",
    synonyms: ["candy", "pulse", "toffees", "pulse candy", "kachcha aam", "sweet"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><circle cx="50" cy="50" r="24" fill="%2384cc16"/><circle cx="50" cy="50" r="20" fill="%2322c55e"/><text x="50" y="54" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">PULSE</text></svg>`,
    variants: [
      { weight: "50 units", price: 50, mrp: 50 }
    ]
  },
  {
    id: "mentos-mint",
    name: "Mentos Mint Rolls",
    description: "Chewy mint pills. Stay fresh, make connections, and stay cool.",
    category: "toffees-mints",
    subcategory: "Mints & Gums",
    synonyms: ["mints", "mentos", "mint roll", "chewing gum", "fresh breath"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="22" y="38" width="56" height="24" rx="6" fill="%2338bdf8"/><rect x="30" y="42" width="40" height="16" fill="%23ffffff"/><text x="50" y="54" font-family="sans-serif" font-size="8" font-weight="bold" fill="%230284c7" text-anchor="middle">MENTOS</text></svg>`,
    variants: [
      { weight: "3 pcs (Combo)", price: 30, mrp: 30 }
    ]
  },

  // --- Tea, Coffee & Milk (tea-coffee) ---
  {
    id: "coca-cola",
    name: "Coca-Cola Soft Drink",
    description: "Rejuvenating, crisp sparkling carbonated soft drink. Best enjoyed chilled.",
    category: "tea-coffee",
    subcategory: "Cold Drinks & Juices",
    synonyms: ["coke", "coca cola", "cold drink", "soda", "beverage", "soft drink"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M42 25 L58 25 L56 85 L44 85 Z" fill="%23dc2626"/><ellipse cx="50" cy="25" rx="8" ry="2" fill="%231e293b"/><path d="M42 45 C45 42, 55 42, 58 45" stroke="%23ffffff" stroke-width="3" fill="none"/></svg>`,
    variants: [
      { weight: "300ml", price: 40, mrp: 40 },
      { weight: "750ml", price: 45, mrp: 50 }
    ]
  },
  {
    id: "wagh-bakri-tea",
    name: "Wagh Bakri Premium Leaf Tea",
    description: "Strong CTC leaf tea with good flavor, aroma, and bright liquor color. Preferred for household chai.",
    category: "tea-coffee",
    subcategory: "Tea & Coffee",
    synonyms: ["tea", "chai", "wagh bakri", "leaf tea", "tea powder", "beverage"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23eab308"/><rect x="36" y="32" width="28" height="18" fill="%23b91c1c"/><text x="50" y="44" font-family="sans-serif" font-size="7" font-weight="bold" fill="%23ffffff" text-anchor="middle">WAGH BAKRI</text></svg>`,
    variants: [
      { weight: "250g", price: 90, mrp: 100 },
      { weight: "500g", price: 175, mrp: 195 }
    ]
  },
  {
    id: "nescafe-classic",
    name: "Nescafe Classic Instant Coffee",
    description: "100% pure instant coffee beans. Start your day with a rich aroma and refreshing flavor.",
    category: "tea-coffee",
    subcategory: "Tea & Coffee",
    synonyms: ["coffee", "nescafe", "instant coffee", "cafe", "beverage"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M38 30 L62 30 L59 85 L41 85 Z" fill="%23b91c1c"/><ellipse cx="50" cy="30" rx="12" ry="3" fill="%231e293b"/><rect x="42" y="40" width="16" height="20" fill="%23ffffff"/><text x="50" y="52" font-family="sans-serif" font-size="6" font-weight="bold" fill="%23b91c1c" text-anchor="middle">NESCAFE</text></svg>`,
    variants: [
      { weight: "50g", price: 160, mrp: 180 }
    ]
  },
  {
    id: "amul-gold-milk",
    name: "Amul Gold Full Cream Milk",
    description: "Pasteurized full cream fresh milk. Rich, creamy, and ideal for drinking, curd, and tea.",
    category: "tea-coffee",
    subcategory: "Milk & Dairy",
    synonyms: ["milk", "amul milk", "amul gold", "full cream milk", "dairy", "doodh"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="28" y="24" width="44" height="58" rx="4" fill="%232563eb"/><rect x="32" y="28" width="36" height="24" fill="%23ffffff"/><text x="50" y="42" font-family="sans-serif" font-size="8" font-weight="bold" fill="%231d4ed8" text-anchor="middle">AMUL GOLD</text><circle cx="50" cy="64" r="5" fill="%23facc15"/></svg>`,
    variants: [
      { weight: "500ml", price: 33, mrp: 33 },
      { weight: "1L", price: 66, mrp: 66 }
    ]
  },

  // --- Personal Care (body-care) ---
  {
    id: "dettol-liquid-handwash",
    name: "Dettol Liquid Handwash Refill",
    description: "Provides 100% better protection against illness-causing germs. pH balanced formula with trusted protection.",
    category: "body-care",
    subcategory: "Bath & Handwash",
    synonyms: ["handwash", "dettol", "soap", "liquid handwash", "hand wash", "hygiene"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M35 32 L65 32 L61 85 L39 85 Z" fill="%2316a34a"/><path d="M48 20 L52 20 L52 32 L48 32 Z" fill="%23ffffff"/><rect x="42" y="42" width="16" height="20" fill="%23ffffff"/><path d="M50 46 L50 58 M44 52 L56 52" stroke="%23dc2626" stroke-width="3"/></svg>`,
    variants: [
      { weight: "175ml", price: 50, mrp: 55 },
      { weight: "675ml", price: 99, mrp: 119 }
    ]
  },
  {
    id: "dove-beauty-soap",
    name: "Dove Cream Beauty Bar (Soap)",
    description: "Contains 1/4th moisturizing cream to give you soft, smooth, and glowing skin. Better than regular soap.",
    category: "body-care",
    subcategory: "Bath & Handwash",
    synonyms: ["soap", "dove", "bathing soap", "dove soap", "body wash", "moisturizer"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><ellipse cx="50" cy="50" rx="32" ry="20" fill="%23ffffff" stroke="%233b82f6" stroke-width="1.5"/><path d="M42 48 C46 45, 54 45, 58 48 C50 52, 45 52, 42 48" fill="%233b82f6" opacity="0.3"/><text x="50" y="60" font-family="sans-serif" font-size="7" font-weight="bold" fill="%231d4ed8" text-anchor="middle">Dove</text></svg>`,
    variants: [
      { weight: "125g", price: 75, mrp: 85 }
    ]
  },
  {
    id: "colgate-toothpaste",
    name: "Colgate Strong Teeth Toothpaste",
    description: "Guards against cavities, binds calcium to teeth, and locks in natural strength. Fresh mint flavor.",
    category: "body-care",
    subcategory: "Oral Care",
    synonyms: ["toothpaste", "colgate", "paste", "oral care", "brush", "teeth"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="22" y="38" width="56" height="24" rx="4" fill="%23dc2626"/><rect x="22" y="38" width="16" height="24" fill="%232563eb"/><text x="48" y="53" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23ffffff" text-anchor="middle">Colgate</text></svg>`,
    variants: [
      { weight: "150g", price: 70, mrp: 78 }
    ]
  },

  // --- Baby Care (baby-care) ---
  {
    id: "pampers-diapers",
    name: "Pampers Baby Dry Pants (M)",
    description: "Absorptive gel lock technology providing up to 12 hours of dry lock. Ultra-soft material.",
    category: "baby-care",
    subcategory: "Diapers & Wipes",
    synonyms: ["diaper", "diapers", "pampers", "baby pants", "wipes", "baby care"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 35 L70 35 C65 65, 35 65, 30 35" fill="%2306b6d4"/><rect x="36" y="39" width="28" height="10" fill="%23ffffff"/><text x="50" y="47" font-family="sans-serif" font-size="6" font-weight="bold" fill="%230891b2" text-anchor="middle">PAMPERS</text></svg>`,
    variants: [
      { weight: "24 pcs", price: 349, mrp: 399 }
    ]
  },
  {
    id: "himalaya-wipes",
    name: "Himalaya Gentle Baby Wipes",
    description: "Extra gentle baby wipes infused with Aloe Vera and Lotus. Keeps baby clean and refreshed.",
    category: "baby-care",
    subcategory: "Diapers & Wipes",
    synonyms: ["wipes", "baby wipes", "himalaya", "tissue", "wet wipes"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="32" width="50" height="36" rx="4" fill="%23059669"/><rect x="35" y="42" width="30" height="16" rx="2" fill="%23ffffff"/><text x="50" y="52" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23059669" text-anchor="middle">HIMALAYA</text></svg>`,
    variants: [
      { weight: "72 pcs", price: 145, mrp: 185 }
    ]
  },

  // --- Masala, Oil & More (masala-oil) ---
  {
    id: "fortune-mustard-oil",
    name: "Fortune Premium Kachi Ghani Mustard Oil",
    description: "Pure cold-pressed mustard oil with a strong aroma and high pungency. Traditional taste for North Indian dishes.",
    category: "masala-oil",
    subcategory: "Cooking Oils",
    synonyms: ["oil", "mustard oil", "sarso tel", "fortune oil", "cooking oil"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M40 30 L60 30 L58 85 L42 85 Z" fill="%23ca8a04"/><path d="M45 15 L55 15 L55 30 L45 30 Z" fill="%231e293b"/><rect x="44" y="40" width="12" height="25" fill="%23ffffff"/><text x="50" y="55" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23ca8a04" text-anchor="middle">MUSTARD</text></svg>`,
    variants: [
      { weight: "1L", price: 165, mrp: 195 }
    ]
  },
  {
    id: "catch-turmeric",
    name: "Catch Turmeric Powder (Haldi)",
    description: "Sourced from the best farms in Sangli. Adds rich golden color and high-grade antiseptic properties.",
    category: "masala-oil",
    subcategory: "Spices & Masalas",
    synonyms: ["haldi", "turmeric", "haldi powder", "catch haldi", "spices", "masala"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23eab308"/><rect x="36" y="32" width="28" height="18" fill="%23ffffff"/><text x="50" y="44" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23eab308" text-anchor="middle">HALDI</text></svg>`,
    variants: [
      { weight: "200g", price: 42, mrp: 48 }
    ]
  },
  {
    id: "mdh-deggi-mirch",
    name: "MDH Deggi Mirch Powder",
    description: "A unique blend of Kashmiri red chilies that gives a rich red color and mild heat to curries.",
    category: "masala-oil",
    subcategory: "Spices & Masalas",
    synonyms: ["mirch", "deggi mirch", "lal mirch", "chili powder", "mdh mirch", "chilli"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23b91c1c"/><rect x="36" y="32" width="28" height="18" fill="%23ffffff"/><text x="50" y="44" font-family="sans-serif" font-size="8" font-weight="bold" fill="%23b91c1c" text-anchor="middle">MDH</text></svg>`,
    variants: [
      { weight: "100g", price: 88, mrp: 95 }
    ]
  },

  // --- Cleaning Essentials (cleaners) ---
  {
    id: "vim-gel",
    name: "Vim Dishwash Liquid Gel (Lemon)",
    description: "Concentrated gel with the power of 100 lemons. Leaves utensils sparkling clean and grease-free.",
    category: "cleaners",
    subcategory: "Dishwashing",
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
    category: "cleaners",
    subcategory: "Laundry",
    synonyms: ["surf", "surf excel", "detergent", "washing powder", "surf powder", "soap powder"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M28 25 L72 25 L67 85 L33 85 Z" fill="%230284c7"/><path d="M30 45 C40 30, 60 30, 70 45" stroke="%23ef4444" stroke-width="4" fill="none"/><text x="50" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff" text-anchor="middle">SURF EXCEL</text></svg>`,
    variants: [
      { weight: "1kg", price: 140, mrp: 160 }
    ]
  },

  // --- Breakfast & Instant Food (breakfast-instant-food) ---
  {
    id: "maggi-noodles",
    name: "Maggi 2-Minute Masala Instant Noodles",
    description: "India's favorite instant noodles with the unique Tastemaker masala. Made from high-quality wheat.",
    category: "breakfast-instant-food",
    subcategory: "Noodles & Pasta",
    synonyms: ["maggi", "noodles", "instant noodles", "maggie", "quick snack"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="24" y="24" width="52" height="62" rx="4" fill="%23facc15"/><rect x="30" y="32" width="40" height="24" fill="%23b91c1c"/><text x="50" y="47" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23ffffff" text-anchor="middle">Maggi</text><circle cx="38" cy="68" r="3" fill="%23dc2626"/><circle cx="62" cy="68" r="3" fill="%23dc2626"/></svg>`,
    variants: [
      { weight: "70g", price: 14, mrp: 14 },
      { weight: "420g (6-Pack)", price: 84, mrp: 86 }
    ]
  },
  {
    id: "kelloggs-cornflakes",
    name: "Kellogg's Real Almond Honey Corn Flakes",
    description: "Crispy iron-rich corn flakes glazed with honey and real sliced almonds. Quick breakfast.",
    category: "breakfast-instant-food",
    subcategory: "Breakfast Cereals",
    synonyms: ["corn flakes", "cornflakes", "kelloggs", "cereals", "breakfast", "honey flakes"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M30 25 L70 25 L65 85 L35 85 Z" fill="%23dc2626"/><rect x="36" y="32" width="28" height="20" fill="%23ffffff"/><text x="50" y="45" font-family="sans-serif" font-size="6" font-weight="bold" fill="%23dc2626" text-anchor="middle">KELLOGG'S</text></svg>`,
    variants: [
      { weight: "300g", price: 185, mrp: 210 }
    ]
  },

  // --- Pharma (pharma) ---
  {
    id: "moov-spray",
    name: "Moov Pain Relief Spray",
    description: "Fortified with the power of Nilgiri oil, wintergreen oil, and mint extracts. Relieves back and joint pain instantly.",
    category: "pharma",
    subcategory: "OTC Medicine",
    synonyms: ["moov", "spray", "pain relief", "moov spray", "pain spray", "health"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><path d="M42 30 L58 30 L56 85 L44 85 Z" fill="%231e3a8a"/><path d="M46 15 L54 15 L54 30 L46 30 Z" fill="%23ffffff"/><rect x="45" y="40" width="10" height="20" fill="%23b91c1c"/><text x="50" y="52" font-family="sans-serif" font-size="5" font-weight="bold" fill="%23ffffff" text-anchor="middle">MOOV</text></svg>`,
    variants: [
      { weight: "50g", price: 165, mrp: 185 }
    ]
  },
  {
    id: "pudin-hara",
    name: "Dabur Pudin Hara Pearls",
    description: "Ayurvedic tablets containing mint extracts. Fast relief from stomach ache, gas, and indigestion.",
    category: "pharma",
    subcategory: "OTC Medicine",
    synonyms: ["pudin hara", "pudina", "dabur", "gas relief", "acidity", "indigestion"],
    image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23fcfcfc"/><rect x="25" y="32" width="50" height="36" rx="4" fill="%2316a34a"/><circle cx="40" cy="50" r="6" fill="%2322c55e"/><circle cx="60" cy="50" r="6" fill="%2322c55e"/></svg>`,
    variants: [
      { weight: "10 pearls", price: 25, mrp: 30 }
    ]
  }
];
