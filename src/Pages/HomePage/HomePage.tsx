import React from "react";
import "./homepage.scss";
import Button from "../../Design/Button";
import Menu from "../Menu/Menu";
import AboutUs from "../AboutUs/AboutUs";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="intro-container">
            <h1 className="intro-title">PIZZA</h1>
            <p className="intro-description">
              Best homemade pizza you'll ever eat
            </p>
            <div className="intro-buttons">
              <Button
                className="button-intro"
                title={"ORDER NOW"}
                event={undefined}
                disabled={false}
                widths={200}
                highs={50}
              />
              <Button
                className="button-intro"
                title={"CONTACT US"}
                event={undefined}
                disabled={false}
                widths={200}
                highs={50}
              />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Menu />
    </>
  );
};

export default HomePage;
