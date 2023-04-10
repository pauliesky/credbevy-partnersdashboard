import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import transactionMinus from "../img/transactionMinus.png";
import alarm from "../img/alarm.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const NotifyModal = ({ setNotifyModalOn }) => {
  const handleCancelClick = () => {
    setNotifyModalOn(false);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#17191C66] bg-opacity-40 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-end p-6 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all mt-[50px] mr-[100px] overflow-y-scroll">
            <div className="bg-white w-[477px] h-[580px] px-8 pt-6">
              <div className="container flex items-center justify-center justify-between">
                <p className="font-bold text-base">Notification</p>
                <button className="" onClick={handleCancelClick}>
                  <img src={closeModal} alt="close icon" className="w-8 h-8" />
                </button>
              </div>
              <div className="mt-[29px]">
                <Tabs>
                  <TabList className={"notification-tab-list"}>
                    <Tab className={"major-tab"}>View All</Tab>
                    <Tab className={"major-tab"}>Request</Tab>
                    <Tab className={"major-tab"}>Transactions</Tab>
                    <Tab className={"major-tab"}>Accounts</Tab>
                    <Tab className={"major-tab"}>Others</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="mt-8">
                      <div className="flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            <span className="font-bold">John Doe</span> has
                            submitted a loan application for{" "}
                            <span className="font-bold">N100,000</span>. Please
                            review and approve or reject the application as soon
                            as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            You have{" "}
                            <span className="font-bold">
                              two pending loan applications
                            </span>{" "}
                            that require your attention. Please review the
                            applications and respond as soon as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            Your loan of{" "}
                            <span className="font-bold">N200,000</span> to{" "}
                            <span className="font-bold">Jane Smith</span> has
                            been{" "}
                            <span className="font-bold">
                              successfully disbursed
                            </span>
                            . Please log in to your account to view the
                            transaction details.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            Your loan of{" "}
                            <span className="font-bold">N200,000</span> to{" "}
                            <span className="font-bold">Jane Smith</span> has
                            been{" "}
                            <span className="font-bold">
                              successfully disbursed
                            </span>
                            . Please log in to your account to view the
                            transaction details.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            We regret to inform you that there was an{" "}
                            <span className="font-bold">error processing</span>{" "}
                            the disbursement of your loan to{" "}
                            <span className="font-bold">John Doe</span>. Please
                            review the details and contact us if you have any
                            questions.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            We regret to inform you that there was an{" "}
                            <span className="font-bold">error processing</span>{" "}
                            the disbursement of your loan to{" "}
                            <span className="font-bold">John Doe</span>. Please
                            review the details and contact us if you have any
                            questions.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            <span className="font-bold">John Doe</span> has
                            submitted a loan application for{" "}
                            <span className="font-bold">N100,000</span>. Please
                            review and approve or reject the application as soon
                            as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-8">
                      <div className="flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            <span className="font-bold">John Doe</span> has
                            submitted a loan application for{" "}
                            <span className="font-bold">N100,000</span>. Please
                            review and approve or reject the application as soon
                            as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            You have{" "}
                            <span className="font-bold">
                              two pending loan applications
                            </span>{" "}
                            that require your attention. Please review the
                            applications and respond as soon as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            Your loan of{" "}
                            <span className="font-bold">N200,000</span> to{" "}
                            <span className="font-bold">Jane Smith</span> has
                            been{" "}
                            <span className="font-bold">
                              successfully disbursed
                            </span>
                            . Please log in to your account to view the
                            transaction details.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            Your loan of{" "}
                            <span className="font-bold">N200,000</span> to{" "}
                            <span className="font-bold">Jane Smith</span> has
                            been{" "}
                            <span className="font-bold">
                              successfully disbursed
                            </span>
                            . Please log in to your account to view the
                            transaction details.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            We regret to inform you that there was an{" "}
                            <span className="font-bold">error processing</span>{" "}
                            the disbursement of your loan to{" "}
                            <span className="font-bold">John Doe</span>. Please
                            review the details and contact us if you have any
                            questions.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            We regret to inform you that there was an{" "}
                            <span className="font-bold">error processing</span>{" "}
                            the disbursement of your loan to{" "}
                            <span className="font-bold">John Doe</span>. Please
                            review the details and contact us if you have any
                            questions.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            <span className="font-bold">John Doe</span> has
                            submitted a loan application for{" "}
                            <span className="font-bold">N100,000</span>. Please
                            review and approve or reject the application as soon
                            as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-8">
                      <div className="flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            <span className="font-bold">John Doe</span> has
                            submitted a loan application for{" "}
                            <span className="font-bold">N100,000</span>. Please
                            review and approve or reject the application as soon
                            as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            You have{" "}
                            <span className="font-bold">
                              two pending loan applications
                            </span>{" "}
                            that require your attention. Please review the
                            applications and respond as soon as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            Your loan of{" "}
                            <span className="font-bold">N200,000</span> to{" "}
                            <span className="font-bold">Jane Smith</span> has
                            been{" "}
                            <span className="font-bold">
                              successfully disbursed
                            </span>
                            . Please log in to your account to view the
                            transaction details.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            Your loan of{" "}
                            <span className="font-bold">N200,000</span> to{" "}
                            <span className="font-bold">Jane Smith</span> has
                            been{" "}
                            <span className="font-bold">
                              successfully disbursed
                            </span>
                            . Please log in to your account to view the
                            transaction details.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            We regret to inform you that there was an{" "}
                            <span className="font-bold">error processing</span>{" "}
                            the disbursement of your loan to{" "}
                            <span className="font-bold">John Doe</span>. Please
                            review the details and contact us if you have any
                            questions.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            We regret to inform you that there was an{" "}
                            <span className="font-bold">error processing</span>{" "}
                            the disbursement of your loan to{" "}
                            <span className="font-bold">John Doe</span>. Please
                            review the details and contact us if you have any
                            questions.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={transactionMinus}
                          alt="transaction minus"
                          className="w-[29px] h-[29px] bg-[#8003CD33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            <span className="font-bold">John Doe</span> has
                            submitted a loan application for{" "}
                            <span className="font-bold">N100,000</span>. Please
                            review and approve or reject the application as soon
                            as possible.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="mt-8">
                      <div className="flex gap-4 items-start">
                        <img
                          src={alarm}
                          alt="alarm"
                          className="w-[29px] h-[29px] bg-[#F1C21B33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            The loan marketplace platform will be undergoing{""}
                            <span className="font-bold">
                              system maintenance
                            </span>{" "}
                            on <span className="font-bold">April 20th</span>{" "}
                            from <span className="font-bold">12:00 AM</span> to
                            <span className="font-bold"> 3:00 AM EST</span>.
                            During this time, some features may be unavailable.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={alarm}
                          alt="alarm"
                          className="w-[29px] h-[29px] bg-[#F1C21B33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            The loan marketplace platform will be undergoing{""}
                            <span className="font-bold">
                              system maintenance
                            </span>{" "}
                            on <span className="font-bold">April 20th</span>{" "}
                            from <span className="font-bold">12:00 AM</span> to
                            <span className="font-bold"> 3:00 AM EST</span>.
                            During this time, some features may be unavailable.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={alarm}
                          alt="alarm"
                          className="w-[29px] h-[29px] bg-[#F1C21B33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            The loan marketplace platform will be undergoing{""}
                            <span className="font-bold">
                              system maintenance
                            </span>{" "}
                            on <span className="font-bold">April 20th</span>{" "}
                            from <span className="font-bold">12:00 AM</span> to
                            <span className="font-bold"> 3:00 AM EST</span>.
                            During this time, some features may be unavailable.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4 items-start">
                        <img
                          src={alarm}
                          alt="alarm"
                          className="w-[29px] h-[29px] bg-[#F1C21B33] p-[7px] rounded-full"
                        />
                        <div className="">
                          <p className="font-normal text-xs leading-6">
                            The loan marketplace platform will be undergoing{""}
                            <span className="font-bold">
                              system maintenance
                            </span>{" "}
                            on <span className="font-bold">April 20th</span>{" "}
                            from <span className="font-bold">12:00 AM</span> to
                            <span className="font-bold"> 3:00 AM EST</span>.
                            During this time, some features may be unavailable.
                          </p>
                          <p className="mt-2 font-bold text-[10px] text-[#8A8B9F] leading-4">
                            04 Apr 2023, 2:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Others</h2>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyModal;
