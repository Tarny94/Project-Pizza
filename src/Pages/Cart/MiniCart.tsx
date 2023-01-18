import "./MiniCart.scss";
import React from "react";
import { ORDER_KEY } from "../../Constant";
import { getCoockie, setCoockie } from "../../Util/Cookies/Coockie";
type iProp = {
  id: number;
  image: string;
  title: string;
  numberOfProduct: number;
  price: number;
  initPrice: number;
};

const MiniCart = () => {
  let orderItems = getCoockie(ORDER_KEY);
  let totalPrice = 0;

  return (
    <div className="minicart-container">
      <div className="minicart-title minicart-details">
        No product inside of Cart
      </div>
      <div className="minicart-product minicart-details">
        <div>
          {orderItems.map((item: iProp, id: number) => {
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
                    totalPrice += item.price;
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
        <div>TOTAL: {totalPrice}</div>
        <div>GO TO CART</div>
      </div>
    </div>
  );
};

export default MiniCart;
