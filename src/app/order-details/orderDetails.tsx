import React from "react";
import { PiPaypalLogo } from "react-icons/pi";
import Checkout from "@/components/checkout";
import TitleBar from "@/components/titleBar";

const OrderDetails = () => {
  return (
    <div className="w-full py-[80px] max-sm:py-[50px]">
      <div className="w-full px-[5%] mx-auto max-w-[1400px]">
        <TitleBar />
        <div className="flex w-full gap-x-[5%] justify-between mt-[40px] max-lg:flex-col ">
          <div className="w-[65%] max-lg:w-full">
            <button className="bg-[#F2F2F2] rounded-[4px] py-[10px] px-[5%] flex justify-center items-center text-[#2E2E2E] text-[16px] font-[400] w-full ">
              Already have an account?{" "}
              <span className="text-[#541CFF]">Login</span>
            </button>

            <div className="w-full flex-col flex justify-center items-center mt-[15px]">
              <p className="text-[16px] font-[500] text-[#2E2E2E]">
                Express Delivery?
              </p>

              <button className="border-[#541CFF] border h-[48px] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#541CFF] w-full max-w-[50%] max-sm:max-w-[70%] mt-[15px]">
                <PiPaypalLogo color="#541CFF" /> Pay with Paypal
              </button>
            </div>

            <form
              action=""
              className="w-full flex flex-wrap gap-x-[20px] gap-y-[30px] mt-[20px]"
            >
              <div className="w-[48.3%] max-md:w-full">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  First Name
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[48.3%]  max-md:w-full">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Last Name
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Email Address
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Phone Number
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Address
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Country
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  State
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  City
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>

              <div className="w-[100%]">
                <label className="text-[16px] font-[400] text-[#2E2E2E]">
                  Zip Code
                </label>

                <input
                  className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                  placeholder=""
                />
              </div>
            </form>
          </div>

          <div className="flex-1 max-md:mt-[30px]">
            <Checkout />
          </div>
        </div>

        <div className="w-full mt-[50px]">
          <h2 className="font-[500] text-[16px]">Return Policy</h2>

          <p className="mt-[15px] text-[14px] font-[400]">
            Lorem ipsum dolor sit amet consectetur. Nullam fermentum tortor
            adipiscing amet elementum vitae sollicitudin. In suspendisse quis
            condimentum a pulvinar orci suspendisse cras at. Ultricies dignissim
            sem viverra phasellus enim id. Eget quis luctus ut tincidunt et
            sagittis ut ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
