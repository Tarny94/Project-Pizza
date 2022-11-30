import axios from "axios";
import { getApiUrl } from "./api";

export const deleteProductApi = async (id: number) => {
  await axios
    .delete(getApiUrl(`admin/delete${id}`))
    .then((res) => {
      alert("Succes");
    })
    .catch((err) => {
      alert("Fail");
    });
};

export const getAllProductsApi = async () => {
  return await axios
    .get(getApiUrl("admin/get"))
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      alert("Err:" + e);
    });
};

export const getProductApi = async (id: number) => {
  return await axios
    .get(getApiUrl(`admin/get${id}`))
    .then((res) => {
      return res.data[0];
    })
    .catch((e) => {
      alert("Err" + e);
    });
};
