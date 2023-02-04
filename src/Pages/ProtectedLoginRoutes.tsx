import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./Providers/UserProvider";

const ProtectedLoginRoutes = ({ children }: any) => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedLoginRoutes;
