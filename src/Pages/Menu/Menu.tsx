import "./MenuStyle.scss";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { ProductContext } from "../Providers/ProductProvider";
import OrderModal from "./OrderModal";
import { CartContext } from "../Providers/CartProvider";

type iProp = {
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
  pizza_id: number;
};

const Menu = () => {
  const { allProducts, setAllProducts } = useContext(ProductContext);
  const { openOrderModal, setOpenOrderModal, productChosed } =
    useContext(CartContext);

  useEffect(() => {
    axios
      .get(getApiUrl("get/products"))
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((e) => {
        console.log("Err:", e);
      });
  }, [setAllProducts]);
  console.log(allProducts);

  return (
    <div className="page-menu-container">
      <div className="menu-container">
        <div className="menu-title-decriptions">
          {" "}
          <div className="menu-title">Pizza delicioasa</div>
          <div className="menu-description">
            Treat yourself right now with a delicious pizza. We deliver FAST or
            you can visit us at the location.
          </div>
        </div>
        <div className="menu-with-productCards">
          {allProducts.map((product: iProp) => {
            return (
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
                pizza_id={product.pizza_id}
              />
            );
          })}
        </div>
      </div>
      <OrderModal
        openOrderModal={openOrderModal}
        setOpenOrderModal={setOpenOrderModal}
        productChosed={productChosed}
      />
    </div>
  );
};

export default Menu;
