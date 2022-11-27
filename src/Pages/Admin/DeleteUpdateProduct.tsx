import React, { useContext, useEffect } from "react";
import { Context } from "../Provider";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { Link, useNavigate } from "react-router-dom";
import "../Admin/Products.scss";

type iProp = {
  pizza_id: number;
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
};

const DeleteUpdateProduct = () => {
  const {
    allProducts,
    setAllProducts,
    setImage,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
    setPizza_id,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    axios
      .delete(getApiUrl(`admin/delete${id}`))
      .then((res) => {
        alert("Succes");
      })
      .catch((err) => {
        alert("Fail");
      });
    window.location.reload();
  };

  return (
    <div className="admin-delete">
      <div className="admin-delete-container">
        <h1 className="admin-delete-title">DELETE & EDIT PRODUCT</h1>
        <Link to={"/admin"}>Back</Link>
        {allProducts.map((product: iProp, id: number) => {
          return (
            <ol className="admin-delete-product" key={id}>
              <button
                className="date_delete edit-button"
                onClick={() => {
                  setPizza_id(product.pizza_id);
                  setImage(product.image);
                  setTitle(product.title);
                  setDescription(product.description);
                  setPrice(product.price);
                  setDiscount(product.discount);
                  navigate("/admin/update");
                }}
              >
                EDIT
              </button>

              <button
                className="date-delete"
                onClick={() => {
                  handleDelete(product.pizza_id);
                }}
              >
                DELETE
              </button>
              <span className="date-delete">Crt. {id + 1}:</span>
              <span className="date-delete">TITLE: {product.title},</span>
              <span className="date-delete">IMAGE: {product.image},</span>

              <span className="date-delete">
                DESCRIPTION: {product.description},
              </span>
              <span className="date-delete">PRICE: ${product.price},</span>
              <span className="date-delete">
                DISCOUNT: {product.discount}%,
              </span>
              <span className="date-delete">CODE: {product.pizza_id}</span>
            </ol>
          );
        })}
      </div>
    </div>
  );
};

export default DeleteUpdateProduct;
