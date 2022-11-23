import React, { useContext } from "react";
import { Context } from "./Provider";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }: any) => {
  const { isLoggedIn } = useContext(Context);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
