import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Providers/UserProvider";

const ProtectedAdminRoutes = ({ children }: any) => {
  const { isAdminLoggedIn } = useContext(UserContext);

  return isAdminLoggedIn ? children : <Navigate to="/admin/login" />;
};

export default ProtectedAdminRoutes;
