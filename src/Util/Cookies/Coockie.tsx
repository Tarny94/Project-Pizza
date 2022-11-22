import Cookies from "universal-cookie";

const coockieKey = "token";
const coockie = new Cookies();

export const setTokenCoockie = (value: any) => {
  coockie.set(coockieKey, value);
};

export const getTokenCoockie = () => {
  return coockie.get(coockieKey);
};
