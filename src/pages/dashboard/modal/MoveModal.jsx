import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import folderCloud from "../img/folderCloud.png";
import searchNormal from "./../../../components/shared/img/searchNormal.png";
// import card from "../img/card.png";
// import apple from "../img/apple.png";
// import paypal from "../img/paypal.png";
// import ellipsePayment from "../img/ellipsePayment.png";
import CreateModal from "./CreateModal";

const MoveModal = ({ setModalOn, setChoice }) => {
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  const handleMoveClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  const handleCreateClick = () => {
    setChoice(true);
    setModalOn(false);
  };

  const [isChildModalOpen, setIsChildModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsChildModalOpen(false);
  };

  const clicked = () => {
    setIsChildModalOpen(true);
  };

  // const openChildModal = () => {
  //   setIsChildModalOpen(true);
  // };

  // const closeChildModal = () => {
  //   setIsChildModalOpen(false);
  // };

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
            <div className="bg-white w-[636px] h-[590px]">
              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between">
                <p className="font-bold text-base">Move Document</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt=" close icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="px-8 mt-4">
                <p className="font-bold text-xs text-[#8A8B9F] mb-4">
                  Quick move
                </p>
                <div className="flex border border-[#dee2e6] rounded-md items-center gap-2 pl-5 mb-10 w-full h-[46px]">
                  <img
                    src={searchNormal}
                    alt="search icon"
                    className="w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Search for Name"
                    className="outline-none text-xs font-bold"
                  />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center justify-center gap-4 border border-[#E5EAEF] rounded px-4 py-6">
                    <img
                      src={folderCloud}
                      alt="folder cloud"
                      className="w-4 h-4"
                    />
                    <p className="text-sm font-bold">KYC Documents</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 border border-[#E5EAEF] rounded px-4 py-6">
                    <img
                      src={folderCloud}
                      alt="folder cloud"
                      className="w-4 h-4"
                    />
                    <p className="text-sm font-bold">KYC Documents</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 border border-[#E5EAEF] rounded px-4 py-6">
                    <img
                      src={folderCloud}
                      alt="folder cloud"
                      className="w-4 h-4"
                    />
                    <p className="text-sm font-bold">KYC Documents</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 border border-[#E5EAEF] rounded px-4 py-6">
                    <img
                      src={folderCloud}
                      alt="folder cloud"
                      className="w-4 h-4"
                    />
                    <p className="text-sm font-bold">KYC Documents</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 border border-[#E5EAEF] rounded px-4 py-6">
                    <img
                      src={folderCloud}
                      alt="folder cloud"
                      className="w-4 h-4"
                    />
                    <p className="text-sm font-bold">KYC Documents</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 border border-[#E5EAEF] rounded px-4 py-6">
                    <img
                      src={folderCloud}
                      alt="folder cloud"
                      className="w-4 h-4"
                    />
                    <p className="text-sm font-bold">KYC Documents</p>
                  </div>
                </div>
              </div>

              <div className="flex h-[67px] bg-[#F6F6F6] p-6 mt-[158px] justify-between justify-center items-center">
                <button
                  className="p-2.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
                  onClick={clicked}
                >
                  Create New Folder
                </button>
                {/* {isChildModalOpen && (
                  <div className="">
                    <CreateModal onClose={handleCloseModal} />
                  </div>
                )} */}
                <button
                  className="p-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                  onClick={handleMoveClick}
                >
                  Move
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveModal;
