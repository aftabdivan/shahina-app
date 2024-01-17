import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const user = localStorage.getItem("user");
  let auth = { token: user?.length ? true : false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
