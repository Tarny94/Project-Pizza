import React, { useState } from "react";
import "../Filter/filter.scss";

const Filter = () => {
  const nav = ["Home", "Learn", "About us", "Contact"];
  const [language, setLanguage] = useState(false);
  const [languageSelector, setLanguageSelector] = useState(false);

  const handleLanguage = () => {
    if (language) {
      setLanguage(false);
    } else {
      setLanguage(true);
    }
  };
  return (
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
            <div className="language-eng lang-button" onClick={handleLanguage}>
              EN
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {nav.map((item) => {
        return <div className="acces-filters">{item.toUpperCase()}</div>;
      })}
      <div className="filter-login acces-filters">LOGIN</div>
    </div>
  );
};

export default Filter;
