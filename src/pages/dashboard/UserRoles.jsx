import React, { useState } from "react";

import searchNormal from "../../components/shared/img/searchNormal.png";
import arrowDown from "./img/arrowDown.png";
import arrowWhite from "./img/arrowWhite.png";
import add from "./img/add.png";
import DataTable from "react-data-table-component";
import DoubleItem2 from "./dropdown/DoubleItem2";
import Checkbox3 from "./checkbox3/Checkbox3";
import RoleModal from "./modal/RoleModal";
import DeleteModal from "./modal/DeleteModal";

const UserRoles = () => {
  const [roleModalOn, setRoleModalOn] = useState(false);
  const [roleChoice, setRoleChoice] = useState(false);

  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const [deleteChoice, setDeleteChoice] = useState(false);

  const clicked = () => {
    setRoleModalOn(true);
  };

  const clicked2 = () => {
    setDeleteModalOn(true);
    console.log("grow");
  };

  const handleProceedClick = () => {
    setRoleModalOn(false);
    setRoleChoice(true);
  };

  const handleCancelClick = () => {
    setRoleModalOn(false);
    setRoleChoice(false);
  };

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
      name: "Role Name",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.roleName}</div>
      ),
      width: "169px",
    },
    {
      name: "Description",
      selector: (row) => (
        <div className="text-sm text-[#8A8B9F] font-semibold">
          {row.description}
        </div>
      ),
      width: "450px",
    },
    {
      name: "Users",
      selector: (row) => (
        <div className="text-sm text-[#8A8B9F] font-semibold">{row.users}</div>
      ),
      width: "90px",
    },
    {
      name: "Last Modified",
      selector: (row) => (
        <div className="flex gap-8">
          <div className="text-sm text-[#8A8B9F] font-semibold w-[202px]">
            {row.lastModified}
          </div>
          <DoubleItem2
            button1={"Edit role"}
            onClick1={clicked}
            onClick2={clicked2}
          />
        </div>
      ),
      // width: "200px",
    },
  ];

  const data = [
    {
      id: 1,
      roleName: "Super Admin",
      description: "The super admin can add, edit anything on the dashboard",
      users: "4 users",
      lastModified: "10/4/2022, 3:00 AM",
    },
    {
      id: 2,
      roleName: "Admin",
      description: "The super admin can add, edit anything on the dashboard",
      users: "4 users",
      lastModified: "10/4/2022, 3:00 AM",
    },
    {
      id: 3,
      roleName: "Editor",
      description: "The super admin can add, edit anything on the dashboard",
      users: "4 users",
      lastModified: "10/4/2022, 3:00 AM",
    },
  ];

  return (
    <div className="">
      <div className="flex gap-4 mt-16">
        <div className="flex border border-[#dee2e6] rounded-lg items-center justify-between pl-6 pr-10">
          <div className="flex gap-2">
            <img src={searchNormal} alt="search icon" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search for user"
              className="outline-none text-xs font-bold w-24"
            />
          </div>
        </div>
        <div className="flex border border-[#dee2e6] rounded-lg items-center justify-center gap-4 pl-6 pr-8">
          <input
            type="text"
            placeholder="Permissions"
            className="outline-none text-xs font-bold w-[4.5rem]"
          />
          <div className="flex gap-2">
            <p className="text-xs font-bold">All</p>
            <button className="p">
              <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex border border-[#dee2e6] rounded-lg items-center justify-between pl-6 pr-9 py-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Joined"
              className="outline-none text-xs font-bold w-10"
            />
            <div className="flex gap-2">
              <p className="text-xs font-bold">Anytime</p>
              <button className="">
                <img src={arrowDown} alt="arrow down" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-7 mb-20">
        <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
          <div className="flex items-center justify-center gap-[0.9375rem]">
            <p className="text-sm text-[#8A8B9F] font-semibold">User Roles</p>
            <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
              3 users
            </p>
          </div>
          <div className="flex gap-9">
            <div className="flex gap-1.5 items-center justify-center border px-2.5 py-2 border-black rounded">
              <button className="">
                <img src={add} alt="add icon" className="w-4 h-4" />
              </button>
              <p className="text-xs font-bold">New Role</p>
            </div>
            <div className="flex gap-2.5 items-center justify-center border px-2.5 py-2 border-black bg-[#333333] rounded">
              <p className="text-xs font-bold text-white">Download</p>
              <button className="">
                <img src={arrowWhite} alt="arrow down" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          striped
          selectableRows
          selectableRowsComponent={Checkbox3}
          responsive
        />
      </div>
      {roleModalOn && (
        <RoleModal
          setRoleModalOn={setRoleModalOn}
          setRoleChoice={setRoleChoice}
        />
      )}
      {deleteModalOn && (
        <DeleteModal
          setDeleteModalOn={setDeleteModalOn}
          setDeleteChoice={setDeleteChoice}
        />
      )}
    </div>
  );
};

export default UserRoles;
