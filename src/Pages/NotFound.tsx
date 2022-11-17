import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not Found</h1>
      <p
        onClick={() => {
          navigate(`/`);
        }}
        style={{ cursor: "pointer" }}
      >
        Go back
      </p>
    </div>
  );
};

export default NotFound;
