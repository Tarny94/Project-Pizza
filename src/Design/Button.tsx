import React from "react";
import "../Styles/button.scss";

type iProp = {
  title: string;
  event: any;
  disabled: boolean;
  widths: number | undefined;
  highs: number | undefined;
  className: string;
};

const Button = ({
  className,
  title,
  event,
  disabled,
  widths,
  highs,
}: iProp) => {
  return (
    <button
      className={className}
      onClick={event}
      disabled={disabled}
      style={{
        width: widths,
        height: highs,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
