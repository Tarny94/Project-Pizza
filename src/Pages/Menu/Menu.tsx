import React from "react";
import Dish from "./Dish";
import "./menu.scss";

const Menu = () => {
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
        <div className="menu-with-dish">
          <Dish />
        </div>
      </div>
    </div>
  );
};

export default Menu;
