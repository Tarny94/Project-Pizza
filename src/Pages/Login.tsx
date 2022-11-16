import React, { useState } from "react";
import axios from "axios";
import { getApiUrl } from "../Api/api";
import "../Styles/login.scss";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
            type="password"
            placeholder="PASSWORD"
          ></input>
        </div>
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
          <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={(
              event?: React.SyntheticEvent | Event,
              reason?: string
            ) => {
              if (reason === "clickaway") {
                return;
              }
              setOpen(false);
            }}
          >
            <Alert
              onClose={(
                event?: React.SyntheticEvent | Event,
                reason?: string
              ) => {
                if (reason === "clickaway") {
                  return;
                }
                setOpen(false);
              }}
              severity={fail ? "warning" : "success"}
              sx={{ width: "100%" }}
            >
              {fail ? "Warning 😧" : "Succesfull Register 😀"}
            </Alert>
          </Snackbar>
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
