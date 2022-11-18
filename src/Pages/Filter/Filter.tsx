import React, { useState } from "react";
import "../Filter/filter.scss";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Filter = () => {
  const nav = ["Home", "Order", "About us", "Contact"];
  const [language, setLanguage] = useState(false);
  const [languageSelector, setLanguageSelector] = useState(false);
  const [click, setClick] = useState(false);

  const handleLanguage = () => {
    if (language) {
      setLanguage(false);
    } else {
      setLanguage(true);
    }
  };

  const handleIconMenu = () => {
    return nav.map((page) => {
      return <div className="pages">{page.toUpperCase()}</div>;
    });
  };
  return (
    <div className="container">
      <div className="filter-container">
        <h1 className="filter-title">PIZZA</h1>
        <div
          className="select-language nav"
          onClick={() => {
            if (languageSelector) {
              setLanguageSelector(false);
            } else {
              setLanguageSelector(true);
            }
          }}
        >
          <div className="selected-language">{language ? "EN" : "RO"}</div>
          🌐{languageSelector ? "🔺" : "🔻"}
          {languageSelector ? (
            <div className="choose-language">
              {" "}
              <div className="language-ro lang-button" onClick={handleLanguage}>
                RO
              </div>
              <div
                className="language-eng lang-button"
                onClick={handleLanguage}
              >
                EN
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

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
        <div className="filter-login acces-filters">LOGIN</div>
      </div>
      <div className="menu-container">{click ? handleIconMenu() : ""}</div>
    </div>
  );
};

export default Filter;
