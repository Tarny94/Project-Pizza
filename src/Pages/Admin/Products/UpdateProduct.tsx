import React, { useContext } from "react";
import { Context } from "../../Provider";
import axios from "axios";
import { getApiUrl } from "../../../Api/api";
import BackButton from "../../../Design/BackButton";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const {
    product,
    setImage,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
    image,
    title,
    description,
    price,
    discount,
    pizza_id,
  } = useContext(Context);

  const productData: any = product;
  const navigate = useNavigate();

  let productToUpdate = {
    image,
    title,
    description,
    price,
    discount,
    pizza_id,
  };

  const handleUpdate = async () => {
    await axios
      .patch(getApiUrl("admin/update"), productToUpdate)
      .then((res) => {
        alert("Succes");
        navigate("/admin/products");
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
              setImage(e.target.value);
            }}
            defaultValue={productData.image}
          ></input>
        </div>
        <div className="product-to-update">
          TITLE
          <input
            className="update-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            defaultValue={productData.title}
          ></input>
        </div>
        <div className="product-to-update">
          DESCRIPTION
          <input
            className="update-input"
            defaultValue={productData.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <div className="product-to-update">
          PRICE
          <input
            className="update-input"
            defaultValue={productData.price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <div className="product-to-update">
          DICOUNT
          <input
            className="update-input"
            defaultValue={productData.discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          ></input>
        </div>
        <button style={{ cursor: "pointer" }} onClick={handleUpdate}>
          UPDATE PRODUCT
        </button>
      </div>
      <BackButton
        onClick={() => {
          navigate("/admin/products");
        }}
      />
    </div>
  );
};

export default UpdateProduct;
