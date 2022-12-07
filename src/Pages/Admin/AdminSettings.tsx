import React from "react";
import Input from "../../Design/Input";
import Button from "../../Design/Button";
import BackButton from "../../Design/BackButton";
import { useNavigate } from "react-router-dom";

const AdminSetting = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-setting-container">
      <h1 className="admin-settings-title">SETTINGS</h1>
      <div className="admin-reset-password">
        <h3>RESET PASSWORD</h3>
        <Input
          placeholder="TYPE EMAIL"
          title="Type Email"
          setValue={undefined}
        ></Input>
        <Input
          placeholder="TYPE NEW PASSWORD"
          title="Type New Password"
          setValue={undefined}
        ></Input>
        <Button
          className="button-field"
          title={"SUBMIT"}
          onClick={undefined}
        ></Button>
      </div>
      <BackButton
        onClick={() => {
          navigate("/admin");
        }}
      />
    </div>
  );
};

export default AdminSetting;
