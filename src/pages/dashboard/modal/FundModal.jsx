import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import card from "../img/card.png";
import apple from "../img/apple.png";
import paypal from "../img/paypal.png";
import ellipsePayment from "../img/ellipsePayment.png";

const FundModal = ({ setModalOn, setChoice }) => {
  const handleProceedClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
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
            <div className="bg-white w-[829px] h-[589px]">
              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between">
                <p className="font-bold text-base">Fund Wallet</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="pl-[183px] pr-[182px]">
                <div className="mt-10 font-bold text-lg leading-[1.375rem] text-center">
                  Choose your preferred means of funding wallet
                </div>
                <div className="flex flex-col mt-8 gap-6">
                  <div className="flex py-[1.125rem] px-4 justify-between rounded-2xl bg-[#F5F5F5]">
                    <div className="flex gap-[1.125rem] justify-center items-center">
                      <img
                        src={card}
                        alt="card icon"
                        className="w-[20px] h-[17px]"
                      />
                      <p className="font-semibold text-sm">Debit card</p>
                    </div>
                    <img
                      src={ellipsePayment}
                      alt="ellipse"
                      className="w-4 h-4"
                    />
                  </div>

                  <div className="flex py-[1.125rem] px-4 justify-between rounded-2xl bg-[#F5F5F5]">
                    <div className="flex gap-[1.125rem] justify-center items-center">
                      <img
                        src={apple}
                        alt="apple icon"
                        className="w-[20px] h-[17px]"
                      />
                      <p className="font-semibold text-sm">Apple Pay</p>
                    </div>
                    <img
                      src={ellipsePayment}
                      alt="ellipse"
                      className="w-4 h-4"
                    />
                  </div>

                  <div className="flex py-[1.125rem] px-4 justify-between rounded-2xl bg-[#F5F5F5]">
                    <div className="flex gap-[1.125rem] justify-center items-center">
                      <img
                        src={paypal}
                        alt="paypal icon"
                        className="w-[20px] h-[17px]"
                      />
                      <p className="font-semibold text-sm">PayPal</p>
                    </div>
                    <img
                      src={ellipsePayment}
                      alt="ellipse"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between mt-[145px] justify-center items-center">
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
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundModal;
