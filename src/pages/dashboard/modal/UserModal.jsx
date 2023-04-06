import React, { useState } from "react";
import closeModal from "../img/closeModal.png";

export default function UserModal({ setUserModalOn, setUserChoice }) {
  const handleProceedClick = () => {
    setUserModalOn(false);
    setUserChoice(true);
  };

  const handleCancelClick = () => {
    setUserModalOn(false);
    setUserChoice(false);
  };

  return (
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
                  <img src={closeModal} alt=" close icon" className="w-7 h-7" />
                </button>
              </div>

              <div className="">
                <form action="#" method="POST" className="">
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

              {/* <div className="grid grid-cols-6 mt-[2.125rem] px-8">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="text-xs font-bold leading-4"
                  >
                    User’s roles
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="given-address"
                    className="block w-full font-normal rounded border border-solid border-[#DCDCE4] px-4 py-1.5 text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div> */}

              <div className="flex h-14 bg-[#F6F6F6] px-8 py-4 justify-between mt-[179px] justify-center items-center">
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
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
