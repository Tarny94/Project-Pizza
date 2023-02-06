import "./CartStyle.scss";
import React, {useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../Providers/CartProvider";
import MiniCart from "./MiniCart";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";

const Cart = () => {
  const { setIsHover, isHover } = useContext(CartContext);
  const { setClick } = useContext(UserContext);
  const navigate = useNavigate();

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
      <div
        className="cart-design"
        onClick={() => {
          setClick(false);
          navigate("/cart/page");
        }}
      >
        {<ShoppingCartOutlinedIcon />}
      </div>

      {isHover && <MiniCart />}
    </div>
  );
};

export default Cart;
