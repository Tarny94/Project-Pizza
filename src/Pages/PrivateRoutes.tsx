import React, { useContext } from "react";
import { Context } from "./Provider";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: any) => {
  const { isAdminLoggedIn } = useContext(Context);

  return !isAdminLoggedIn ? <Navigate to="/admin/login" /> : children;
};

export default ProtectedRoutes;
