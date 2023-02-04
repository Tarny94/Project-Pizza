import "./CartPage.scss";
import React, { useContext, useEffect, useState } from "react";
import { ORDER_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Providers/CartProvider";
import OrderSummary from "../OrderSection/OrderSummary";
import { ORDER_SUMMARY_KEY, ORDERED_KEY } from "../../Constant";
import { UserContext } from "../Providers/UserProvider";
import RadioButton from "../../Design/RadioButton";
import TipsRadioButtons from "../OrderSection/TipsRadioButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import Multiline from "../../Design/Multiline";

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
    tips,
    setTips,
  } = useContext(CartContext);
  const { userId } = useContext(UserContext);

  const [tableware, setTableware] = useState(false);
  const [comments, setComments] = useState("");

  const [, setItems] = useState([]);

  const navigate = useNavigate();
  const items = productsOrdered;
  const productsContains: any[] = [];
  const date = new Date();

  let totalCash = 0;
  let totalBuc = 1;

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
        productsContains: [...productsContains],
        totalCash: 0,
        productsCash: totalPrice,
        address_id: "",
        data: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
        time: `${date.getHours()}.${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`,
        tips,
        wrapping: totalPieces > 9 ? 5 : 1,
        comments,
        tableware,
      })
    );
  };

  return (
    <div className="page-cart-container">
      <div className="page-cart-products">
        <div className="page-cart-order-title  intro"> ORDER</div>
        <div className="page-cart-products-title intro">Your Products</div>
        <div className="page-cart-products-contain">
          {" "}
          {items.map((item: iProduct, id: number) => {
            totalCash += item.productsPrice;
            totalBuc += item.productsPieces;

            productsContains.push({
              productId: item.id,
              productPieces: item.productsPieces,
            });

            return (
              <div key={id} className="page-cart-product-container">
                <div className="page-cart-product">
                  <div>{id + 1}.</div>
                  <img
                    src={item.image}
                    alt="pizza img"
                    width="50"
                    height="50"
                  />
                  <h2>Pizza {item.title}</h2>
                  <div>
                    {item.productsPieces} x ${item.price}
                  </div>
                  <div
                    className="page-cart-delete-button"
                    onClick={() => {
                      setItems(items.splice(id, 1));
                      setTotalPrice((totalCash -= item.productsPrice));
                      setTotalPieces((totalBuc -= item.productsPieces));
                      localStorage.setItem(ORDER_KEY, JSON.stringify(items));
                    }}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="page-cart-tableware">
          <RadioButton
            name="Tableware"
            tableware={tableware}
            setTableware={setTableware}
          />
        </div>
        <div className="page-cart-tips">
          {totalCash < 100 ? (
            <TipsRadioButtons tips={tips} setTips={setTips} />
          ) : (
            ""
          )}
        </div>

        <div className="page-cart-mentions">
          <Multiline
            label={"Mentions?"}
            onChange={setComments}
            variant={"outlined"}
            maxRow={4}
          />
        </div>
        <div className="page-cart-button-contain">
          <div
            className="page-cart-button"
            onClick={() => {
              if (productsContains) {
                handleOrderedProducts();
                // navigate("/cart/page/ordered"); in progress...
              }
            }}
          >
            NEXT STEP
            <p>in progress...</p>
          </div>
        </div>
      </div>
      <div className="page-cart-summary-contain">
        {" "}
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
