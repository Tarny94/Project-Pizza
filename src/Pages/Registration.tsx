import React, { useState } from "react";
import "../Styles/registration.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const user = {
    firstName,
    lastName,
    phone,
    email,
    password,
  };

  const Validation = (user: any) => {
    if (!user) {
      throw Error("Complet the require fields");
    }
    if (!user.firstName) {
      throw Error("First Name field is required");
    }
    if (!user.lastName) {
      throw Error("Last Name field is required");
    }
    if (!user.email) {
      throw Error("Email field is required");
    }
    if (!user.password) {
      throw Error("Password field is required");
    }
  };

  const registreURL = "http://localhost:6060/registre";

  const handleSubmit = async () => {
    try {
      Validation(user);
      const res = await axios.post(registreURL, {
        user,
      });
      navigate("/login");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page-container">
      <div className="registration-container">
        <h1 className="registration-title">REGISTRATION</h1>
        <h4>CREATE AN ACCOUNT</h4>

        <input
          className="input-registration top-input"
          placeholder="FIRST NAME"
          onChange={(e: any) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          placeholder="LAST NAME"
          className="input-registration"
          onChange={(e: any) => {
            setLastName(e.target.value);
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

export default Registration;
