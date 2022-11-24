import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Menu.scss";
import axios from "axios";
import { getApiUrl } from "../../Api/api";

type iProp = {
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
};

const Menu = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(getApiUrl("admin/get"))
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log("Err:", e);
      });
  }, []);

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
          {products.map((product: iProp) => {
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
          <ProductCard
            image={""}
            title={""}
            description={""}
            price={0}
            discount={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
