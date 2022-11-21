import React, { useContext } from "react";
import Cookies from "universal-cookie";
import { Context } from "../Provider";
import { useNavigate } from "react-router-dom";
import "../Filter/filter.scss";

type iProp = {
  className?: string;
};

const Logout = ({ className }: iProp) => {
  const { setIsLogin } = useContext(Context);
  const cookies = new Cookies();
  const navigate = useNavigate();

  return (
    <div
      className={className}
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
