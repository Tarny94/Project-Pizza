import React, { useState } from "react";
import axios from "axios";

import "../Styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  const loginUser = {
    email,
    password,
  };

  const authentificate = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        user: loginUser,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(loginUser);

  return (
    <div className="login-container">
      <div className="input-container">
        <h1 className="login-title">Sign in</h1>
        <div className="input-field">
          <input
            onChange={(event: any) => {
              setEmail(event.target.value);
            }}
            className="input-login input-auth "
            placeholder="EMAIL"
            type="text"
          ></input>
        </div>
        <div className="input-field">
          <input
            className="input-login"
            onChange={(event: any) => {
              setPassword(event.target.value);
            }}
            placeholder="PASSWORD"
          ></input>
        </div>
        <div>
          <div className="error-message"></div>
        </div>
        <div className="password-word">
          <p>I forgot the password</p>
        </div>
        <div>
          <button onClick={authentificate} className="authenticate-button">
            Authenticate
          </button>
        </div>
        <div className="account-create-field">
          <p>Do not have an account yet?</p>
          <p>Create a new one</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
