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
  productsSummary: 1,
  totalCost: 0,

  setTotalCost: (_: Number) => {},
  setProductsSummary: (_: Number) => {},
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
  const [productsSummary, setProductsSummary] = useState(1);
  const [totalCost, setTotalCost] = useState(0);
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
        productsSummary,
        setProductsSummary,
        totalCost,
        setTotalCost,
      }}
      {...props}
    />
  );
};
