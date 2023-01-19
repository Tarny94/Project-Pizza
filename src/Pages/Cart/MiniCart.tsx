import "./MiniCart.scss";
import React from "react";
import { ORDER_KEY } from "../../Constant";
import { getCoockie, setCoockie } from "../../Util/Cookies/Coockie";

import { useNavigate } from "react-router-dom";
type iProp = {
  id: number;
  image: string;
  title: string;
  numberOfProduct: number;
  price: number;
  initPrice: number;
};

const MiniCart = () => {
  const navigation = useNavigate();

  let orderItems = getCoockie(ORDER_KEY);
  let total = 0;
  return (
    <div className="minicart-container">
      <div className="minicart-title minicart-details">
        No product inside of Cart
      </div>
      <div className="minicart-product minicart-details">
        <div>
          {orderItems.map((item: iProp, id: number) => {
            total += item.price;
            return (
              <div>
                <p>{id + 1}</p>
                <img src={item.image} alt="pizza img" width="50" height="50" />
                <h2>Pizza {item.title}</h2>
                <div>
                  {item.numberOfProduct} x ${item.initPrice}
                </div>
                <button
                  onClick={() => {
                    orderItems.splice(id, 1);
                    setCoockie(ORDER_KEY, orderItems);
                    window.location.reload();
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="minicart-order minicart-details">
        <div>TOTAL: {total}</div>
        <div
          onClick={() => {
            navigation("/cart/page");
          }}
        >
          GO TO CART
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
