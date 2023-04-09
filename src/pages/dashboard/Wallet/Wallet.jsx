import React from "react";
import DashboardHero from "../DashboardHero";
import "./wallet.css";
import AllActivities from "./AllActivities";
import WalletTopUp from "./WalletTopUp";
import { useState } from "react";
import LoanDisbursed from "./LoanDisbursed";


const Wallet = () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className=" h-full w-[1030px] pt-12 mx-5">
        <span className="normal tracking-[-0.5px] font-[700] text-[#333333] h-[36] w-[175] text-[34px] font-[Manrope]">
          Wallet
        </span>
        <DashboardHero />
        <div className="mt-[40px] tracking-[-0.5px] mb-[20px] font-[700] text-[#333333] h-[25px] w-[198] text-[18px] font-[Manrope]">
          Recent Wallet Activities
        </div>
        {page === 0 && (
          <AllActivities
            onNext={() => setPage(1)}
            onTab={(value) => setPage(value)}
          />
        )}
        {page === 1 && (
          <WalletTopUp
            onNext={() => setPage(2)}
            onTab={(value) => setPage(value)}
          />
        )}
        {page === 2 && (
          <LoanDisbursed
            onNext={() => setPage(2)}
            onTab={(value) => setPage(value)}
          />
        )}
      </div>
    </>
  );
};

export default Wallet;
