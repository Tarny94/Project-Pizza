import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Products.scss";
import { setCoockie } from "../../../Util/Cookies/Coockie";
import { ADMIN_KEY } from "../../../Constant";
import { Context } from "../../Provider";
import TableProducts from "./TableProducts";
import axios from "axios";
import { getApiUrl } from "../../../Api/api";
import BackButton from "../../../Design/BackButton";

const ProductControl = () => {
  const {
    setIsAdminLoggedIn,
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

  const handleDelete = (id: number) => {
    axios
      .delete(getApiUrl(`admin/delete${id}`))
      .then((res) => {
        alert("Succes");
      })
      .catch((err) => {
        alert("Fail");
      });
    // window.location.reload();
  };

  const handleEdit = async (id: number) => {
    await axios
      .get(getApiUrl(`admin/get${id}`))
      .then((res) => {
        const product = res.data;
        setImage(product[0].image);
        setTitle(product[0].title);
        setDescription(product[0].description);
        setPrice(product[0].price);
        setDiscount(product[0].discount);
        console.log(product[0]);
      })
      .catch((e) => {
        console.log(e);
      });
    setPizza_id(id);
    navigate("/admin/update");
  };
  useEffect(() => {}, [
    pizza_id,
    setDescription,
    setDiscount,
    setImage,
    setPrice,
    setTitle,
  ]);

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
        HandleEdit={handleEdit}
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
