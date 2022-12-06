import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Providers/UserProvider";

const ProtectedRoutes = ({ children }: any) => {
  const { isAdminLoggedIn } = useContext(UserContext);

  return isAdminLoggedIn ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoutes;
