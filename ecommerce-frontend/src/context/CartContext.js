// src/context/CartContext.js

import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalPrice((prevTotal) => prevTotal + product.price);
  };

  // Remove from cart function
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    const removedItem = cartItems.find((item) => item._id === id);
    if (removedItem) {
      setTotalPrice((prevTotal) => prevTotal - removedItem.price);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
