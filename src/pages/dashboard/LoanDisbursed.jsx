import React from "react";
import requestImg from "./img/requestImg.png";
import DataTable from "react-data-table-component";

export default function PartnerWallet() {
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
      name: "Receiver",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center pl-3">
          <img src={requestImg} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.receiver}</div>
        </div>
      ),
      width: "240px",
    },
    {
      name: "C.S",
      selector: (row) => (
        <div className="text-sm font-semibold text-[#42BE65]">{row.cs}</div>
      ),
      width: "90px",
    },
    {
      name: "Amount",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.amount}</div>
      ),
      width: "130px",
    },
    {
      name: "Date",
      selector: (row) => <div className="text-sm font-bold">{row.date}</div>,
      width: "100px",
    },
  ];

  const data = [
    {
      id: 1,
      receiver: "Oripeloye Timilehin",
      cs: 750,
      amount: "432,000",
      date: "9/27/22",
    },
    {
      id: 2,
      receiver: "Oripeloye Timilehin",
      cs: 750,
      amount: "432,000",
      date: "9/27/22",
    },
    {
      id: 3,
      receiver: "Oripeloye Timilehin",
      cs: 750,
      amount: "432,000",
      date: "9/27/22",
    },
    {
      id: 4,
      receiver: "Oripeloye Timilehin",
      cs: 750,
      amount: "432,000",
      date: "9/27/22",
    },
    {
      id: 5,
      receiver: "Oripeloye Timilehin",
      cs: 750,
      amount: "432,000",
      date: "9/27/22",
    },
  ];

  return (
    <div className="">
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        striped
      />
    </div>
  );
}
