import React, { useState, createContext, useEffect } from "react";
import { ORDER_KEY, ORDER_SUMMARY_KEY, TOTAL_COST_KEY } from "../../Constant";

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
  numberOfProduct: 1,
  productsSummary: 1,
  totalCost: 0,
  productsOrdered: [],
  totalPieces: 0,
  totalPrice: 0,
  tips: 0,

  setTips: (_: Number) => {},
  setTotalPieces: (_: Number) => {},
  setTotalPrice: (_: Number) => {},
  setProductsOrdered: (_: Object) => [],
  setTotalCost: (_: Number) => {},
  setProductsSummary: (_: Number) => {},
  setNumberOfProduct: (_: Number) => {},

  setProductChosed: (_: Object) => {},
  setOpenOrderModal: (_: boolean) => {},
  setIsHover: (_: boolean) => {},
};

type OrderSummary = {
  totalPrice: number;
  totalPieces: number;
};

export const CartContext = createContext(initialState);
export const CartProvider = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [productChosed, setProductChosed] = useState({});
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  const [productsSummary, setProductsSummary] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const [productsOrdered, setProductsOrdered] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPieces, setTotalPieces] = useState(0);
  const [tips, setTips] = useState(0);

  useEffect(() => {
    const valueFromLocalStore = localStorage.getItem(ORDER_KEY);
    if (valueFromLocalStore) {
      setProductsOrdered(JSON.parse(valueFromLocalStore));
    }
  }, []);

  useEffect(() => {
    const localValue = localStorage.getItem(ORDER_SUMMARY_KEY);
    if (localValue) {
      const summary: OrderSummary = JSON.parse(localValue);
      setTotalPieces(summary.totalPieces);
      setTotalPrice(summary.totalPrice);
    }
    if (productsOrdered.length === 0) {
      setTotalPieces(0);
      setTotalPrice(0);
    }
  }, [productsOrdered.length, totalPieces, totalPrice]);

  useEffect(() => {
    const valueFromLocalStore = localStorage.getItem(TOTAL_COST_KEY);
    if (valueFromLocalStore) {
      setTotalCost(JSON.parse(valueFromLocalStore));
    }
  }, []);

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
        productsSummary,
        setProductsSummary,
        totalCost,
        setTotalCost,
        productsOrdered,
        setProductsOrdered,
        totalPieces,
        setTotalPieces,
        tips,
        setTips,
      }}
      {...props}
    />
  );
};
