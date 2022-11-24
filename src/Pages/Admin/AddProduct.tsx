import React, { useContext} from "react";
import Input from "../../Design/Input";
import Button from "../../Design/Button";
import "../Admin/Products.scss";
import { getApiUrl } from "../../Api/api";
import axios from "axios";
import { Context } from "../Provider";

const AddProduct = () => {
  const { setImage, setTitle, setDescription, setPrice, setDiscount, product } =
    useContext(Context);
  const handleSubmit = async () => {
    try {
      await axios.post(getApiUrl("admin/add"), product);
    } catch (e) {
      console.log(e);
    }
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
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
