import React, { useContext } from "react";
import { Context } from "../Provider";
import { useNavigate } from "react-router-dom";
import "../Header/Header.scss";
import { setCoockie } from "../../Util/Cookies/Coockie";
import { tokenKey } from "../../Constant";

type iProp = {
  className?: string;
};

const Logout = ({ className }: iProp) => {
  const { setIsLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCoockie(tokenKey, { token: undefined });
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className={className} onClick={handleLogout}>
      LOGOUT
    </div>
  );
};

export default Logout;
