import React, { useState } from "react";
import "../Styles/registration.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registreURL } from "../Api/api";

const Registre = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddres] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [response, setResponse] = useState("");

  const navigate = useNavigate();

  const user = {
    fullName,
    phone,
    email,
    addres,
    password,
  };

  const handleResponse = (res: any) => {
    if (res === "OK") {
      return setResponse("");
    }
    if (res === "Error: ER_DUP_ENTRY") {
      return setResponse("Email is already used");
    }
    if (res === "Error: ER_DATA_TOO_LONG") {
      return setResponse("Data is too long");
    }
    if (res === "") {
      return setResponse("Something went wrong");
    }
    setResponse(res);
  };

  const handleSubmit = async () => {
    await axios
      .post(registreURL, {
        user,
      })
      .then((res) => {
        console.log(res);
        handleResponse(res.statusText);
        setResponse("Succefull Registre");
        navigate("/login");
      })
      .catch((error) => {
        handleResponse(error.response.data.error);
        console.log(error);
      });
  };

  return (
    <div className="page-container">
      <div className="registration-container">
        <h1 className="registration-title">CREATE AN ACCOUNT</h1>

        <input
          className="input-registration top-input"
          placeholder="FULL NAME"
          onChange={(e: any) => {
            setFullName(e.target.value);
          }}
        ></input>
        <input
          placeholder="ADDRES"
          className="input-registration"
          onChange={(e: any) => {
            setAddres(e.target.value);
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
          placeholder="EMAIL"
          className="input-registration"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          placeholder="PASSWORD"
          className="input-registration"
          type={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        ></input>
        {/* <input
          placeholder="REPEAT PASSWORD"
          className="input-registration"
        ></input> */}
        <div className="response-field">{response ? response : ""}</div>
        <div className="term-cont-field">
          <input type="radio"></input>
          <p className="term-cont">
            I read and I am agree with terms and condition
          </p>
        </div>
        <button className="registre-button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Registre;
