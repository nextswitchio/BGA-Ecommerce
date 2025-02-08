import React from "react";
import ProductCard from "@/components/productCard";

const ForYou = () => {
  return (
    <div className="w-full py-[80px] mt-[30px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <h1 className="text-[36px] font-[600] text-[#2E2E2E] text-center ">
          Picked Just For You
        </h1>

        <div className="w-full mt-[40px] flex gap-x-[4%] ">
          {[...Array(4)].map((_, i) => {
            return (
              <div className="w-[25%]">
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
