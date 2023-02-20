import "./OrderSection.scss";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import OrderSummary from "./OrderSummary";
import { CartContext } from "../Providers/CartProvider";
import OrderConfirm from "./OrderConfirm";
import OrderPayment from "./OrderPayment";
import { getCoockie } from "../../Util/Cookies/Coockie";
import { ORDER_KEY } from "../../Constant";
import { getAddress, addAddress } from "../../Api/ApiRoutes";
import Autocomplet from "../../Design/Autocomplet";
import Counties from "../../Util/Counties.json";
import Cities from "../../Util/Cities.json";
import TextFields from "../../Design/TextFields";
import DeleteIcon from "@mui/icons-material/Delete";
import { HTTP } from "../../Api/Http";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

  const addressFields = {
    county,
    city,
    street,
    number,
    stairCase,
    ap,
  };

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

  const HandleAddNewAddress = async () => {
    try {
      await HTTP.post("add/address", addressFields);
      setOpenAddAddress(false);
      getAddress();
    } catch (e) {
      alert("Fail");
    }
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
          <div className="order-section-addresses-title">Addres Details</div>

          {addresses.length !== 0 && addresses
            ? addresses.map((addres: iAddress, key: number) => {
                const data = `Street ${addres.address}, ${addres.city}, ${
                  addres.county
                }, nr. ${addres.number}  ${
                  address.ap != 0 ? " apartment " + address.ap + "," : ""
                }
                ${address.staircase && " staircase " + address.staircase + ","}
                 `;

                return (
                  <div
                    className="order-section-addres-contain"
                    key={key}
                    onClick={async () => {
                      setConfirmedAddress(addres.id);
                      await getAddresById();
                    }}
                  >
                    <div className="order-section-addres-details">
                      {" "}
                      <div className="order-section-addres-icon-location">
                        <LocationOnIcon />
                      </div>
                      <div className="order-section-addres">{data}</div>
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
          <div>
            <button
              onClick={() => {
                if (openAddAddress) {
                  setOpenAddAddress(false);
                } else {
                  setOpenAddAddress(true);
                }
              }}
            >
              {!openAddAddress ? "➕" : "➖"}
            </button>{" "}
            Add New Address
          </div>
          <div>
            {openAddAddress && (
              <div>
                {" "}
                <div>
                  <Autocomplet
                    counties={Counties}
                    label="County *"
                    onChange={setCounty}
                  />
                  <Autocomplet
                    counties={Cities[county as keyof typeof Cities] || []}
                    label="City *"
                    onChange={setCity}
                  ></Autocomplet>
                </div>
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
                <button
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
                  SUBMIT
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
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
