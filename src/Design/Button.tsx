import React from "react";
import "../Styles/button.scss";

type iProp = {
  title: string;
  event: any;
  terms: boolean;
  width: number | undefined;
  high: number | undefined;
};

const Button = ({ title, event, terms, width, high }: iProp) => {
  return (
    <button
      className={!terms ? "registre-button-disabled" : "button-field"}
      onClick={terms ? event : undefined}
      disabled={!terms ? true : false}
      style={{ width: width, height: high }}
    >
      {title}
    </button>
  );
};

export default Button;
