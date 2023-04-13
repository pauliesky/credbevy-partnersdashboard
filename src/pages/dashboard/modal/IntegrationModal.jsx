import React, { useState } from "react";
import closeModal from "../img/closeModal.png";
import twitterIcon from "../img/twitter.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import arrowLeft from "../img/arrow-circle-left.png";
import imageFrame from "../img/imageFrame.png";

function IntegrationModal({ setIntegrationModalConnect }) {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed bg-[#17191C66] overflow-y-auto bg-opacity-40 inset-0 flex flex-row pt-[150px] pb-[100px] justify-center items-center m-auto">
          <div className="z-10 static bg-[#FFFFFF] w-[637px] rounded-[8px] mt-[300px]  h-[890px]">
            <div className="mx-[24px] mt-[24px]">
              <div className=" flex justify-end">
                <img
                  onClick={() => setIntegrationModalConnect(false)}
                  alt="close-modal"
                  src={closeModal}
                  className="w-[32px] h-[32px] cursor-[pointer]"
                ></img>
              </div>
              <div className=" ">
                <img
                  alt="twitter-icon"
                  src={twitterIcon}
                  className="h-[25px] w-[30px] mb-[24px]"
                ></img>
                <div className="text-[#333333] h-4 w-[54px] font-4 font-[700]  normal leading-[16px] tracking-[-0.5px] ">
                  Recova
                </div>
                <div className=" mt-2 h-4 w-[140px] normal font-[400] text-[12px] leading-4 tracking-[-0.5px] text-[#8A8B9F] ">
                  BVN level recovery mandate
                </div>
              </div>
            </div>
            <div className="mx-[24px] mt-[29px]">
              <Tabs>
                <TabList
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    fontSize: "14px",
                    color: "#333333",
                    letterSpacing: "-0.5px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  <Tab>Description</Tab>
                  <Tab>Payment</Tab>
                  <Tab>Security & Compliance</Tab>
                  <Tab>Security & Compliance</Tab>
                </TabList>
                <TabPanel>
                  <div className="flex gap-[18px] mt-10 justify-center items-center">
                    <img
                      alt="arrow-left"
                      className="h-6 w-6"
                      src={arrowLeft}
                    ></img>
                    <img
                      alt="imageframe"
                      className="h-[262px] w-[501px]"
                      src={imageFrame}
                    ></img>
                    <img
                      alt="arrow-right"
                      className="h-6 w-6 rotate-180"
                      src={arrowLeft}
                    ></img>
                  </div>
                  <div className="mx-6  mt-[34px] w-[517px]">
                    <p className="text-[#333333] fomt-[14px] font-[700]">
                      Recova allows you:
                    </p>
                    <ul className="mt-[18px] list-disc">
                      <li className="mt-4 w-[327px] font-[400] text-[12px] text-[#333333]">
                        Recover money from any accounts connected to users BVN
                      </li>
                      <li className="mt-4  w-[327px] font-[400] text-[12px] text-[#333333]">
                        Recover money from any accounts connected to users BVN
                      </li>
                      <li className="mt-4  w-[327px] font-[400] text-[12px] text-[#333333]">
                        Recover money from any accounts connected to users BVN
                      </li>
                      <li className="mt-4 font-[400] text-[12px] text-[#333333]">
                        Increase your recovery rate
                      </li>
                      <li className="mt-4 font-[400] text-[12px] text-[#333333]">
                        Increase your recovery rate
                      </li>
                      <li className="mt-4 font-[400] text-[12px] text-[#333333]">
                        Increase your recovery rate
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>2</TabPanel>
                <TabPanel>3</TabPanel>
                <TabPanel>4</TabPanel>
              </Tabs>
            </div>
            <div className="mt-16 bg-[#F6F6F6] rounded-b-lg flex justify-between h-16 py-4 px-8">
              <button
                onClick={() => setIntegrationModalConnect(false)}
                className="rounded-[4px] font-[400] text-[#333333] items-center flex justify-center leading-4 text-[12px] bg-[#FFFFFF] h-9 w-[86px] border border=[0.5px solid #333333] "
              >
                Cancel
              </button>
              <button className="rounded-[4px] font-[400] text-[#FFFFFF] items-center flex justify-center leading-4 text-[12px] bg-[#8003CD] h-9 w-[86px] border border=[0.5px solid #333333] ">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntegrationModal;
