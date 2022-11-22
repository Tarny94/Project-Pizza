import React from "react";
import Cookies from "universal-cookie";

const coockieKey = "token";
const coockie = new Cookies();

export const setCoockie = (res: any) => {
  coockie.set(coockieKey, {
    _id: res.data.user._id,
    token: res.data.user.token,
  });
};

export const getCoockie = () => {
  return coockie.get(coockieKey);
};
