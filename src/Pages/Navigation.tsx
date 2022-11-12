import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import HomePage from "./HomePage";
import Filtre from "./Filtre";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={"Error"} />
    </Routes>
  );
};

export default Navigation;
