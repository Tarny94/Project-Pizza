import React, { useContext } from "react";
import { ProductContext } from "../../Providers/ProductProvider";
import BackButton from "../../../Design/BackButton";
import { useNavigate } from "react-router-dom";
import { updateProductApi } from "../../../Api/ApiRoutes";

type iProp = {
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  pizza_id: number;
};

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
  } = useContext(ProductContext);

  const navigate = useNavigate();

  let productToUpdate: iProp = {
    image,
    title,
    description,
    price,
    discount,
    pizza_id,
  };

  const handleUpdate = async () => {
    await updateProductApi(productToUpdate);
    navigate("/products");
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
            defaultValue={product.image}
          ></input>
        </div>
        <div className="product-to-update">
          TITLE
          <input
            className="update-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            defaultValue={product.title}
          ></input>
        </div>
        <div className="product-to-update">
          DESCRIPTION
          <input
            className="update-input"
            defaultValue={product.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <div className="product-to-update">
          PRICE
          <input
            className="update-input"
            defaultValue={product.price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <div className="product-to-update">
          DICOUNT
          <input
            className="update-input"
            defaultValue={product.discount}
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
          navigate("/get/products");
        }}
      />
    </div>
  );
};

export default UpdateProduct;
