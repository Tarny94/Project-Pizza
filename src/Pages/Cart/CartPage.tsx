import "./CartPage.scss";
import React from "react";
import { getCoockie, setCoockie } from "../../Util/Cookies/Coockie";
import { ORDER_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";

type iProp = {
  id: number;
  image: string;
  title: string;
  numberOfProduct: number;
  price: number;
  initPrice: number;
};

const CartPage = () => {
  let orderItems = getCoockie(ORDER_KEY);
  let total = 0;
  let totalProducts = 0;
  const delivary = 10;
  const service = 1;

  const navigate = useNavigate();

  const handleTotalPrice = () => {
    if (total !== 0) {
      total += service;

      if (total < 100) {
        return (total += delivary);
      }

      return total;
    }
    return 0;
  };

  return (
    <div className="page-cart-container">
      <div className="page-height"></div>
      <div className="page-cart-intro">
        <div className="page-cart-order intro">Your Order</div>
        <div className="page-cart-products intro">Your Products</div>
      </div>
      <div className="page-cart-all-products">
        {" "}
        {orderItems.map((item: iProp, id: number) => {
          total += item.price;
          totalProducts += item.price;
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
      <div className="page-cart-order-summary-container">
        <div className="order-summary">About Order</div>
        <div className="order-summary">Products: {totalProducts}$</div>
        <div className="order-summary">Services: {total && service}$</div>
        <div className="order-summary">
          Delivery:{" "}
          {total !== 0 ? (total < 100 ? delivary + "$" : "FREE") : 0 + "$"}
        </div>
        <div className="order-summary">Total Cost: {handleTotalPrice()}$</div>
      </div>
      <div className="page-cart-another-products"></div>
      <button
        onClick={() => {
          navigate("/cart/page/ordered");
        }}
      >
        GO TO NEXT STEP
      </button>
    </div>
  );
};

export default CartPage;
