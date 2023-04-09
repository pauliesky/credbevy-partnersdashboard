import React, { useState, useEffect, useRef } from "react";
import edit from "../../dashboard/img/edit.png";
import redTrash from "../../dashboard/img/redTrash.png";

export default function DoubleItem2({ button1, onClick1, onClick2 }) {
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
            <img src={edit} alt="edit" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#8A8B9F]">{button1}</p>
          </button>
          <button
            className="flex items-center justify-center gap-2"
            onClick={onClick2}
          >
            <img src={redTrash} alt="delete" className="w-4 h-4" />
            <p className="text-xs font-semibold text-[#FA4D56]">Delete</p>
          </button>
        </div>
      )}
    </div>
  );
}
