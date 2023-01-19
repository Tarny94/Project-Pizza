import React, { createContext, useEffect, useState } from "react";
import { getCoockie } from "../../Util/Cookies/Coockie";
import { TOKEN_KEY } from "../../Constant";
import { checkIfAdminLoggedIn } from "../../Api/ApiRoutes";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../Api/ApiRoutes";

const initialState = {
  isLoggedIn: false,
  user: { user_id: 0, name: "", address: "", phone: "", email: "" },
  isAdminLoggedIn: true,
  isAdmin: false,
  userId: 0,
  phone: 0,
  open: false,
  click: false,
  openProfile: false,

  setOpenProfile: useState,
  setOpen: useState,
  setClick: useState,
  setPhone: useState,
  setIsAdminLoggedIn: useState,
  setUser: useState,
  setIsLoggedIn: useState,
  setIsAdmin: useState,
  setUserId: useState,
};
export const UserContext = createContext(initialState);
export const UserProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(0);
  const [phone, setPhone] = useState("0737678044");
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState({
    user_id: 0,
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser(userId));
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    const checkUser = async () => {
      let user = await getCoockie(TOKEN_KEY);
      let token = JSON.stringify(user.token);
      if (!token) {
        return setIsLoggedIn(false);
      } else {
        return setIsLoggedIn(true);
      }
    };
    checkUser();
  }, [navigate]);

  useEffect(() => {
    const checkUser = async () => {
      let token = await getCoockie(TOKEN_KEY);
      let isAdminUser = await checkIfAdminLoggedIn(token.token);
      await setUserId(token._id);
      if (!isAdminUser) {
        return setIsAdmin(false);
      } else {
        return setIsAdmin(true);
      }
    };
    checkUser();
  }, [navigate, userId]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        isAdmin,
        setIsAdmin,
        setUserId,
        userId,
        setPhone,
        phone,
        click,
        setClick,
        open,
        setOpen,
        setOpenProfile,
        openProfile,
        user,
        setUser,
      }}
      {...props}
    />
  );
};
