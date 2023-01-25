import React, { useContext, useEffect } from "react";
import { CartContext } from "../Providers/CartProvider";
import { ORDER_KEY, TOTAL_COST_KEY } from "../../Constant";

const OrderSummary = () => {
  const { totalPieces, totalPrice, setTotalCost } = useContext(CartContext);

  const pieces = totalPieces;
  const price = totalPrice;

  console.log(totalPrice);
  console.log(totalPieces);

  const delivary: number = 10;
  let service: number = 1;
  let total: number = price;

  if (pieces > 9) {
    service += 4;
  }

  const handleTotalPrice = () => {
    total = price;

    if (price !== 0) {
      total += service;
      if (price < 100) {
        total += delivary;
        localStorage.setItem(TOTAL_COST_KEY, JSON.stringify(total));
        return total;
      }
      localStorage.setItem(TOTAL_COST_KEY, JSON.stringify(total));
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
