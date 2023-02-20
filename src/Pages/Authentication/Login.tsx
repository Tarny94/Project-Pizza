import "./LoginStyle.scss";
import React, { useState, useContext } from "react";
import axios from "axios";
import { getApiUrl } from "../../Api/api";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Design/Button";
import Input from "../../Design/Input";
import { setCoockie } from "../../Util/Cookies/Coockie";
import { UserContext } from "../Providers/UserProvider";
import { TOKEN_KEY } from "../../Constant";
import Snackbar from "../../Design/Snackbar";
import { HTTP } from "../../Api/Http";

const Login = () => {
  const { setIsLoggedIn, setOpen, open } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();
  const loginUser = {
    email,
    password,
  };

  const handleSuccesLogin = async (res: any) => {
    await setCoockie(TOKEN_KEY, {
      _id: res.data.user._id,
      token: res.data.user.token,
    });
    HTTP.setToken(res.data.user.token);
    setIsLoggedIn(true);
    navigate("/");
  };

  const authentificate = async () => {
    setResponse("");
    await axios
      .post(getApiUrl("login"), loginUser)
      .then((res) => {
        handleSuccesLogin(res);
      })
      .catch((e) => {
        setResponse(e.response.data.error);
      });
  };

  return (
    <div className="login-app-container">
      <div className="login-container">
        <h1 className="login-title">Sign in</h1>
        <Input
          placeholder={"EMAIL"}
          title={"Email is required"}
          type={"text"}
          setValue={setEmail}
        />
        <Input
          placeholder={"PASSWORD"}
          title={"Password is required"}
          type={"password"}
          setValue={setPassword}
        />

        <div>
          <div className="error-message"></div>
        </div>
        <div className="response-field">{response ? response : ""}</div>
        <div className="password-word">
          <p>I forgot the password</p>
        </div>
        <div>
          <Button
            className="button-field"
            title={"Authenticate"}
            onClick={() => {
              authentificate();
            }}
            disabled={false}
            width={undefined}
            height={undefined}
          />
        </div>
        <div className="account-create-field">
          <Link to={"/register"} className="account-create-field">
            Create a new account
          </Link>
        </div>
      </div>
      <Snackbar
        open={open}
        setOpen={setOpen}
        duration={3000}
        severity={"success"}
        title={"Successfull registration!"}
      />
    </div>
  );
};

export default Login;
