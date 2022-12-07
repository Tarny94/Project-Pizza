import "../Styles/Button.scss";
import React from "react";


type iProp = {
  title: string;
  onClick: any;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
  onKeyDown?: any;
};

const Button = ({
  className,
  title,
  onClick,
  disabled,
  width,
  height,
  onKeyDown,
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
      onKeyDown={onKeyDown}
    >
      {title}
    </button>
  );
};

export default Button;
