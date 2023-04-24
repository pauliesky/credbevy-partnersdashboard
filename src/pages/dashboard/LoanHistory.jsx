import React, { useState, useEffect, useRef } from "react";
import arrowDown from "./img/arrowDown.png";
import requestImg from "./img/requestImg.png";
import eye from "../login/img/eye.png";
import closeCircle from "./img/closeCircle.png";
import download from "./img/download.png";
import infoCircle from "./img/infoCircle.png";
import Checkbox3 from "./checkbox3/Checkbox3";
import DataTable from "react-data-table-component";
import TripleItem1 from "./dropdown/TripleItem1";

export default function LoanRequest() {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenAmount, setIsOpenAmount] = useState(false);
  const [isOpenBulk, setIsOpenBulk] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenStatus(false);
        setIsOpenAmount(false);
        setIsOpenBulk(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

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
      name: "Loan Product",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.loanProduct}</div>
      ),
      width: "138px",
    },
    {
      name: "Amount loaned",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.amountLoaned}</div>
      ),
      width: "140px",
    },
    {
      name: "Date",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.date}</div>
      ),
      width: "100px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex gap-[25px]">
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-[#FF3A29] rounded-full"></div>
            <div className="text-sm font-semibold">{row.status}</div>
          </div>
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
      width: "130px",
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 2,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 3,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 4,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 5,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 6,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 7,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
    {
      id: 8,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      loanProduct: "Silver",
      amountLoaned: "₦ 134,000.00",
      date: "9/27/22",
      status: "Overdue",
    },
  ];

  return (
    <div className="">
      <div className="p-5 mt-6">
        <div className="font-bold text-[34px] leading-9">Loan History</div>
        {/* LOAN REQUESTED TABLE */}
        <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-8 mb-20">
          <div className="" ref={dropdownRef}>
            <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
              <div className="flex gap-5">
                <div className="relative flex border border-[#e9ecef] rounded-sm items-center justify-center gap-2 px-2 h-[37px]">
                  <p className="text-sm text-[#8A8B9F] font-bold">
                    Filter by all
                  </p>
                  <button
                    className=""
                    onClick={() => setIsOpenStatus((prev) => !prev)}
                  >
                    <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
                  </button>
                  {isOpenStatus && (
                    <div
                      className="absolute z-50 flex flex-col items-start justify-between h-[144px] w-[110px] top-[43px] right-[2px] bg-white px-4 py-6 rounded"
                      style={{
                        boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)",
                      }}
                    >
                      <button className="flex items-center justify-center gap-1">
                        <div className="w-2 h-2 bg-[#42BE65] rounded-full"></div>
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          Completed
                        </p>
                      </button>
                      <button className="flex items-center justify-center gap-1">
                        <div className="w-2 h-2 bg-[#8003CD] rounded-full"></div>
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          Active
                        </p>
                      </button>
                      <button className="flex items-center justify-center gap-1">
                        <div className="w-2 h-2 bg-[#FF3A29] rounded-full"></div>
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          Overdue
                        </p>
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative flex border border-[#e9ecef] rounded-sm items-center justify-center gap-2 px-2 h-[37px]">
                  <p className="text-sm text-[#8A8B9F] font-bold">
                    Filter by amount
                  </p>
                  <button
                    className=""
                    onClick={() => setIsOpenAmount((prev) => !prev)}
                  >
                    <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
                  </button>
                  {isOpenAmount && (
                    <div
                      className="absolute z-50 flex flex-col items-start justify-between h-[144px] w-[243px] top-[43px] left-[0] bg-white px-4 py-6 rounded"
                      style={{
                        boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)",
                      }}
                    >
                      <button className="flex items-center justify-center gap-1">
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          ₦ 10,000.00 - ₦ 50,000.00
                        </p>
                      </button>
                      <button className="flex items-center justify-center gap-1">
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          ₦ 50,000.00 - ₦ 100,000.00
                        </p>
                      </button>
                      <button className="flex items-center justify-center gap-1">
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          ₦ 100,000.00 - ₦250,000.00
                        </p>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex border border-[#e9ecef] rounded-sm items-center justify-center gap-2 px-2 h-[37px]">
                  <p className="text-sm text-[#8A8B9F] font-bold">
                    Filter by loan product
                  </p>
                  <button className="">
                    <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex border border-[#e9ecef] rounded-sm items-center justify-center gap-2 px-2 h-[37px]">
                  <p className="text-sm text-[#8A8B9F] font-bold">
                    Filter by date
                  </p>
                  <button className="">
                    <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                className="flex gap-2.5 border p-2 border-black rounded"
                onClick={() => setIsOpenBulk((prev) => !prev)}
              >
                <p className="text-xs font-bold">Bulk actions</p>

                <img src={arrowDown} alt="arrow-down" className="w-4 h-4" />

                {isOpenBulk && (
                  <div className="">
                    <div
                      className="absolute z-10 flex flex-col items-start justify-between w-[197px] h-[104px] top-[254px] right-[51px] bg-white px-4 py-6 rounded"
                      style={{
                        boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)",
                      }}
                    >
                      <button className="flex flex-nowrap items-center justify-center gap-2">
                        <img src={download} alt="eye" className="w-4 h-4" />
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          Download selected
                        </p>
                      </button>
                      <button className="flex flex-nowrap items-center justify-center gap-2">
                        <img
                          src={closeCircle}
                          alt="download"
                          className="w-4 h-4"
                        />
                        <p className="text-xs font-semibold text-[#8A8B9F]">
                          Send selected to Recova
                        </p>
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
          <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            striped
            selectableRows
            selectableRowsComponent={Checkbox3}
            responsive
          />
        </div>
        ;
      </div>
    </div>
  );
}
