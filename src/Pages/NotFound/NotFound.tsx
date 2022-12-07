import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-container">
      <h1>Not Found 404</h1>
      <Link to={"/"} style={{ cursor: "pointer" }}>
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
