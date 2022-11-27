import React, { useContext} from "react";
import Input from "../../Design/Input";
import Button from "../../Design/Button";
import "../Admin/Products.scss";
import { getApiUrl } from "../../Api/api";
import axios from "axios";
import { Context } from "../Provider";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const { setImage, setTitle, setDescription, setPrice, setDiscount, product } =
    useContext(Context);
  const handleSubmit = async () => {
    try {
      await axios.post(getApiUrl("admin/add"), product);
      alert("Succes");
    } catch (e) {
      console.log(e);
      alert("Fail");
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
              window.location.reload();
            }}
          />
        </div>
        <Link to={"/admin"}>Back</Link>
      </div>
    </div>
  );
};

export default AddProduct;
