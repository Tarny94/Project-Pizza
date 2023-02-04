import "./MiniCart.scss";
import React, { useEffect, useState } from "react";
import { ORDER_KEY } from "../../Constant";
import { CartContext } from "../Providers/CartProvider";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

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

  let products = productsOrdered;
  let total = 0;

  useEffect(() => {
    localStorage.setItem(ORDER_KEY, JSON.stringify(products));
  }, [products]);

  return (
    <div className="minicart-container">
      <div className="minicart-title minicart-details">
        {products.length !== 0 ? "YOUR CART" : "No product inside of Cart"}
      </div>
      <div className="minicart-product minicart-details">
        <div className="minicart-product-contain">
          {products.map((item: iProduct, id: number) => {
            total += item.price * item.productsPieces;
            return (
              <div key={id} className="minicard-product-details">
                <div className="minicart-product-first-part">
                  <div
                    className="minicart-delete"
                    onClick={() => {
                      setItems(products.splice(id, 1));
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <DeleteIcon />
                  </div>
                  {/* <div>{id + 1}</div> */}
                  <img
                    src={item.image}
                    alt="img"
                    width="50"
                    height="50"
                    style={{ fontSize: 15 }}
                  />
                  <div>Pizza {item.title}</div>
                </div>
                <div className="minicart-product-second-part">
                  <div>
                    {item.productsPieces} x ${item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="minicart-order minicart-details">
        <div>TOTAL: ${total}</div>
        <div
          onClick={() => {
            if (total) {
              localStorage.setItem(ORDER_KEY, JSON.stringify(products));
              navigate("/cart/page");
            }
          }}
        >
          GO TO CART
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
