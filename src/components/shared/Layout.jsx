import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
