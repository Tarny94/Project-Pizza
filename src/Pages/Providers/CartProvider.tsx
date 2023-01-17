import React, { useState, createContext } from "react";

const initialState = {
  isHover: false,
  openOrderModal: false,

  setOpenOrderModal: (_: boolean) => {},
  setIsHover: (_: boolean) => {},
};

export const CartContext = createContext(initialState);
export const CartProvider = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);

  return (
    <CartContext.Provider
      value={{ isHover, setIsHover, openOrderModal, setOpenOrderModal }}
      {...props}
    />
  );
};
