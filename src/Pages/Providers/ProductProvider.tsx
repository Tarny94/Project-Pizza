import React, { createContext, useEffect, useState } from "react";

const initialState = {
  image: "",
  title: "",
  description: "",
  price: 0,
  discount: 0,
  pizza_id: 0,
  allProducts: [],
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
};

export const ProductContext = createContext(initialState);
export const ProductProvider = (props: any) => {
  const [pizza_id, setPizza_id] = useState("");
  const [image, setImage]: any = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
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
    const fetchData = async () => {
      setAddProduct({
        image,
        title,
        description,
        price,
        discount,
      });
    };

    fetchData();
  }, [description, discount, image, price, title]);

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
      }}
      {...props}
    />
  );
};
