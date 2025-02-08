import React from "react";
import ProductCard from "@/components/productCard";

const Likes = () => {
  return (
    <div className="w-full py-[80px] mt-[10px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <h1 className="text-[36px] font-[600] text-[#2E2E2E]">
          You may also like
        </h1>

        <div className="w-full mt-[40px] flex gap-x-[4%] flex-wrap gap-y-[45px] ">
          {[...Array(8)].map((_, i) => {
            return (
              <div className="w-[22%]" key={i}>
                <ProductCard />
              </div>
            );
          })}
        </div>

        <div className="w-full mt-[100px]">
          <h1 className="text-[36px] font-[600] text-[#2E2E2E]">
            People also viewed
          </h1>

          <div className="w-full mt-[40px] flex gap-x-[4%] flex-wrap gap-y-[45px] ">
            {[...Array(8)].map((_, i) => {
              return (
                <div className="w-[22%]" key={i}>
                  <ProductCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Likes;
