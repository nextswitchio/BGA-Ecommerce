"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./button";
import Logo from "../../public/images/logo.svg";
import Search from "../../public/images/search.svg";
import Cart from "../../public/images/cart.svg";
import Profile from "../../public/images/profile.svg";
import UK from "../../public/images/uk.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { PiVanBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-[#0C0C0D0D] border">
      <div
        className={`w-full h-[72px] flex justify-center items-center bg-[#656B70] gap-x-[30px] px-[5%] ${
          isOpen && "fixed z-10"
        } `}
      >
        <p className="text-white text-[16px] font-[500] max-sm:text-[14px] ">
          {" "}
          Buy 1 Get 1 Free Jean + Free Shipping
        </p>

        <Button variant="secondary" className="w-[101px] h-[33px] text-[14px]">
          Shop Now
        </Button>
      </div>

      <div className="w-full py-[20px] max-sm:py-[13px] px-[4%] mx-auto ">
        {isOpen && (
          <div className="fixed left-0 bg-[#00000030] h-screen top-[73px] z-10 w-full">
            <div className="w-[80%] bg-[#fff]  h-screen ">
              <div className="pt-[30px] px-[5%]" onClick={handleOpenMenu}>
                <IoClose size={30} />
              </div>

              <div className="w-full pt-[25px] flex flex-col gap-y-[25px] px-[5%]">
                <div className="w-full flex justify-between">
                  <p className="">Women</p>

                  <p className="">
                    <MdKeyboardArrowRight size={25} />
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <p className="">Men</p>

                  <p className="">
                    <MdKeyboardArrowRight size={25} />
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <p className="">Children</p>

                  <p className="">
                    <MdKeyboardArrowRight size={25} />
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <p className="">Jeans</p>

                  <p className="">
                    <MdKeyboardArrowRight size={25} />
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <p className="">Watch</p>

                  <p className="">
                    <MdKeyboardArrowRight size={25} />
                  </p>
                </div>
              </div>

              <div className="bg-[#f2f2f2] py-[25px] mt-[30px] ">
                <div className="w-full flex gap-x-[25px] px-[5%] ">
                  <button className="border-2 border-[#000] bg-transparent py-[5px] w-[100%] max-w-[300px] rounded-[18px] px-[10px] text-[14px] ">
                    Sign In
                  </button>

                  <button className="border-2 border-[#000] bg-transparent py-[5px] w-[100%] max-w-[300px] rounded-[18px] px-[10px] text-[14px]">
                    Create Account
                  </button>
                </div>

                <div className="w-full px-[5%] mt-[25px] space-y-[20px] ">
                  <div className="flex gap-x-[8px] items-center">
                    <GrLocation color="#000" />

                    <p className="text-[14px] font-[300] text-[#000]">
                      Store Location
                    </p>
                  </div>

                  <div className="flex gap-x-[8px] items-center">
                    <GrLocation color="#000" />

                    <p className="text-[14px] font-[300] text-[#000]">
                      Order Status
                    </p>
                  </div>

                  <div className="flex gap-x-[8px] items-center">
                    <PiVanBold color="#000" />

                    <p className="text-[14px] font-[300] text-[#000]">
                      Start a Return
                    </p>
                  </div>

                  <div className="flex gap-x-[8px] items-center">
                    <p className="text-[14px] font-[300] text-[#000]">
                      Get Help
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex justify-between items-center ">
          <div className="min-[900px]:hidden" onClick={handleOpenMenu}>
            <IoMdMenu className="" size={30} />
          </div>
          <ul className="flex items-center gap-x-[17px] max-lg:hidden ">
            <li className="text-[16px] font-[500] text-[#2E2E2E] ">Women</li>
            <li className="text-[16px] font-[500] text-[#2E2E2E]">Men</li>
            <li className="text-[16px] font-[500] text-[#2E2E2E]">Trendy</li>
            <li className="text-[16px] font-[500] text-[#2E2E2E]">Clearance</li>
          </ul>
          <div className="">
            <Image alt="logo" src={Logo} />
          </div>

          <ul className="flex items-center gap-x-[23px] max-lg:hidden">
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

          <div className="min-[900px]:hidden">
            <Image alt="cart" src={Cart} width={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
