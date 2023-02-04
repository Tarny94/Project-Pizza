import "./MenuStyle.scss";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { ProductContext } from "../Providers/ProductProvider";
import OrderModal from "../OrderSection/OrderModal";
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

  const [productChosed, setProductChosed] = useState({
    image: "",
    title: "",
    description: "",
    price: 0,
    discount: 0,
    id: 0,
  });

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
          {allProducts.map((product: iProp, id: number) => {
            return (
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
                pizza_id={product.pizza_id}
                setProductChosed={setProductChosed}
                key={id}
              />
            );
          })}
        </div>
      </div>
      <OrderModal productChosed={productChosed} />
    </div>
  );
};

export default Menu;
