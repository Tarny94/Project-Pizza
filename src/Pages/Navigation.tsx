import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registre from "./Registre";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import Terms from "./Terms&cond";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registre" element={<Registre />} />
      <Route path="/registre/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;
