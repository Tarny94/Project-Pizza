import Cookies from "universal-cookie";


const coockie = new Cookies();

export const setCoockie = (key: string, value: any) => {
  coockie.set(key, value);
};

export const getCoockie = (key: string) => {
  return coockie.get(key);
};

export const setCoockieWithExpireTime = (
  key: string,
  value: any,
  expire: number
) => {
  coockie.set(key, value, {
    maxAge: expire,
  });
};
