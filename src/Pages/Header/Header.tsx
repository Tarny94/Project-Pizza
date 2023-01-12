import "./HeaderStyle.scss";
import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import UserProfile from "../Profile/UserProfile";

const Header = () => {
  const pages = {
    home: "Home",
    menu: "menu",
    about: "About us",
    contact: "Contact",
    login: "login",
  };
  const { isLoggedIn, click, setClick } = useContext(UserContext);
  const [openProfile, setOpenProfile] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      setOpenProfile(false);
    }
  }, [isLoggedIn]);

  const handleIconMenu = () => {
    return (
      <div className="pages-container">
        <div
          className="page-home page"
          onClick={() => {
            setClick(false);
            navigate("/");
          }}
        >
          {pages.home.toUpperCase()}
        </div>
        <div
          className="page-menu page"
          onClick={() => {
            setClick(false);
            navigate("/menu");
          }}
        >
          {pages.menu.toUpperCase()}
        </div>
        <div
          className="page-about page"
          onClick={() => {
            setClick(false);
            navigate("/about");
          }}
        >
          {pages.about.toUpperCase()}
        </div>
        <div
          className="page-contact page"
          onClick={() => {
            setClick(false);
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
          <div
            className="page-home page"
            onClick={() => {
              if (openProfile) {
                setOpenProfile(false);
              } else {
                setOpenProfile(true);
              }
            }}
          >
            PROFILE
          </div>
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
            navigate("/admin/login");
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
          <button
            className="page-home page-header"
            onClick={() => {
              navigate("/");
            }}
          >
            {pages.home.toUpperCase()}
          </button>

          <button
            className="page-menu page-header"
            onClick={() => {
              navigate("/menu");
            }}
          >
            {pages.menu.toUpperCase()}
          </button>

          <button
            className="page-about page-header"
            itemType="button"
            onClick={() => {
              navigate("/about");
            }}
          >
            {pages.about.toUpperCase()}
          </button>

          <button
            className="page-contact page-header"
            onClick={() => {
              navigate("/contact");
            }}
          >
            {pages.contact.toUpperCase()}
          </button>

          {!isLoggedIn ? (
            <button
              className="page-login page-header"
              onClick={() => {
                navigate("/login");
              }}
            >
              <span>{pages.login.toUpperCase()}</span>
            </button>
          ) : (
            <div
              className="page-contact page-header"
              onClick={() => {
                if (openProfile) {
                  setOpenProfile(false);
                } else {
                  setOpenProfile(true);
                }
              }}
            >
              PROFILE
            </div>
          )}
        </div>
      </div>
      {click ? handleIconMenu() : ""}
      <div className="header-profile-container">
        <div
          className="header-profile"
          onClick={() => {
            setOpenProfile(false);
          }}
        ></div>
        {isLoggedIn && openProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Header;
