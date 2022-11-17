import React from "react";
import "../Styles/button.scss";

type iProp = {
  title: string;
  event: () => {};
  disable: boolean;
  width: number | undefined;
  high: number | undefined;
};

const Button = ({ title, event, disable, width, high }: iProp) => {
  return (
    <button
      className={!disable ? "registre-button-disabled" : "button-field"}
      onClick={disable ? event : undefined}
      disabled={disable}
      style={{ width: width, height: high }}
    >
      {title}
    </button>
  );
};

export default Button;
