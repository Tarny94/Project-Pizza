import React from "react";
import "./AboutUs.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DirectionsCarFilledSharpIcon from "@mui/icons-material/DirectionsCarFilledSharp";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import SportsBarSharpIcon from "@mui/icons-material/SportsBarSharp";
import SportsTennisSharpIcon from "@mui/icons-material/SportsTennisSharp";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Our story</h1>
      <div className="about-introduction-container">
        {" "}
        <p className="about-introduction">
          PIZZA focuses primarily on the customer and hence our constant and
          permanent care for all the details, which add value to the product and
          the delivery service. The ingredients used, all raw materials are
          carefully selected being only top products. The recipes were carefully
          thought out until we created a perfect taste, in our perception. We
          constantly invest in creating new tastes for our customers.
        </p>
        <p className="about-introduction">
          The equipment we use is of high quality to provide the efficiency of
          our qualified staff. We constantly invest in human resources, through
          trainings in Romania and Italy, with a friendly atmosphere for those
          who are with us. PIZZA promises to develop together with the community
          it serves, through social projects that welcome people who need our
          attention and care.
        </p>
        <p className="about-introduction">
          Full satisfaction of our customers, passion for everything we do,
          perfect taste and attention to detail under one roof - Pizza
        </p>
        <p className="about-introduction">
          Come to our place and you will benefit from a superb view in the
          middle of the town and a restaurant with a terrace and a play area for
          children, you will also benefit from a parking space and free wifi.
          You're welcome
        </p>
      </div>
      <div className="icons-container">
        <LocalPizzaIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Local Pizza"
        />
        <RestaurantIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Restaurant"
        />
        <LocalFireDepartmentSharpIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Oven pizza"
        />
        <MenuBookIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Menu"
        />
        <SportsBarSharpIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Bar"
        />
        <DeliveryDiningIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Delivery"
        />
        <SportsTennisSharpIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Playground"
        />
        <WifiIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Wifi"
        />
        <DirectionsCarFilledSharpIcon
          color="warning"
          className="about-icon"
          fontSize="large"
          titleAccess="Car Parking"
        />
      </div>
    </div>
  );
};

export default AboutUs;
