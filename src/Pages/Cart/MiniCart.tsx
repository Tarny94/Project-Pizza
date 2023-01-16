import "./MiniCart.scss";
import React from "react";

const MiniCart = () => {
  return (
    <div className="minicart-container">
      <div className="minicart-title minicart-details">
        No Product inside of Cart
      </div>
      <div className="minicart-product minicart-details">PRODUCT</div>
      <div className="minicart-order minicart-details">GO TO CART</div>
    </div>
  );
};

export default MiniCart;
