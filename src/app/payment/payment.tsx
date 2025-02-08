import React from "react";
import { PiPaypalLogo } from "react-icons/pi";
import Checkout from "@/components/checkout";
import TitleBar from "@/components/titleBar";

const Payment = () => {
  return (
    <div className="w-full py-[80px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <TitleBar />

        <div className="flex w-full gap-x-[5%] justify-between mt-[40px]">
          <div className="w-[65%]">
            <button className="bg-[#F2F2F2] rounded-[4px] py-[10px] px-[5%] flex justify-center items-center text-[#2E2E2E] text-[16px] font-[400] w-full ">
              Want to make Payment for Paypal?
            </button>

            <div className="w-full flex-col flex justify-center items-center mt-[15px]">
              <button className="border-[#541CFF] border h-[48px] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#541CFF] w-full max-w-[50%] mt-[15px]">
                <PiPaypalLogo color="#541CFF" /> Pay with Paypal
              </button>
            </div>

            <form
              action=""
              className="w-full flex flex-wrap gap-x-[20px] gap-y-[30px]"
            >
              <div className="w-full">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Name on Card
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[75%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Card Number
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[22%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  CVV
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[48.8%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Month
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[48.8%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Year
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>
            </form>
          </div>

          <div className="flex-1">
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
