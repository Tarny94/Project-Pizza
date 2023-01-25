import "./CartPage.scss";
import React, { useContext, useEffect, useState } from "react";
import { ORDER_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Providers/CartProvider";
import OrderSummary from "../OrderSection/OrderSummary";
import { ORDER_SUMMARY_KEY } from "../../Constant";

// type iProp = {
//   id: number;
//   image: string;
//   title: string;
//   numberOfProduct: number;
//   price: number;
//   initPrice: number;
//   key: number;
// };

type iProduct = {
  id: number;
  image: string;
  title: string;
  productsPieces: number;
  productsPrice: number;
  price: number;
};

const CartPage = () => {
  const {
    productsOrdered,
    setTotalPrice,
    setTotalPieces,
    totalPieces,
    totalPrice,
  } = useContext(CartContext);

  const [, setItems] = useState([]);
  const navigate = useNavigate();
  const items = productsOrdered;

  let totalCash = 0;
  let totalBuc = 1;

  useEffect(() => {
    if (totalCash) {
      setTotalPrice(totalCash);
      setTotalPieces(totalBuc);
      localStorage.setItem(
        ORDER_SUMMARY_KEY,
        JSON.stringify({ totalPrice, totalPieces })
      );
    }
  }, [
    setTotalPieces,
    setTotalPrice,
    totalBuc,
    totalCash,
    totalPieces,
    totalPrice,
  ]);

  return (
    <div className="page-cart-container">
      <div className="page-height"></div>
      <div className="page-cart-intro">
        <div className="page-cart-order intro">Your Order</div>
        <div className="page-cart-products intro">Your Products</div>
      </div>
      <div className="page-cart-all-products">
        {" "}
        {items.map((item: iProduct, id: number) => {
          totalCash += item.productsPrice;
          totalBuc += item.productsPieces;
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
                  setTotalPrice((totalCash -= item.productsPrice));
                  setTotalPieces((totalBuc -= item.productsPieces));
                  localStorage.setItem(ORDER_KEY, JSON.stringify(items));
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <OrderSummary />
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
