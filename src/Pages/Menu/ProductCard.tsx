import React, { useState } from "react";
import "../Menu/ProductCard.scss";

const ProductCard = () => {
  const [discount, setDiscount] = useState(true);
  return (
    <div className="card-container">
      <div className="card-image-container"></div>
      {/* <img
        src="https://pizzaka.ro/wp-content/uploads/2018/04/PIZZA-CAPRICIOSA-PRET-16_21_35-LEI-.jpg"
        alt=""
        width={200}
        className="card-image"
      /> */}
      <div className="card-components">
        <div className="card-title">Pizza Capricioasa</div>
        <div className="card-description">
          Pizza made with mozzarella cheese, baked Italian ham, mushrooms,
          artichokes and tomatoes
        </div>
      </div>
      <div className="card-prices-discount">
        {discount ? (
          <>
            <div className="discount-price">$11.00</div>
            <div className="normal-price">$14.30</div>
          </>
        ) : (
          <div className="price">$11</div>
        )}
      </div>

      <div className="card-order">
        <div className="card-title-order">ORDER</div>
      </div>
    </div>
  );
};

export default ProductCard;
