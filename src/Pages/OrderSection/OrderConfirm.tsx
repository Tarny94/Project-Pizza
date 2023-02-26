import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CartContext } from "../Providers/CartProvider";
import { useNavigate } from "react-router-dom";
import { HTTP } from "../../Api/Http";
import { ORDER_ITEM_KEY, ORDER_KEY } from "../../Constant";
import { color } from "@mui/system";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type iOrder = {
  productsID: Array<number>;
  totalCost: number;
  productsCost: number;
  productsPieces: number;
  addressID: number;
  tips: number;
  wrapping: number;
  comments: string;
  tableware: boolean;
};

type iProp = {
  openModal: boolean;
  setOpenModal: (_: boolean) => void;
  order: iOrder;
  address: iAddress;
};

type iAddress = {
  id: number;
  address: string;
  county: string;
  city: string;
  staircase: string;
  ap: number;
  number: number | string;
};

export default function OrderConfirm({
  openModal,
  setOpenModal,
  order,
  address,
}: iProp) {
  const { setProductsOrdered } = useContext(CartContext);
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const navigate = useNavigate();

  if (isConfirmed) {
    setTimeout(() => {
      HandleClose();
    }, 3000);
  }

  const HandleCloseModal = () => setOpenModal(false);

  const HandleClose = () => {
    setIsConfirmed(false);
    setProductsOrdered([]);
    localStorage.setItem(ORDER_KEY, "");
    localStorage.setItem(ORDER_ITEM_KEY, "");
    navigate("/menu");
  };

  const HandleConfirmOrder = async () => {
    try {
      await HTTP.post("add/order", order);

      setIsConfirmed(true);
    } catch (e: any) {
      alert("Fail");
    }
  };

  return (
    <>
      {openModal && (
        <div>
          <Modal
            open={openModal}
            onClose={HandleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {!isConfirmed && (
                <>
                  <Typography
                    id="modal-modal-description"
                    variant="h5"
                    component="h2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                      fontSize: "26px",
                      marginBottom: "10px",
                      color: "gray",
                      fontFamily: "fantasy",
                    }}
                  >
                    Your Order
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="h5"
                    component="h2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                      fontSize: "23px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {address && (
                      <div>
                        Order cost ${order.totalCost}, with delivery to{" "}
                        {address.city}, {address.address} nr.{" "}
                        {address.number + ","}
                        {address.ap != 0 &&
                          " apartment " + address.ap + ","}{" "}
                        {address.staircase &&
                          " staircase " + address.staircase + ","}{" "}
                        {address.county}
                      </div>
                    )}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="h3"
                    component="h2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "15px",
                      }}
                    >
                      <button
                        style={{ fontSize: 20 }}
                        onClick={HandleCloseModal}
                      >
                        Cancel
                      </button>
                      <button
                        style={{ fontSize: 20 }}
                        onClick={HandleConfirmOrder}
                      >
                        Confirm
                      </button>
                    </div>
                  </Typography>{" "}
                </>
              )}
              {isConfirmed && (
                <>
                  <Typography
                    id="modal-modal-description"
                    variant="h1"
                    component="h2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                    }}
                  >
                    😀👍
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="h5"
                    component="h2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                    }}
                  >
                    Your order has been sent, thank you for choosing us, Check
                    the email to see all details about your order
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="h3"
                    component="h2"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={HandleClose}
                  >
                    🆗
                  </Typography>{" "}
                </>
              )}
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
