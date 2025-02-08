import React from "react";

const Login = () => {
  return (
    <div className="w-full py-[30px] mt-[30px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <div className="bg-[#fff] rounded-[16px] px-[8%] py-[45px] flex-col flex justify-center items-center shadow-md">
              <div className="bg-[#F8F8F8] w-full h-[60px] flex justify-center items-center text-[20px] font-[600]">
                Login
              </div>

              <div className="mt-[30px] w-full flex flex-wrap gap-x-[20px]">
                <div className="w-[100%]">
                  <label className="text-[16px] font-[400] text-[#2E2E2E]">
                    Email Address
                  </label>

                  <input
                    className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                    placeholder=""
                  />
                </div>

                <div className="w-[100%] mt-[30px]">
                  <label className="text-[16px] font-[400] text-[#2E2E2E]">
                    Password
                  </label>

                  <input
                    className="w-full px-4 border border-[#CFCFCF] h-[48px] rounded-lg mt-[9px]"
                    placeholder=""
                  />
                </div>

                <div className="w-full justify-between flex items-center mt-[10px]">
                  <div className="flex items-center gap-x-[10px]">
                    <input type="checkbox" />

                    <p className="text-[14px] font-[500]">Remember me</p>
                  </div>

                  <p className="text-[14px] font-[500] text-[#DF3906]">
                    Forgot Password?
                  </p>
                </div>

                <button className="bg-[#2E2E2E] h-[43px] text-[16px] font-[600] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#ffffff] w-full mt-[30px]">
                  Login
                </button>

                <p className="text-[14px] font-[500] text-center mx-auto mt-[10px]">
                  Don’t have an account?{" "}
                  <span className="text-[#DF3906]">Create Account</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
