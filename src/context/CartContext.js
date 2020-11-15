import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [contentCart, setContentCart] = useState("");

  console.log(contentCart);
  return (
    <CartContext.Provider value={{ setContentCart, contentCart }}>
      {children}
    </CartContext.Provider>
  );
};
