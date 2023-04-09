import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import card from "../img/card.png";
import apple from "../img/apple.png";
import paypal from "../img/paypal.png";
import ellipsePayment from "../img/ellipsePayment.png";

const AddModal = ({ setAddModalOn, setAddChoice }) => {
  const handleProceedClick = () => {
    setAddChoice(true);
    setAddModalOn(false);
  };

  const handleCancelClick = () => {
    setAddChoice(false);
    setAddModalOn(false);
    console.log("click");
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
          <div className="relative transform overflow-hidden rounded-lg bg-white mt-[89px] text-left shadow-xl transition-all">
            <div className="bg-white w-[633px] h-[494px]">
              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between">
                <p className="font-bold text-base">Upload Document</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-8 h-8" />
                </button>
              </div>

              <div className="flex items-center justify-center my-[117px]">
                <div className="flex flex-col justify-center items-center gap-2 w-[375px] h-[127px] border border-dashed border-[#DCDCE4] mt-px">
                  <p className="font-bold text-sm text-[#8A8B9F]">
                    Drag & Drop
                  </p>
                  <div className="flex items-center justify-center">
                    <p className="text-[10px] text-[#8A8B9F] font-medium">
                      Your files here or
                    </p>
                    <label
                      htmlFor="file-upload"
                      class="cursor-pointer pl-1 text-[10px] font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
                    >
                      <span>browse</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between mt-[10px] justify-center items-center">
                <button
                  className="p-2.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="p-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                  onClick={handleProceedClick}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
