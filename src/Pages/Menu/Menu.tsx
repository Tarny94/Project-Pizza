import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "./Menu.scss";

const Menu = () => {
  useEffect(() => {});

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
