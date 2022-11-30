import React, { useContext, useEffect } from "react";
import "../Styles/Products.scss";
import { ProductContext } from "../../Providers/ProductProvider";
import TableProducts from "./TableProducts";
import BackButton from "../../../Design/BackButton";
import { useNavigate } from "react-router-dom";
import { deleteProductApi } from "../../../Api/ApiRoutes";
import { getAllProductsApi } from "../../../Api/ApiRoutes";
import { getProductApi } from "../../../Api/ApiRoutes";

const ProductControl = () => {
  const { allProducts, setAllProducts, setProduct, setPizza_id } =
    useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setAllProducts(await getAllProductsApi());
    };

    fetchData();
  }, [setAllProducts]);

  const handleDelete = async (id: number) => {
    await deleteProductApi(id);
    setAllProducts(await getAllProductsApi());
  };

  const handleEdit = async (id: number) => {
    setProduct(await getProductApi(id));
    setPizza_id(id);
    navigate("/admin/update");
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
    </div>
  );
};

export default ProductControl;
