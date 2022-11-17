import React from "react";
import "../Styles/button.scss";

type iProp = {
  title: string;
  event: any;
  disabled: boolean;
  width: number | undefined;
  high: number | undefined;
};

const Button = ({ title, event, disabled, width, high }: iProp) => {
  return (
    <button
      className={disabled ? "registre-button-disabled" : "button-field"}
      onClick={event}
      disabled={disabled}
      style={{ width: width, height: high }}
    >
      {title}
    </button>
  );
};

export default Button;
