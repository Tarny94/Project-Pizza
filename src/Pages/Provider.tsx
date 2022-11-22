import React, { createContext, useEffect, useState } from "react";
import { getCoockie } from "../Util/Cookies/Coockie";

const initialState = {
  category: "",
  query: "",
  loading: true,
  isLoggedIn: false,
  user: "",

  setUser: useState,
  setIsLoggedIn: useState,
  setCategory: () => {},
  setQuery: () => {},
  setLoading: () => {},
};

export const Context = createContext(initialState);

export const Provider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let user = getCoockie();

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
      }}
      {...props}
    />
  );
};
