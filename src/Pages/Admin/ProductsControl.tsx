import React from "react";
import Button from "../../Design/Button";
import { useNavigate } from "react-router-dom";
import "../Admin/Products.scss";

const ProductControl = () => {
  const navigate = useNavigate();

  return (
    <div className="product-control-container">
      <div className="product-control-buttons">
        <h1 className="product-control-title">CONTROL PANEL</h1>
        <h4 className="product-subtitle">PRODUCTS</h4>
        <Button
          className="button-field"
          title={"ADD PRODUCT"}
          onClick={() => {
            navigate("/admin/add");
          }}
        />
        <Button
          className="button-field"
          title={"DELETE & EDIT"}
          onClick={() => {
            navigate("/admin/delete");
          }}
        />
      </div>
    </div>
  );
};

export default ProductControl;
