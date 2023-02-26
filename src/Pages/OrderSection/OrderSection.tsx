import "./OrderSection.scss";
import React, { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderConfirm from "./OrderConfirm";
import OrderPayment from "./OrderPayment";
import { ORDER_KEY } from "../../Constant";
import Counties from "../../Util/Counties.json";
import Cities from "../../Util/Cities.json";
import DeleteIcon from "@mui/icons-material/Delete";
import { HTTP } from "../../Api/Http";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import AddAddress from "./AddAddress";

type iAddress = {
  id: number;
  address: string;
  county: string;
  city: string;
  staircase: string;
  ap: number;
  number: number | string;
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

const OrderSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [confirmedAddress, setConfirmedAddress] = useState(0);
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState(0);
  const [stairCase, setStairCase] = useState("");
  const [ap, setAp] = useState(0);
  const [address, setAddress] = useState({
    id: 0,
    address: "",
    county: "",
    city: "",
    staircase: "",
    ap: 0,
    number: "",
  });

  const value: string | null = localStorage.getItem(ORDER_KEY);
  const order: iOrder = value && JSON.parse(value);

  useEffect(() => {
    getAddress();
  }, []);

  useEffect(() => {
    const setValue = async () => {
      confirmedAddress && setAddress(await getAddresById());
    };
    setValue();
  }, [confirmedAddress]);

  useEffect(() => {
    order.addressID = confirmedAddress;
  }, [confirmedAddress, order, setConfirmedAddress]);

  const getAddresById = async () => {
    const data: any = await HTTP.get(`get/addres/${confirmedAddress}`);
    return data && data.data[0];
  };

  const getAddress = async () => {
    const { data } = await HTTP.get(`get/address`);
    setConfirmedAddress(data[data.length - 1].id);
    setAddresses(data);
  };

  const HandleDeleteAddress = async (key: number, id: number) => {
    setAddresses(addresses.filter((value, index) => index !== key));
    try {
      await HTTP.deleteApi(`delete/address/${id}`);
    } catch (e) {
      alert("Fail");
    }
  };
  return (
    <div className="order-section-container">
      <div className="order-section-components">
        <div className="order-section-components-title">Finish Order</div>

        <div className="order-section-addresses-container">
          <FormLabel id="demo-radio-buttons-group-label">
            <LocationOnIcon />
            {` `}
            Address Details
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={confirmedAddress && confirmedAddress}
          >
            {addresses.length !== 0
              ? addresses.map((addres: iAddress, key: number) => {
                  const data = `Street ${addres.address}, ${addres.city}, ${addres.county}, nr. ${addres.number}  
                 `;
                  //    ${
                  //     address.ap != 0 ? " apartment " + address.ap + "," : ""
                  //   }
                  // ${address.staircase && " staircase " + address.staircase + ","}
                  return (
                    <div className="order-section-addres-contain " key={key}>
                      <div className="order-section-addres-details">
                        {" "}
                        <div>
                          <FormControlLabel
                            value={key}
                            control={<Radio />}
                            label={data}
                            onClick={async () => {
                              setConfirmedAddress(addres.id);
                              await getAddresById();
                            }}
                          />{" "}
                        </div>
                      </div>
                      <div
                        className="order-section-addres-delete-button"
                        onClick={async () => {
                          HandleDeleteAddress(key, addres.id);
                        }}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  );
                })
              : ""}
          </RadioGroup>
          <div className="order-section-add-address-button-contain">
            <div
              className={"order-section-add-address-button"}
              // "order-section-add-address-button order-section-add-address-button2"
              onClick={() => {
                if (openAddAddress) {
                  setOpenAddAddress(false);
                } else {
                  setOpenAddAddress(true);
                }
              }}
            >
              Add New Address
            </div>
            <div className="order-section-add-address">
              {" "}
              <AddAddress
                openModal={openAddAddress}
                setOpenModal={setOpenAddAddress}
                Counties={Counties}
                Cities={Cities}
                title="ADD NEW ADDRESS"
                getAddress={getAddress}
                city={city}
                setCity={setCity}
                county={county}
                setCounty={setCounty}
                setOpenAddAddress={setOpenAddAddress}
                street={street}
                setStreet={setStreet}
                number={number}
                setNumber={setNumber}
                stairCase={stairCase}
                setStairCase={setStairCase}
                ap={ap}
                setAp={setAp}
              />
            </div>
          </div>
        </div>
        <div className="order-section-payment-method">
          <OrderPayment />
        </div>
        <OrderConfirm
          openModal={openModal}
          setOpenModal={setOpenModal}
          order={order}
          address={address && address}
        />
      </div>
      <div className="page-cart-summary-contain">
        {" "}
        {order && (
          <OrderSummary
            buttonText="SEND THE ORDER"
            totalPrice={order.productsCost}
            totalPieces={order.productsPieces}
            tips={order.tips}
            onClick={async () => {
              setOpenModal(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OrderSection;
