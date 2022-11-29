import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Products.scss";
import { Context } from "../../Provider";
import TableProducts from "./TableProducts";
import axios from "axios";
import { getApiUrl } from "../../../Api/api";
import BackButton from "../../../Design/BackButton";

const ProductControl = () => {
  const {
    allProducts,
    setAllProducts,
    setPizza_id,
    pizza_id,
    setImage,
    setTitle,
    setDescription,
    setPrice,
    setDiscount,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await axios
      .delete(getApiUrl(`admin/delete${id}`))
      .then((res) => {
        alert("Succes");
      })
      .catch((err) => {
        alert("Fail");
      });
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
        <h1 className="product-control-title">PRODUCTS PANEL</h1>
      </div>

      <TableProducts
        edit={"Edit"}
        columns={columns}
        row={allProducts}
        HandleDelete={handleDelete}
        HandleEdit={() => {
          navigate("/admin/update");
        }}
        setPizza_id={setPizza_id}
        navigate={navigate}
      />
      <BackButton
        onClick={() => {
          navigate("/admin");
        }}
      />
    </div>
  );
};

export default ProductControl;
