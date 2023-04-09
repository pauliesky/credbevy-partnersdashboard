import React from "react";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function DashboardHero() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <div className="h-[210px] overflow-hidden relative pt-2 w-[1030px] mt-8 bg-[#8003CD] rounded-[8px]">
        <div className=" absolute left-[55rem] top-[6rem]">
          {display ? (
            <VisibilityIcon
              onClick={() => {
                setDisplay(!display);
              }}
              style={{ color: "white", cursor: "pointer" }}
            />
          ) : (
            <VisibilityOffIcon
              onClick={() => {
                setDisplay(!display);
              }}
              style={{ color: "white", cursor: "pointer" }}
            />
          )}
        </div>
        <div className="w-[252px]  h-[252px] rounded-full absolute bg-[#9C1AEB]   left-[55rem] top-[4rem] "></div>
        <div className="w-[252px]  h-[252px] rounded-full absolute bg-[#9C1AEB]  left-[40rem] bottom-[8rem]"></div>

        {/* SECTION-1 */}
        <div className="container mt-8 ml-8 w-[280px] h-[140px]">
          <div className=" text-[#FFFFFF] tracking-[-0.5px]  text-[14px] h-[24] w-[94]  font-[700] font-[Manrope]">
            Wallet Balance
          </div>
          <div className=" w-[1000] mt-1 flex">
            <div
              className="w-[300px] h-[36] font-[400] 
              text-[#FFFFFF]
              text-[34px] leading-[36px] "
            >
              {display ? (
                // `${430 + "," + 434 + "," + 684.54}`
                <p className="w-[300px] ">₦ 430,434,684.54</p>
              ) : (
                "XXX,XXX,XXX,XX"
              )}
            </div>
          </div>
          <button className="bg-white h-[32] mt-[25px] w-[92] hover:cursor-pointer rounded-[4px] flex flex-row justify-center gap-1 py-[8px] px-[10px] font-[Manrope] text-[13px] font-[700] text-center text-[#333333] tracking-[-0.5px] ">
            <AddIcon style={{ fontSize: "20px" }} /> Fund Wallet
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default DashboardHero;
