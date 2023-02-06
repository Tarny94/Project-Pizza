import "./OrderSummary.scss";
import React, { useContext } from "react";
import { CartContext } from "../Providers/CartProvider";
import { TOTAL_COST_KEY } from "../../Constant";

type iProp = {
  onChange?: any;
  onClick?: any;
  buttonText?: string;
};

const OrderSummary = ({ onChange, onClick, buttonText }: iProp) => {
  const { totalPieces, totalPrice, tips } = useContext(CartContext);

  const pieces = totalPieces;
  const price = totalPrice;
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
        total += delivary + tips;
        localStorage.setItem(TOTAL_COST_KEY, JSON.stringify(total));
        return total;
      }
      localStorage.setItem(TOTAL_COST_KEY, JSON.stringify(total));
      return total;
    }
    return 0;
  };

  return (
    <div className="order-summary-container">
      <h2 className=" order-summary-title">ABOUT ORDER</h2>
      <div className="order_summary-details">
        <div className="order-summary">Products Cost: {price}$</div>
        <div className="order-summary">Wrapping: {price && service}$</div>
        <div className="order-summary">
          Delivery:{" "}
          {price !== 0 ? (
            price < 100 ? (
              delivary + "$"
            ) : (
              <p className="order_summary-delivery-status">FREE</p>
            )
          ) : (
            0 + "$"
          )}
        </div>
        <div className="order-summary">Total Cost: {handleTotalPrice()}$</div>
      </div>
      <div className="order_summary-button" onClick={onClick}>
        {buttonText}
      </div>
    </div>
  );
};

export default OrderSummary;
