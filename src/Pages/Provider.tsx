import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

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

  const cookies = new Cookies();
  let user = cookies.get("token");
  useEffect(() => {
    let token = JSON.stringify(user.token);

    if (!token) {
      return setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  }, [user.token]);
  console.log(isLoggedIn);
  
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
