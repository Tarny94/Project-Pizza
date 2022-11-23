import React from "react";
import Input from "../../Design/Input";
import Button from "../../Design/Button";
import "../Admin/Products.scss";

const AddProduct = () => {
  return (
    <div className="add-product-container">
      <div className="add-product-details">
        <h1 className="add-product-title">ADD PRODUCT</h1>
        <div className="add-product-inputs">
          <Input setValue={undefined} placeholder="Images" />
          <Input setValue={undefined} placeholder="Title" />
          <Input setValue={undefined} placeholder="Description" />
          <Input setValue={undefined} placeholder="Price" />
          <Input setValue={undefined} placeholder="Discount" />
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
