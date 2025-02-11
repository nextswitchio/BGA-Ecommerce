import React from "react";
import Image from "next/image";
import Img from "../../../public/images/signup.svg";

const Signup = () => {
  return (
    <div className="w-full py-[30px] mt-[30px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between max-lg:flex-col gap-x-[5%]">
          <div className="w-[48%] pt-[4%] max-lg:hidden">
            <Image
              alt="icon"
              src={Img}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-[48%] max-lg:w-full">
            <div className="bg-[#fff] rounded-[16px] px-[8%] py-[45px] flex-col flex justify-center items-center shadow-md max-md:shadow-none max-md:px-[4%]">
              <div className="bg-[#F8F8F8] w-full h-[60px] flex justify-center items-center text-[20px] font-[600]">
                Create Account
              </div>

              <div className="mt-[30px] w-full flex flex-wrap gap-x-[20px] gap-y-[25px]">
                <div className="w-[100%]">
                  <label className="text-[16px] font-[400] text-[#2E2E2E]">
                    First Name
                  </label>

                  <input
                    className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                    placeholder=""
                  />
                </div>

                <div className="w-[100%]">
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
                    Phone Number
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
                    Birthday
                  </label>

                  <input
                    className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                    placeholder=""
                  />
                </div>

                <div className="w-[100%]">
                  <label className="text-[16px] font-[400] text-[#2E2E2E]">
                    Password
                  </label>

                  <input
                    className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                    placeholder=""
                  />
                </div>

                <div className="w-[100%]">
                  <label className="text-[16px] font-[400] text-[#2E2E2E]">
                    Confirm Password
                  </label>

                  <input
                    className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                    placeholder=""
                  />
                </div>

                <p className="text-[14px] font-[500] mt-[10px]">
                  By clicking create account you agree to BGADesigns Terms of
                  Use and Privacy Policy
                </p>

                <div className="w-full justify-between flex mt-[10px]">
                  <div className="flex items-start gap-x-[10px] w-full">
                    <input type="checkbox" className="mt-[5px]" />

                    <p className="text-[14px] font-[500]">
                      By signing up, you agree to receive emails from
                      Aeropostale about sales, promotions, events, new arrivals,
                      and more. View Terms and Privacy.
                    </p>
                  </div>
                </div>

                <div className="w-full justify-between flex mt-[10px]">
                  <div className="flex items-start gap-x-[10px] w-full">
                    <input type="checkbox" className="mt-[5px]" />

                    <p className="text-[14px] font-[500]">
                      By checking this box, you agree to receive recurring
                      automated promotional and personalized marketing text
                      messages (e.g. cart reminders) from BGA Design at the cell
                      number used when signing up. Consent is not a condition of
                      any purchase. Reply HELP for help and STOP to cancel. Msg
                      frequency varies. Msg & data rates may apply.
                      View Terms and Privacy.
                    </p>
                  </div>
                </div>

                <button className="bg-[#2E2E2E] h-[43px] text-[16px] font-[600] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#ffffff] w-full mt-[30px]">
                  Login
                </button>

                <p className="text-[14px] font-[500] text-center mx-auto mt-[10px]">
                  Already have an account? {" "}
                  <span className="text-[#DF3906]">Login</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
