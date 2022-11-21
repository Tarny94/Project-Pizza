import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Register/Register";
import HomePage from ".//HomePage/HomePage";
import NotFound from "./NotFound/NotFound";
import Terms from "./Terms";
import Filter from "./Filter/Filter";
import Menu from "./Menu/Menu";
import AboutUs from "./AboutUs/AboutUs";
import { Provider } from "./Provider";
import Contact from "./Contact/Contact";

const Navigation = () => {
  return (
    <Provider>
      <Filter />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default Navigation;
