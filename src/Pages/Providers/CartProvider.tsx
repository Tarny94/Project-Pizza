import React, { useState, createContext } from "react";

const initialState = {
  isHover: false,
  openOrderModal: false,
  productChosed: {
    id: NaN,
    image: "",
    title: "",
    description: "",
    price: NaN,
  },
  totalPrice: 0,
  numberOfProduct: 1,

  setNumberOfProduct: (_: Number) => {},
  setTotalPrice: (_: Number) => {},
  setProductChosed: (_: Object) => {},
  setOpenOrderModal: (_: boolean) => {},
  setIsHover: (_: boolean) => {},
};

export const CartContext = createContext(initialState);
export const CartProvider = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [productChosed, setProductChosed] = useState({});
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  let total = 0;

  return (
    <CartContext.Provider
      value={{
        isHover,
        setIsHover,
        openOrderModal,
        setOpenOrderModal,
        productChosed,
        setProductChosed,
        numberOfProduct,
        setNumberOfProduct,
        totalPrice,
        setTotalPrice,
        total,
      }}
      {...props}
    />
  );
};
