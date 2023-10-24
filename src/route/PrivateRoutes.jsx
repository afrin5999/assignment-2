import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const login_flag = JSON.parse(localStorage.getItem("login_flag"));
  const token = login_flag === true;
  console.log(token)
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
