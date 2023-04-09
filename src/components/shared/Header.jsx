import React, { useState, useEffect, useRef } from "react";

import searchNormal from "./img/searchNormal.png";
import notification from "./img/notification.png";
import setting from "./img/setting.png";
import redLogin from "./img/redLogin.png";
import company from "./img/company.png";
import { Link } from "react-router-dom";
import LogoutModal from "../../pages/dashboard/modal/LogoutModal";
import NotifyModal from "../../pages/dashboard/modal/NotifyModal";

function Header() {
  const [isCompany, setIsCompany] = useState(false);

  const dropdownRef = useRef();

  const [LogoutModalOn, setLogoutModalOn] = useState(false);
  const [LogoutChoice, setLogoutChoice] = useState(false);

  const [NotifyModalOn, setNotifyModalOn] = useState(false);

  const clicked1 = () => {
    setNotifyModalOn(true);
  };

  const clicked2 = () => {
    setLogoutModalOn(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCompany(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="">
      <div className="pl-11 py-7 pr-20 border-b w-[1077px] flex justify-between justify-center items-center">
        <div className="relative flex pr-[3.25rem] justify-between w-[852px]">
          <div className="flex gap-3 justify-center items-center font-bold">
            <img src={searchNormal} alt="search icon" className="w-4 h-4" />
            <input
              type="text"
              className="text-xs w-[155px] outline-none"
              placeholder="What are you looking for?"
            />
          </div>
          <div className="">
            <img src={notification} alt="notification icon" />
          </div>
          <span className="absolute bg-[#A1A6B0] h-[44px] w-px block right-[20px] bottom-[-10.5px]"></span>
        </div>

        <div className="" ref={dropdownRef}>
          <div
            className="relative flex gap-2 ml-2 cursor-pointer"
            onClick={() => setIsCompany(!isCompany)}
          >
            <img src={company} alt="company logo" className="w-7 h-7" />
            <div>
              <p className="font-bold text-[10px]">Company Name</p>
              <p className="font-semibold text-[8px] text-[#A1A6B0]">
                Companyname@gmail.com
              </p>
            </div>
          </div>
          {isCompany && (
            <div
              className="absolute z-10 flex flex-col items-start justify-between h-[286px] w-[240px] top-[80px] right-[48px] bg-white pl-6 py-[34px] rounded"
              style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="relative flex gap-2">
                <img src={company} alt="company logo" className="w-7 h-7" />
                <div>
                  <p className="font-bold text-[10px]">Company Name</p>
                  <p className="font-semibold text-[8px] text-[#A1A6B0]">
                    Companyname@gmail.com
                  </p>
                </div>
              </div>
              <button
                className="flex flex-nowrap items-center justify-center gap-2"
                onClick={clicked1}
              >
                <img
                  src={notification}
                  alt="notification"
                  className="w-6 h-6"
                />
                <p className="text-sm font-semibold text-[#8A8B9F]">
                  Notification
                </p>
              </button>
              <Link
                to="/settings"
                className="flex flex-nowrap items-center justify-center gap-2"
              >
                <img src={setting} alt="notification" className="w-6 h-6" />
                <p className="text-sm font-semibold text-[#8A8B9F]">Setting</p>
              </Link>
              <button
                className="flex flex-nowrap items-center justify-center gap-2"
                onClick={clicked2}
              >
                <img src={redLogin} alt="notification" className="w-6 h-6" />
                <p className="text-sm font-semibold text-[#FA4D56]">Logout</p>
              </button>
            </div>
          )}
        </div>
      </div>
      {LogoutModalOn && (
        <LogoutModal
          setLogoutModalOn={setLogoutModalOn}
          setLogoutChoice={setLogoutChoice}
        />
      )}
      {NotifyModalOn && <NotifyModal setNotifyModalOn={setNotifyModalOn} />}
    </div>
  );
}

export default Header;
