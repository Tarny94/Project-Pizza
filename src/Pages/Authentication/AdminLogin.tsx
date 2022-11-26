import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Design/Button";
import Input from "../../Design/Input";
import "../Authentication/AdminLogin.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getApiUrl } from "../../Api/api";

const AdminLogin = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    axios
      .get(getApiUrl(`admin/login${code}`))
      .then((res) => {
        navigate("/admin");
      })
      .catch((e) => {
        alert({ Error: e });
      });
  };
  return (
    <div className="admin-login">
      <div className="admin-login-container">
        <h2 className="admin-title">ENTER ADMIN CODE</h2>
        <Input setValue={setCode} type="number" />
        <Button
          className="button-field"
          title={"SUBMIT"}
          onClick={() => {
            handleAdminLogin();
          }}
        />
        <div className="admin-description">
          <p>You are not the admin? </p> <Link to={"/"}> Click Hire</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
