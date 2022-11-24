import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Menu.scss";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { Context } from "../Provider";

type iProp = {
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
};

const Menu = () => {
  const { allProducts, setAllProducts } = useContext(Context);

  useEffect(() => {
    axios
      .get(getApiUrl("admin/get"))
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
          {allProducts.map((product: iProp) => {
            return (
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
