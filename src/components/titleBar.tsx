import React from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";

const TitleBar = () => {
  return (
    <div className="w-full flex justify-between">
      <FaCircleArrowLeft size={30} />

      <p className="text-[20px] font-[600] ">Cart Summary</p>

      <div />
    </div>
  );
};

export default TitleBar;
