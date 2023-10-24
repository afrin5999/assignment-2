import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const login_flag = JSON.parse(localStorage.getItem("login_flag"));
  const token = login_flag=== true;
  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
