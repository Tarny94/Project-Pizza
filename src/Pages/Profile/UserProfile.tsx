import "./Profile.scss";
import React from "react";
import Logout from "../Authentication/Logout";

const UserProfile = () => {
  
  return (
    <div className="profile-contains">
      <div className="profile-icon-name profile-domain">
        <div className="profile-icon "> 😉</div>
        <div className="profile-title ">USER</div>
        <p className="icon-help-text">Click to change Icon</p>
      </div>

      <div className="profile-details profile-domain">ACCOUNT DETAILS</div>
      <div className="profile-password-change profile-domain">
        CHANGE PASSWORD
      </div>
      <Logout className="profile-domain" />
    </div>
  );
};

export default UserProfile;
