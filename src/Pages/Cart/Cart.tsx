import "./Cart.scss";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BasicModal from "../../Design/Modal";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="cart-container">
      <div
        className="cart-design"
        onClick={() => {
          if (openModal) {
            return setOpenModal(false);
          }
          setOpenModal(true);
        }}
      >
        {<ShoppingCartOutlinedIcon />}
        <div></div>
      </div>
      {openModal && (
        <BasicModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default Cart;
