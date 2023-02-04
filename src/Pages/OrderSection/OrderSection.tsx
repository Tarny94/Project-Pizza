import "./OrderSection.scss";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Providers/UserProvider";
import OrderSummary from "./OrderSummary";
import { CartContext } from "../Providers/CartProvider";
import OrderConfirm from "./OrderConfirm";
import OrderPayment from "./OrderPayment";
import { ORDERED_KEY } from "../../Constant";
import {
  addOrder,
  getAddress,
  addAddress,
  deleteAddress,
} from "../../Api/ApiRoutes";
import Autocomplet from "../../Design/Autocomplet";
import Counties from "../../Util/Counties.json";
import Cities from "../../Util/Cities.json";
import TextFields from "../../Design/TextFields";
import DeleteIcon from "@mui/icons-material/Delete";

type iAddress = {
  id: number;
  address: string;
  county: string;
  city: string;
  staircase: string;
  ap: number;
  number: number | string;
};

const OrderSection = () => {
  const { totalCost, totalPrice } = useContext(CartContext);
  const { user, userId } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);
  const [address, setAddress] = useState([]);
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const [confirmedAddress, setConfirmedAddress] = useState("");
  const [addresId, setAddresId] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);

  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [stairCase, setStairCase] = useState("");
  const [ap, setAp] = useState("");

  let addresses = [...address];

  const date = new Date();

  const localData = localStorage.getItem(ORDERED_KEY);
  const localOrdered = localData && JSON.parse(localData);

  const ordered = {
    userId,
    totalCost,
    data: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
    time: `${date.getHours()}.${
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    }`,
    tips: localOrdered.tips,
    productsPrice: totalPrice,
    comment: localOrdered.comments,
    addresId,
    wrappingCost: localOrdered.wrapping,
    deliveryCost: totalCost < 100 ? 10 : 0,
    productsContains: localOrdered.productsContains,
    tableware: localOrdered.tableware,
  };
  console.log("total:", deliveryCost);
  console.log("local:", localOrdered);

  const addressFields = {
    userId,
    county,
    city,
    street,
    number,
    stairCase,
    ap,
  };

  useEffect(() => {
    const getAddres = async () => {
      const data = await getAddress(userId);
      setAddress(data);
      console.log("getAddres:", data);
      console.log("last Data:", data[data.length - 1]);
      const item = data[data.length - 1];
      const defaultAddress = `County ${item.county}, City ${
        item.city
      }, street ${item.address}, No. ${item.number} ${
        item.staircase ? `Staircase ${item.staircase}` : ""
      } ${item.ap ? `, Apartment ${item.ap}` : ""} `;
      setConfirmedAddress(defaultAddress);
      setAddresId(item.id);
    };

    getAddres();
  }, [userId, setAddress]);

  const HandleAddNewAddress = async () => {
    let allAddress: any = [...address];
    allAddress.push(addressFields);
    setAddress(allAddress);
    await addAddress(addressFields);
    setCity("");
    setCounty("");
    setStreet("");
    setOpenAddAddress(false);
  };

  const HandleDeleteAddress = async (key: number, id: number) => {
    let allAddress = [...address];
    allAddress.splice(key, 1);
    setAddress(allAddress);
    await deleteAddress(id);
  };
  return (
    <div className="order-section-container">
      <div className="order-section-components">
        <div className="order-section-components-title">Finish Ordered</div>
        <div className="order-section-user-details">
          <div className="order-section-user-title">User Details</div>
          <div>
            <div>Name: {user && user.name}</div>
            <div>Phone: {user && user.phone} </div>

            <div>Email: {user && user.email}</div>
          </div>

          <div>
            <div>Addres Details</div>
            <div>
              <button
                onClick={() => {
                  openAddAddress && setOpenAddAddress(false);
                  if (!openAddAddress) {
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
                      label="County"
                      onChange={setCounty}
                    />
                    <Autocomplet
                      counties={Cities[county as keyof typeof Cities] || []}
                      label="City"
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
            {addresses.map((addres: iAddress, key: number) => {
              const data = `${key + 1}. County ${addres.county}, City ${
                addres.city
              }, street ${addres.address}, No. ${addres.number} ${
                addres.staircase ? `Staircase ${addres.staircase}` : ""
              } ${addres.ap ? `, Apartment ${addres.ap}` : ""} `;

              return (
                <div
                  key={key}
                  onClick={() => {
                    setConfirmedAddress(data);
                    setAddresId(addres.id);
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
            })}
          </div>
        </div>
        <div>
          <OrderPayment />
        </div>

        <div>
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            SEND THE ORDER ${totalCost}
          </button>
        </div>

        <OrderConfirm
          openModal={openModal}
          setOpenModal={setOpenModal}
          ordered={ordered}
          address={confirmedAddress && confirmedAddress}
        />
      </div>
      <OrderSummary onChange={setDeliveryCost} />
    </div>
  );
};

export default OrderSection;
