import React, { useState, createContext } from "react";

const initialState = {
  isHover: false,

  setIsHover: (_: boolean) => {},
};

export const CartContext = createContext(initialState);
export const CartProvider = (props: any) => {
  const [isHover, setIsHover] = useState(false);

  return <CartContext.Provider value={{ isHover, setIsHover }} {...props} />;
};
