import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import searchNormal from "../../components/shared/img/searchNormal.png";
import arrowDown from "./img/arrowDown.png";
import arrowWhite from "./img/arrowWhite.png";
import requestImg from "./img/requestImg.png";
import add from "./img/add.png";
import DataTable from "react-data-table-component";
import DoubleItem2 from "./dropdown/DoubleItem2";
import UserModal from "./modal/UserModal";
import DeleteModal from "./modal/DeleteModal";
import UserRoles from "./UserRoles.jsx";
import company from "../../components/shared/img/company.png";
import charcoFive from "./img/charcoFive.png";
import Checkbox3 from "./checkbox3/Checkbox3";
import Switch from "./toggle/Switch";
import twitterIcon from "./img/twitter.png";
import infoIcon from "./img/infoCircle.png";
import IntegrationModal from "./modal/IntegrationModal";
import cardLogo from "./img/cardLogo.png";
import purpleTick from "./img/purpleTick.png";
import purpleAdd from "./img/purpleAdd.png";
import PaymentModal from "./modal/AcceptModal";

export default function Settings() {
  const [userModalOn, setUserModalOn] = useState(false);
  const [userChoice, setUserChoice] = useState(false);

  const [deleteModalOn, setDeleteModalOn] = useState(false);
  const [deleteChoice, setDeleteChoice] = useState(false);

  const [paymentModal, setPaymentModal] = useState(false);
  const [integrationModalConnect, setIntegrationModalConnect] = useState(false);

  const clicked1 = () => {
    setUserModalOn(true);
  };

  const clicked2 = () => {
    setDeleteModalOn(true);
  };

  const addPaymentHandler = () => {
    setPaymentModal(true);
  };

  const handleProceedClick = () => {
    setUserModalOn(false);
    setUserChoice(true);
  };

  const handleCancelClick = () => {
    setUserModalOn(false);
    setUserChoice(false);
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

  const log_customStyles = {
    rows: {
      style: {
        minHeight: "73px",
        paddingLeft: "8px",
      },
    },

    headCells: {
      style: {
        fontWeight: 700,
        fontSize: "0.875rem",
        color: "#8A8B9F",
        paddingLeft: "25px",
      },
    },
  };

  const columns = [
    {
      name: "Full Name",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <img src={requestImg} alt="a person" className="w-8 h-8" />
          <div className="text-sm font-semibold">{row.fullName}</div>
        </div>
      ),
      width: "207px",
    },
    {
      name: "Email",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.email}</div>
      ),
      width: "237px",
    },
    {
      name: "Address",
      selector: (row) => (
        <div className="text-sm font-semibold">{row.address}</div>
      ),
      width: "212px",
    },
    {
      name: "Joined",
      selector: (row) => (
        <div className="flex gap-8">
          <div className="text-sm font-semibold">{row.joined}</div>
        </div>
      ),
      width: "85px",
    },
    {
      name: "Permission",
      selector: (row) => (
        <div className="flex gap-[42px]">
          <div className="flex gap-2">
            <div className="text-xs font-semibold text-[#8003CD] px-2.5 py-1 bg-[#F3DFFF] rounded">
              Admin
            </div>
            <div className="text-xs font-semibold text-[#FA4D56] px-2.5 py-1 bg-[#FFDADC] rounded">
              {row.permission}
            </div>
          </div>
          <DoubleItem2
            button1={"Edit Permission"}
            onClick1={clicked1}
            onClick2={clicked2}
          />
        </div>
      ),
      width: "245px",
    },
  ];

  const log_columns = [
    {
      name: "Date and Time",
      selector: (row) => (
        <div className="flex gap-4 items-center justify-center ml-0">
          <div className="text-sm text-[#333333] font-semibold">
            {row.dateAndTime}
          </div>
        </div>
      ),
      width: "178px",
    },
    {
      name: "User",
      selector: (row) => (
        <div className="text-sm  text-[#333333]  font-semibold">{row.user}</div>
      ),
      width: "158px",
    },
    {
      name: "Description",
      selector: (row) => (
        <div className="text-sm  text-[#333333] font-semibold">
          {row.description}
        </div>
      ),
      width: "152px",
    },
    {
      name: "I.P Address",
      selector: (row) => (
        <div className="flex gap-8">
          <div className="text-sm  text-[#333333] font-semibold">
            {row.ipAddress}
          </div>
        </div>
      ),
      width: "122px",
    },
    {
      name: "User Agent",
      selector: (row) => (
        <div className="text-[13px] leading-6 normal tracking-[-0.5px] font-[600] text-[#333333]">
          {row.userAgent}
        </div>
      ),
      width: "275px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex gap-8">
          <div className="text-sm font-semibold">{row.status}</div>
        </div>
      ),
      width: "135px",
    },
  ];

  const data = [
    {
      id: 1,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 2,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 3,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 4,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 5,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 6,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 7,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
    {
      id: 8,
      fullName: "Oripeloye Timilehin",
      email: "Timilehinoripeloye@gmail.com",
      address: "10, Lawani street, abule oja",
      joined: "9/27/22",
      permission: "Contributors",
    },
  ];

  const logs_data = [
    {
      id: 1,
      dateAndTime: "2023-04-01,10:00:00",
      user: "TimilehinOripeloye",
      description: "Login",
      ipAddress: "192.168.1.10",
      userAgent: (
        <div>
          Mozilla/5.0 (WindowsNT10.0;Win64;x64)
          <br />
          AppleWebKit/537.36(KHTML,like Gecko)
        </div>
      ),
      status: (
        <div className="flex flex-row gap-1 bg-[#C2FED3] rounded-[30px] h-[32px] w-[94px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#42BE65]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Completed
          </div>
        </div>
      ),
    },
    {
      id: 2,
      dateAndTime: "2023-04-01,10:00:00",
      user: "TimilehinOripeloye",
      description: "Transfer",
      ipAddress: "192.168.1.12",
      userAgent: "Python Requests Library",
      status: (
        <div className="flex flex-row gap-1 bg-[#C2FED3] rounded-[30px] h-[32px] w-[94px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#42BE65]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Completed
          </div>
        </div>
      ),
    },
    {
      id: 3,
      dateAndTime: "2023-04-03,09:45:00",
      user: "TimilehinOripeloye",
      description: "Change Password ",
      ipAddress: "192.168.1.15",
      userAgent: (
        <div>
          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0)
          <br />
          AppleWebKit/537.36 (KHTML, like Gecko)
        </div>
      ),
      status: (
        <div className="flex flex-row gap-1 bg-[#FFA39E] rounded-[30px] h-[32px] w-[71px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#F5222D]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Failed
          </div>
        </div>
      ),
    },
    {
      id: 4,
      dateAndTime: "2023-04-01,10:00:00",
      user: "TimilehinOripeloye",
      description: "Transfer",
      ipAddress: "192.168.1.12",
      userAgent: "Python Requests Library",
      status: (
        <div className="flex flex-row gap-1 bg-[#C2FED3] rounded-[30px] h-[32px] w-[94px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#42BE65]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Completed
          </div>
        </div>
      ),
    },
    {
      id: 5,
      dateAndTime: "2023-04-03,09:45:00",
      user: "TimilehinOripeloye",
      description: "Change Password ",
      ipAddress: "192.168.1.15",
      userAgent: (
        <div>
          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0)
          <br />
          AppleWebKit/537.36 (KHTML, like Gecko)
        </div>
      ),
      status: (
        <div className="flex flex-row gap-1 bg-[#C2FED3] rounded-[30px] h-[32px] w-[94px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#42BE65]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Completed
          </div>
        </div>
      ),
    },
    {
      id: 6,
      dateAndTime: "2023-04-01,10:00:00",
      user: "TimilehinOripeloye",
      description: "Transfer",
      ipAddress: "192.168.1.12",
      userAgent: "Python Requests Library",
      status: (
        <div className="flex flex-row gap-1 bg-[#C2FED3] rounded-[30px] h-[32px] w-[94px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#42BE65]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Completed
          </div>
        </div>
      ),
    },
    {
      id: 7,
      dateAndTime: "2023-04-03,09:45:00",
      user: "TimilehinOripeloye",
      description: "Change Password ",
      ipAddress: "192.168.1.15",
      userAgent: (
        <div>
          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0)
          <br />
          AppleWebKit/537.36 (KHTML, like Gecko)
        </div>
      ),
      status: (
        <div className="flex flex-row gap-1 bg-[#FFA39E] rounded-[30px] h-[32px] w-[71px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#F5222D]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Failed
          </div>
        </div>
      ),
    },
    {
      id: 8,
      dateAndTime: "2023-04-01,10:00:00",
      user: "TimilehinOripeloye",
      description: "Transfer",
      ipAddress: "192.168.1.12",
      userAgent: "Python Requests Library",
      status: (
        <div className="flex flex-row gap-1 bg-[#C2FED3] rounded-[30px] h-[32px] w-[94px] items-center py-1 px-4 ">
          <span className="h-[6px] w-[6px] rounded-full bg-[#42BE65]"></span>
          <div className="text-[#333333] text-[10px] normal font-[600]">
            Completed
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className=" p-5 mt-6">
      <div className="  font-bold text-[34px] leading-9 mb-8">Settings</div>
      <div className="mt-6 ">
        <Tabs className={"major-tabs"}>
          <TabList className={"settings-tab-list"}>
            <Tab className={"major-tab"}>Company Info</Tab>
            <Tab className={"major-tab"}>Notifications</Tab>
            <Tab className={"major-tab"}>Integrations</Tab>
            <Tab className={"major-tab"}>User Management</Tab>
            <Tab className={"major-tab"}>Payment</Tab>
            <Tab className={"major-tab"}>Group Management</Tab>
            <Tab className={"major-tab"}>User Roles</Tab>
            <Tab className={"major-tab"}>Security & Password</Tab>
            <Tab className={"major-tab"}>Logs</Tab>
          </TabList>

          <TabPanel>
            <div className="">
              <div className="flex justify-end mt-[34px] gap-8">
                <button
                  className="px-[34px] py-2.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#868e96] bg-white"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="px-[34px] py-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                  onClick={handleProceedClick}
                >
                  Save
                </button>
              </div>
              <form action="" className="mt-11">
                <div className="flex gap-[238px]">
                  <label className="text-sm font-bold leading-[19.12px]">
                    Company Name{" "}
                    <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
                      *
                    </span>
                  </label>
                  <div className="">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="CompanyName"
                        className="text-xs font-semibold leading-5 w-[448px] h-[35px] rounded py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                      />
                      <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                        Please contact us to change company name
                      </small>
                    </div>
                    <div className="flex flex-col mt-[21px]">
                      <div className="flex items-center justify-center">
                        <span className="text-xs py-[8px] px-4 font-semibold leading-5 text-[#8A8B9F] w-[212px] h-[36.98px] bg-[#E5EAEF] rounded-l">
                          Credbevy.com/company/
                        </span>
                        <input
                          type="text"
                          placeholder="CompanyName"
                          className="text-xs font-semibold leading-5 w-[236px] h-[36.98px] py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                        />
                      </div>
                      <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                        Please contact us to change your slug
                      </small>
                    </div>
                  </div>
                </div>

                <div className="flex gap-[222px] mt-[87px]">
                  <label
                    htmlFor=""
                    className="text-sm font-bold leading-[19.12px]"
                  >
                    Company Website{" "}
                    <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
                      *
                    </span>
                  </label>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <span className="text-xs py-[8px] px-4 font-semibold leading-5 text-[#8A8B9F] w-[124px] h-[37px] bg-[#E5EAEF] rounded-l">
                        Https://
                      </span>
                      <input
                        type="text"
                        placeholder="CompanyName.com"
                        className="text-xs font-semibold leading-5 w-[324px] h-[37px] py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                      />
                    </div>
                    <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                      Please contact us to change your slug
                    </small>
                  </div>
                </div>

                <div className="flex gap-[244px] mt-[87px] mb-[50px]">
                  <label
                    htmlFor=""
                    className="text-sm font-bold leading-[19.12px]"
                  >
                    Company Logo{" "}
                    <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
                      *
                    </span>
                  </label>
                  <div className="flex gap-12">
                    <img
                      src={company}
                      alt="company logo"
                      className="w-[45px] h-[45px]"
                    />
                    <div className="mt-2 flex justify-center rounded border border-solid border-[#E5EAEF] px-6 pt-[31px] pb-[31px] w-[355px] h-[142px]">
                      <div className="text-center">
                        <svg
                          width="24"
                          height="24"
                          className="mx-auto mb-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.99982 24H20.0002C21.0608 24 22.0782 23.5787 22.8285 22.8285C23.5787 22.0782 24 21.0608 24 20.0002V3.99982C24 2.93917 23.5787 1.92183 22.8285 1.17154C22.0782 0.42126 21.0608 0 20.0002 0H3.99982C2.93917 0 1.92183 0.421331 1.17154 1.17154C0.42126 1.92176 0 2.93917 0 3.99982V20.0002C0 21.0608 0.421331 22.0782 1.17154 22.8285C1.92176 23.5787 2.93917 24 3.99982 24ZM20.0002 22.0001H3.99982C3.46968 22.0001 2.96078 21.7895 2.58586 21.4142C2.21058 21.0392 1.99991 20.5304 1.99991 20.0002V17.4151L7.00002 12.415L12.2952 17.7049C12.6852 18.0928 13.3151 18.0928 13.7053 17.7049L17.0002 14.4148L22.0004 19.4149V20.0002C22.0004 20.5303 21.7897 21.0392 21.4144 21.4142C21.0395 21.7894 20.5303 22.0001 20.0002 22.0001ZM3.99982 1.99969H20.0002C20.5303 1.99969 21.0392 2.21035 21.4141 2.58564C21.7894 2.96057 22.0001 3.46944 22.0001 3.9996V16.5847L17.7049 12.2947C17.315 11.9068 16.6851 11.9068 16.2951 12.2947L12.9999 15.5848L7.70468 10.2945C7.31474 9.90698 6.68484 9.90698 6.29492 10.2945L1.99973 14.5848V3.99978C1.99973 3.46963 2.2104 2.96074 2.58568 2.58582C2.96062 2.21053 3.46967 1.99969 3.99982 1.99969Z"
                            fill="#8A8B9F"
                          />
                        </svg>

                        <div className="flex text-sm text-[#8A8B9F] items-center justify-center">
                          <label
                            htmlFor="file-upload"
                            class="cursor-pointer text-xs font-semibold text-[#8003CD] focus-within:outline-none leading-[20px]"
                          >
                            <span>Click</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs font-semibold pl-1">
                            or drag and drop to upload
                          </p>
                        </div>
                        <p className="text-[0.625rem] text-[#8A8B9F] leading-[20px]">
                          PNG, JPG (Max. 1 MB)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="">
              <div className="flex justify-end mt-[34px] gap-8">
                <button
                  className="px-[34px] py-2.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#868e96] bg-white"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="px-[34px] py-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                  onClick={handleProceedClick}
                >
                  Save
                </button>
              </div>
              <div className="mt-[52px]">
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-bold text-sm leading-6">
                        Enable Desktop Notification
                      </p>
                      <p className="font-bold text-xs text-[#8A8B9F] leading-4">
                        Receive notification from all loan requests, repayments
                        etc.
                      </p>
                    </div>
                    <div className="mr-[188px] mt-1.5">
                      <Switch />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-bold text-sm leading-6">
                        Enable Unread Notification Badge
                      </p>
                      <p className="font-bold text-xs text-[#8A8B9F] leading-4">
                        Show a read icon when notifications are unread
                      </p>
                    </div>
                    <div className="mr-[188px] mt-1.5">
                      <Switch />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-bold text-sm leading-6">
                        Communication Emails
                      </p>
                      <p className="font-bold text-xs text-[#8A8B9F] leading-4">
                        Receive emails for Loan requests, repayment etc.
                      </p>
                    </div>
                    <div className="mr-[188px] mt-1.5">
                      <Switch />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-bold text-sm leading-6">
                        Announcements & Updates
                      </p>
                      <p className="font-bold text-xs text-[#8A8B9F] leading-4">
                        Receive announcements for our products and services.
                      </p>
                    </div>
                    <div className="mr-[188px] mt-1.5">
                      <Switch />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <p className="font-bold text-sm leading-6">
                        Disable All Sound Notifications
                      </p>
                      <p className="font-bold text-xs text-[#8A8B9F] leading-4">
                        Mute all notifications on loan requests, repayments etc.
                      </p>
                    </div>
                    <div className="mr-[188px] mt-1.5">
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-5 mt-6">
              <div className="font-bold text-[34px] leading-9">
                Integrations
              </div>
              <div className="font-semibold text-sm text-[#8A8B9F] mt-6 leading-4">
                Make life easier for your company by adding any of these
                integrations
              </div>
              <div className="mt-[90px] flex flex-col items-center justify-center">
                <img
                  src={charcoFive}
                  alt="Charco High Five"
                  className="w-[311px] h-[429px]"
                />
                <p className="mt-[7px] text-sm text-[#8A8B9F] font-bold leading-4">
                  You do not have any integrations yet!
                </p>
                <button className="p-2.5 mt-8 mb-[] font-bold text-xs text-white leading-4 bg-[#8003CD] rounded">
                  Coming Soon
                </button>
              </div>
            </div>
            {/* <div className=" mt-[40px] w-[199px] h-[36px] normal font-[700] text-[34px] leading-[36px] tracking-[-0.5px] text-[#333333] ">
              Integrations
            </div>
            <div className="flex justify-between">
              <div className=" mt-6font-semibold text-sm text-[#8A8B9F] mt-6 leading-4">
                Make life easier for your company by adding any of these
                integrations
              </div>
              <div className="flex border h-[45px] w-[205px] border-[#dee2e6] rounded-lg items-center justify-between pl-6 pr-10">
                <div className="flex gap-2">
                  <img
                    src={searchNormal}
                    alt="search icon"
                    className="w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Search for integrations"
                    className="outline-none text-xs font-bold w-[128px] placeholder:text-#8A8B9F placeholder:font-[]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[16px] mt-[64px] ">
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button
                    onClick={() => setIntegrationModalConnect(true)}
                    className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]"
                  >
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#F5222D] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Disconnect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#F5222D] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Disconnect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#F5222D] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Dsiconnect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#F5222D] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Disconnect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-[251px] h-[200px] border border-[1px solid #E5EAEF] rounded-[4px]">
                <div className="flex flex-row justify-between mx-[24px] mt-[30px]">
                  <img
                    alt="twitter-icon"
                    src={twitterIcon}
                    className="h-[25px] w-[30px]"
                  ></img>
                  <img
                    alt="info-icon"
                    src={infoIcon}
                    className="w-[10px] h-[10px]"
                  ></img>
                </div>
                <div className="mt-[24px] mx-[24px] ">
                  <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                    Recova
                  </div>
                  <div className=" mt-1 h-4 w-[140px]  normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                    BVN level recovery mandate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center text-align-center">
                  <button className=" mb-[24px] mt-[20px]  rounded-[30px] border border-[ 1px solid #E5EAEF] h-[36px] w-[182px] gap-[10px]">
                    <p className=" normal text-[#333333] font-[600] text-[12px] leading-[16px]  tracking-[-0.5px]">
                      Connect
                    </p>
                  </button>
                </div>
              </div>
            </div>
            {integrationModalConnect && (
              <IntegrationModal
                setIntegrationModalConnect={setIntegrationModalConnect}
              />
            )} */}
          </TabPanel>
          <TabPanel>
            <div className="flex gap-4 mt-16">
              <div className="flex border border-[#dee2e6] rounded-lg items-center justify-between pl-6 pr-10">
                <div className="flex gap-2">
                  <img
                    src={searchNormal}
                    alt="search icon"
                    className="w-4 h-4"
                  />
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
                      <img
                        src={arrowDown}
                        alt="arrow down"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-7 mb-20">
              <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-8">
                <div className="flex items-center justify-center gap-[0.9375rem]">
                  <p className="text-sm text-[#8A8B9F] font-semibold">
                    User Management
                  </p>
                  <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
                    7 users
                  </p>
                </div>
                <div className="flex gap-9">
                  <div className="flex gap-1.5 items-center justify-center border px-2.5 py-2 border-black rounded">
                    <button className="" onClick={clicked1}>
                      <img src={add} alt="add icon" className="w-4 h-4" />
                    </button>
                    <p className="text-xs font-bold">New User</p>
                  </div>
                  <div className="flex gap-2.5 items-center justify-center border px-2.5 py-2 border-black bg-[#333333] rounded">
                    <p className="text-xs font-bold text-white">Download</p>
                    <button className="">
                      <img
                        src={arrowWhite}
                        alt="arrow down"
                        className="w-4 h-4"
                      />
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
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between mt-[114px] flex-row">
              <span>
                <span className="flex gap-1 flex-row">
                  <span className=" normal font-[700] text-[#333333] text-[14px] leading-5 ">
                    Card details
                  </span>
                  <span className="normal font-[700] text-[14px] text-[#8003CD] ">
                    *
                  </span>
                </span>
                <span className="normal text-[#8A8B9F] font-[700] text-[12px] ">
                  Select default payment method
                </span>
              </span>
              <div>
                <div className=" py-5 px-6 border border-[1px solid #8003CD] rounded-[4px] flex justify-between w-[448px] h-[107px] bg-[#FFFFFF]">
                  <div className="flex gap-2">
                    <img
                      className="h-[15px] w-[24.3px]"
                      alt="cardlogo"
                      src={cardLogo}
                    ></img>
                    <div>
                      <p className="normal font-[700] text-[12px] text-[#000000] leading-5">
                        Mastercard ending in 1234
                      </p>
                      <p className="normal font-[400] text-[12px] text-[ #8A8B9F]">
                        Expiry 04/20/2023
                      </p>
                      <span className="flex mt-2 gap-5">
                        <p className="normal font-[600] text-[10px] leading-5 text-[#000000]">
                          Set as default
                        </p>
                        <p className="text-[#8003CD] text-[10px] normal leading-5 font-[700]  ">
                          Edit
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="h-[13px] w-[13px]"
                    alt="check"
                    src={purpleTick}
                  ></img>
                </div>
                <div className=" mt-4 py-5 px-6 border border-[1px solid #8003CD] rounded-[4px] flex justify-between w-[448px] h-[107px] bg-[#FFFFFF]">
                  <div className="flex gap-2">
                    <img
                      className="h-[15px] w-[24.3px]"
                      alt="cardlogo"
                      src={cardLogo}
                    ></img>
                    <div>
                      <p className="normal font-[700] text-[12px] text-[#000000] leading-5">
                        Visa ending in 1234
                      </p>
                      <p className="normal font-[400] text-[12px] text-[ #8A8B9F]">
                        Expiry 04/20/2023
                      </p>
                      <span className="flex mt-2 gap-5">
                        <p className="normal font-[600] text-[10px] leading-5 text-[#000000]">
                          Set as default
                        </p>
                        <p className="text-[#8003CD] text-[10px] normal leading-5 font-[700]  ">
                          Edit
                        </p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="h-[13px] w-[13px]"
                    alt="check"
                    src={purpleTick}
                  ></img>
                </div>
                <div
                  // onClick={addPaymentHandler}
                  className="mt-8 flex items-center gap-1"
                >
                  <img alt="add" src={purpleAdd}></img>
                  <p className="normal text-[12px] font-[700] leading-3 tracking-[-0.5px] text-[#8003CD]">
                    Add new payment method
                  </p>
                </div>
              </div>
              {paymentModal && (
                <PaymentModal setAcceptModalOn={setPaymentModal} />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Group Management</h2>
          </TabPanel>
          <TabPanel>
            <UserRoles />
          </TabPanel>
          <TabPanel>
            <div>
              <div className="flex justify-end mt-[34px] gap-8">
                <button
                  className="px-[34px] py-2.5 rounded text-xs font-bold border-[0.5px] border-solid border-[#868e96] bg-white"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
                <button
                  className="px-[34px] py-2.5 rounded text-xs font-bold bg-[#8003CD] text-white"
                  onClick={handleProceedClick}
                >
                  Save
                </button>
              </div>
              <div className="flex flex-col">
                <span className="font-[700] text-[16px] leading-6 text-[#333333] tracking-[-0.5px] normal">
                  Password
                </span>
                <span className="mt-1 normal font-[700] text-[12px] leading-[18px] tracking-[-0.5px] text-[#8A8B9F]">
                  Enter your current password to change your password
                </span>
              </div>
              <form className="mt-10">
                <div className="flex gap-[238px]">
                  <label className="text-sm font-bold leading-[19.12px]">
                    Current Password
                    <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
                      *
                    </span>
                  </label>
                  <div className="">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Current Password"
                        className="text-xs font-semibold leading-5 w-[448px] h-[35px] rounded py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                      />
                      <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                        Enter your current password
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex mt-14 gap-[260px]">
                  <label className="text-sm font-bold leading-[19.12px]">
                    New Password
                    <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
                      *
                    </span>
                  </label>
                  <div className="">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="New Password"
                        className="text-xs font-semibold leading-5 w-[448px] h-[35px] rounded py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                      />
                      <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                        Enter new password
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex mt-14 gap-[205px]">
                  <label className="text-sm font-bold leading-[19.12px]">
                    Confirm New Password
                    <span className="text-sm font-bold leading-[19.12px] text-[#8003CD]">
                      *
                    </span>
                  </label>
                  <div className="">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Confirm New Password"
                        className="text-xs font-semibold leading-5 w-[448px] h-[35px] rounded py-2.5 px-4 outline-none border border-solid border-[#DCDCE4]"
                      />
                      <small className="font-medium text-[0.625rem] leading-[0.875rem] text-[#8A8B9F]">
                        Confirm new password
                      </small>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex flex-col mt-16">
                <span className="font-[700] text-[16px] leading-6 text-[#333333] tracking-[-0.5px] normal">
                  Security
                </span>
                <span className="mt-1 normal font-[700] text-[12px] leading-[18px] tracking-[-0.5px] text-[#8A8B9F]">
                  Improve security settings of your account
                </span>
              </div>
              <div className="flex mt-[37px] justify-between">
                <div className="">
                  <p className="font-bold text-sm normal text-[#333333] text-[14px] leading-6">
                    2-Step Verification
                  </p>
                  <p className="font-bold text-xs text-[#8A8B9F] leading-4">
                    Make your account extra secure . Along with the password,
                    you will need a code
                  </p>
                </div>
                <div 
                className="mr-[218px] mt-1.5"
                >
                  <Switch />
                </div>
              </div>
              <div>
                <div className="flex gap-1 mt-6 flex-row">
                  <span className="text-[14px] normal font-[700] text-[#8003CD]">
                    *
                  </span>
                  <p className="italics w-[804px] font-[500] font-[DM Sans]  text-[12px] leading-[18px] tracking-[-0.5px] text-[#8A8B9F]">
                    If you encounter any security issues or suspect unauthorized
                    access to your account, please report it to our customer
                    support or security team immediately. Provide as much detail
                    as possible, and we'll investigate promptly. We may need to
                    temporarily disable your account while we investigate.
                    Contact us with any questions or concerns. Thanks for
                    helping keep our platform secure!
                  </p>
                </div>
                <div className="flex gap-1 mt-6 flex-row">
                  <span className="text-[14px] normal font-[700] text-[#8003CD]">
                    *
                  </span>
                  <p className="italics w-[804px] font-[500] font-[DM Sans]  text-[12px] leading-[18px] tracking-[-0.5px] text-[#8A8B9F]">
                    We take the security and privacy of your data seriously,
                    including when it's shared with third-party services. We
                    only share necessary information, and have strict policies
                    to ensure your data is protected and used only for the
                    intended purpose. If you have questions or concerns about
                    third-party access, please contact our customer support
                    team.
                  </p>
                </div>
                <div className="flex gap-1 mt-6 flex-row">
                  <span className="text-[14px] normal font-[700] text-[#8003CD]">
                    *
                  </span>
                  <p className="italics w-[804px] font-[500] font-[DM Sans]  text-[12px] leading-[18px] tracking-[-0.5px] text-[#8A8B9F]">
                    Use a secure device and browser when accessing our platform.
                    Keep your operating system and browser up-to-date, use
                    strong and unique passwords, and enable two-factor
                    authentication. Avoid using public or shared devices to
                    access your account. Contact our customer support team with
                    any questions or concerns about device and browser security.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border border-[#E5EAEF] rounded-lg h-[784px] mt-7 mb-20">
              <div className="flex items-center justify-between text-xl font-bold h-[67px] leading-[27.32px] border-b border-solid border-[#E5EAEF] px-6">
                <div className="flex items-center justify-center gap-[0.9375rem]">
                  <p className="text-sm text-[#8A8B9F] font-semibold">
                    New Logs
                  </p>
                  <p className="text-[0.625rem] font-bold px-2.5 py-px rounded-[1.125rem] bg-[#ECECEC]">
                    48 Logs
                  </p>
                </div>
                <div className="flex gap-9">
                  <div className="flex gap-2.5 items-center justify-center border px-2.5 py-2 border-black bg-[#333333] rounded">
                    <p className="text-xs font-bold text-white">Download</p>
                    <button className="">
                      <img
                        src={arrowWhite}
                        alt="arrow down"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <DataTable
                columns={log_columns}
                data={logs_data}
                customStyles={log_customStyles}
                striped
                responsive
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {userModalOn && (
        <UserModal
          setUserModalOn={setUserModalOn}
          setUserChoice={setUserChoice}
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
}
