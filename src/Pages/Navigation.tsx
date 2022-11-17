import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import HomePage from ".//HomePage/HomePage";
import NotFound from "./NotFound";
import Terms from "./Terms";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
