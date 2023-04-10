import React from "react";
import DataTable from "react-data-table-component";
import WalletHeader from "./WalletHeader";
import LoanDisbursedImg from "../img/requestImg.png";

const columns = [
  {
    name: "Reciever",
    id: "description",
    selector: (row) => row.title,
    style: {
      maxWidth: "168px",
      maxHeight: "32px",
    },
  },
  {
    name: "C.S",
    id: "cs",
    selector: (row) => row.cs,
    style: {
      maxWidth: "168px",
      maxHeight: "32px",
    },
  },
  {
    name: "Amount",
    id: "disbursed__amount",
    selector: (row) => row.amount,
    style: {
      maxWidth: "100px",
      maxHeight: "32px",
    },
  },
  {
    name: "Date",
    id: "disbursed__date",
    selector: (row) => row.date,
  },
];

const data = [
  {
    id: 1,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img
          className="h-[32px] w-[32px]"
          alt="topup"
          src={LoanDisbursedImg}
        ></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          Oripeloye Timilehin
        </div>
      </div>
    ),
    cs: (
      <div className="ml-[58px] font-[Manrope] tracking-[-0.5px] font-[600] text-[14px] text-[#42BE65]">
        750
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[0px] text-[14px]  font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: (
      <div className="ml-[20px] font-[Manrope] font-[600] text-[24] tracking-[-0.5px] text-[#333333]">
        {" "}
        9/27/22
      </div>
    ),
  },
  {
    id: 2,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img
          className="h-[32px] w-[32px]"
          alt="topup"
          src={LoanDisbursedImg}
        ></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          Oripeloye Timilehin
        </div>
      </div>
    ),
    cs: (
      <div className="ml-[58px] font-[Manrope] tracking-[-0.5px] font-[600] text-[14px] text-[#42BE65]">
        750
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[0px] text-[14px]  font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: (
      <div className="ml-[20px] font-[Manrope] font-[600] text-[24] tracking-[-0.5px] text-[#333333]">
        {" "}
        9/27/22
      </div>
    ),
  },
  {
    id: 3,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img
          className="h-[32px] w-[32px]"
          alt="topup"
          src={LoanDisbursedImg}
        ></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          {" "}
          Oripeloye Timilehin
        </div>
      </div>
    ),
    cs: (
      <div className="ml-[58px] font-[Manrope] tracking-[-0.5px] font-[600] text-[14px] text-[#42BE65]">
        750
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[0px] text-[14px]  font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: (
      <div className="ml-[20px] font-[Manrope] font-[600] text-[24] tracking-[-0.5px] text-[#333333]">
        {" "}
        9/27/22
      </div>
    ),
  },
  {
    id: 4,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img
          className="h-[32px] w-[32px]"
          alt="topup"
          src={LoanDisbursedImg}
        ></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          Oripeloye Timilehin
        </div>
      </div>
    ),
    cs: (
      <div className="ml-[58px] font-[Manrope] tracking-[-0.5px] font-[600] text-[14px] text-[#42BE65]">
        750
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[0px] text-[14px]  font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>{"₦"}</p> {" 134,000.00"}
      </div>
    ),
    date: (
      <div className="ml-[20px] font-[Manrope] font-[600] text-[24] tracking-[-0.5px] text-[#333333]">
        9/27/22
      </div>
    ),
  },
  {
    id: 5,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img
          className="h-[32px] w-[32px]"
          alt="topup"
          src={LoanDisbursedImg}
        ></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          Oripeloye Timilehin
        </div>
      </div>
    ),
    cs: (
      <div className="ml-[58px] font-[Manrope] tracking-[-0.5px] font-[600] text-[14px] text-[#42BE65]">
        750
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[0px] text-[14px]  font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: (
      <div className="ml-[20px] font-[Manrope] font-[600] text-[24] tracking-[-0.5px] text-[#333333]">
        {"9/27/22 "}
      </div>
    ),
  },
];

const customStyles = {
  headCells: {
    style: {
      maxHeight: "42px",
    },
  },
  headRow: {
    style: {
      minHeight: "42px",
      border: "1px solid #E5EAEF",
      borderTop: "none",
      // background: "red",
    },
  },
  cells: {
    style: {
      paddingLeft: "0px",
      paddingRight: "0px",
      // background: "red",
    },
  },
};

function LoanDisbursed({  onTab }) {
  return (
    <>
      <WalletHeader page={2} onNext={(value) => onTab(value)} />
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </>
  );
}

export default LoanDisbursed;
