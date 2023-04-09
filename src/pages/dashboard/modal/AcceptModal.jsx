import React, { useState } from "react";
import closeModal from "../img/closeModal.png";

const FundModal = ({ setAcceptModalOn, setAcceptChoice }) => {
  const handleConfirmClick = () => {
    setAcceptChoice(true);
    setAcceptModalOn(false);
  };

  const handleCancelClick = () => {
    setAcceptChoice(false);
    setAcceptModalOn(false);
  };

  const inputs = document.querySelectorAll("input");
  // button = document.querySelector("button");

  inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
      const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

      if (currentInput.value.length > 1) {
        currentInput.value = "";
        return;
      }

      if (
        nextInput &&
        nextInput.hasAttribute("disabled") &&
        currentInput.value !== ""
      ) {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }

      if (e.key === "Backspace") {
        inputs.forEach((input, index2) => {
          if (index1 <= index2 && prevInput) {
            input.setAttribute("disabled", true);
            input.value = "";
            prevInput.focus();
          }
        });
      }
    });
  });

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
          <div className="relative mt-[93px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="bg-white w-[700px] h-[480px]">
              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between">
                <p className="font-bold text-base">Accept Request</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-8 h-8" />
                </button>
              </div>

              <form
                action="#"
                className="mt-[78px]"
                onSubmit={handleConfirmClick}
              >
                <p className="font-bold text-base text-center">
                  Input your transaction PIN to process request
                </p>
                <div className="flex items-center justify-center gap-[3.25rem] mt-10">
                  <input
                    type="number"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-20 h-20 font-medium text-[34px] text-center border-4 border-[#D9D9D9] rounded-[0.9375rem] outline-none"
                  />
                  <input
                    type="number"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-20 h-20 font-medium text-[34px] text-center border-4 border-[#D9D9D9] rounded-[0.9375rem] outline-none"
                    disabled
                  />
                  <input
                    type="number"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-20 h-20 font-medium text-[34px] text-center border-4 border-[#D9D9D9] rounded-[0.9375rem] outline-none"
                    disabled
                  />
                  <input
                    type="number"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-20 h-20 font-medium text-[34px] text-center border-4 border-[#D9D9D9] rounded-[0.9375rem] outline-none"
                    disabled
                  />
                </div>

                <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-end mt-[124px] justify-end items-center">
                  <button
                    className="p-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                    type="submit"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundModal;
