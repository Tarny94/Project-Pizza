import "./Home.scss";
import React, { useContext } from "react";
import Button from "../../Design/Button";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";

const HomePage = () => {
  const { phone } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="home-image">
          <div className="intro-container">
            <h1 className="intro-title">PIZZA</h1>
            <p className="intro-description">
              Best homemade pizza you will ever eat
            </p>

            <div className="intro-buttons">
              <Button
                className="button-intro"
                title={"ORDER NOW"}
                onClick={() => {
                  navigate("/menu");
                }}
              />
              <Button
                className="button-intro"
                title={"CONTACT US"}
                onClick={() => {
                  navigate("/contact");
                }}
              />
            </div>

            <h2 className="phone-contain">📞 {phone}</h2>
          </div>
        </div>
      </div>
      <AboutUs />
      <Contact />
    </>
  );
};

export default HomePage;
