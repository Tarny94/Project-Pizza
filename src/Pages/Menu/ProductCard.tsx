import "../Menu/ProductCard.scss";
import React, { useEffect, useState } from "react";

type iProp = {
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
};

const ProductCard = ({ image, title, description, price, discount }: iProp) => {
  const [discountPrice, setDiscountPrice] = useState(NaN);

  useEffect(() => {
    if (discount) {
      setDiscountPrice(Math.trunc((price * discount) / 100 + price));
    }
  }, [discount, price]);

  return (
    <div className="card-component">
      <div className="card-container">
        <div
          className="card-image-container"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="card-components">
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </div>
        <div className="card-prices-discount">
          {discount ? (
            <>
              <div className="discount-price">${price}</div>
              <div className="normal-price">${discountPrice}</div>
            </>
          ) : (
            <div className="price">${price}</div>
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
