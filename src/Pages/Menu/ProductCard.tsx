import React, { useState } from "react";
import "../Menu/ProductCard.scss";

const ProductCard = () => {
  const [discount, setDiscount] = useState(true);
  return (
    <div className="card-component">
      <div className="card-container">
        <div className="card-image-container"></div>
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
    </div>
  );
};

export default ProductCard;
