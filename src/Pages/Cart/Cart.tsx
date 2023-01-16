import "./CartStyle.scss";
import React, {useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../Providers/CartProvider";
import MiniCart from "./MiniCart";


const Cart = () => {
  const { setIsHover, isHover } = useContext(CartContext);
  return (
    <div
      className="cart-container"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <div className="cart-design">{<ShoppingCartOutlinedIcon />}</div>
      {isHover && <MiniCart />}
    </div>
  );
};

export default Cart;
