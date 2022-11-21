import React from "react";

import "../Styles/button.scss";

type iProp = {
  title: string;
  onClick: any;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

const Button = ({
  className,
  title,
  onClick,
  disabled,
  width,
  height,
}: iProp) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width,
        height: height,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
