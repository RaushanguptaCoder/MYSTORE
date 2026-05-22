/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Load cart from localStorage using lazy initializer
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('blinkit_cart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (e) {
        console.error("Failed to parse cart items from storage", e);
      }
    }
    return [];
  });


  // Save cart to localStorage on changes
  useEffect(() => {
    localStorage.setItem('blinkit_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, variant) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.variant.weight === variant.weight
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      }

      return [...prevItems, { product, variant, quantity: 1 }];
    });
  };

  const removeFromCart = (productId, weight) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === productId && item.variant.weight === weight
      );

      if (existingItemIndex === -1) return prevItems;

      const updatedItems = [...prevItems];
      if (updatedItems[existingItemIndex].quantity > 1) {
        updatedItems[existingItemIndex].quantity -= 1;
        return updatedItems;
      } else {
        return updatedItems.filter(
          (item) => !(item.product.id === productId && item.variant.weight === weight)
        );
      }
    });
  };

  const updateQuantity = (productId, weight, quantity) => {
    if (quantity <= 0) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => !(item.product.id === productId && item.variant.weight === weight))
      );
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.variant.weight === weight
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Helper function to check quantity of a specific variant in cart
  const getVariantQuantity = (productId, weight) => {
    const item = cartItems.find(
      (item) => item.product.id === productId && item.variant.weight === weight
    );
    return item ? item.quantity : 0;
  };

  // Helper function to check total quantity of a product in cart (regardless of variant)
  const getProductQuantity = (productId) => {
    return cartItems
      .filter((item) => item.product.id === productId)
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  // Derived state calculations
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  const totalMrp = cartItems.reduce((sum, item) => sum + item.variant.mrp * item.quantity, 0);
  const savings = totalMrp - totalPrice;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getVariantQuantity,
        getProductQuantity,
        totalItems,
        totalPrice,
        totalMrp,
        savings
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
