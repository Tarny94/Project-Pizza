import React from "react";
import Button from "../../Design/Button";
import { useNavigate } from "react-router-dom";
import "../Admin/Products.scss";

const ProductControl = () => {
  const navigate = useNavigate();

  return (
    <div className="product-control-container">
      <div className="product-control-buttons">
        <Button
          className="button-field"
          title={"ADD PRODUCT"}
          onClick={() => {
            navigate("/admin/add");
          }}
        />
        <Button
          className="button-field"
          title={"UPDATE PRODUCT"}
          onClick={undefined}
        />
        <Button
          className="button-field"
          title={"DELETE PRODUCT"}
          onClick={() => {
            navigate("/admin/delete");
          }}
        />
      </div>
    </div>
  );
};

export default ProductControl;
