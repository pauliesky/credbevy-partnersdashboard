import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingtoRedirect from "./LoadingtoRedirect";

const UserRoute = ({ children, ...rest }) => {
  const { currentUser } = useSelector((state) => state.authReducer);
  return currentUser ? <Route {...rest} /> : <LoadingtoRedirect />;
};

export default UserRoute;
