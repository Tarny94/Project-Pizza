import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CartContext } from "../Providers/CartProvider";
import { addOrder } from "../../Api/ApiRoutes";
import { useNavigate } from "react-router-dom";
import { ORDERED_KEY, ORDER_KEY, ORDER_SUMMARY_KEY } from "../../Constant";

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

export default function OrderConfirm({
  openModal,
  setOpenModal,
  address,
  ordered,
}: any) {
  const { totalCost } = React.useContext(CartContext);

  const [isConfirmed, setIsConfirmed] = React.useState(false);
  const navigate = useNavigate();

  if (isConfirmed) {
    setTimeout(() => {
      setIsConfirmed(false);
      setOpenModal(false);
      navigate("/menu");
    }, 3500);
  }

  console.log("ord:", ordered);

  const HandleClose = () => {
    setOpenModal(false);
    setIsConfirmed(false);
  };

  const HandleConfirmOrder = async () => {
    await addOrder(ordered);
    localStorage.setItem(ORDERED_KEY, "");
    localStorage.setItem(ORDER_KEY, "");
    localStorage.setItem(ORDER_SUMMARY_KEY, "");
    setIsConfirmed(true);
  };

  return (
    <>
      {openModal && (
        <div>
          <Modal
            open={openModal}
            onClose={HandleClose}
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
                    }}
                  >
                    Send your order cost {totalCost} $, with delivery to{" "}
                    {address}
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
                    <div>
                      <button onClick={HandleClose}>Cancel</button>
                      <button onClick={HandleConfirmOrder}>Confirm</button>
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
