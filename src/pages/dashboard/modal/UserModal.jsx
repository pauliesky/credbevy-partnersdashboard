import React, { useState, useEffect, useRef } from "react";
import closeModal from "../img/closeModal.png";
import clear from "../img/clear.png";
import caret from "../img/caret.png";
import SuperAdmin from "../role/SuperAdmin";
import Contributor from "../role/Contributor";

export default function UserModal({ setUserModalOn, setUserChoice }) {
  const handleProceedClick = () => {
    setUserModalOn(false);
    setUserChoice(true);
  };

  const handleCancelClick = () => {
    setUserModalOn(false);
    setUserChoice(false);
  };

  const [rolesOn, setRolesOn] = useState(false);

  const [adminOn, setAdminOn] = useState(false);
  const [contributorOn, setContributorOn] = useState(false);

  const handleAdmin = () => {
    setAdminOn(true);
  };

  const handleContributor = () => {
    setContributorOn(true);
  };

  const handleCancelRole = () => {
    setAdminOn(false);
    setContributorOn(false);
  };

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setRolesOn(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="">
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-[#17191C66] bg-opacity-40 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
              <div className="bg-white w-[829px] h-[593px]">
                <div className="flex h-14 bg-[#F6F6F6] px-8 py-[1.375rem] justify-between justify-center items-center">
                  <p className="font-bold text-base">Edit User</p>
                  <button className="" onClick={handleCancelClick}>
                    <img
                      src={closeModal}
                      alt=" close icon"
                      className="w-7 h-7"
                    />
                  </button>
                </div>

                <div className="">
                  <form action="#" method="#" className="">
                    <div className="px-8">
                      <p className="my-6 text-lg font-bold">Details</p>
                      <div className="">
                        <div className="grid grid-cols-6 gap-5">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              class="text-xs font-bold leading-4"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="first-name"
                              class="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                              aria-required
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="text-xs font-bold leading-4"
                            >
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="last-name"
                              className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                              required
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="user-name"
                              className="text-xs font-bold leading-4"
                            >
                              User Name
                            </label>
                            <input
                              type="text"
                              name="user-name"
                              id="user-name"
                              autoComplete="user-name"
                              className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                              required
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="address"
                              className="text-xs font-bold leading-4"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              autoComplete="given-address"
                              className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="email"
                              className="text-xs font-bold leading-4"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="given-email"
                              className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="password"
                              className="text-xs font-bold leading-4"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              autoComplete="password"
                              className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="ml-8 mt-[34px]" ref={dropdownRef}>
                  <p className="text-xs font-bold leading-4">User’s roles</p>
                  <div className="relative w-[375px] h-[40px] border border-[#DCDCE4] rounded">
                    <div className=""></div>
                    <div className="absolute flex items-center justify-center gap-[4.8px] top-[12px] right-[12px]">
                      <button className="" onClick={handleCancelRole}>
                        <img src={clear} alt="clear" className="w-2.5 h-2.5" />
                      </button>
                      <button className="" onClick={() => setRolesOn(!rolesOn)}>
                        <img src={caret} alt="dropdown" className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex">
                      {adminOn && <SuperAdmin setAdminOn={setAdminOn} />}

                      {contributorOn && (
                        <Contributor setContributorOn={setContributorOn} />
                      )}
                    </div>

                    {rolesOn && (
                      <div
                        className="absolute z-10 flex flex-col items-center justify-between h-[135px] w-[140px] top-[28px] right-[2px] bg-white  rounded"
                        style={{
                          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.12)",
                        }}
                      >
                        <button
                          className="pl-[29px] py-3 flex font-medium text-sm w-full hover:bg-[#F5E4FF]"
                          onClick={handleAdmin}
                        >
                          <p className="justify-self-end">Super Admin</p>
                        </button>

                        <button
                          className="pl-[29px] py-3 flex font-medium text-sm w-full hover:bg-[#F5E4FF]"
                          onClick={handleContributor}
                        >
                          <p className="justify-self-end">Contributor</p>
                        </button>
                        <button className="pl-[29px] py-3 flex font-medium text-sm w-full hover:bg-[#F5E4FF]">
                          <p className="justify-self-end">Agent</p>
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="font-normal text-xs text-[#8A8B9F]">
                    A user can have one or several roles
                  </p>
                </div>

                <div className="flex h-14 bg-[#F6F6F6] px-8 py-4 justify-between mt-[73px] justify-center items-center">
                  <button
                    className="p-2 rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="p-2 rounded text-xs font-bold bg-[#8003CD] text-white"
                    onClick={handleProceedClick}
                  >
                    Invite user
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
