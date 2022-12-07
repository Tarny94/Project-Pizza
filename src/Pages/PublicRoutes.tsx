import React, { useContext } from "react";
import { UserContext } from "./Providers/UserProvider";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }: any) => {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoutes;
