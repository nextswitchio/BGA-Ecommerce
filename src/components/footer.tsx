import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-white.svg";
import { GrLocation } from "react-icons/gr";
import { RiFeedbackLine } from "react-icons/ri";
import { IoGiftOutline } from "react-icons/io5";
import { PiVanBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#2E2E2E] mt-[100px]">
      {/* Footer Section */}
      <footer
        id="footer"
        className="py-[40px] px-[3%] w-[100%] mx-auto max-w-[1400px]"
      >
        <div className="flex w-full mt-[70px]  pb-[50px]">
          <div className="flex-1 flex justify-between">
            <div className="w-[25%]">
              <Image alt="logo" src={Logo} />

              <div className="mt-[30px] flex flex-col gap-y-[15px]">
                <p className="text-[14px] font-[600] text-white">Follow Us</p>

                <div className="flex mt-[0px] gap-x-[12px]">
                  <div className="">
                    <FaInstagram size={20} color="#fff" />
                  </div>
                 
                  <div className="">
                    <TbBrandTiktok size={20} color="#fff" />
                  </div>

                  <div className="">
                    <FiFacebook size={20} color="#fff" />
                  </div>

                  <div className="">
                    <BsTwitterX size={20} color="#fff" />
                  </div>

                  <div className="">
                    <AiOutlineYoutube size={20} color="#fff" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[23%]">
              {/* <h3 className="text-[21px] font-[600] text-white">Products</h3> */}

              <div className="mt-[5px] flex flex-col gap-y-[15px]">
                <div className="flex gap-x-[8px] items-center">
                  <GrLocation color="#fff" />

                  <p className="text-[14px] font-[300] text-white">
                    Store Location
                  </p>
                </div>

                <div className="flex gap-x-[8px] items-center">
                  <GrLocation color="#fff" />

                  <p className="text-[14px] font-[300] text-white">
                    Order Status
                  </p>
                </div>

                <div className="flex gap-x-[8px] items-center">
                  <PiVanBold color="#fff" />

                  <p className="text-[14px] font-[300] text-white">
                    Start a Return
                  </p>
                </div>

                <div className="flex gap-x-[8px] items-center">
                  <IoGiftOutline color="#fff" />

                  <p className="text-[14px] font-[300] text-white">
                    Gift Cards/Balance
                  </p>
                </div>

                <div className="flex gap-x-[8px] items-center">
                  <RiFeedbackLine color="#fff" />

                  <p className="text-[14px] font-[300] text-white">Feedback</p>
                </div>
              </div>
            </div>

            <div className="w-[23%]">
              <h3 className="text-[21px] font-[600] text-white">
                Customer Service
              </h3>

              <div className="mt-[15px] flex flex-col gap-y-[15px]">
                <p className="text-[14px] font-[300] text-white">
                  Help Desk & FAQ
                </p>
                <p className="text-[14px] font-[300] text-white">
                  urn & Exchange Policy
                </p>
                <p className="text-[14px] font-[300] text-white">
                  Shipping Policy
                </p>
                <p className="text-[14px] font-[300] text-white">
                  Pickup Store
                </p>
                <p className="text-[14px] font-[300] text-white">
                  Student Discount
                </p>
                <p className="text-[14px] font-[300] text-white">
                  Coupons & Promos
                </p>
                <p className="text-[14px] font-[300] text-white">Size Charts</p>
                <p className="text-[14px] font-[300] text-white">
                  Affiliate Program
                </p>
              </div>
            </div>

            <div className="w-[23%]">
              <h3 className="text-[21px] font-[600] text-white">Questions?</h3>

              <div className="mt-[15px] flex flex-col gap-y-[15px]">
                <div className="">
                  <p className="text-[14px] font-[600] text-white">Call Us</p>
                  <p className="text-[14px] font-[300] text-white mt-[10px]">
                    +1 567 567 5555
                  </p>
                </div>
              </div>

              <div className="mt-[20px] flex flex-col gap-y-[15px]">
                <div className="">
                  <p className="text-[14px] font-[600] text-white">
                    About BGA Designs
                  </p>
                  <p className="text-[14px] font-[300] text-white mt-[10px]">
                    Careers
                  </p>
                </div>
                <p className="text-[14px] font-[300] text-white">
                  Supply Chain
                </p>
              </div>
            </div>
          </div>

          <div className="w-[25%]">
            <h3 className="text-[21px] font-[600] text-white">
              Subsribe for Emails
            </h3>

            <div className="mt-[15px] flex flex-col gap-y-[15px] leading-[30px]">
              <div className="border-[#fff] border rounded-[5px] h-[39px] w-full"></div>

              <p className="text-[12px] font-[300] text-[#CFCFCF] max-w-full mt-[15px] leading-[16px] ">
                By signing up, you agree to receive emails from BGA Designs
                about sales, promotions, events, new arrivals, and more. View
                Terms and Privacy Policy
              </p>

              <p className="text-[14px] font-[300] text-white mt-[15px]">
                Copyrights 2024,{" "}
                <span className="font-[600]">BGA Designs.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
