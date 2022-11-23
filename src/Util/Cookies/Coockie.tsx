import Cookies from "universal-cookie";


const coockie = new Cookies();

export const setCoockie = (key: string, value: any) => {
  coockie.set(key, value);
};

export const getCoockie = (key: string) => {
  return coockie.get(key);
};
