import React from "react";
import ProductCard from "@/components/productCard";
import { CiFilter } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { BiSort } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Collection = () => {
  return (
    <div className="w-full py-[80px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between">
          <h1 className="text-[36px] font-[600] text-[#2E2E2E]">
            Men’s Collection
          </h1>

          <p className="text-[24px] font-[600]">(3456 Jeans)</p>
        </div>

        <div className="bg-[#FAFAFA] py-[15px] px-[2%] mt-[20px]  flex justify-between">
          <div className="bg-[#fff] px-[10px] py-[8px] flex w-[261px] rounded-[4px] justify-between">
            <div className="flex items-center gap-x-[10px]">
              <CiFilter />
              <p className="text-[#7E7E7E] text-[14px] font-[400]">
                Show Filter
              </p>
            </div>

            <IoEye />
          </div>

          <div className="bg-[#fff] px-[10px] py-[8px] flex w-[261px] rounded-[4px] justify-between">
            <div className="flex items-center gap-x-[10px]">
              <BiSort />
              <p className="text-[#7E7E7E] text-[14px] font-[400]">Sort By</p>
            </div>

            <IoIosArrowDown />
          </div>
        </div>

        <div className="w-full mt-[40px] flex gap-x-[4%] flex-wrap gap-y-[50px] ">
          {[...Array(16)].map((_, i) => {
            return (
              <div className="w-[22%]" key={i}>
                <ProductCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
