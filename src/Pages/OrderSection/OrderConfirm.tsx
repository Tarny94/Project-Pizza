import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CartContext } from "../Providers/CartProvider";

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
}: any) {
  const { totalCost } = React.useContext(CartContext);

  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const handleClose = () => setOpenModal(false);

  // if (isConfirmed) {
  //   setTimeout(() => {
  //     setIsConfirmed(false);
  //     handleClose();
  //   }, 5000);
  // }

  return (
    <>
      {openModal && (
        <div>
          <Modal
            open={openModal}
            onClose={handleClose}
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
                      <button onClick={handleClose}>Cancel</button>
                      <button
                        onClick={() => {
                          setIsConfirmed(true);
                        }}
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
                    onClick={() => {
                      setIsConfirmed(false);
                      setOpenModal(false);
                    }}
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
