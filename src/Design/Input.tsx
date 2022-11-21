import React from "react";
import "../Styles/Input.scss";

type iProp = {
  placeholder?: string;
  title?: string;
  type?: string;
  setValue: any;
};

const Input = ({ placeholder, title, type, setValue }: iProp) => {
  return (
    <input
      className="input-field"
      placeholder={placeholder}
      title={title}
      type={type}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
};

export default Input;
