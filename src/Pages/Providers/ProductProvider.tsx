import React, { createContext, useEffect, useState } from "react";

import { getAllProductsApi } from "../../Api/ApiRoutes";
import { HTTP } from "../../Api/Http";

const initialState = {
  image: "",
  title: "",
  description: "",
  price: 0,
  discount: 0,
  pizza_id: 0,
  allProducts: [],
  open: false,
  securityDelete: false,
  product: {
    image: "",
    title: "",
    description: "",
    price: 0,
    discount: 0,
    pizza_id: 0,
  },
  addProduct: {
    image: "",
    title: "",
    description: "",
    price: 0,
    discount: 0,
  },

  setPizza_id: useState,
  setAllProducts: useState,
  setImage: useState,
  setTitle: useState,
  setDescription: useState,
  setPrice: useState,
  setDiscount: useState,
  setProduct: useState,
  setAddProduct: useState,
  setOpen: useState,
  setSecurityDelete: useState,
};

export const ProductContext = createContext(initialState);
export const ProductProvider = (props: any) => {
  const [pizza_id, setPizza_id] = useState(0);
  const [image, setImage]: any = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [securityDelete, setSecurityDelete] = useState(false);
  const [addProduct, setAddProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: 0,
    discount: 0,
  });
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: 0,
    discount: 0,
    pizza_id: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setImage(product.image);
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
      setDiscount(product.discount);
    };

    fetchData();
  }, [
    product.description,
    product.discount,
    product.image,
    product.price,
    product.title,
  ]);

  useEffect(() => {
    const addData = async () => {
      setAddProduct({
        image,
        title,
        description,
        price,
        discount,
      });
    };
    addData();
  }, [description, discount, image, price, title]);

  useEffect(() => {
    const deleteData = async () => {
      if (!open) {
        securityDelete && (await HTTP.remove("delete/product", pizza_id));
        setAllProducts(await getAllProductsApi());
        setSecurityDelete(false);
      }
    };
    deleteData();
  }, [open, pizza_id, securityDelete, setAllProducts, setSecurityDelete]);

  return (
    <ProductContext.Provider
      value={{
        image,
        setImage,
        title,
        setTitle,
        description,
        setDescription,
        price,
        setPrice,
        discount,
        setDiscount,
        product,
        setProduct,
        allProducts,
        setAllProducts,
        pizza_id,
        setPizza_id,
        addProduct,
        setAddProduct,
        open,
        setOpen,
        setSecurityDelete,
        securityDelete,
      }}
      {...props}
    />
  );
};
