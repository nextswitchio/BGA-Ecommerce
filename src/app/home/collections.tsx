import React from "react";
import Button from "@/components/button";
import { MdArrowOutward } from "react-icons/md";

const Collections = () => {
  return (
    <div className="w-full mt-[30px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-y-[30px]">
          <div className="flex w-full gap-x-[30px]">
            <div className="flex justify-center items-center w-[50%]">
              <div className="c1Bg">
                <div className="flex flex-col justify-center items-center pt-[30%] h-full">
                  <h1 className="text-[32px] font-[800] text-[#2E2E2E]  ">
                    Styles & Collection
                  </h1>

                  <p className="text-[16px] font-[500] ">
                    Happiness for the holidays. Great joy for all.
                  </p>

                  <Button
                    variant="primary"
                    className="w-[141px] h-[38px] text-[14px] flex gap-x-[10px] items-center justify-center mt-[30px] "
                  >
                    Shop Now <MdArrowOutward color="#fff" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[50%]">
              <div className="c2Bg">
                <div className="flex flex-col justify-center items-center pt-[30%] h-full">
                  <h1 className="text-[32px] font-[800] text-[#2E2E2E]  ">
                    Styles & Collection
                  </h1>

                  <p className="text-[16px] font-[500] ">
                    Happiness for the holidays. Great joy for all.
                  </p>

                  <Button
                    variant="primary"
                    className="w-[141px] h-[38px] text-[14px] flex gap-x-[10px] items-center justify-center mt-[30px] "
                  >
                    Shop Now <MdArrowOutward color="#fff" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center c3Bg">
            <div className="flex flex-col justify-center items-center mt-[12%]">
              <h1 className="text-[58px] font-[800] text-[#2E2E2E]  ">
                Styles & Collection
              </h1>

              <p className="text-[20px] font-[500] ">
                Happiness for the holidays. Great joy for all.
              </p>

              <Button
                variant="primary"
                className="w-[141px] h-[38px] text-[14px] flex gap-x-[10px] items-center justify-center mt-[30px] "
              >
                Shop Now <MdArrowOutward color="#fff" size={20} />
              </Button>
            </div>
          </div>

          <div className="flex w-full gap-x-[25px]">
            <div className="flex justify-center items-center w-[33%]">
              <div className="c4Bg">
                <div className="flex flex-col justify-center items-center pt-[35%] h-full">
                  <h1 className="text-[32px] font-[800] text-[#fff]  ">
                    Styles & Collection
                  </h1>

                  <p className="text-[16px] font-[500] text-[#fff] ">
                    Happiness for the holidays. Great joy for all.
                  </p>

                  <Button
                    variant="primary"
                    className="w-[141px] h-[38px] text-[14px] flex gap-x-[10px] items-center justify-center mt-[30px] "
                  >
                    Shop Now <MdArrowOutward color="#fff" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[33%]">
              <div className="c5Bg">
                <div className="flex flex-col justify-center items-center pt-[35%]  h-full">
                  <h1 className="text-[32px] font-[800] text-[#2E2E2E]  ">
                    Styles & Collection
                  </h1>

                  <p className="text-[16px] font-[500] ">
                    Happiness for the holidays. Great joy for all.
                  </p>

                  <Button
                    variant="primary"
                    className="w-[141px] h-[38px] text-[14px] flex gap-x-[10px] items-center justify-center mt-[30px] "
                  >
                    Shop Now <MdArrowOutward color="#fff" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[33%]">
              <div className="c6Bg">
                <div className="flex flex-col justify-center items-center pt-[35%]  h-full ">
                  <h1 className="text-[32px] font-[800] text-[#2E2E2E]  ">
                    Styles & Collection
                  </h1>

                  <p className="text-[16px] font-[500] ">
                    Happiness for the holidays. Great joy for all.
                  </p>

                  <Button
                    variant="primary"
                    className="w-[141px] h-[38px] text-[14px] flex gap-x-[10px] items-center justify-center mt-[30px] "
                  >
                    Shop Now <MdArrowOutward color="#fff" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
