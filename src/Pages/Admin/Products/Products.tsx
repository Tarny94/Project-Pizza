import "../Styles/ProductsStyle.scss";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../Providers/ProductProvider";
import TableProducts from "./TableProducts";
import BackButton from "../../../Design/BackButton";
import { useNavigate } from "react-router-dom";
import { getAllProductsApi } from "../../../Api/ApiRoutes";
import { getProductApi } from "../../../Api/ApiRoutes";
import BasicModal from "../../../Design/Modal";

const ProductControl = () => {
  const {
    allProducts,
    setAllProducts,
    setProduct,
    setPizza_id,
    open,
    setOpen,
    setSecurityDelete,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setAllProducts(await getAllProductsApi());
    };

    fetchData();
  }, [setAllProducts]);

  const handleDelete = async (id: number) => {
    setPizza_id(id);
    setOpen(true);
  };

  const handleEdit = async (id: number) => {
    setProduct(await getProductApi(id));
    setPizza_id(id);
    navigate("/update/product");
  };

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
      />
      <BackButton
        onClick={() => {
          navigate("/admin");
        }}
      />
      {open && (
        <BasicModal
          title={"Are you sure want to delete this item?"}
          className={"security-button"}
          question={
            <button
              className="security-button"
              onClick={() => {
                setSecurityDelete(true);
                setOpen(false);
              }}
            >
              YES
            </button>
          }
          openModal={open}
          setOpenModal={setOpen}
        />
      )}
    </div>
  );
};

export default ProductControl;
