import "../Styles/ProductsStyle.scss";
import React, { useContext } from "react";
import Input from "../../../Design/Input";
import Button from "../../../Design/Button";
import { ProductContext } from "../../Providers/ProductProvider";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../Design/BackButton";
import { addProductApi } from "../../../Api/ApiRoutes";

const AddProduct = () => {
  const {
    setImage,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
    addProduct,
  } = useContext(ProductContext);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    addProductApi(addProduct);
  };

  return (
    <div className="add-product-container">
      <div className="add-product-details">
        <h1 className="add-product-title">ADD PRODUCT</h1>
        <div className="add-product-inputs">
          <Input setValue={setImage} placeholder="Image" />
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
              navigate("/admin");
            }}
          />
        </div>
        <BackButton
          onClick={() => {
            navigate("/admin");
          }}
        />
      </div>
    </div>
  );
};

export default AddProduct;
