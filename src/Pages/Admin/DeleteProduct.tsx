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
};

const DeleteProduct = () => {
  const { allProducts, setAllProducts } = useContext(Context);

  useEffect(() => {
    axios
      .get(getApiUrl("admin/get"))
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((e) => {
        console.log("Err:", e);
      });
  }, [setAllProducts]);

  console.log(allProducts[8]);

  return (
    <div className="admin-delete">
      <div className="admin-delete-container">
        <h1 className="admin-delete-title">DELETE PRODUCT</h1>
        {allProducts.map((product: iProp) => {
          return (
            <ol className="admin-delete-product">
              <button className="date-delete" onClick={() => {}}>
                DELETE
              </button>
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
