import React, { useState } from "react";
import axios from "axios";
import { getApiUrl } from "../Api/api";
import "../Styles/login.scss";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "../Design/Snackbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [open, setOpen] = useState(false);
  const [fail, setFail] = useState(false);

  const navigate = useNavigate();
  const loginUser = {
    email,
    password,
  };

  const authentificate = async () => {
    setResponse("");
    axios
      .post(getApiUrl("login"), loginUser)
      .then((res) => {
        setFail(false);
        setResponse("");
        setOpen(true);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((e) => {
        setFail(true);
        setOpen(true);
        setResponse(e.response.data.error);
      });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Sign in</h1>
      <input
        onChange={(event: any) => {
          setEmail(event.target.value);
        }}
        className="input-login input-auth "
        placeholder="EMAIL"
        type="text"
      ></input>
      <input
        className="input-login"
        onChange={(event: any) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="PASSWORD"
      ></input>

      <div>
        <div className="error-message"></div>
      </div>

      <div className="response-field">{response ? response : ""}</div>
      <div className="password-word">
        <p>I forgot the password</p>
      </div>
      <div>
        <button onClick={authentificate} className="authenticate-button">
          Authenticate
        </button>
        <Snackbar open={open} setOpen={setOpen} fail={fail} />
      </div>
      <div className="account-create-field">
        <Link to={"/register"} className="account-create-field">
          Create a new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
