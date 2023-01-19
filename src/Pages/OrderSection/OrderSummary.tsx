import React, { useContext, useEffect } from "react";
import { CartContext } from "../Providers/CartProvider";
import { getCoockie } from "../../Util/Cookies/Coockie";
import { ORDER_SUMMARY_KEY } from "../../Constant";

const OrderSummary = () => {
  const { setTotalCost, productsSummary, totalPrice } = useContext(CartContext);

  const summary = getCoockie(ORDER_SUMMARY_KEY);

  let pieces: number = productsSummary ? productsSummary : summary.totalPeces;
  let price: number = totalPrice ? totalPrice : summary.totalPrice;

  const delivary: number = 10;
  let service: number = 1;
  let total: number = 0;

  if (pieces > 9) {
    service += 4;
  }

  useEffect(() => {
    if (total) {
      setTotalCost(total);
    }
  }, [setTotalCost, total]);

  const handleTotalPrice = () => {
    total = price;

    if (price !== 0) {
      total += service;
      if (price < 100) {
        total += delivary;

        return total;
      }

      return total;
    }
    return 0;
  };

  return (
    <div className="page-cart-order-summary-container">
      <div className="order-summary">About Order</div>
      <div className="order-summary">Products Cost: {price}$</div>
      <div className="order-summary">Services: {price && service}$</div>
      <div className="order-summary">
        Delivery:{" "}
        {price !== 0 ? (price < 100 ? delivary + "$" : "FREE") : 0 + "$"}
      </div>
      <div className="order-summary">Total Cost: {handleTotalPrice()}$</div>
    </div>
  );
};

export default OrderSummary;
