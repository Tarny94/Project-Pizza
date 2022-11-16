import React, { useState } from "react";
import "../Styles/registration.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../Api/api";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState("");
  const [terms, setTerms] = useState(false);
  const [open, setOpen] = useState(false);
  const [fail, setFail] = useState(false);

  const navigate = useNavigate();

  const user = {
    fullName,
    phone,
    email,
    address,
    password,
  };

  const handleSubmit = async () => {
    setResponse("");
    await axios
      .post(getApiUrl("register"), user)
      .then((res) => {
        setFail(false);
        setResponse("");
        setOpen(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        setFail(true);
        setOpen(true);
        setResponse(error.response.data.error);
        console.log(error);
      });
  };

  return (
    <div className="page-container">
      <div className="registration-container">
        <h1 className="registration-title">CREATE AN ACCOUNT</h1>

        <input
          className="input-registration top-input"
          placeholder="FULL NAME *"
          onChange={(e: any) => {
            setFullName(e.target.value);
          }}
        ></input>
        <input
          placeholder="ADDRES *"
          className="input-registration"
          onChange={(e: any) => {
            setAddress(e.target.value);
          }}
        ></input>
        <input
          placeholder="PHONE"
          className="input-registration"
          onChange={(e: any) => {
            setPhone(e.target.value);
          }}
        ></input>
        <input
          placeholder="EMAIL *"
          className="input-registration"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="PASSWORD *"
          className="input-registration"
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        ></input>
        <div className="response-field">{response ? response : ""}</div>
        <div className="term-cont-field">
          <p
            className="term-cont"
            onClick={() => {
              if (!terms) setTerms(true);
              else setTerms(false);
            }}
          >
            {" "}
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              checked={terms}
            ></input>
            <label htmlFor="terms"></label>I am agree with terms and condition
          </p>
        </div>
        {terms ? (
          <button className="registre-button" onClick={handleSubmit}>
            SUBMIT
          </button>
        ) : (
          <button
            className="registre-button-disabled"
            disabled
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        )}
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={(event?: React.SyntheticEvent | Event, reason?: string) => {
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
    </div>
  );
};

export default Register;
