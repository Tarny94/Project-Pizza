import "./CartStyle.scss";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-design">{<ShoppingCartOutlinedIcon />}</div>
    </div>
  );
};

export default Cart;
