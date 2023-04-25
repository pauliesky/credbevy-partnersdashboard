import React, { useState } from "react";
import purpleClear from "./../img/purpleClear.png";

const Contributor = ({ setContributorOn }) => {
  const handleCancelContributor = () => {
    setContributorOn(false);
  };
  return (
    <div className="">
      <button className="px-3 py-2 mt-[3px] ml-[3px]  flex items-center justify-center justify-between w-[124px] h-[32px] rounded bg-[#F0F0FF]">
        <p className="font-bold leading-4 text-xs text-[#8003CD]">
          Contributor
        </p>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-[#D9D8FF] w-px h-2.5"></div>
          <button className="" onClick={handleCancelContributor}>
            <img src={purpleClear} alt="clear" className="w-2 h-2" />
          </button>
        </div>
      </button>
    </div>
  );
};

export default Contributor;
