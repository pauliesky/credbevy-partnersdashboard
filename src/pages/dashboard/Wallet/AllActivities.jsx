import React from "react";
import DataTable from "react-data-table-component";
import wallet from "../img/walletTopupImg.png";
import transfer from "../img/Transfer.png";
import WalletHeader from "./WalletHeader";

const columns = [
  {
    name: "Description",
    id: "description",
    selector: (row) => row.title,
    style: {
      // background: "blue",
      maxWidth: "133px",
      maxHeight: "32px",
    },
  },
  {
    name: "Amount",
    id: "amount",
    selector: (row) => row.amount,
  },
  {
    name: "Date",
    id: "date",
    selector: (row) => row.date,
  },
  {
    name: "Status",
    id: "status",
    selector: (row) => row.status,
  },
];

const data = [
  {
    id: 1,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img alt="topup" src={wallet}></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          Wallet top-up
        </div>
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[106px] text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: <div className="ml-[50px]"> 9/27/22</div>,
    status: (
      <div className=" flex flex-row justify-center items-center gap-[7px] rounded-[30px] h-[32px] w-[82px] bg-[#F1C21B66]">
        <div className=" w-[6px] h-[6px] rounded-full bg-[#F1C21B]"></div>
        <div
          className="text-[10px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          {" Pending "}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img alt="topup" src={transfer}></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          Transfer
        </div>
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[106px] text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: <div className="ml-[50px]"> 9/27/22</div>,
    status: (
      <div className=" flex flex-row justify-center items-center gap-[7px] rounded-[30px] h-[32px] w-[82px] bg-[#FA4D5666]">
        <div className=" w-[6px] h-[6px] rounded-full bg-[#FA4D56]"></div>
        <div
          className="text-[10px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          {" Failed "}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img alt="topup" src={wallet}></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          {" "}
          Wallet top-up
        </div>
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[106px] text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: <div className="ml-[50px]"> 9/27/22</div>,
    status: (
      <div className=" flex flex-row justify-center items-center gap-[7px] rounded-[30px] h-[32px] w-[82px] bg-[#F1C21B66]">
        <div className=" w-[6px] h-[6px] rounded-full bg-[#F1C21B]"></div>
        <div
          className="text-[10px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          {" Pending "}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img alt="topup" src={transfer}></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          Transfer
        </div>
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[106px] text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: <div className="ml-[50px]"> 9/27/22</div>,
    status: (
      <div className=" flex flex-row justify-center items-center gap-[7px] rounded-[30px] h-[32px] w-[82px] bg-[#FA4D5666]">
        <div className=" w-[6px] h-[6px] rounded-full bg-[#FA4D56]"></div>
        <div
          className="text-[10px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          {" Failed "}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: (
      <div className="flex flex-row justify-center gap-[16px] items-[center]">
        <img alt="topup" src={wallet}></img>
        <div
          className="flex items-center text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px]  text-[#333333]"
        >
          Repayment
        </div>
      </div>
    ),
    amount: (
      <div
        className=" flex gap-1 ml-[106px] text-[14px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
      >
        <p>₦</p> 134,000.00
      </div>
    ),
    date: <div className="ml-[50px]"> 9/27/22</div>,
    status: (
      <div className=" flex flex-row justify-center items-center gap-[7px] rounded-[30px] h-[32px] w-[82px] bg-[#C2FED3]">
        <div className=" w-[6px] h-[6px] rounded-full bg-[#42BE65]"></div>
        <div
          className="text-[10px] font-[Manrope] font-[600]
        leading-[24px] tracking-[-0.5px] text-[#333333]"
        >
          {" Completed "}
        </div>
      </div>
    ),
  },
];

const customStyles = {
  headCells: {
    style: {
      maxHeight: "42px",
      // background: "red",
    },
  },
  headRow: {
    style: {
      minHeight: "42px",
      border: "1px solid #E5EAEF",
      borderTop: "none",
    },
  },
  cells: {
    style: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
};

function AllActivities({ onNext, onTab }) {
  return (
    <>
      <WalletHeader page={0} onNext={(value) => onTab(value)} />
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </>
  );
}

export default AllActivities;
