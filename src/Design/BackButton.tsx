import "../Styles/Button.scss";
import React from "react";

const BackButton = ({ onClick }: any) => {
  return (
    <div className="back-button" onClick={onClick}>
      ⬅
    </div>
  );
};

export default BackButton;
