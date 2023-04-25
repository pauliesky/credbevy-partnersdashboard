import React from "react";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FundModal from "./modal/FundModal";
import closeModal from "./img/closeModal.png";
import arrowLeft from "./img/arrowLeft.png";
import arrowDown from "./img/arrowDown.png";
import add from "./img/add.png";
import { useState } from "react";

function DashboardHero() {
  const [display, setDisplay] = useState(true);
  const [fundModalOn, setFundModalOn] = useState(false);
  const [fundChoice, setFundChoice] = useState(false);

  const clicked = () => {
    setFundModalOn(true);
  };

  const handleProceedClick = () => {
    setFundChoice(true);
    setFundModalOn(false);
  };

  const handleCancelClick = () => {
    setFundChoice(false);
    setFundModalOn(false);
  };

  return (
    <>
      <div className="h-[210px] overflow-hidden relative pt-2 w-[1030px] mt-8 bg-[#8003CD] rounded-[8px]">
        <div className=" absolute left-[55rem] top-[6rem]">
          {display ? (
            <VisibilityIcon
              onClick={() => {
                setDisplay(!display);
              }}
              style={{ color: "white", cursor: "pointer" }}
            />
          ) : (
            <VisibilityOffIcon
              onClick={() => {
                setDisplay(!display);
              }}
              style={{ color: "white", cursor: "pointer" }}
            />
          )}
        </div>
        <div className="w-[252px]  h-[252px] rounded-full absolute bg-[#9C1AEB]   left-[55rem] top-[4rem] "></div>
        <div className="w-[252px]  h-[252px] rounded-full absolute bg-[#9C1AEB]  left-[40rem] bottom-[8rem]"></div>

        {/* SECTION-1 */}
        <div className="container mt-8 ml-8 w-[280px] h-[140px]">
          <div className=" text-[#FFFFFF] tracking-[-0.5px]  text-[14px] h-[24] w-[94]  font-[700] font-[Manrope]">
            Wallet Balance
          </div>
          <div className=" w-[1000] mt-1 flex">
            <div
              className="w-[300px] h-[36] font-[400] 
              text-[#FFFFFF]
              text-[34px] leading-[36px] "
            >
              {display ? (
                // `${430 + "," + 434 + "," + 684.54}`
                <p className="w-[300px] ">₦ 430,434,684.54</p>
              ) : (
                "XXX,XXX,XXX,XX"
              )}
            </div>
          </div>
          <button
            className="bg-white h-[32] mt-[25px] w-[92] hover:cursor-pointer rounded-[4px] flex flex-row justify-center gap-1 py-[8px] px-[10px] font-[Manrope] text-[13px] font-[700] text-center text-[#333333] tracking-[-0.5px]"
            onClick={clicked}
          >
            <AddIcon style={{ fontSize: "20px" }} /> Fund Wallet
          </button>{" "}
        </div>
      </div>
      {fundChoice && (
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
                  <div className="bg-white w-[829px] h-[589px]">
                    <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between">
                      <button className="">
                        <img
                          src={arrowLeft}
                          alt="arrow-left"
                          className="w-6 h-6"
                          onClick={clicked}
                        />
                      </button>
                      <button className="" onClick={handleCancelClick}>
                        <img
                          src={closeModal}
                          alt=" close icon"
                          className="w-8 h-8"
                        />
                      </button>
                    </div>
                    <div className="pl-[183px] pr-[182px]">
                      <div className="mt-10 font-bold text-lg leading-[1.375rem] text-center">
                        Debit Card
                      </div>
                      <div className="flex flex-col mt-8">
                        <div className="flex py-[1.125rem] px-4 justify-between rounded-2xl bg-[#F5F5F5]">
                          <p className="font-semibold text-sm">Amount</p>
                        </div>

                        <div className="flex py-[1.125rem] px-4 mt-5 justify-between rounded-2xl bg-[#F5F5F5]">
                          <p className="font-semibold text-sm">
                            Choose Debit Card
                          </p>
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="flex items-center mt-7 gap-2">
                          <img
                            src={add}
                            alt="add"
                            className="w-6 h-6"
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(19%) sepia(70%) saturate(4770%) hue-rotate(273deg) brightness(76%) contrast(124%)",
                            }}
                          />
                          <p className="font-semibold text-sm text-[#8003CD]">
                            Add New Debit Card
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-[67px] bg-[#F6F6F6] px-6 justify-between mt-[173px] justify-center items-center">
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
        </div>
      )}
      {fundModalOn && (
        <FundModal
          setFundModalOn={setFundModalOn}
          setFundChoice={setFundChoice}
        />
      )}
    </>
  );
}

export default DashboardHero;
