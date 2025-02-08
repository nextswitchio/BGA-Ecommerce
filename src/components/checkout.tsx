import React from "react";
import { BsPhone } from "react-icons/bs";
import { BiMessageAltDots } from "react-icons/bi";
import { BsQuestionSquare } from "react-icons/bs";

const Checkout = () => {
  return (
    <div className="w-full bg-[#F9F9F9] px-[20px] py-[20px] rounded-[15px]">
      <div className="w-full rounded-[5px] flex px-[10px] py-[5px] justify-between border border-[#CFCFCF]">
        <input
          type="text"
          className="border-0 bg-transparent flex-1"
          placeholder="Promo code"
        />
        <button className="border border-[#541CFF] text-[#541CFF] text-[16px] h-[35px] px-[20px] rounded-[5px]">
          Apply
        </button>
      </div>

      <div className="mt-[30px] border border-x-0 py-[15px] border-[#CFCFCF]">
        <p className="text-[20px] font-[700]">Order Summary</p>

        <div className="w-full flex justify-between items-center mt-[25px]">
          <p className="text-[16px] text-[#2E2E2E] font-[500]">Subtotal</p>

          <p className="text-[16px] text-[#2E2E2E] font-[500]">$49.00</p>
        </div>

        <div className="w-full flex justify-between items-center mt-[25px]">
          <p className="text-[16px] text-[#2E2E2E] font-[500]">
            Shipping (Standard)
          </p>

          <p className="text-[16px] text-[#2E2E2E] font-[500]">$2.00</p>
        </div>

        <div className="w-full flex justify-between items-center mt-[25px]">
          <p className="text-[16px] text-[#2E2E2E] font-[500]">Tax</p>

          <p className="text-[16px] text-[#2E2E2E] font-[500]">$0.00</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-[25px]">
        <p className="text-[16px] text-[#2E2E2E] font-[500]">Estimated Total</p>

        <p className="text-[16px] text-[#2E2E2E] font-[500]">$234.80</p>
      </div>

      <button className="bg-[#2E2E2E] h-[43px] text-[16px] font-[600] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#ffffff] w-full mt-[30px]">
        Checkout
      </button>

      <p className="text-[#DF3906] text-[16px] font-[500] text-center">
        Spend $20.45 more to receive free shipping
      </p>

      <div className="mt-[40px] bg-[#fff] rounded-[5px] px-[5%] py-[20px]">
        <p className="text-[16px] font-[500]">Got Questions?</p>

        <div className="w-full px-[20px] mt-[20px] flex justify-between">
          <div className="flex justify-between items-center flex-col">
            <BsPhone />

            <p className="text-[14px] font-[400] text-[#4E4E4E] mt-[10px]">
              Call
            </p>
          </div>

          <div className="flex justify-between items-center flex-col">
            <BiMessageAltDots />

            <p className="text-[14px] font-[400] text-[#4E4E4E] mt-[10px]">
              Message
            </p>
          </div>

          <div className="flex justify-between items-center flex-col">
            <BsQuestionSquare />

            <p className="text-[14px] font-[400] text-[#4E4E4E] mt-[10px]">
              Visit FAQ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
