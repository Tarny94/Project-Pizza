import React from "react";
import "../Styles/Button.scss";

const BackButton = ({ onClick }: any) => {
  return (
    <div className="back-button" onClick={onClick}>
      ⬅
    </div>
  );
};

export default BackButton;
