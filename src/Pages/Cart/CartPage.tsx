import "./CartPage.scss";
import React, { useContext } from "react";
import { getCoockie, setCoockie } from "../../Util/Cookies/Coockie";
import { ORDER_KEY } from "../../Constant";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Providers/CartProvider";
import OrderSummary from "../OrderSection/OrderSummary";
import { ORDER_SUMMARY_KEY } from "../../Constant";

type iProp = {
  id: number;
  image: string;
  title: string;
  numberOfProduct: number;
  price: number;
  initPrice: number;
};

type OrderSum = {
  totalPieces: number;
  totalPrice: number;
};

const CartPage = () => {
  const { setTotalPrice, setProductsSummary, productsSummary, totalPrice } =
    useContext(CartContext);

  let orderItems = getCoockie(ORDER_KEY);
  let total = 0;
  let totalProducts = 0;

  const summaryProducts: OrderSum = {
    totalPieces: 1,
    totalPrice: 0,
  };

  const navigate = useNavigate();

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
          setTotalPrice(total);

          totalProducts += item.numberOfProduct;
          setProductsSummary(totalProducts);

          summaryProducts.totalPieces = productsSummary;
          summaryProducts.totalPrice = totalPrice;

          setCoockie(ORDER_SUMMARY_KEY, summaryProducts);
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
      <div>
        <OrderSummary
          productsSummary={productsSummary}
          totalPrice={totalPrice}
        />
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
