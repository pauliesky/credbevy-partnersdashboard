import React, { useState } from "react";

import TabView from "./TabView/TabView";
import FundModal from "./modal/FundModal";
import ellipseWalletTop from "./img/ellipseWalletTop.png";
import arrowLeft from "./img/arrowLeft.png";
import arrowDown from "./img/arrowDown.png";
import ellipseWalletRight from "./img/ellipseWalletRight.png";
import add from "./img/add.png";
import LoanDisbursed from "./LoanDisbursed";
import closeModal from "./img/closeModal.png";

export default function Wallet() {
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

  const LoanDis = <LoanDisbursed />;

  return (
    <div className="p">
      <div className="w-full">
        <div className="p-5 mt-6">
          <div className="font-bold text-[34px] mb-4">Wallet</div>
          <div className="relative wallet bg-[#8003CD] h-[210px] rounded-lg">
            <p className="text-white pt-[35px] pl-[40px] text-sm font-bold">
              Wallet Balance
            </p>
            <p className="mt-[6px] pl-[40px] text-white text-[34px] font-weight">
              ₦ 430,434,684.54
            </p>
            <button
              className="bg-white flex gap-2 py-2 px-2.5 items-center justify-center rounded ml-[40px] inline-block mt-[32px]"
              onClick={clicked}
            >
              <img src={add} alt="add icon" className="w-4 h-4" />
              <p className="font-bold text-[0.625rem]">FundWallet</p>
            </button>
            {fundChoice && (
              <div className="p">
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
            {modalOn && (
              <FundModal
                setFundModalOn={setFundModalOn}
                setFundChoice={setFundChoice}
              />
            )}
            {}
            <div
              className=""
              style={{
                position: "absolute",
                width: "252px",
                height: "54px",
                top: "0px",
                right: "151px",
              }}
            >
              <img src={ellipseWalletTop} alt="ellipse" />
            </div>
            <div className="absolute w-[147px] h-[53px] top-[53px] left-[890px]">
              <img
                src={ellipseWalletRight}
                alt="ellipse"
                className="rounded-br-lg"
              />
            </div>
          </div>

          {/* WALLET ACTIVITIES */}
          <div className="mt-10" style={{ marginBottom: "20px" }}>
            <TabView
              title={"Recent Wallet Activities"}
              tabs={[
                { name: "All Activities", content: "All Activities" },
                { name: "Wallet Top Up", content: " Wallet Top Up" },
                { name: "Loan Disbursed", content: LoanDis },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function TripleListItem({
//   img1,
//   img2,
//   img3,
//   button1,
//   button2,
//   button3,
//   onClick1,
//   onClick2,
// }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <button className="">
//       <div
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="relative flex flex-col gap-1"
//       >
//         <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
//         <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
//         <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
//       </div>
//       {isOpen && (
//         <div
//           className="absolute z-50 flex flex-col items-start justify-between h-[144px] w-[144px] top-[46px] right-[18px] bg-white px-4 py-6 rounded"
//           style={{ boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)" }}
//         >
//           <button
//             className="flex items-center justify-center gap-2"
//             onClick={onClick1}
//           >
//             <img src={img1} alt="eye" className="w-4 h-4" />
//             <p className="text-xs font-semibold text-[#8A8B9F]">{button1}</p>
//           </button>
//           <button
//             className="flex items-center justify-center gap-2"
//             onClick={onClick2}
//           >
//             <img src={img2} alt="download" className="w-4 h-4" />
//             <p className="text-xs font-semibold text-[#8A8B9F]">{button2}</p>
//           </button>
//           <button className="flex items-center justify-center gap-2">
//             <img src={img3} alt="download" className="w-4 h-4" />
//             <p className="text-xs font-semibold text-[#8A8B9F]">{button3}</p>
//           </button>
//         </div>
//       )}
//     </button>
//   );
// }
