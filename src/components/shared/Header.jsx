import React from "react";

import searchNormal from "./img/searchNormal.png";
import notification from "./img/notification.png";
import company from "./img/company.png";

function Header() {
  return (
    <div className="pl-11 py-7 pr-20 border-b w-[1077px] flex justify-between justify-center items-center">
      <div className="relative flex pr-[3.25rem] justify-between w-[852px]">
        <div className="flex gap-3 justify-center items-center font-bold">
          <img src={searchNormal} alt="search icon" className="w-4 h-4" />
          <p className="text-[#A1A6B0] text-xs w-[155px]">
            What are you looking for?
          </p>
        </div>
        <div className="p">
          <img src={notification} alt="notification icon" />
        </div>
        <span className="absolute bg-[#A1A6B0] h-[44px] w-px block right-[20px] bottom-[-10.5px]"></span>
      </div>

      <div className="flex gap-2 ml-2">
        <img src={company} alt="company logo" className="w-7 h-7" />
        <div className="">
          <p className="font-bold text-[10px]">Company Name</p>
          <p className="font-semibold text-[8px] text-[#A1A6B0]">
            Companyname@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
