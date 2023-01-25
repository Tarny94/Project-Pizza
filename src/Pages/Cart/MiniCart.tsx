import "./MiniCart.scss";
import React, { useEffect, useState } from "react";
import { ORDER_KEY } from "../../Constant";
import { CartContext } from "../Providers/CartProvider";
import { useNavigate } from "react-router-dom";

type iProduct = {
  id: number;
  image: string;
  title: string;
  productsPieces: number;
  productsPrice: number;
  price: number;
};

const MiniCart = () => {
  const { productsOrdered } = React.useContext(CartContext);

  const [, setItems] = useState([]);
  const navigate = useNavigate();

  let items = productsOrdered;
  let total = 0;

  useEffect(() => {
    localStorage.setItem(ORDER_KEY, JSON.stringify(items));
  }, [items]);

  return (
    <div className="minicart-container">
      <div className="minicart-title minicart-details">
        No product inside of Cart
      </div>
      <div className="minicart-product minicart-details">
        <div>
          {items.map((item: iProduct, id: number) => {
            total += item.price * item.productsPieces;
            return (
              <div key={id}>
                <p>{id + 1}</p>
                <img src={item.image} alt="pizza img" width="50" height="50" />
                <h2>Pizza {item.title}</h2>
                <div>
                  {item.productsPieces} x ${item.price}
                </div>
                <button
                  onClick={() => {
                    setItems(items.splice(id, 1));
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
            localStorage.setItem(ORDER_KEY, JSON.stringify(items));
            navigate("/cart/page");
          }}
        >
          GO TO CART
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
