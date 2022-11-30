import React, { useState, useContext } from "react";
import "../Header/Header.scss";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "../Authentication/Logout";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";

const Header = () => {
  const pages = {
    home: "Home",
    menu: "menu",
    about: "About us",
    contact: "Contact",
    login: "login",
  };
  const { isLoggedIn } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleIconMenu = () => {
    return (
      <div className="pages-container">
        <div
          className="page-home page"
          onClick={() => {
            navigate("/");
          }}
        >
          {pages.home.toUpperCase()}
        </div>
        <div
          className="page-menu page"
          onClick={() => {
            navigate("/menu");
          }}
        >
          {pages.menu.toUpperCase()}
        </div>
        <div
          className="page-about page"
          onClick={() => {
            navigate("/about");
          }}
        >
          {pages.about.toUpperCase()}
        </div>
        <div
          className="page-contact page"
          onClick={() => {
            navigate("/contact");
          }}
        >
          {pages.contact.toUpperCase()}
        </div>
        {!isLoggedIn ? (
          <div className="page-home page">
            <span
              onClick={() => {
                navigate("/login");
              }}
            >
              {pages.login.toUpperCase()}
            </span>
          </div>
        ) : (
          <Logout className="page-contact page" />
        )}
      </div>
    );
  };

  return (
    <div className="header-app-container">
      <div className="header-container">
        <h1
          className="header-title"
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
        <div className="acces-header">
          <div
            className="page-home page-header"
            onClick={() => {
              navigate("/");
            }}
          >
            {pages.home.toUpperCase()}
          </div>

          <div
            className="page-menu page-header"
            onClick={() => {
              navigate("/menu");
            }}
          >
            {pages.menu.toUpperCase()}
          </div>

          <div
            className="page-about page-header"
            onClick={() => {
              navigate("/about");
            }}
          >
            {pages.about.toUpperCase()}
          </div>

          <div
            className="page-contact page-header"
            onClick={() => {
              navigate("/contact");
            }}
          >
            {pages.contact.toUpperCase()}
          </div>

          {!isLoggedIn ? (
            <div
              className="page-login page-header"
              onClick={() => {
                navigate("/login");
              }}
            >
              <span>{pages.login.toUpperCase()}</span>
            </div>
          ) : (
            <Logout className="page-contact page-header" />
          )}
        </div>
      </div>
      {click ? handleIconMenu() : ""}
    </div>
  );
};

export default Header;
