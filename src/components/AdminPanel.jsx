import { useState, useEffect, useRef } from 'react';
import { useProducts } from '../context/ProductContext';
import {
  Plus, Trash2, Edit3, Save, Upload, X, Lock, User,
  LayoutDashboard, ShoppingBag, ArrowLeft, LogOut, Check,
  Image as ImageIcon, Eye, Search, AlertCircle
} from 'lucide-react';

export default function AdminPanel({ onClose }) {
  const { products, categories, addProduct, updateProduct, deleteProduct } = useProducts();

  // Authentication State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('mystore_admin_logged_in') === 'true';
  });

  // Active Tab: 'dashboard', 'inventory', 'add-product'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Search & Filter state for inventory
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('');
  const [formSubcategory, setFormSubcategory] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formEta, setFormEta] = useState('10 MINS');
  const [formSynonyms, setFormSynonyms] = useState('');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formVariants, setFormVariants] = useState([{ weight: '1kg', price: '', mrp: '' }]);

  // Image upload preview
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);

  // Suggested subcategories based on selected category
  const [suggestedSubcategories, setSuggestedSubcategories] = useState([]);

  // Auto-fill suggested subcategories when category changes
  useEffect(() => {
    if (formCategory) {
      const existingSubcats = Array.from(
        new Set(
          products
            .filter((p) => p.category === formCategory)
            .map((p) => p.subcategory)
        )
      ).filter(Boolean);
      setSuggestedSubcategories(existingSubcats);
      if (existingSubcats.length > 0 && !formSubcategory) {
        setFormSubcategory(existingSubcats[0]);
      }
    } else {
      setSuggestedSubcategories([]);
    }
  }, [formCategory, products]);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === '9631871702' && password === 'Rahul@0726') {
      setIsLoggedIn(true);
      setLoginError('');
      localStorage.setItem('mystore_admin_logged_in', 'true');
    } else {
      setLoginError('Invalid Username or Password (use admin / admin123)');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('mystore_admin_logged_in');
  };

  // Handle image file upload & base64 conversion
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormImageUrl(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Manage Variant Rows in Form
  const addVariantRow = () => {
    setFormVariants([...formVariants, { weight: '', price: '', mrp: '' }]);
  };

  const removeVariantRow = (index) => {
    if (formVariants.length > 1) {
      setFormVariants(formVariants.filter((_, i) => i !== index));
    }
  };

  const handleVariantChange = (index, field, value) => {
    const updated = formVariants.map((variant, i) => {
      if (i === index) {
        return { ...variant, [field]: value };
      }
      return variant;
    });
    setFormVariants(updated);
  };

  // Edit Product Initiation
  const startEditProduct = (product) => {
    setEditingId(product.id);
    setFormName(product.name);
    setFormCategory(product.category);
    setFormSubcategory(product.subcategory);
    setFormDescription(product.description || '');
    setFormEta(product.eta || '10 MINS');
    setFormSynonyms(product.synonyms ? product.synonyms.join(', ') : '');
    setFormImageUrl(product.image);
    setImagePreview(product.image);
    setFormVariants(
      product.variants.map((v) => ({
        weight: v.weight,
        price: v.price.toString(),
        mrp: v.mrp ? v.mrp.toString() : ''
      }))
    );
    setActiveTab('add-product');
  };

  // Reset form
  const resetForm = () => {
    setEditingId(null);
    setFormName('');
    setFormCategory(categories[0]?.id || '');
    setFormSubcategory('');
    setFormDescription('');
    setFormEta('10 MINS');
    setFormSynonyms('');
    setFormImageUrl('');
    setImagePreview('');
    setFormVariants([{ weight: '1kg', price: '', mrp: '' }]);
  };

  // Handle Form Submission (Add or Update)
  const handleSubmitProduct = (e) => {
    e.preventDefault();

    if (!formName.trim()) return alert('Please enter a product name');
    if (!formCategory) return alert('Please select a category');
    if (!formSubcategory.trim()) return alert('Please specify a subcategory');

    // Parse and validate variants
    const parsedVariants = formVariants
      .map((v) => ({
        weight: v.weight.trim(),
        price: parseFloat(v.price),
        mrp: v.mrp ? parseFloat(v.mrp) : parseFloat(v.price)
      }))
      .filter((v) => v.weight && !isNaN(v.price));

    if (parsedVariants.length === 0) {
      return alert('Please specify at least one valid variant with a price.');
    }

    // Default image if none provided
    const finalImage = formImageUrl || `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f5f5f5"/><text x="50" y="55" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23a3a3a3" text-anchor="middle">${formName.substring(0, 8).toUpperCase()}</text></svg>`;

    const productData = {
      name: formName.trim(),
      category: formCategory,
      subcategory: formSubcategory.trim(),
      description: formDescription.trim(),
      eta: formEta.trim(),
      synonyms: formSynonyms ? formSynonyms.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) : [],
      image: finalImage,
      variants: parsedVariants
    };

    if (editingId) {
      updateProduct(editingId, productData);
      alert('Product updated successfully!');
    } else {
      // Generate standard URL slug id
      const baseId = formName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const uniqueId = `${baseId}-${Date.now().toString().slice(-4)}`;
      addProduct({ id: uniqueId, ...productData });
      alert('Product added successfully!');
    }

    resetForm();
    setActiveTab('inventory');
  };

  // Handle Delete Product with prompt
  const handleDeleteProduct = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProduct(id);
    }
  };

  // Metrics for Dashboard tab
  const totalProducts = products.length;
  const totalCategories = categories.length;
  const subcategoryCount = new Set(products.map((p) => p.subcategory)).size;
  const averagePrice = Math.round(
    products.reduce((acc, p) => acc + (p.variants[0]?.price || 0), 0) / (totalProducts || 1)
  );

  // Filtered products for inventory tab
  const filteredInventory = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col font-sans">

      {/* 1. LOGIN SCREEN */}
      {!isLoggedIn ? (
        <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950 via-neutral-900 to-neutral-950">
          <div className="absolute top-10 left-10">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Exit Portal
            </button>
          </div>

          <div className="w-full max-w-md bg-neutral-900/60 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl flex flex-col gap-6 scale-in">
            <div className="text-center">
              <span className="text-3xl font-black text-white tracking-tight">
                Owner<span className="text-[#10b981]"> Admin</span>
              </span>
              <p className="text-xs text-neutral-400 font-semibold uppercase tracking-widest mt-1">
                Rahul General Store Control Panel
              </p>
            </div>

            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Username</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    placeholder="Enter 'admin'"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/5 focus:border-[#10b981]/50 pl-12 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981]/10 transition-all text-white placeholder-neutral-600 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 w-4 h-4 text-neutral-500" />
                  <input
                    type="password"
                    required
                    placeholder="Enter 'admin123'"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-neutral-950 border border-white/5 focus:border-[#10b981]/50 pl-12 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981]/10 transition-all text-white placeholder-neutral-600 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#10b981] hover:bg-[#059669] text-neutral-950 font-black tracking-wide py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/10 cursor-pointer text-center"
              >
                Sign In to Panel
              </button>
            </form>
            <div className="text-center">
              <p className="text-[10px] text-neutral-500 font-semibold">
                Tip: Default username is <code className="text-neutral-400 font-mono font-bold">admin</code> and password is <code className="text-neutral-400 font-mono font-bold">admin123</code>.
              </p>
            </div>
          </div>
        </div>
      ) : (

        // 2. MAIN ADMIN DASHBOARD
        <>
          {/* Top Navbar */}
          <header className="bg-neutral-950 border-b border-neutral-800 px-6 py-4 sticky top-0 z-30 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-white tracking-tight">
                  Rahul<span className="text-[#10b981]"> Owner Console</span>
                </span>
                <span className="bg-neutral-800 text-neutral-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-neutral-700 tracking-wider">
                  Live DB
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-xs font-bold bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-900/40 px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </button>
              </div>
            </div>
          </header>

          {/* Core Layout Grid */}
          <div className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">

            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
              <button
                onClick={() => { setActiveTab('dashboard'); resetForm(); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-left transition-all border cursor-pointer ${activeTab === 'dashboard'
                    ? 'bg-neutral-800 border-neutral-700 text-white font-extrabold shadow-sm'
                    : 'bg-transparent border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                  }`}
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard Overview
              </button>

              <button
                onClick={() => { setActiveTab('inventory'); resetForm(); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-left transition-all border cursor-pointer ${activeTab === 'inventory'
                    ? 'bg-neutral-800 border-neutral-700 text-white font-extrabold shadow-sm'
                    : 'bg-transparent border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                  }`}
              >
                <ShoppingBag className="w-4 h-4" /> Manage Inventory
              </button>

              <button
                onClick={() => { resetForm(); setActiveTab('add-product'); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-left transition-all border cursor-pointer ${activeTab === 'add-product' && !editingId
                    ? 'bg-neutral-800 border-neutral-700 text-white font-extrabold shadow-sm'
                    : 'bg-transparent border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                  }`}
              >
                <Plus className="w-4 h-4" /> Add New Product
              </button>

              {editingId && (
                <div className="bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>Editing Mode</span>
                  <button onClick={resetForm} className="text-neutral-400 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </aside>

            {/* Sub-panels View */}
            <main className="flex-1 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl min-h-[500px]">

              {/* TAB A: OVERVIEW / METRICS */}
              {activeTab === 'dashboard' && (
                <div className="flex flex-col gap-8 animate-in fade-in duration-200">
                  <div>
                    <h2 className="text-xl font-black text-white">Owner Dashboard Overview</h2>
                    <p className="text-neutral-400 text-xs mt-1">Real-time statistics of store inventory and categories.</p>
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Total Products</span>
                      <span className="text-3xl font-black text-white">{totalProducts}</span>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Categories</span>
                      <span className="text-3xl font-black text-white">{totalCategories}</span>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Subcategories</span>
                      <span className="text-3xl font-black text-white">{subcategoryCount}</span>
                    </div>
                    <div className="bg-neutral-950 border border-neutral-800 p-5 rounded-2xl flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Avg Base Price</span>
                      <span className="text-3xl font-black text-white">₹{averagePrice}</span>
                    </div>
                  </div>

                  {/* Quick-links Section */}
                  <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-1 max-w-md">
                      <h4 className="font-extrabold text-sm text-neutral-200">Need to update your catalog?</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        Add newly arrived stock, modify pricing on current items, or clean up discontinued products to ensure a smooth shopping experience for customers.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setActiveTab('inventory')}
                        className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl border border-neutral-750 cursor-pointer"
                      >
                        Browse Inventory
                      </button>
                      <button
                        onClick={() => { resetForm(); setActiveTab('add-product'); }}
                        className="bg-[#10b981] hover:bg-[#059669] text-neutral-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl cursor-pointer"
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB B: MANAGE INVENTORY */}
              {activeTab === 'inventory' && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black text-white">Manage Products</h2>
                      <p className="text-neutral-400 text-xs mt-1">Edit product details or remove items permanently from the shelf.</p>
                    </div>
                  </div>

                  {/* Inventory Search & Filters */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative flex items-center">
                      <Search className="absolute left-4 w-4 h-4 text-neutral-500" />
                      <input
                        type="text"
                        placeholder="Search product name or subcategory..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 pl-11 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#10b981]/40"
                      />
                    </div>

                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="bg-neutral-950 border border-neutral-800 text-xs px-4 py-2.5 rounded-xl text-neutral-300 focus:outline-none focus:border-[#10b981]/40 cursor-pointer"
                    >
                      <option value="">All Categories</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Inventory Table List */}
                  <div className="overflow-x-auto border border-neutral-850 rounded-2xl bg-neutral-950">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800 text-neutral-400 font-extrabold uppercase bg-neutral-900/40">
                          <th className="p-4 w-12">Image</th>
                          <th className="p-4">Product Name</th>
                          <th className="p-4">Category / Subcategory</th>
                          <th className="p-4">Variants</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-850">
                        {filteredInventory.length > 0 ? (
                          filteredInventory.map((p) => (
                            <tr key={p.id} className="hover:bg-neutral-900/20 transition-colors">
                              <td className="p-4">
                                <div className="w-10 h-10 bg-white rounded-lg p-1 border border-neutral-850 flex items-center justify-center">
                                  <img
                                    src={p.image}
                                    alt=""
                                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                                  />
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="font-extrabold text-white text-sm">{p.name}</div>
                                {p.description && (
                                  <div className="text-[10px] text-neutral-500 line-clamp-1 mt-0.5 max-w-[200px]">
                                    {p.description}
                                  </div>
                                )}
                              </td>
                              <td className="p-4">
                                <span className="bg-neutral-850 text-neutral-300 font-bold px-2 py-0.5 rounded text-[10px]">
                                  {categories.find((c) => c.id === p.category)?.name || p.category}
                                </span>
                                <div className="text-neutral-500 font-semibold text-[10px] mt-1">{p.subcategory}</div>
                              </td>
                              <td className="p-4">
                                <div className="flex flex-col gap-1 max-w-[150px]">
                                  {p.variants.map((v) => (
                                    <span key={v.weight} className="text-neutral-400 text-[10px] font-mono leading-none">
                                      {v.weight}: <span className="text-neutral-200">₹{v.price}</span>
                                      {v.mrp > v.price && (
                                        <span className="text-neutral-500 line-through text-[9px] ml-1.5">MRP ₹{v.mrp}</span>
                                      )}
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => startEditProduct(p)}
                                    className="p-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 rounded-lg transition-colors border border-neutral-800 cursor-pointer"
                                    title="Edit Product"
                                  >
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteProduct(p.id, p.name)}
                                    className="p-2 bg-red-950/20 hover:bg-red-900/30 text-red-400 rounded-lg transition-colors border border-red-900/20 cursor-pointer"
                                    title="Delete Product"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" className="p-12 text-center text-neutral-500">
                              <ShoppingBag className="w-8 h-8 mx-auto mb-3 text-neutral-600" />
                              <div className="font-extrabold text-sm text-neutral-400">No items found</div>
                              <div className="text-[11px] text-neutral-500 mt-1 max-w-xs mx-auto">
                                We couldn't find any products matching your query. Clear filters or add a product to get started.
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB C: ADD OR EDIT PRODUCT */}
              {activeTab === 'add-product' && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div>
                    <h2 className="text-xl font-black text-white">
                      {editingId ? 'Edit Product Details' : 'Add New Product'}
                    </h2>
                    <p className="text-neutral-400 text-xs mt-1">
                      {editingId ? 'Modify the selected product details below.' : 'Enter product details to publish to the store shelves.'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmitProduct} className="flex flex-col lg:flex-row gap-8">

                    {/* Left Form Column */}
                    <div className="flex-1 flex flex-col gap-4">

                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Product Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aashirvaad Chakki Atta, Britannia Good Day"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="w-full bg-neutral-950 border border-neutral-800 pl-4 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                        />
                      </div>

                      {/* Category & Subcategory Selectors */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Category */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Category *</label>
                          <select
                            required
                            value={formCategory}
                            onChange={(e) => {
                              setFormCategory(e.target.value);
                              setFormSubcategory('');
                            }}
                            className="w-full bg-neutral-950 border border-neutral-800 text-xs px-4 py-2.5 rounded-xl text-neutral-300 focus:outline-none focus:border-[#10b981]/40 font-semibold cursor-pointer"
                          >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                              <option key={cat.id} value={cat.id}>
                                {cat.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Subcategory */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Subcategory *</label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              placeholder="e.g. Atta & Flours, Bath & Handwash"
                              value={formSubcategory}
                              onChange={(e) => setFormSubcategory(e.target.value)}
                              className="w-full bg-neutral-950 border border-neutral-800 pl-4 pr-12 py-2.5 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                              list="suggested-subcategories-list"
                            />
                            <datalist id="suggested-subcategories-list">
                              {suggestedSubcategories.map((sub, idx) => (
                                <option key={idx} value={sub} />
                              ))}
                            </datalist>
                          </div>
                        </div>

                      </div>

                      {/* Description */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Description</label>
                        <textarea
                          placeholder="Provide detailed description of quality, source, ingredients, benefits, etc."
                          value={formDescription}
                          onChange={(e) => setFormDescription(e.target.value)}
                          rows="3"
                          className="w-full bg-neutral-950 border border-neutral-800 pl-4 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold resize-none"
                        />
                      </div>

                      {/* ETA & Synonyms */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* ETA */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">ETA Delivery Time</label>
                          <input
                            type="text"
                            placeholder="e.g. 10 MINS, 15 MINS"
                            value={formEta}
                            onChange={(e) => setFormEta(e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-800 pl-4 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                          />
                        </div>

                        {/* Synonyms */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Search Tags (Comma separated)</label>
                          <input
                            type="text"
                            placeholder="atta, gehu, flour, wheat"
                            value={formSynonyms}
                            onChange={(e) => setFormSynonyms(e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-800 pl-4 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                          />
                        </div>

                      </div>

                      {/* Dynamic Variants Rows */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Weight Variants & Prices *</label>
                          <button
                            type="button"
                            onClick={addVariantRow}
                            className="text-xs text-[#10b981] hover:text-[#059669] font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" /> Add Variant
                          </button>
                        </div>

                        <div className="flex flex-col gap-2">
                          {formVariants.map((variant, index) => (
                            <div key={index} className="flex items-center gap-2 bg-neutral-950 p-2 border border-neutral-850 rounded-xl">
                              <input
                                type="text"
                                required
                                placeholder="Weight (e.g. 1kg, 500g, 1 pc)"
                                value={variant.weight}
                                onChange={(e) => handleVariantChange(index, 'weight', e.target.value)}
                                className="flex-1 bg-neutral-900 border border-neutral-800 pl-3 pr-3 py-2 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                              />
                              <input
                                type="number"
                                required
                                placeholder="Price (₹)"
                                value={variant.price}
                                onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
                                className="w-24 bg-neutral-900 border border-neutral-800 pl-3 pr-3 py-2 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                              />
                              <input
                                type="number"
                                placeholder="MRP (₹) (Optional)"
                                value={variant.mrp}
                                onChange={(e) => handleVariantChange(index, 'mrp', e.target.value)}
                                className="w-28 bg-neutral-900 border border-neutral-800 pl-3 pr-3 py-2 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                              />
                              <button
                                type="button"
                                onClick={() => removeVariantRow(index)}
                                disabled={formVariants.length === 1}
                                className="p-2 text-neutral-500 hover:text-red-400 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Right Form Column: Image Upload & Preview */}
                    <div className="w-full lg:w-80 flex flex-col gap-5">

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Product Image Preview</label>
                        <div className="w-full aspect-square bg-neutral-950 border-2 border-dashed border-neutral-800 rounded-3xl flex flex-col items-center justify-center p-6 relative overflow-hidden group">
                          {imagePreview ? (
                            <>
                              <img
                                src={imagePreview}
                                alt="Form preview"
                                className="w-full h-full object-contain mix-blend-normal rounded-2xl"
                              />
                              <button
                                type="button"
                                onClick={() => { setFormImageUrl(''); setImagePreview(''); }}
                                className="absolute top-3 right-3 bg-neutral-900/80 hover:bg-neutral-800 p-1.5 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer border border-neutral-800"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <div className="flex flex-col items-center justify-center text-center gap-2 cursor-pointer" onClick={triggerFileInput}>
                              <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center border border-neutral-800 group-hover:scale-105 transition-transform duration-200">
                                <ImageIcon className="w-6 h-6 text-neutral-500" />
                              </div>
                              <span className="text-[11px] font-bold text-neutral-400">Click to Upload Image</span>
                              <span className="text-[9px] text-neutral-600 max-w-[180px] leading-normal font-semibold">Supports PNG, JPG, or SVG base64 encoding</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* File Uploader Input */}
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageFileChange}
                        className="hidden"
                      />

                      {/* Image URL Input as alternative */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Or Image URL</label>
                        <input
                          type="text"
                          placeholder="Paste an online image URL..."
                          value={formImageUrl.startsWith('data:') ? '' : formImageUrl}
                          onChange={(e) => {
                            setFormImageUrl(e.target.value);
                            setImagePreview(e.target.value);
                          }}
                          className="w-full bg-neutral-950 border border-neutral-800 pl-4 pr-4 py-2.5 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#10b981]/40 font-semibold"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2 mt-4">
                        <button
                          type="submit"
                          className="w-full bg-[#10b981] hover:bg-[#059669] text-neutral-950 font-black uppercase tracking-wider py-3.5 px-4 rounded-xl text-xs transition-all shadow-lg shadow-emerald-500/10 cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <Save className="w-4 h-4" /> Save Product
                        </button>
                        <button
                          type="button"
                          onClick={() => { resetForm(); setActiveTab('inventory'); }}
                          className="w-full bg-transparent hover:bg-neutral-850 text-neutral-400 hover:text-white font-bold uppercase tracking-wider py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer border border-neutral-800 text-center"
                        >
                          Cancel & Back
                        </button>
                      </div>

                    </div>

                  </form>
                </div>
              )}

            </main>
          </div>
        </>
      )}

    </div>
  );
}
