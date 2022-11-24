import React, { useContext, useEffect } from "react";
import { Context } from "../Provider";
import axios from "axios";
import { getApiUrl } from "../../Api/api";

type iProp = {
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
  pizza_id: number;
};

const DeleteProduct = () => {
  const { allProducts, setAllProducts } = useContext(Context);

  const getProduct = () => {
    axios
      .get(getApiUrl("admin/get"))
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((e) => {
        console.log("Err:", e);
      });
  };
  useEffect(() => {
    getProduct();
  }, [setAllProducts]);

  const handleDelete = (id: number) => {
    axios
      .post(getApiUrl("admin/delete"), { id })
      .then((res) => {
        if (res) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <div className="admin-delete">
      <div className="admin-delete-container">
        <h1 className="admin-delete-title">DELETE PRODUCT</h1>
        {allProducts.map((product: iProp, id: number) => {
          return (
            <ol className="admin-delete-product" key={id}>
              <button
                className="date-delete"
                onClick={() => {
                  handleDelete(product.pizza_id);
                }}
              >
                DELETE
              </button>
              <span className="date-delete"></span>
              <span className="date-delete">CODE: {product.pizza_id},</span>
              <span className="date-delete">TITLE: {product.title},</span>
              <span className="date-delete">
                DESCRIPTION: {product.description},
              </span>
              <span className="date-delete">PRICE: ${product.price},</span>
              <span className="date-delete">
                DISCOUNT: {product.discount}%,
              </span>
            </ol>
          );
        })}
      </div>
    </div>
  );
};

export default DeleteProduct;
function reload() {
  throw new Error("Function not implemented.");
}

