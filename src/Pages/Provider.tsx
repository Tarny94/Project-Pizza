import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const initialState = {
  category: "",
  query: "",
  loading: true,
  isLogin: false,
  user: "",

  setUser: useState,
  setIsLogin: useState,
  setCategory: () => {},
  setQuery: () => {},
  setLoading: () => {},
};

export const Context = createContext(initialState);

export const Provider = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const testmodification = "";
  const cookies = new Cookies();
  let user = cookies.get("token");
  useEffect(() => {
    let token = JSON.stringify(user.token);

    if (!token) {
      return setIsLogin(false);
    }
    setIsLogin(true);
  }, [user.token]);

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
      {...props}
    />
  );
};
