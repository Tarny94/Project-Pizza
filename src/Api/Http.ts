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

const deleteApi = async (url: string) => {
  return await axiosInstance.delete(`${API_URL}/${url}`);
};

const post = async (url: string, item: any) => {
  return await axiosInstance.post(`${API_URL}/${url}`, item);
};

const patch = async (url: string, item: any) => {
  return await axiosInstance.patch(`${API_URL}/${url}`, item);
};

export const HTTP = {
  get,
  setToken,
  deleteApi,
  post,
  patch,
};
