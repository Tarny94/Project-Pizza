import "./OrderSection.scss";
import React, { useContext, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import OrderSummary from "./OrderSummary";
import { CartContext } from "../Providers/CartProvider";
import OrderConfirm from "./OrderConfirm";
import OrderPayment from "./OrderPayment";
import { ORDERED_KEY } from "../../Constant";
import { addOrder } from "../../Api/ApiRoutes";

const OrderSection = () => {
  const { totalCost } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(UserContext);

  const localStorageValue = localStorage.getItem(ORDERED_KEY);
  const ORDERED = localStorageValue && JSON.parse(localStorageValue);
  console.log("ORDERED:", ORDERED);

  return (
    <div className="order-section-container">
      <div className="order-section-height"></div>
      <div>Finish Ordered</div>
      <div>User Details</div>
      <div>
        <div>Name: {user && user.name}</div>
        <div>Phone: {user && user.phone} </div>

        <div>Email: {user && user.email}</div>
        <div>
          Addres Details <div>County: </div>
          <div>City: {user && user.address}</div>
          <div>Street:</div>
          <div>No.</div>
          <div>Staircase:</div>
          <div>Ap:</div>
        </div>
      </div>
      <div>
        <OrderPayment />
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
