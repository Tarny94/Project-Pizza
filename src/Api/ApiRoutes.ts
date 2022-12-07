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

export const deleteProductApi = async (id: number) => {
  await axios
    .delete(getApiUrl(`admin/delete/${id}`))
    .then((res) => {
      alert("Succes");
    })
    .catch((err) => {
      alert("Fail");
    });
};

export const getAllProductsApi = async () => {
  return await axios
    .get(getApiUrl("admin/getProducts"))
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      alert("Err:" + e);
    });
};

export const getProductApi = async (id: number) => {
  return await axios
    .get(getApiUrl(`admin/getProduct/${id}`))
    .then((res) => {
      return res.data[0];
    })
    .catch((e) => {
      alert("Err" + e);
    });
};

export const updateProductApi = async (product: iProp) => {
  return await axios
    .patch(getApiUrl("admin/updateProduct"), product)
    .then((res) => {
      alert("Succes");
    })
    .catch((e) => {
      alert("Fail");
    });
};

export const addProductApi = async (product: iProp) => {
  return await axios
    .post(getApiUrl("admin/addProduct"), product)
    .then((res) => {
      alert("Succes");
    })
    .catch((e) => {
      alert("Fail" + e);
    });
};

export const checkIfAdminLoggedIn = async (token: string) => {
  return await axios
    .post(getApiUrl("admin/login/page"), { token })
    .then((res) => {
      return true;
    })
    .catch((e: any) => {
      return false;
    });
};
