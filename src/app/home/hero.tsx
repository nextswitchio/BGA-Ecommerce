import React from "react";
import Button from "@/components/button";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <div className="heroBg w-full flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default Hero;
