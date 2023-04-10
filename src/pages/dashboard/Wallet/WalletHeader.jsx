import React from "react";

function WalletHeader({ page, onNext }) {
  return (
    <>
      <div className="h-[73px] border rounded-t-[4px] flex flex-row  hover:cursor-pointer items-center pl-[24px] font-[500] text-[#8A8B9F]">
        <div
          className={`${
            page === 0
              ? "text-[#8003CD] mr-[57px]  leading-[19px]  font-[Manrope] font-[700]  text-[14px]"
              : "mr-[57px]  leading-[19px]  font-[Manrope]  text-[14px]"
          }`}
          onClick={() => onNext(0)}
        >
          All Activities
        </div>
        <div
          className={`${
            page === 1
              ? "text-[#8003CD] mr-[57px] font-[700] leading-[19px]  font-[Manrope]   text-[14px]"
              : "mr-[57px]  leading-[19px]  font-[Manrope]   text-[14px]"
          }`}
          onClick={() => onNext(1)}
        >
          Wallet Top Up
        </div>
        <div
          className={`${
            page === 2
              ? "text-[#8003CD] mr-[57px]  leading-[19px]  font-[Manrope]  font-[700] text-[14px]"
              : "mr-[57px]  leading-[19px]  font-[Manrope]  text-[14px]"
          }`}
          onClick={() => onNext(2)}
        >
          Loan Disbursed
        </div>
      </div>
    </>
  );
}

export default WalletHeader;
