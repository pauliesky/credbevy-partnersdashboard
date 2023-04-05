import React, { useState, useEffect, useRef } from "react";

import arrowDown from "../img/arrowDown.png";

export default function Dropdown({
  img1,
  img2,
  img3,
  button1,
  button2,
  button3,
  onClick1,
  onClick2,
  onClick3,
}) {
  const [isOpen, setIsOpen] = useState(false);

  let dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="" ref={dropdownRef}>
      <button
        // onClick={() => setIsOpen((prev) => !prev)}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex flex-col gap-1"
      >
        <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="">
          <div
            className="absolute z-10 flex flex-col items-start justify-between w-[166px] h-[142px] top-[254px] right-[51px] bg-white px-4 py-6 rounded"
            style={{ boxShadow: "4px 4px 12px rgba(114, 114, 114, 0.25)" }}
          >
            <button
              className="flex flex-nowrap items-center justify-center gap-2"
              onClick={onClick1}
            >
              <img src={img1} alt="eye" className="w-4 h-4" />
              <p className="text-xs font-semibold text-[#8A8B9F]">{button1}</p>
            </button>
            <button
              className="flex flex-nowrap items-center justify-center gap-2"
              onClick={onClick2}
            >
              <img src={img2} alt="download" className="w-4 h-4" />
              <p className="text-xs font-semibold text-[#8A8B9F]">{button2}</p>
            </button>
            <button
              className="flex flex-nowrap items-center justify-center gap-2"
              onClick={onClick3}
            >
              <img src={img3} alt="download" className="w-4 h-4" />
              <p className="text-xs font-semibold text-[#8A8B9F]">{button3}</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
