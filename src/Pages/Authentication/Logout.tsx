import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import "../Header/Header.scss";
import {
  setCoockie,
  setCoockieWithExpireTime,
} from "../../Util/Cookies/Coockie";
import { TOKEN_KEY, ADMIN_KEY } from "../../Constant";

type iProp = {
  className?: string;
};

const Logout = ({ className }: iProp) => {
  const { setIsLoggedIn, setIsAdminLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setCoockie(TOKEN_KEY, { token: undefined });
    setCoockieWithExpireTime(ADMIN_KEY, { token: undefined }, 0);
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className={className} onClick={handleLogout}>
      LOGOUT
    </div>
  );
};

export default Logout;
