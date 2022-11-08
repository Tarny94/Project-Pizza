import React from "react";
import "../Styles/registration.scss";

const Registration = () => {
  return (
    <div className="page-container">
      <div className="registration-container">
        <h1 className="registration-title">REGISTRATION</h1>
        <h4>CREATE AN ACCOUNT</h4>

        <input
          className="input-registration top-input"
          placeholder="FIRST NAME"
        ></input>
        <input placeholder="LAST NAME" className="input-registration"></input>
        <input placeholder="EMAIL" className="input-registration"></input>
        <input placeholder="PASSWORD" className="input-registration"></input>
        <input
          placeholder="REPEAT PASSWORD"
          className="input-registration"
        ></input>
        <div className="term-cont-field">
          <input type="radio"></input>
          <p className="term-cont">
            I read and I am agree with terms and condition
          </p>
        </div>
        <button className="registre-button">SUBMIT</button>
      </div>
    </div>
  );
};

export default Registration;
