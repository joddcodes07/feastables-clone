import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const qtyToAdd = product.quantity || 1;
    setCartItems(prev => {
      const existing = prev.find(item => item.title === product.title);
      if (existing) {
        return prev.map(item => 
          item.title === product.title 
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      }
      return [...prev, { ...product, quantity: qtyToAdd, price: 29.99 }]; // Default price if not provided
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (title) => {
    setCartItems(prev => prev.filter(item => item.title !== title));
  };

  const updateQuantity = (title, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.title === title) {
        const newQuantity = Math.max(1, Number(item.quantity) + Number(delta));
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <CartContext.Provider value={{
      isCartOpen,
      setIsCartOpen,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      cartCount: cartItems.reduce((count, item) => count + item.quantity, 0)
    }}>
      {children}
    </CartContext.Provider>
  );
};
