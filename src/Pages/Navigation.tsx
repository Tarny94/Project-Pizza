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
import Products from "./Admin/Products/Products";
import AddProduct from "./Admin/Products/AddProduct";
import UpdateProduct from "./Admin/Products/UpdateProduct";
import AdminLogin from "./Authentication/AdminLogin";
import Admin from "./Admin/Admin";
import { ProductProvider } from "./Providers/ProductProvider";
import { UserProvider } from "./Providers/UserProvider";

const Navigation = () => {
  return (
    <>
      <UserProvider>
        {" "}
        <Header />
        <ProductProvider>
          {" "}
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
                  <Admin />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoutes>
                  <Products />
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
        </ProductProvider>
      </UserProvider>
    </>
  );
};

export default Navigation;
