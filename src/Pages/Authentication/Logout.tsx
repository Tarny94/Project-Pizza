import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import "../Header/Header.scss";
import { setCoockie } from "../../Util/Cookies/Coockie";
import { TOKEN_KEY } from "../../Constant";

type iProp = {
  className?: string;
};

const Logout = ({ className }: iProp) => {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCoockie(TOKEN_KEY, { token: undefined });
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
