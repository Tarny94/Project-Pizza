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
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import ProtectedLoginRoutes from "./ProtectedLoginRoutes";
import Products from "./Admin/Products/Products";
import AddProduct from "./Admin/Products/AddProduct";
import UpdateProduct from "./Admin/Products/UpdateProduct";
import AdminLogin from "./Authentication/AdminLogin";
import Admin from "../Pages/Admin/Admin";
import CartPage from "./Cart/CartPage";
import OrderSection from "./OrderSection/OrderSection";
import { ProductProvider } from "./Providers/ProductProvider";
import { UserProvider } from "./Providers/UserProvider";
import { CartProvider } from "./Providers/CartProvider";
import AdminSetting from "../Pages/Admin/AdminSettings";
import AdminRoutes from "./AdminRoutes";
import OutsideAlerter from "../Design/ClickAway";

const Navigation = () => {
  return (
    <>
      <UserProvider>
        <CartProvider>
          {" "}
          <OutsideAlerter>
            <Header />
          </OutsideAlerter>
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
              <Route
                path="/admin/login"
                element={
                  <AdminRoutes>
                    <AdminLogin />
                  </AdminRoutes>
                }
              />

              <Route
                path="/admin"
                element={
                  <ProtectedAdminRoutes>
                    <Admin />
                  </ProtectedAdminRoutes>
                }
              />
              <Route
                path="/admin/settings"
                element={
                  <ProtectedAdminRoutes>
                    <AdminSetting />
                  </ProtectedAdminRoutes>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedAdminRoutes>
                    <Products />
                  </ProtectedAdminRoutes>
                }
              />
              <Route
                path="/add/product"
                element={
                  <ProtectedAdminRoutes>
                    <AddProduct />
                  </ProtectedAdminRoutes>
                }
              />
              <Route
                path="/update/product"
                element={
                  <ProtectedAdminRoutes>
                    <UpdateProduct />
                  </ProtectedAdminRoutes>
                }
              />
              <Route path="/cart/page" element={<CartPage />} />
              <Route path={"cart/page/ordered"} element={<OrderSection />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
};

export default Navigation;
