import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../../Design/Button";
import { CartContext } from "../Providers/CartProvider";
import { getCoockie, setCoockie } from "../../Util/Cookies/Coockie";
import { ORDER_KEY } from "../../Constant";

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

type iProp = {
  id: number;
  image: string;
  title: string;
  numberOfProduct: number;
  price: number;
  initPrice: number;
};

export default function OrderModal({
  openOrderModal,
  setOpenOrderModal,
  productChosed,
}: any) {
  const { numberOfProduct, setNumberOfProduct } = React.useContext(CartContext);
  const [price, setPrice] = React.useState(productChosed.totalPrice);
  let cost: number = price;
  let pieces: number = numberOfProduct;
  let initPrice: number = productChosed.totalPrice;

  let orderItemsCookies = getCoockie(ORDER_KEY);
  let orderItems: iProp[] = [...orderItemsCookies];

  React.useEffect(() => {
    setPrice(productChosed.totalPrice);
  }, [productChosed.totalPrice]);

  const handleClose = () => {
    setOpenOrderModal(false);
    cost = 0;
    pieces = 1;
    initPrice = 0;
    setPrice(productChosed.totalPrice);
    setNumberOfProduct(1);
  };

  const handleOrderProducts = async () => {
    orderItems.push({
      id: productChosed.id,
      image: productChosed.image,
      title: productChosed.title,
      numberOfProduct,
      price,
      initPrice,
    });
    setCoockie(ORDER_KEY, orderItems);
    handleClose();
  };

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
                id="modal-modal-description"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <img
                  src={productChosed.image}
                  alt="pizza images"
                  width="250"
                  height="250"
                />
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center" }}
              >
                {productChosed.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {productChosed.description}
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
              ></Typography>

              <Typography
                className="order-number-container"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <Button
                  title={"➖"}
                  onClick={() => {
                    if (numberOfProduct > 1) {
                      setNumberOfProduct(--pieces);
                      setPrice((cost -= initPrice));
                    }
                  }}
                />
                {numberOfProduct}
                <Button
                  title={"➕"}
                  onClick={() => {
                    setNumberOfProduct(++pieces);
                    setPrice((cost += initPrice));
                  }}
                />
              </Typography>
              <Typography
                className="order-number-container"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <Button
                  title={`ADD TO CART $${price}`}
                  onClick={handleOrderProducts}
                />
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
