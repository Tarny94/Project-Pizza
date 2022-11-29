import React from "react";
import { Navigate } from "react-router-dom";
import { getCoockie } from "../Util/Cookies/Coockie";
import { ADMIN_KEY } from "../Constant";

const ProtectedRoutes = ({ children }: any) => {
  const login = getCoockie(ADMIN_KEY);
  return login?.loggedIn ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoutes;
  