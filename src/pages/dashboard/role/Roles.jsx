import React, { useState } from "react";
import SuperAdmin from "./SuperAdmin";
import Contributor from "./Contributor";

const Roles = ({ setRolesOn }) => {
  const [adminOn, setAdminOn] = useState(false);
  const [contributorOn, setContributorOn] = useState(false);

  const handleAdmin = () => {
    setAdminOn(true);
  };

  const handleContributor = () => {
    setContributorOn(true);
  };

  return (
    <div
      className="absolute z-10 flex flex-col items-center justify-between h-[135px] w-[140px] top-[28px] right-[2px] bg-white  rounded"
      style={{
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.12)",
      }}
    >
      <button
        className="pl-[29px] py-3 flex font-medium text-sm w-full hover:bg-[#F5E4FF]"
        onClick={handleAdmin}
      >
        <p className="justify-self-end">Super Admin</p>
      </button>
      <div className="absolute top-[-38px] left-[-216px]">
        {adminOn && <SuperAdmin setAdminOn={setAdminOn} />}
      </div>
      <button
        className="pl-[29px] py-3 flex font-medium text-sm w-full hover:bg-[#F5E4FF]"
        onClick={handleContributor}
      >
        <p className="justify-self-end">Contributor</p>
      </button>
      <div className="absolute top-[-38px] left-[-88px]">
        {contributorOn && <Contributor setContributorOn={setContributorOn} />}
      </div>
      <button className="pl-[29px] py-3 flex font-medium text-sm w-full hover:bg-[#F5E4FF]">
        <p className="justify-self-end">Agent</p>
      </button>
    </div>
  );
};

export default Roles;
