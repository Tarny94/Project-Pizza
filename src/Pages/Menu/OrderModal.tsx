import * as React from "react";
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

export default function OrderModal() {
  const { openOrderModal, setOpenOrderModal } = React.useContext(CartContext);
  const handleClose = () => setOpenOrderModal(false);

  return (
    <>
      {openOrderModal && (
        <div>
          <Modal
            open={openOrderModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              ></Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
              ></Typography>
              <Typography
                id="modal-modal-description"
                variant="h5"
                component="h2"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              ></Typography>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
