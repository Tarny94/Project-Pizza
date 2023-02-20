import "./OrderSummary.scss";
import React, { useEffect } from "react";

type iProp = {
  setFinalPayment?: any;
  onClick?: () => void;
  buttonText?: string;
  totalPrice?: number;
  totalPieces?: number;
  tips?: number;
};

const OrderSummary = ({
  setFinalPayment,
  onClick,
  buttonText,
  totalPieces = 0,
  totalPrice = 0,
  tips = 0,
}: iProp) => {
  const pieces: number = totalPieces;
  const price: number = totalPrice;
  const delivary: number = 10;

  let service: number = 1;
  let total: number = price;

  if (pieces > 9) {
    service += 4;
  }

  useEffect(() => {
    if (setFinalPayment) {
      const result: number = handleTotalPrice();

      result && setFinalPayment(handleTotalPrice());
    }
  }, [setFinalPayment, total]);

  const handleTotalPrice = () => {
    total = price;

    if (price !== 0) {
      total += service;
      if (price < 100) {
        total += delivary + tips;

        return total;
      }

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
