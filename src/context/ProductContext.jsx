import { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, categories } from '../data/products';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('mystore_products');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved products from localStorage:", e);
      }
    }
    return initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('mystore_products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
