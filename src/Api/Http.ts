import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:6060";

const axiosInstance = axios.create({
  baseURL: `${API_URL}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

const setToken = (token: string) => {
  axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
};

const get = async (url: string) => {
  return await axiosInstance.get(`${API_URL}/${url}`);
};

const remove = async (url: string, id: number) => {
  return await axiosInstance.delete(`${API_URL}/${url}/${id}`);
};

export const HTTP = {
  get,
  setToken,
  remove,
};
