import React, { useContext } from "react";
import { UserContext } from "./Providers/UserProvider";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }: any) => {
  const { isAdmin } = useContext(UserContext);

  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoutes;
