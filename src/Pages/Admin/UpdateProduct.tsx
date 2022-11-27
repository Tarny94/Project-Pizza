import React, { useContext, useState } from "react";
import { Context } from "../Provider";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { Link } from "react-router-dom";

const UpdateProduct = () => {
  const [updateImage, setUpdateImage] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateDiscount, setUpdateDiscount] = useState("");

  const { image, title, description, price, discount, pizza_id } =
    useContext(Context);
  const product = {
    pizza_id,
    updateImage: updateImage ? updateImage : image,
    updateTitle: updateTitle ? updateTitle : title,
    updateDescription: updateDescription ? updateDescription : description,
    updatePrice: updatePrice ? updatePrice : price,
    updateDiscount: updateDiscount ? updateDiscount : discount,
  };

  const handleUpdate = () => {
    axios
      .patch(getApiUrl("admin/update"), product)
      .then((res) => {
        alert("Succes");
      })
      .catch((e) => {
        console.log(e);
        alert("Fail");
      });
  };
  return (
    <div className="product-update">
      <h1 className="product-update-title">UPDATE PRODUCT</h1>
      <div className="product-update-container">
        <div className="product-to-update">
          IMAGE
          <input
            className="update-input"
            onChange={(e) => {
              setUpdateImage(e.target.value);
            }}
            defaultValue={image}
          ></input>
        </div>
        <div className="product-to-update">
          TITLE
          <input
            className="update-input"
            onChange={(e) => {
              setUpdateTitle(e.target.value);
            }}
            defaultValue={title}
          ></input>
        </div>
        <div className="product-to-update">
          DESCRIPTION
          <input
            className="update-input"
            defaultValue={description}
            onChange={(e) => {
              setUpdateDescription(e.target.value);
            }}
          ></input>
        </div>
        <div className="product-to-update">
          PRICE
          <input
            className="update-input"
            defaultValue={price}
            onChange={(e) => {
              setUpdatePrice(e.target.value);
            }}
          ></input>
        </div>
        <div className="product-to-update">
          DICOUNT
          <input
            className="update-input"
            defaultValue={discount}
            onChange={(e) => {
              setUpdateDiscount(e.target.value);
            }}
          ></input>
        </div>
        <button style={{ cursor: "pointer" }} onClick={handleUpdate}>
          UPDATE PRODUCT
        </button>
      </div>
      <Link to={"/admin/delete"}>Back</Link>
    </div>
  );
};

export default UpdateProduct;
