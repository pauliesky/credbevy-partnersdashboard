import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import danger from "../img/danger.png";
// import { useNavigate } from "react-router-dom";
import { logout } from "../../../_redux/thunks";
import { useDispatch, useSelector } from "react-redux";

const LogoutModal = ({ setLogoutModalOn, setLogoutChoice }) => {
  const { currentUser } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // navigate("/");

  const handleProceedClick = () => {
    if (currentUser) {
      setLogoutModalOn(false);
      setLogoutChoice(true);
      dispatch(logout());
    }
  };

  const handleCancelClick = () => {
    setLogoutModalOn(false);
    setLogoutChoice(false);
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
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-[80px]">
            <div className="bg-white w-[700px] h-[500px]">
              <div className="flex px-6 pt-[1.125rem] justify-end">
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt="close icon" className="w-8 h-8" />
                </button>
              </div>

              {/* <img src={danger} alt="danger icon" className="w-28 h-28 mx-auto" /> */}
              <div className="text-center mt-[42px]">
                <img
                  src={danger}
                  alt="danger icon"
                  className="w-28 h-28 mx-auto"
                />

                <p className="font-semibold mt-[3.375rem]">
                  Are you sure you want to Logout?
                </p>
                <div className="flex items-center justify-center">
                  <p className="text-sm text-[#8A8B9F] font-bold mt-6 w-[436px]">
                    For your security, we recommend closing your browser and
                    clearing your browsing history after logging out.
                  </p>
                </div>
              </div>

              <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-between mt-[87px] justify-center items-center">
                <button
                  className="p-2.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#DCDCE4] bg-white"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="p-2.5 rounded text-xs font-bold bg-[#FA4D56] text-white"
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

export default LogoutModal;
