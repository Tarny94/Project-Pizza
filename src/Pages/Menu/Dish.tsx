import React, { useState } from "react";
import "../Menu/dish.scss";

const Dish = () => {
  const [discount, setDiscount] = useState(true);
  return (
    <div className="dish-container">
      <div className="dish-image-container"></div>
      {/* <img
        src="https://pizzaka.ro/wp-content/uploads/2018/04/PIZZA-CAPRICIOSA-PRET-16_21_35-LEI-.jpg"
        alt=""
        width={200}
        className="dish-image"
      /> */}
      <div className="dish-components">
        <div className="dish-title">Pizza Capricioasa</div>
        <div className="dish-description">
          Pizza made with mozzarella cheese, baked Italian ham, mushrooms,
          artichokes and tomatoes
        </div>
      </div>
      <div className="dish-prices-discount">
        {discount ? (
          <>
            <div className="discount-price">$11.00</div>
            <div className="normal-price">$14.30</div>
          </>
        ) : (
          <div className="price">$11</div>
        )}
      </div>

      <div className="dish-order">
        <div className="dish-title-order">ORDER</div>
      </div>
    </div>
  );
};

export default Dish;
