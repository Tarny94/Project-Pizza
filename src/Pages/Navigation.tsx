import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registre from "./Registre";
import HomePage from "./HomePage";
import Filter from "./Filter";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registre />} />
      <Route path="*" element={"Not Found"} />
    </Routes>
  );
};

export default Navigation;
