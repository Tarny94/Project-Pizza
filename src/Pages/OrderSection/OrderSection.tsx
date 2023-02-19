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
  const {} = useContext(UserContext);
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
    const getAddress = async () => {
      const { data } = await HTTP.get(`get/address`);
      setConfirmedAddress(data[data.length - 1].id);
      setAddresses(data);
    };

    getAddress();
  }, []);

  useEffect(() => {
    order.addressID = confirmedAddress;
  }, [confirmedAddress, order, setConfirmedAddress]);

  const HandleAddNewAddress = async () => {
    await addAddress(addressFields);
  };

  const HandleDeleteAddress = async (key: number, id: number) => {
    await HTTP.remove("delete/address", id);
  };
  return (
    <div className="order-section-container">
      <div className="order-section-components">
        <div className="order-section-components-title">Finish Ordered</div>
        <div className="order-section-user-details">
          <div>
            <div>Addres Details</div>
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
            {addAddress.length !== 0
              ? addresses.map((addres: iAddress, key: number) => {
                  const data = `${key + 1}. County ${addres.county}, City ${
                    addres.city
                  }, street ${addres.address}, No. ${addres.number} ${
                    addres.staircase ? `Staircase ${addres.staircase}` : ""
                  } ${addres.ap ? `, Apartment ${addres.ap}` : ""} `;

                  return (
                    <div
                      className="addres-contain"
                      key={key}
                      onClick={() => {
                        setConfirmedAddress(addres.id);
                      }}
                    >
                      <div>{data}</div>
                      <div
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
          </div>
        </div>
        <div>
          <OrderPayment />
        </div>

        <OrderConfirm
          openModal={openModal}
          setOpenModal={setOpenModal}
          ordered={order}
        />
      </div>
      {order && (
        <OrderSummary
          buttonText="SEND THE ORDER"
          totalPrice={order.productsCost}
          totalPieces={order.productsPieces}
          tips={order.tips}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      )}
    </div>
  );
};

export default OrderSection;
