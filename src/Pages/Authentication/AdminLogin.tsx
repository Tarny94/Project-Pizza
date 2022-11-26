import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Design/Input";

const AdminLogin = () => {
  <div className="admin-login">
    <div className="admin-login-container">
      <h2 className="admin-title">ENTER THE ADMIN CODE</h2>
      <Input setValue={undefined} />
      <div className="admin-description">
        <p>You are not the admin?</p> <Link to={"/"}> Click Hire</Link>
      </div>
    </div>
  </div>;
};
