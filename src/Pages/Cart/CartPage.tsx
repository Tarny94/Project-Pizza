import "./CartPage.scss";
import React, { useContext, useEffect, useState } from "react";
import { ORDER_KEY, ORDER_ITEM_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Providers/CartProvider";
import OrderSummary from "../OrderSection/OrderSummary";
import { UserContext } from "../Providers/UserProvider";
import TipsRadioButtons from "../OrderSection/TipsRadioButtons";
import DeleteIcon from "@mui/icons-material/Delete";
import Multiline from "../../Design/Multiline";
import CheckBox from "../../Design/CheckBox";
import FlatwareIcon from "@mui/icons-material/Flatware";

type iProduct = {
  id: number;
  image: string;
  title: string;
  productsPieces: number;
  productsPrice: number;
  price: number;
};

const CartPage = () => {
  const { productsOrdered, setProductsOrdered } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);

  const [finalPayment, setFinalPayment] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [, setTotalPieces] = useState(0);
  const [tableware, setTableware] = useState(false);
  const [tips, setTips] = useState(0);
  const [comments, setComments] = useState("");
  const [productsCost, setProductsCost] = useState(0);
  const [productsPieces, setProductsPieces] = useState(0);

  const navigate = useNavigate();
  const productsID: any[] = [];

  let price: number = 0;
  let pieces: number = 0;

  useEffect(() => {
    setProductsCost(price);
    setProductsPieces(pieces);
    if (productsOrdered.length !== 0) {
      localStorage.setItem(ORDER_ITEM_KEY, JSON.stringify(productsOrdered));
    }
  }, [pieces, price, productsOrdered, totalPrice]);

  const handleOrderedProducts = async () => {
    localStorage.setItem(
      ORDER_KEY,
      JSON.stringify({
        productsID: [...productsID],
        totalCost: finalPayment,
        productsCost,
        productsPieces,
        addressID: 0,
        tips,
        wrapping: productsPieces > 9 ? 5 : 1,
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
          {productsOrdered.map((item: iProduct, id: number) => {
            price += item.productsPrice;
            pieces += item.productsPieces;
            productsID.push({
              productId: item.id,
              productPieces: item.productsPieces,
            });

            return (
              <div key={id} className="page-cart-product-container">
                <div className="page-cart-product">
                  <div className="page-cart-pizza-image">
                    {" "}
                    <img
                      src={item.image}
                      alt="pizza img"
                      width="100"
                      height="100"
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                  <div></div>

                  <div className="page-cart-short-details">
                    <h3 className="page-cart-product-title">
                      Pizza {item.title}
                    </h3>

                    <div className="page-cart-pieces-part">
                      <div className="page-cart-pieces-part">
                        {" "}
                        {item.productsPieces === 1 ? (
                          <div
                            className="page-cart-delete-button"
                            onClick={async () => {
                              setProductsOrdered(
                                productsOrdered.filter(
                                  (value, index) => index !== id
                                )
                              );
                              if (productsOrdered.length === 1) {
                                localStorage.setItem(
                                  ORDER_ITEM_KEY,
                                  JSON.stringify([])
                                );
                                navigate("/menu");
                              }
                            }}
                          >
                            <DeleteIcon color="primary" />
                          </div>
                        ) : (
                          <div
                            className="page-cart-pieces-select"
                            onClick={() => {
                              if (item.productsPieces > 1) {
                                setTotalPrice(
                                  (item.productsPrice -= item.price)
                                );
                                setTotalPieces(item.productsPieces--);
                              }
                            }}
                          >
                            -
                          </div>
                        )}
                        <div className="page-cart-pieces-select page-cart-pieces-number">
                          {item.productsPieces}
                        </div>
                        <div
                          className="page-cart-pieces-select"
                          onClick={() => {
                            setTotalPrice((item.productsPrice += item.price));
                            setTotalPieces(item.productsPieces++);
                          }}
                        >
                          +
                        </div>
                      </div>
                      <div className="page-cart-product-price">
                        ${item.productsPrice}
                      </div>
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
          <FlatwareIcon fontSize="large" />
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
          totalPrice={productsCost}
          totalPieces={productsPieces}
          tips={tips}
          setFinalPayment={setFinalPayment}
          onClick={() => {
            if (isLoggedIn) {
              handleOrderedProducts();
              navigate("/cart/page/ordered");
            } else {
              navigate("/login");
            }
          }}
        />
      </div>
    </div>
  );
};

export default CartPage;
