import "./Profile.scss";
import React from "react";
import Logout from "../Authentication/Logout";

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-contains">
        <div className="profile-title">User</div>
        <div className="profile-icon profile-domain">Icon</div>
        <div className="profile-details profile-domain">Details</div>
        <div className="profile-password-change profile-domain">
          Change Password
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default UserProfile;
