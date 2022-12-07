import "./adminloginstyle.scss";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Design/Button";
import Input from "../../Design/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { setCoockieWithExpireTime } from "../../Util/Cookies/Coockie";
import { ADMIN_KEY } from "../../Constant";
import { UserContext } from "../Providers/UserProvider";

const AdminLogin = () => {
  const { setIsAdminLoggedIn, userId } = useContext(UserContext);
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    await axios
      .post(getApiUrl(`admin/login`), { code, id: userId })
      .then((res) => {
        setIsAdminLoggedIn(true);
        setCoockieWithExpireTime(ADMIN_KEY, { loggedIn: true }, 3600);
        navigate("/admin");
      })
      .catch((e) => {
        alert("Invalid credential");
      });
  };
  return (
    <div className="admin-login">
      <div className="admin-login-container">
        <h2 className="admin-title">ENTER ADMIN CODE</h2>
        <Input setValue={setCode} type="password" />
        <Button
          className="button-field"
          title={"SUBMIT"}
          onClick={() => {
            handleAdminLogin();
          }}
        />
        <div className="admin-description">
          <Link to={"/"}> Go to home</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
