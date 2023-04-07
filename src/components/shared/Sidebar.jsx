import React from "react";
import { NavLink } from "react-router-dom";

import credbevyLogo from "../../pages/login/img/credbevyLogo.png";
import category from "./img/category.png";
import emptyWallet from "./img/emptyWallet.png";
import chart from "./img/chart.png";
import shoppingCart from "./img/shoppingCart.png";
import bag from "./img/bag.png";
import bubble from "./img/bubble.png";
import setting from "./img/setting.png";

function Sidebar() {
  let activeStyle = {
    filter:
      "brightness(0) saturate(100%) invert(19%) sepia(70%) saturate(4770%) hue-rotate(273deg) brightness(76%) contrast(124%)",
    fontWeight: 600,
  };

  return (
    <div className="px-11 py-6 border-r">
      <div className="py-7">
        <img src={credbevyLogo} alt="credbevy Logo" className="credbevy-logo" />
      </div>

      <span className="bg-[#E5EAEF] h-px w-[183px] block"></span>
      <br />
      <br />
      <br />
      <div className="flex flex-col gap-12">
        <div className="flex gap-[1.1rem]">
          <NavLink
            to="dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img
              src={category}
              alt="category icon"
              className="w-6 h- brightness-[2.5]"
            />
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="text-[#8A8B9F] font-semibold"
            to="dashboard"
          >
            Dashboard
          </NavLink>
        </div>
        <NavLink
          to="wallet"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={emptyWallet} alt="wallet icon" />
          <p className="text-[#8A8B9F]">Wallet</p>
        </NavLink>
        <NavLink
          to="/loanproducts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={chart} alt="chart icon" />
          <p className="text-[#8A8B9F]">Loan Products</p>
        </NavLink>
        <NavLink
          to="/loanrequest"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={shoppingCart} alt="shopping-cart icon" />
          <p className="text-[#8A8B9F]">Loan Request</p>
        </NavLink>
        <NavLink
          to="/loanhistory"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={bag} alt="bag icon" />
          <p className="text-[#8A8B9F]">Loan History</p>
        </NavLink>
        <NavLink
          to="/integrations"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={bubble} alt="bubble" className="w-6 h-6" />
          <p className="text-[#8A8B9F]">Integrations</p>
        </NavLink>
        <NavLink
          to="/settings"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="flex gap-[1.1rem]"
        >
          <img src={setting} alt="setting icon" />
          <p className="text-[#8A8B9F]">Settings</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
