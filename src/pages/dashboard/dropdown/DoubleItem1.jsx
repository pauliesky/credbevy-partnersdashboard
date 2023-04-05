import React, { useState, useEffect, useRef } from "react";
import eye from "../../login/eye.png";
import download from "../../dashboard/img/download.png";

export default function Dropdown({ onClick1 }) {
  const [isOpen, setIsOpen] = useState(false);

  let dropdownRef = useRef();

  useEffect(() => {
    const handleClicksOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClicksOutside);

    return () => {
      document.removeEventListener("click", handleClicksOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col gap-1"
      >
        <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
        <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
        <span className="w-1 h-1 bg-[#A0A0A0] rounded-full"></span>
      </button>
      {isOpen && (
        <div
          className="absolute z-10 flex flex-col items-start justify-between h-[109px] w-[144px] top-[46px] right-[19px] bg-white px-4 py-6 rounded"
          style={{ boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)" }}
        >
          <button
            className="flex items-center justify-center gap-2"
            onClick={onClick1}
          >
            <img src={eye} alt="eye" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#8A8B9F]">View</p>
          </button>
          <button className="flex items-center justify-center gap-2">
            <img src={download} alt="download" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#8A8B9F]">Download</p>
          </button>
        </div>
      )}
    </div>
  );
}
