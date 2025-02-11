import React from "react";
import ProductCard from "@/components/productCard";

const ForYou = () => {
  return (
    <div className="w-full py-[80px] mt-[30px]">
      <div className="w-full px-[3%] max-md:px-[5%] mx-auto max-w-[1500px]">
        <h1 className="text-[36px] font-[600] text-[#2E2E2E] text-center max-sm:text-[26px] ">
          Picked Just For You
        </h1>

        <div className="w-full mt-[40px] flex gap-x-[4%] flex-wrap gap-y-[40px] ">
          {[...Array(4)].map((_, i) => {
            return (
              <div className="w-[22%] max-xlg:w-[30%] max-md:w-[48%] max-[500px]:w-full ">
                <ProductCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForYou;
