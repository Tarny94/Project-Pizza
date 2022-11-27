import React, { createContext, useEffect, useState } from "react";
import { getCoockie } from "../Util/Cookies/Coockie";
import { TOKEN_KEY, ADMIN_KEY } from "../Constant";

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
  openEditor: false,
  pizza_id: "",
  isAdminLoggedIn: false,

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
  setCategory: () => {},
  setQuery: () => {},
  setLoading: () => {},
};

export const Context = createContext(initialState);
export const Provider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [pizza_id, setPizza_id] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [openEditor, setOpenEditor] = useState(false);

  const product = {
    image,
    title,
    description,
    price,
    discount,
  };

  let user = getCoockie(TOKEN_KEY);
  // let admin = getCoockie(ADMIN_KEY);

  useEffect(() => {
    let token = JSON.stringify(user.token);
    if (!token) {
      return setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  }, [user.token]);

  // useEffect(() => {
  //   try {
  //     if (admin.loggedIn) {
  //       setIsAdminLoggedIn(true);
  //     }
  //   } catch (e: any) {
  //     setIsAdminLoggedIn(false);
  //     alert("Coockie expired");
  //   }
  // }, [admin]);

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
        openEditor,
        setOpenEditor,
        pizza_id,
        setPizza_id,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
      }}
      {...props}
    />
  );
};
