import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingtoRedirect from "./LoadingtoRedirect";

const PrivateRoutes = () => {
  const { currentUser } = useSelector((state) => state.authReducer);
  return currentUser ? <Outlet /> : <LoadingtoRedirect />;
};

export default PrivateRoutes;
