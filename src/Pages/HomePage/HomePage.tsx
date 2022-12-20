import "./Home.scss";
import Button from "../../Design/Button";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
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
                width={200}
                height={50}
              />
              <Button
                className="button-intro"
                title={"CONTACT US"}
                onClick={() => {
                  navigate("/contact");
                }}
                width={200}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Contact />
    </>
  );
};

export default HomePage;
