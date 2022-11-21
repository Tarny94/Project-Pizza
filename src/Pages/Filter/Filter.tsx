import React, { useState, useContext } from "react";
import "../Filter/filter.scss";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "../Authentication/Logout";
import { useNavigate } from "react-router-dom";
import { Context } from "../Provider";

const Filter = () => {
  const pages = {
    home: "Home",
    menu: "menu",
    about: "About us",
    contact: "Contact",
    login: "login",
  };
  const { isLogin } = useContext(Context);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleIconMenu = () => {
    return (
      <div className="pages-container">
        <div
          className="page-home pages"
          onClick={() => {
            navigate("/");
          }}
        >
          {pages.home.toUpperCase()}
        </div>
        <div
          className="page-menu pages"
          onClick={() => {
            navigate("/menu");
          }}
        >
          {pages.menu.toUpperCase()}
        </div>
        <div
          className="page-about pages"
          onClick={() => {
            navigate("/about");
          }}
        >
          {pages.about.toUpperCase()}
        </div>
        <div
          className="page-contact pages"
          onClick={() => {
            navigate("/contact");
          }}
        >
          {pages.contact.toUpperCase()}
        </div>
        {!isLogin ? (
          <div className="page-home pages">
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              {pages.login.toUpperCase()}
            </span>
          </div>
        ) : (
          <Logout className="page-contact pages" />
        )}
      </div>
    );
  };
  return (
    <div className="container">
      <div className="filter-container">
        <h1
          className="filter-title"
          onClick={() => {
            navigate("/");
          }}
        >
          PIZZA
        </h1>

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
        <div
          className="acces-filters"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="page-home pages">{pages.home.toUpperCase()}</div>
        </div>
        <div
          className="acces-filters"
          onClick={() => {
            navigate("/menu");
          }}
        >
          <div className="page-menu pages">{pages.menu.toUpperCase()}</div>
        </div>
        <div
          className="acces-filters"
          onClick={() => {
            navigate("/about");
          }}
        >
          <div className="page-about pages">{pages.about.toUpperCase()}</div>
        </div>
        <div
          className="acces-filters"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <div className="page-contact pages">
            {pages.contact.toUpperCase()}
          </div>
        </div>
        <div
          className="acces-filters"
          onClick={() => {
            navigate("/login");
          }}
        >
          {!isLogin ? (
            <div className="page-login pages">
              <span>{pages.login.toUpperCase()}</span>
            </div>
          ) : (
            <Logout className="page-contact pages" />
          )}
        </div>
        {/* <div className="acces-filters">
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
            <Logout className={"page-menu pages"} />
          )}
        </div> */}
      </div>
      {click ? handleIconMenu() : ""}
    </div>
  );
};

export default Filter;
