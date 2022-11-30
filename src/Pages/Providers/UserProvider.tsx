import React, { createContext, useEffect, useState } from "react";
import { getCoockie } from "../../Util/Cookies/Coockie";
import { TOKEN_KEY } from "../../Constant";

const initialState = {
  isLoggedIn: false,
  user: "",
  isAdminLoggedIn: false,

  setIsAdminLoggedIn: useState,
  setUser: useState,
  setIsLoggedIn: useState,
};
export const UserContext = createContext(initialState);
export const UserProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  let user = getCoockie(TOKEN_KEY);

  useEffect(() => {
    let token = JSON.stringify(user.token);
    if (!token) {
      return setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  }, [user.token]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
      }}
      {...props}
    />
  );
};
