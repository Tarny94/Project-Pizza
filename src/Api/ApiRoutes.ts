import axios from "axios";
import { getApiUrl } from "./api";


type iProp = {
  image: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  pizza_id?: number;
};
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:6060";





export const getAllProductsApi = async () => {
  return await axios
    .get(getApiUrl("get/products"))
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      alert("Err:" + e);
    });
};

export const getProductApi = async (id: number) => {
  return await axios
    .get(getApiUrl(`get/product/${id}`))
    .then((res) => {
      return res.data[0];
    })
    .catch((e) => {
      alert("Err" + e);
    });
};

export const updateProductApi = async (product: iProp) => {
  return await axios
    .patch(getApiUrl("update/product"), product)
    .then((res) => {
      alert("Succes");
    })
    .catch((e) => {
      alert("Fail");
    });
};

export const addProductApi = async (product: iProp) => {
  return await axios
    .post(getApiUrl("add/product"), product)
    .then((res) => {
      alert("Succes");
    })
    .catch((e) => {
      alert("Fail" + e);
    });
};

export const checkIfAdminLoggedIn = async (token: string) => {
  return await axios
    .post(getApiUrl("admin/login/page"), null, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return true;
    })
    .catch((e: any) => {
      return false;
    });
};

export const getUser = async (id: number) => {
  return await axios
    .get(getApiUrl(`user/${id}`))
    .then((res) => {
      return res.data[0];
    })
    .catch((err) => {
      alert("Error to fetch user");
    });
};

export const getAddress = async () => {
  return await axios

    .get(getApiUrl(`get/address`))
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      alert("Fail to get address");
      console.log(err);
    });
};

export const addAddress = async (value: any) => {
  return await axios
    .post(getApiUrl("add/address"), value)
    .then((res) => {
      console.log("Successful added address");
    })
    .catch((err) => {
      alert("Fail to add Address" + err);
    });
};

export const addOrder = async (value: any) => {
  return await axios
    .post(getApiUrl("add/order"), value)
    .then((res) => {
      alert("Successful");
    })
    .catch((err) => {
      alert("Fail to add Order" + err);
    });
};

