import React, { createContext, useEffect, useState } from "react";
import { getCoockie } from "../Util/Cookies/Coockie";
import { TOKEN_KEY } from "../Constant";
import { useNavigate } from "react-router-dom";

const initialState = {
  category: "",
  query: "",
  loading: true,
  isLoggedIn: false,
  user: "",
  image: "",
  title: "",
  description: "",
  price: 0,
  discount: 0,
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
  allProducts: [],
  openEditor: false,
  pizza_id: 0,
  isAdminLoggedIn: false,

  navigate: useNavigate,
  setIsAdminLoggedIn: useState,
  setPizza_id: useState,
  setOpenEditor: useState,
  setAllProducts: useState,
  setUser: useState,
  setIsLoggedIn: useState,
  setImage: useState,
  setTitle: useState,
  setDescription: useState,
  setPrice: useState,
  setDiscount: useState,
  setProduct: useState,
  setAddProduct: useState,
  setCategory: () => {},
  setQuery: () => {},
  setLoading: () => {},
};
export const Context = createContext(initialState);
export const Provider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [pizza_id, setPizza_id] = useState("");
  const [image, setImage]: any = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [openEditor, setOpenEditor] = useState(false);

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

  let user = getCoockie(TOKEN_KEY);

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

  useEffect(() => {
    let token = JSON.stringify(user.token);
    if (!token) {
      return setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  }, [user.token]);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
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
        openEditor,
        setOpenEditor,
        pizza_id,
        setPizza_id,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        addProduct,
        setAddProduct,
      }}
      {...props}
    />
  );
};
