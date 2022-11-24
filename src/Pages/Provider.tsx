import React, { createContext, useEffect, useState } from "react";
import { getCoockie } from "../Util/Cookies/Coockie";
import { TOKEN_KEY } from "../Constant";

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
  product: {},
  allProducts: [],

  setAllProducts: useState,
  setUser: useState,
  setIsLoggedIn: useState,
  setImage: useState,
  setTitle: useState,
  setDescription: useState,
  setPrice: useState,
  setDiscount: useState,
  setCategory: () => {},
  setQuery: () => {},
  setLoading: () => {},
};

export const Context = createContext(initialState);
export const Provider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  const product = {
    image,
    title,
    description,
    price,
    discount,
  };

  let user = getCoockie(TOKEN_KEY);
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
        allProducts,
        setAllProducts,
      }}
      {...props}
    />
  );
};
