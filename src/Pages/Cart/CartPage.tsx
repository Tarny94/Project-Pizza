import "./CartPage.scss";
import React, { useContext, useEffect, useState } from "react";
import { ORDER_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Providers/CartProvider";
import OrderSummary from "../OrderSection/OrderSummary";
import { ORDER_SUMMARY_KEY, ORDERED_KEY } from "../../Constant";
import { UserContext } from "../Providers/UserProvider";

import TipsRadioButtons from "../OrderSection/TipsRadioButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import Multiline from "../../Design/Multiline";
import CheckBox from "../../Design/CheckBox";

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

  if (items.length === 0) {
    navigate("/menu");
  }

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
                  <div className="page-cart-pizza-image-title">
                    {" "}
                    <img
                      src={item.image}
                      alt="pizza img"
                      width="100"
                      height="100"
                    />
                    <h2>Pizza {item.title}</h2>
                  </div>
                  <div className="page-cart-price-delete-button">
                    <div>${item.productsPrice}</div>
                    <div>{item.productsPieces}</div>
                    <div
                      className="page-cart-delete-button"
                      onClick={() => {
                        setItems(items.splice(id, 1));
                        setTotalPrice((totalCash -= item.productsPrice));
                        setTotalPieces((totalBuc -= item.productsPieces));
                        localStorage.setItem(ORDER_KEY, JSON.stringify(items));
                      }}
                    >
                      <DeleteIcon color="primary" style={{ fontSize: 30 }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="page-cart-tableware"
          onClick={() => {
            if (tableware) {
              setTableware(false);
            } else {
              setTableware(true);
            }
          }}
        >
          <CheckBox
            tableware={tableware}
            setTableware={setTableware}
            label="Cutlery"
          />
        </div>
        <div className="page-cart-tips">
          <TipsRadioButtons tips={tips} setTips={setTips} />
        </div>

        <div className="page-cart-mentions">
          <Multiline
            label={"Mentions?"}
            onChange={setComments}
            variant={"filled"}
            rows={3}
          />
        </div>
      </div>
      <div className="page-cart-summary-contain">
        {" "}
        <OrderSummary
          buttonText="NEXT STEP"
          onClick={() => {
            if (productsContains) {
              handleOrderedProducts();
            }
            // navigate("/cart/page/ordered");;
          }}
        />
      </div>
    </div>
  );
};

export default CartPage;
