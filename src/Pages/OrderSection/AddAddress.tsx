import * as React from "react";
import "./OrderSection.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Autocomplet from "../../Design/Autocomplet";
import TextFields from "../../Design/TextFields";
import { HTTP } from "../../Api/Http";

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
  openModal: boolean;
  setOpenModal: (_: boolean) => void;
  title: string;
  text?: string;
  setOpenAddAddress: (_: boolean) => void;
  getAddress: () => void;
  county: string;
  setCounty: (_: string) => void;
  city: string;
  setCity: (_: string) => void;
  street: string;
  setStreet: (_: string) => void;
  number: string | number;
  setNumber: (_: any) => void;
  stairCase: string | number;
  setStairCase: (_: any) => void;
  ap: number;
  setAp: (_: number) => void;
  Counties: any;
  Cities: any;
};

export default function AddAddress({
  openModal,
  setOpenModal,
  title,
  setOpenAddAddress,
  getAddress,
  county,
  setCounty,
  city,
  setCity,
  street,
  setStreet,
  number,
  setNumber,
  stairCase,
  setStairCase,
  ap,
  setAp,
  Counties,
  Cities,
}: iProp) {
  const addressFields = {
    county,
    city,
    street,
    number,
    stairCase,
    ap,
  };
  const handleClose = () => {
    resetAddressFields();
    setOpenModal(false);
  };

  const resetAddressFields = () => {
    addressFields.county = "";
    addressFields.ap = 0;
    addressFields.city = "";
    addressFields.number = 0;
    addressFields.stairCase = "";
    addressFields.street = "";
  };

  const HandleAddNewAddress = async () => {
    try {
      await HTTP.post("add/address", addressFields);
      setOpenAddAddress(false);
      resetAddressFields();
      getAddress();
    } catch (e) {
      alert("Fail");
    }
  };
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
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ textAlign: "center", marginBottom: "20px " }}
              >
                {title}
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
                {" "}
                <div>
                  <Autocomplet
                    counties={Counties}
                    label="County *"
                    onChange={setCounty}
                  />
                </div>
                <div>
                  {" "}
                  <Autocomplet
                    counties={Cities[county as keyof typeof Cities] || []}
                    label="City *"
                    onChange={setCity}
                  ></Autocomplet>
                </div>
              </Typography>

              <Typography
                id="modal-modal-description"
                variant="h5"
                component="h2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="order-section-add-address-container">
                  <div className="order-section-add-address-field">
                    {" "}
                    <div> </div>
                    <div>
                      <TextFields
                        onChange={setStreet}
                        label="Street"
                        required={true}
                      />
                      <TextFields onChange={setNumber} label="No" />
                    </div>
                    <div>
                      <TextFields onChange={setStairCase} label="Staircase" />
                      <TextFields
                        onChange={setAp}
                        label="Apartament"
                        type="number"
                      />
                    </div>
                    <div className="add-address-add-button-container">
                      {" "}
                      <div
                        className="add-address-add-button"
                        onClick={() => {
                          if (
                            addressFields.county &&
                            addressFields.city &&
                            addressFields.street
                          ) {
                            HandleAddNewAddress();
                          } else {
                            alert("Complet required fields!");
                          }
                        }}
                      >
                        ADD
                      </div>
                    </div>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
