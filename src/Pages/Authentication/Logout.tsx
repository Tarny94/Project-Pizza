import React, { useContext } from "react";
import { Context } from "../Provider";
import { useNavigate } from "react-router-dom";
import "../Header/Header.scss";
import { setTokenCoockie } from "../../Util/Cookies/Coockie";

type iProp = {
  className?: string;
};

const Logout = ({ className }: iProp) => {
  const { setIsLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    setTokenCoockie({ token: undefined });
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
