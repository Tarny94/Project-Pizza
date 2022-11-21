import React, { useContext } from "react";
import Cookies from "universal-cookie";
import { Context } from "../Provider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsLogin } = useContext(Context);
  const cookies = new Cookies();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        cookies.set("token", { token: undefined });
        setIsLogin(false);
        navigate("/login");
      }}
    >
      LOGOUT
    </div>
  );
};

export default Logout;
