import React, { useContext, useEffect, useState } from "react";
import Button from "../../Design/Button";
import { useNavigate } from "react-router-dom";
import "../Admin/Products.scss";
import { setCoockie } from "../../Util/Cookies/Coockie";
import { ADMIN_KEY } from "../../Constant";
import { Context } from "../Provider";
import BasicTable from "../../Design/Table";
import axios from "axios";
import { getApiUrl } from "../../Api/api";

const ProductControl = () => {
  const { setIsAdminLoggedIn, isAdminLoggedIn, allProducts, setAllProducts } =
    useContext(Context);
  const navigate = useNavigate();
  console.log(isAdminLoggedIn);

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

  const columns = ["Crt", "Title", "Image", "Description", "Price", "Discount"];

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
      <button
        onClick={() => {
          setCoockie(ADMIN_KEY, undefined);
          setIsAdminLoggedIn(false);
        }}
        style={{ cursor: "pointer" }}
      >
        Log out
      </button>
      <BasicTable
        edit={"Edit"}
        columns={columns}
        row={allProducts}
        onClick={handleDelete}
      />
    </div>
  );
};

export default ProductControl;
