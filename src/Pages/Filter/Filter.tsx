import React, { useState, useContext } from "react";
import "../Filter/filter.scss";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "../Authentication/Logout";
import { useNavigate } from "react-router-dom";
import { Context } from "../Provider";

const Filter = () => {
  const nav = ["Home", "menu", "About us", "Contact"];
  const { isLogin } = useContext(Context);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleIconMenu = () => {
    return nav.map((page) => {
      return <div className="pages">{page.toUpperCase()}</div>;
    });
  };
  return (
    <div className="container">
      <div className="filter-container">
        <h1 className="filter-title">PIZZA</h1>

        <IconButton
          className="icon-menu"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={() => {
            if (click) {
              return setClick(false);
            }
            setClick(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        {nav.map((item) => {
          return <div className="acces-filters">{item.toUpperCase()}</div>;
        })}
        <div className="acces-filters">
          {!isLogin ? (
            <div>
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                LOGIN
              </span>
            </div>
          ) : (
            <Logout />
          )}
        </div>
      </div>
      <div className="pages-container">{click ? handleIconMenu() : ""}</div>
    </div>
  );
};

export default Filter;
