import "./NotFoundStyle.scss";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
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
