import React from "react";
import Image from "next/image";
import Button from "./button";
import Logo from "../../public/images/logo.svg";
import Search from "../../public/images/search.svg";
import Cart from "../../public/images/cart.svg";
import Profile from "../../public/images/profile.svg";
import UK from "../../public/images/uk.svg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full border-[#0C0C0D0D] border">
      <div className="w-full h-[72px] flex justify-center items-center bg-[#656B70] gap-x-[30px] px-[5%] ">
        <p className="text-white text-[16px] font-[500] ">
          {" "}
          Buy 1 Get 1 Free Jean + Free Shipping
        </p>

        <Button variant="secondary" className="w-[101px] h-[33px] text-[14px]">
          Shop Now
        </Button>
      </div>

      <div className="w-full py-[20px] px-[3%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between ">
          <ul className="flex items-center gap-x-[17px]">
            <li className="text-[16px] font-[500] text-[#2E2E2E] ">Women</li>
            <li className="text-[16px] font-[500] text-[#2E2E2E]">Men</li>
            <li className="text-[16px] font-[500] text-[#2E2E2E]">Trendy</li>
            <li className="text-[16px] font-[500] text-[#2E2E2E]">Clearance</li>
          </ul>
          <div className="">
            <Image alt="logo" src={Logo} />
          </div>
          <ul className="flex items-center gap-x-[23px]">
            <li className="">
              <Image alt="search" src={Search} width={25} />
            </li>

            <li className="">
              <Image alt="cart" src={Cart} width={25} />
            </li>

            <li className="">
              <Image alt="profile" src={Profile} width={25} />
            </li>

            <li className="flex gap-x-[8px] items-center ">
              <Image alt="flag" src={UK} width={23} height={23} />

              <p className="text-[16px] font-[400]">GBP</p>

              <IoIosArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
