import React from "react";
import charcoFive from "./img/charcoFive.png";

const Integrations = () => {
  return (
    <div className="p-5 mt-6">
      <div className="font-bold text-[34px] leading-9">Integrations</div>
      <div className="font-semibold text-sm text-[#8A8B9F] mt-6 leading-4">
        Make life easier for your company by adding any of these integrations
      </div>
      <div className="mt-[141px] flex flex-col items-center justify-center">
        <img
          src={charcoFive}
          alt="Charco High Five"
          className="w-[311px] h-[429px]"
        />
        <p className="mt-[7px] text-sm text-[#8A8B9F] font-bold leading-4">
          You do not have any integrations yet!
        </p>
        <button className="p-2.5 mt-8 mb-[337px] font-bold text-xs text-white leading-4 bg-[#8003CD] rounded">
          Coming Soon
        </button>
      </div>
    </div>
  );
};

export default Integrations;
