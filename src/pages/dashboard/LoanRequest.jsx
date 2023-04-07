import React, { useState } from "react";
import closeCircle from "./img/closeCircle.png";
import tickCircle from "./img/tickCircle.png";
import requestImg from "./img/requestImg.png";
import eye from "./../login/img/eye.png";
import download from "./img/download.png";
import purpleTick from "./img/purpleTick.png";
import infoCircle from "./img/infoCircle.png";
import DataTable from "react-data-table-component";
import TripleItem1 from "./dropdown/TripleItem1";
import TripleItem2 from "./dropdown/TripleItem2";
import closeModal from "./img/closeModal.png";
import AcceptModal from "./modal/AcceptModal";
import DeleteModal from "./modal/DeleteModal";
import { useNavigate } from "react-router-dom";

export default function LoanRequest() {
  const navigate = useNavigate();

  const handleViewDetails = (item) => {
    navigate(`/loanrequest/${item.id}`, { state: { requestDetails: item } });
  };

  const [acceptModalOn, setAcceptModalOn] = useState(false);
  const [acceptChoice, setAcceptChoice] = useState(false);

  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const [deleteChoice, setDeleteChoice] = useState(false);

  const handleConfirmClick = () => {
    setAcceptChoice(true);
    setAcceptModalOn(false);
  };

  const handleDoneClick = () => {
    setAcceptModalOn(false);
  };

  const handleCancelClick = () => {
    setAcceptChoice(false);
    setAcceptModalOn(false);
  };

  const clicked1 = () => {
    setAcceptModalOn(true);
  };

  const clicked3 = () => {
    setDeleteModalOn(true);
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "73px",
      },
    },

    headCells: {
      style: {
        fontWeight: 700,
        fontSize: "0.875rem",
        color: "#8A8B9F",
      },
    },
  };
  const columns = [
    {
      name: "Full Name",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <img src={requestImg} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.fullName}</div>
        </div>
      ),
      width: "210px",
    },
    {
      name: "Email",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.email}</div>
      ),
      width: "240px",
    },
    {
      name: "Address",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.address}</div>
      ),
      width: "220px",
    },
    {
      name: "C.S",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#42BE65]">{row.cs}</div>
      ),
      width: "57px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.amount}</div>
      ),
      width: "120px",
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="flex gap-10">
          <div className="text-sm font-semibold">{row.date}</div>
          <TripleItem1
            img1={eye}
            img2={download}
            img3={infoCircle}
            button1={"View"}
            button2={"Download"}
            button3={"Send to Recova"}
            onClick1={() => handleViewDetails(row)}
          />
        </div>
      ),
      width: "140px",
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 2,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 3,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 4,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 5,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 6,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 7,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
    {
      id: 8,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      cs: 750,
      amount: "₦ 134,000.00",
      date: "9/27/22",
    },
  ];

  return (
    <div className="p-5 mt-6">
      <div className="font-bold text-[34px] leading-9 mb-8">Loan Request</div>
      {/* LOAN REQUESTED TABLE */}
      <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-[36px] mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <div className="flex items-center justify-center gap-[0.9375rem]">
            <p className="text-sm font-bold text-[#8A8B9F]">New Request</p>
            <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
              48 request
            </p>
          </div>
          <div className="flex gap-2.5 border p-2 border-black rounded">
            <p className="text-xs font-bold">Bulk actions</p>
            <TripleItem2
              img1={tickCircle}
              img2={download}
              img3={closeCircle}
              button1={"Accept selected"}
              button2={"Download selected"}
              button3={"Decline selected"}
              onClick1={clicked1}
              onClick3={clicked3}
            />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          striped
          selectableRows
          responsive
        />
      </div>
      {acceptModalOn && (
        <AcceptModal
          setAcceptModalOn={setAcceptModalOn}
          setAcceptChoice={setAcceptChoice}
        />
      )}
      {acceptChoice && (
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
                <div className="bg-white w-[700px] h-[480px]">
                  <div className="flex px-6 pt-[1.125rem] justify-end">
                    <button className="" onClick={handleCancelClick}>
                      <img
                        src={closeModal}
                        alt="close icon"
                        className="w-8 h-8"
                      />
                    </button>
                  </div>

                  {/* <img src={danger} alt="danger icon" className="w-28 h-28 mx-auto" /> */}
                  <div className="text-center mt-[42px]">
                    <img
                      src={purpleTick}
                      alt="danger icon"
                      className="w-28 h-28 mx-auto"
                    />

                    <p className="font-semibold mt-[50px]">Successful!</p>
                    <p className="text-sm text-[#8A8B9F] font-bold mt-6">
                      ₦ 134,000.00 is on its way to Timilehin Oripeloye
                    </p>
                  </div>

                  <div className="flex h-[67px] bg-[#F6F6F6] p-6 justify-end mt-[91px] items-center">
                    <button
                      className="p-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                      onClick={handleDoneClick}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {deleteModalOn && (
        <DeleteModal
          setDeleteModalOn={setDeleteModalOn}
          setDeleteChoice={setDeleteChoice}
        />
      )}
    </div>
  );
}
