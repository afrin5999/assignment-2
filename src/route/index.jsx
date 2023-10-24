import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import Home from "../pages/Home";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Layout = lazy(() => import("../pages/Layout"));
const NoPage = lazy(() => import("../pages/NoPage"));
const PrivateRoute = lazy(() => import("../route/PrivateRoutes"));
const PublicRoute = lazy(() => import("../route/PublicRoutes"));

const RouteIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default RouteIndex;
