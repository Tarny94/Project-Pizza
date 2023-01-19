import "./OrderSection.scss";
import React, { useContext, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import OrderSummary from "./OrderSummary";
import { CartContext } from "../Providers/CartProvider";
import OrderConfirm from "./OrderConfirm";

const OrderSection = () => {
  const { totalCost } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="order-section-container">
      <div className="order-section-height"></div>
      <div>Finish Ordered</div>
      <div>Address Details</div>
      <div>
        <div>Name: {user && user.name}</div>
        <div>Phone: {user && user.phone} </div>
        <div>Address: {user && user.address}</div>
        <div>Email: {user && user.email}</div>
        <div>Status: in progress...</div>
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
      <div>
        <OrderSummary />
        <div>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            SEND THE ORDER ${totalCost}
          </button>
        </div>
      </div>
      <OrderConfirm
        openModal={openModal}
        setOpenModal={setOpenModal}
        address={user && user.address}
      />
    </div>
  );
};

export default OrderSection;
