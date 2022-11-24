import axios from "axios";
import React, { useContext } from "react";
import Contact from "../Contact/Contact";
import { Context } from "../Provider";

const UpdateProduct = () => {
  const { image, title, description, price, discount, pizza_id } =
    useContext(Context);
  return (
    <div className="product-update">
      <h1 className="product-update-title">UPDATE PRODUCT</h1>
      <div className="product-update-container">
        <div className="product-to-update">
          IMAGE<input className="update-input" defaultValue={image}></input>
        </div>
        <div className="product-to-update">
          TITLE<input className="update-input" defaultValue={title}></input>
        </div>
        <div className="product-to-update">
          DESCRIPTION
          <input className="update-input" defaultValue={description}></input>
        </div>
        <div className="product-to-update">
          PRICE<input className="update-input" defaultValue={price}></input>
        </div>
        <div className="product-to-update">
          DICOUNT
          <input className="update-input" defaultValue={discount}></input>
        </div>
        <button style={{ cursor: "pointer" }}>UPDATE PRODUCT</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
