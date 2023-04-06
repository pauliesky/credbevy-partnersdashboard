import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import Checkbox2 from "../checkbox2/Checkbox2";

export default function RoleModal({ setRoleModalOn, setRoleChoice }) {
  const handleProceedClick = () => {
    setRoleModalOn(false);
    setRoleChoice(true);
  };

  const handleCancelClick = () => {
    setRoleModalOn(false);
    setRoleChoice(false);
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
                <p className="font-bold text-base">Edit Admin Role</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-7 h-7" />
                </button>
              </div>

              <div className="px-8">
                <form action="#" method="POST" className="">
                  <div className="">
                    <p className="my-6 text-lg font-bold">Details</p>
                    <div className="">
                      <div className="grid grid-cols-6 gap-5">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            class="text-xs font-bold leading-4"
                          >
                            Role Name
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
                            Description
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
                      </div>
                    </div>
                  </div>
                </form>
                <p className="mt-7 mb-4 text-lg font-bold">Permissions</p>
                <div className="flex gap-[181px]">
                  <div className="">
                    <p className="text-xs font-semibold text-[#8A8B9F] mb-3">
                      ROLES
                    </p>
                    <div className="flex flex-col gap-4">
                      <p className="font-semibold text-sm">New roles</p>
                      <p className="font-semibold text-sm">Analytics</p>
                      <p className="font-semibold text-sm">
                        View loan requests
                      </p>
                      <p className="font-semibold text-sm">Settings</p>
                      <p className="font-semibold text-sm">Settings</p>
                      <p className="font-semibold text-sm">Settings</p>
                    </div>
                  </div>
                  <div className="flex gap-24">
                    <div className="flex flex-col items-center gap-3">
                      <h1 className="font-bold text-xs text-[#8A8B9F]">
                        CREATE
                      </h1>
                      <Checkbox2 />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <h1 className="font-bold text-xs text-[#8A8B9F]">READ</h1>
                      <Checkbox2 />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <h1 className="font-bold text-xs text-[#8A8B9F]">
                        UPDATE
                      </h1>
                      <Checkbox2 />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <h1 className="font-bold text-xs text-[#8A8B9F]">
                        DELETE
                      </h1>
                      <Checkbox2 />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-14 bg-[#F6F6F6] px-8 py-4 justify-between mt-[43px] justify-center items-center">
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
