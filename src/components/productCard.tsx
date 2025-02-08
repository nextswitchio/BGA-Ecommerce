import React from "react";
import Image from "next/image";
import ProductImg from "../../public/images/pdt.svg";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <Image
          alt="product"
          src={ProductImg}
          className="w-full h-full max-h-[216px] object-cover rounded-[32px] "
        />
        <div className="flex justify-center items-center w-[28px] h-[28px] bg-white rounded-[50%] absolute right-[15px] top-[15px] ">
          <FaRegHeart size={18} color="#DF3906" />
        </div>
      </div>

      <div className="w-full mt-[20px] flex flex-col gap-y-[1px]">
        <p className="text-[12px] font-[600] text-[#DF3906]">
          Summer Collection
        </p>

        <p className="text-[18px] font-[600] text-[#2E2E2E] mt-[5px]">
          Packing Shirt <span className="text-[14px]">(614 Items sold)</span>
        </p>

        <p className="text-[20px] font-[500] text-[#2E2E2E]">$24.50</p>

        <p className="text-[14px] font-[400] text-[#7E7E7E]">
          5 available colours
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
