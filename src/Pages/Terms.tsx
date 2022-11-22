import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Terms.scss";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h2>Terms & Conditions</h2>
        <p>
          A Terms and Conditions agreement acts as a legal contract between you
          (the company) and the user. It's where you maintain your rights to
          exclude users from your app in the event that they abuse your
          website/app, set out the rules for using your service and note other
          important details and disclaimers. Having a Terms and Conditions
          agreement is completely optional. No laws require you to have one. Not
          even the super-strict and wide-reaching General Data Protection
          Regulation (GDPR). Your Terms and Conditions agreement will be
          uniquely yours. While some clauses are standard and commonly seen in
          pretty much every Terms and Conditions agreement, it's up to you to
          set the rules and guidelines that the user must agree to. Terms and
          Conditions agreements are also known as Terms of Service or Terms of
          Use agreements. These terms are interchangeable, practically speaking.
        </p>
        <h3
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          Go back
        </h3>
      </div>
    </div>
  );
};

export default Terms;
