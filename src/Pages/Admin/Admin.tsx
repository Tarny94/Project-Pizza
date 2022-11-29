import React from "react";
import Button from "../../Design/Button";
import { useNavigate } from "react-router-dom";
import "../Admin/Styles/Admin.scss";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-container">
      <div className="admin-components">
        <h1 className="admin-title">ADMIN PANEL</h1>
        <Button
          className="button-field"
          title={"GO TO PRODUCTS"}
          onClick={() => {
            navigate("/admin/products");
          }}
        ></Button>
        <Button
          className="button-field"
          title={"ADD PRODUCT"}
          onClick={() => {
            navigate("/admin/add");
          }}
        />
        <Button
          className="button-field"
          title={"SETTINGS"}
          onClick={undefined}
        ></Button>
        <Button
          className="button-field"
          title={"LOGOUT"}
          onClick={undefined}
        ></Button>
      </div>
    </div>
  );
};

export default Admin;
