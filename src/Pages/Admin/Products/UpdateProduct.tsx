import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Provider";
import axios from "axios";
import { getApiUrl } from "../../../Api/api";
import BackButton from "../../../Design/BackButton";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const {
    image,
    title,
    description,
    price,
    discount,
    pizza_id,
    setImage,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
    allProducts,
  } = useContext(Context);

  const [updateImage, setUpdateImage] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateDiscount, setUpdateDiscount] = useState("");

  const navigate = useNavigate();
  const product = {
    pizza_id,
    updateImage: updateImage ? updateImage : image,
    updateTitle: updateTitle ? updateTitle : title,
    updateDescription: updateDescription ? updateDescription : description,
    updatePrice: updatePrice ? updatePrice : price,
    updateDiscount: updateDiscount ? updateDiscount : discount,
  };

  useEffect(() => {
    axios
      .get(getApiUrl(`admin/get${pizza_id}`))
      .then((res) => {
        const product = res.data;
        setImage(product[0].image);
        setTitle(product[0].title);
        setDescription(product[0].description);
        setPrice(product[0].price);
        setDiscount(product[0].discount);
        console.log(product[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pizza_id, setDescription, setDiscount, setImage, setPrice, setTitle]);

  const handleUpdate = async () => {
    await axios
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
      <BackButton
        onClick={() => {
          navigate("/admin/products");
        }}
      />
    </div>
  );
};

export default UpdateProduct;
