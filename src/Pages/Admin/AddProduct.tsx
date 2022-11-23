import React, { useState } from "react";
import Input from "../../Design/Input";
import Button from "../../Design/Button";
import "../Admin/Products.scss";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const product = {
    image,
    title,
    description,
    price,
    discount,
  };

  return (
    <div className="add-product-container">
      <div className="add-product-details">
        <h1 className="add-product-title">ADD PRODUCT</h1>
        <div className="add-product-inputs">
          <Input setValue={setImage} placeholder="Images" />
          <Input setValue={setTitle} placeholder="Title" />
          <Input setValue={setDescription} placeholder="Description" />
          <Input setValue={setPrice} placeholder="Price" type="number" />
          <Input setValue={setDiscount} placeholder="Discount" type="number" />
        </div>
        <div className="add-product-submit">
          <Button
            className="button-field"
            title={"SUBMIT"}
            onClick={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
