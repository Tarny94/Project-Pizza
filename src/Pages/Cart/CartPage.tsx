import "./CartPage.scss";
import React, { useContext, useEffect, useState } from "react";
import { ORDER_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Providers/CartProvider";
import OrderSummary from "../OrderSection/OrderSummary";
import { ORDER_SUMMARY_KEY, ORDERED_KEY } from "../../Constant";
import { addOrder } from "../../Api/ApiRoutes";
import { UserContext } from "../Providers/UserProvider";
import RadioButton from "../../Design/RadioButton";
import TipsRadioButtons from "../OrderSection/TipsRadioButtons";

type iProduct = {
  id: number;
  image: string;
  title: string;
  productsPieces: number;
  productsPrice: number;
  price: number;
};

type iAddOrder = {};

const CartPage = () => {
  const {
    productsOrdered,
    setTotalPrice,
    setTotalPieces,
    totalPieces,
    totalPrice,
    tips,
    setTips,
  } = useContext(CartContext);
  const { userId } = useContext(UserContext);

  const [tableware, setTableware] = useState(false);
  const [comments, setComments] = useState("");

  const [, setItems] = useState([]);

  const navigate = useNavigate();
  const items = productsOrdered;
  const productsID: number[] = [];
  const date = new Date();

  let totalCash = 0;
  let totalBuc = 1;

  console.log(tips);

  useEffect(() => {
    if (totalCash) {
      setTotalPrice(totalCash);
      setTotalPieces(totalBuc);
      localStorage.setItem(
        ORDER_SUMMARY_KEY,
        JSON.stringify({ totalPrice, totalPieces, tips })
      );
    }
  }, [
    setTotalPieces,
    setTotalPrice,
    tips,
    totalBuc,
    totalCash,
    totalPieces,
    totalPrice,
  ]);

  const handleOrderedProducts = async () => {
    localStorage.setItem(
      ORDERED_KEY,
      JSON.stringify({
        userId,
        productsID,
        totalCash: 0,
        productsCash: totalPrice,
        address_id: "",
        data: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
        time: `${date.getHours()}.${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`,
        tips,
        wrapping: "",
        comments,
        tableware,
      })
    );
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
        {items.map((item: iProduct, id: number) => {
          totalCash += item.productsPrice;
          totalBuc += item.productsPieces;

          productsID.push(item.id);

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
        {totalCash < 100 ? (
          <TipsRadioButtons tips={tips} setTips={setTips} />
        ) : (
          ""
        )}
      </div>

      <div>
        <RadioButton
          name="Tableware"
          tableware={tableware}
          setTableware={setTableware}
        />
      </div>
      <div>
        Something else to mention?
        <input
          onChange={(e: any) => {
            setComments(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <OrderSummary />
      </div>

      <div className="page-cart-another-products"></div>
      <button
        onClick={() => {
          handleOrderedProducts();
          navigate("/cart/page/ordered");
        }}
      >
        GO TO NEXT STEP
      </button>
    </div>
  );
};

export default CartPage;
