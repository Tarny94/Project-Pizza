import "./OrderSection.scss";
import React from "react";

const OrderSection = () => {
  return (
    <div className="order-section-container">
      <div className="order-section-height"></div>
      <div>Finish Ordered</div>
      <div>Address Details</div>
      <div>
        <div>Name</div>
        <div>Phone</div>
        <div>Address</div>
        <div>Email</div>
        <div>Status</div>
      </div>
      <div>
        <div>Credit Card</div>
        <div>Pay to Delivery</div>
      </div>
      <div>
        <div>Tips for delivery</div>
      </div>
      <div>
        <div>Donation for Help People</div>
      </div>
    </div>
  );
};

export default OrderSection;
