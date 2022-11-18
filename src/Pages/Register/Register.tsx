import React, { useState } from "react";
import "./registration.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../../Api/api";
import Snackbar from "../../Design/Snackbar";
import Button from "../../Design/Button";
import Input from "../../Design/Input";

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
    <div className="registration-container">
      <h1 className="registration-title">CREATE AN ACCOUNT</h1>

      <Input
        placeholder={"FULL NAME *"}
        title={"Name is require"}
        type={""}
        setValue={setFullName}
      />
      <Input
        placeholder="ADDRES *"
        title={"Address is require"}
        type={""}
        setValue={setAddress}
      ></Input>
      <Input
        placeholder="PHONE"
        title={"Phone is not require"}
        type={""}
        setValue={setPhone}
      ></Input>
      <Input
        placeholder="EMAIL *"
        title={"Email is require"}
        type={""}
        setValue={setEmail}
      ></Input>
      <Input
        placeholder="PASSWORD *"
        type="password"
        title={"Password is require"}
        setValue={setPassword}
      ></Input>
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
      <Button
        className={!terms ? "registre-button-disabled" : "button-field"}
        title={"SUBMIT"}
        event={() => {
          handleSubmit();
        }}
        disabled={!terms ? true : false}
        widths={undefined}
        highs={undefined}
      />
      <Snackbar open={open} setOpen={setOpen} fail={fail} />
    </div>
  );
};

export default Register;
