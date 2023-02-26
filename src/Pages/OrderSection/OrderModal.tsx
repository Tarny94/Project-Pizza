import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../../Design/Button";
import { CartContext } from "../Providers/CartProvider";
import { ORDER_ITEM_KEY } from "../../Constant";

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
type iProduct = {
  image?: string;
  title: string;
  description?: string;
  price: number;
  discount?: number;
  id: number;
};
type iProp = {
  id?: number;
  image?: string;
  title?: string;
  numberOfProduct?: number;
  price?: number;
  initPrice?: number;
  productChosed: iProduct;
};

type iProducts = {
  id: number;
  image: string;
  title: string;
  productsPrice: number;
  productsPieces: number;
  price: number;
};

export default function OrderModal({ productChosed }: iProp) {
  const {
    openOrderModal,
    setOpenOrderModal,
    setProductsOrdered,
    productsOrdered,
  } = React.useContext(CartContext);
  const [finalPrice, setFinalPrice] = React.useState(0);
  const [finalPieces, setFinalPieces] = React.useState(1);

  let cost = finalPrice;
  let price = productChosed.price;
  let pieces = finalPieces;

  React.useEffect(() => {
    setFinalPrice(productChosed.price);
  }, [price, productChosed.price]);

  const handleClose = () => {
    setFinalPrice(productChosed.price);
    setFinalPieces(1);
    price = productChosed.price;
    setOpenOrderModal(false);
  };

  const handleOrderProducts = async () => {
    let piecesPR: number = finalPieces;

    productsOrdered.map((item: iProducts, index: number) => {
      if (productChosed.id === item.id) {
        piecesPR += item.productsPieces;
        setProductsOrdered(productsOrdered.splice(index, 1));
        localStorage.setItem(ORDER_ITEM_KEY, JSON.stringify(productsOrdered));
      }
      return "";
    });

    const products = [
      {
        id: productChosed.id,
        image: productChosed.image,
        title: productChosed.title,
        productsPrice: finalPrice,
        productsPieces: piecesPR,
        price: productChosed.price,
      },
      ...productsOrdered,
    ];

    setProductsOrdered(products);

    localStorage.setItem(ORDER_ITEM_KEY, JSON.stringify(products));
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
                sx={{
                  textAlign: "center",
                  color: "gray",
                  fontFamily: "fantasy",
                  fontSize: 30,
                }}
              >
                {productChosed.title}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontFamily: "cursive",
                  textAlign: "center",
                  marginBottom: 5,
                }}
              >
                {productChosed.description}
              </Typography>

              <Typography
                className="order-number-container"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                <Button
                  title={"➖"}
                  onClick={() => {
                    if (pieces > 1) {
                      setFinalPieces(--pieces);
                      setFinalPrice((cost -= productChosed.price));
                    }
                  }}
                />
                {finalPieces}
                <Button
                  title={"➕"}
                  onClick={() => {
                    setFinalPieces(++pieces);
                    setFinalPrice((cost += productChosed.price));
                  }}
                />
              </Typography>
              <Typography
                className="order-number-container"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                  marginTop: 5,
                }}
              >
                <Button
                  className="button-field"
                  title={`ADD TO CART $${finalPrice}`}
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
