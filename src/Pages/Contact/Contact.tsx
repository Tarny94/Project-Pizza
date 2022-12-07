import "./Contact.scss";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useNavigate } from "react-router-dom";

type iProp = {
  title: string;
  email: string;
  phone: string;
  address: string;
  timetable: string;
};
const contactInfo: iProp = {
  title: "PIZZA",
  email: "alex@yahoo.com",
  phone: "0733.404.222",
  address: "Str. Valea 120, Bacau",
  timetable: `Monday - Tuesday: closed, give us a message. 
  Wednesday - Saturday: 11:00 - 21:00
  Sunday: 12:00 - 21:00`,
};

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
      <div className="contact-elemnts">
        <div className="contact-title">
          <div className="title-name">{contactInfo.title}</div>
        </div>
        <div className="contact-icons-social">
          <div className="facebook ifb">
            {" "}
            <FacebookIcon className="icon" fontSize="large" />
          </div>
          <div className="instagram ifb">
            <InstagramIcon className="icon" fontSize="large" />
          </div>
        </div>
        <div className="contact-terms">
          <div
            className="contact-terms-name"
            onClick={() => {
              navigate("/terms");
            }}
          >
            Terms and conditions
          </div>
        </div>
        <div className="contact-data">
          <div className="contact-data-title">CONTACT</div>
          <div className="contact-email  contact-data-location">
            <EmailIcon className="contact-icon" />
            <div>{contactInfo.email}</div>
          </div>
          <div className="contact-phone contact-data-location">
            <CallIcon className="contact-icon" />
            <div>{contactInfo.phone}</div>
          </div>
          <div className="contact-data-location">
            <LocationOnIcon className="contact-icon" />
            <div>{contactInfo.address}</div>
          </div>
          <div className="contact-details">
            <WatchLaterIcon className="contact-icon" />
            <div className="contact-timetable contact-data-location">
              {contactInfo.timetable}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
