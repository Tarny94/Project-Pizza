import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Register/Register";
import HomePage from ".//HomePage/HomePage";
import NotFound from "./NotFound/NotFound";
import Terms from "./Terms";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./PrivateRoutes";
import ProductControl from "./Admin/ProductsControl";
import AddProduct from "./Admin/AddProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import AdminLogin from "./Authentication/AdminLogin";


const Navigation = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <ProductControl />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/admin/add"
          element={
            <ProtectedRoutes>
              <AddProduct />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/admin/update"
          element={
            <ProtectedRoutes>
              <UpdateProduct />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Navigation;
