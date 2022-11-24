import React, { useContext } from "react";
import { Context } from "../Provider";

const DeleteProduct = () => {
  const { allProducts, setAllProducts } = useContext(Context);

  return (
    <div className="admin-delete">
      <div className="admin-delete-container"></div>
    </div>
  );
};

export default DeleteProduct;
