import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { PiVanBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import Pre1 from "../../../public/images/p1.svg";
import Pre2 from "../../../public/images/p2.svg";
import Pre3 from "../../../public/images/p3.svg";

const Preview = () => {
  return (
    <div className="w-full py-[80px]">
      <div className="w-full px-[3%] mx-auto max-w-[1400px]">
        <div className="w-full flex gap-x-[4%]">
          <div className="w-[60%] flex flex-wrap gap-x-[15px] gap-y-[15px] ">
            <Image
              alt="human"
              src={Pre1}
              className="w-[49%] h-auto object-cover"
            />
            <Image
              alt="human"
              src={Pre2}
              className="w-[49%] h-auto object-cover"
            />
            <Image
              alt="human"
              src={Pre1}
              className="w-[49%] h-auto object-cover"
            />
            <Image
              alt="human"
              src={Pre3}
              className="w-[49%] h-auto object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-[24px] font-[600] text-[#2E2E2E]">
              Retro Brown Jacket Coat Packing Shirt
            </h1>

            <div className="flex gap-x-[40px] mt-[25px]">
              <p className="font-[400] text-[16px] text-[#5E5E5E] ">$24.50</p>

              <p className="font-[600] text-[16px] text-[#0500E0] ">$14.50</p>
            </div>

            <div className="flex gap-x-[50px] items-center mt-[25px]">
              <div className="flex gap-x-[6px]">
                <FaStar color="#FCC608" size={25} />
                <FaStar color="#FCC608" size={25} />
                <FaStar color="#FCC608" size={25} />
                <FaStar color="#FCC608" size={25} />
                <FaRegStar color="#FCC608" size={25} />
              </div>

              <p className="text-[16px] font-[500] text-[#4E4E4E]">
                (120 Reviews)
              </p>
            </div>

            <div className="flex gap-x-[25px] items-center mt-[25px]">
              <div className="flex items-center justify-center h-[24px] w-[24px] bg-[#D5D4FF] rounded-[50%]">
                <IoCheckmarkSharp />
              </div>

              <p className="font-[400] text-[14px] text-[#5E5E5E] ">In Stock</p>
            </div>

            <div className="w-full mt-[25px]">
              <p className="font-[600] text-[14px] text-[#DF3906] ">Colour</p>

              <div className="w-full mt-[20px] flex justify-between">
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#716500] rounded-[50%]"></div>
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#5F8ED4] rounded-[50%]"></div>
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#F0C59A] rounded-[50%]"></div>
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#009266] rounded-[50%]"></div>
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#001663] rounded-[50%]"></div>
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#663D00] rounded-[50%]"></div>
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#0400B2] rounded-[50%]"></div>
              </div>
            </div>

            <div className="w-full mt-[25px]">
              <p className="font-[600] text-[14px] text-[#DF3906] ">Size</p>

              <div className="w-full mt-[20px] flex justify-between">
                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  27
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  28
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  29
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  30
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  31
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  32
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  33
                </div>

                <div className="flex items-center justify-center h-[32px] w-[32px] bg-[#E8E8E8] text-[16] font-[500]">
                  34
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-x-[15px] mt-[35px]">
              <button className="border-[#541CFF] border h-[48px] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#541CFF] w-full max-w-[166px]">
                <PiVanBold color="#541CFF" /> Ship To Me
              </button>

              <button className="border-[#7E7E7E] border h-[48px] rounded-[4px] text-[#7E7E7E] w-full max-w-[166px]">
                Free Pickup
              </button>
            </div>

            <div className="flex justify-center gap-x-[15px] mt-[35px]">
              <button className="bg-[#2E2E2E] h-[48px] text-[16px] font-[600] flex justify-center items-center gap-x-[10px] rounded-[4px] text-[#ffffff] flex-1">
                Add to Cart <FaCartPlus color="#fff" />
              </button>

              <button className="border-[#2E2E2E] border h-[48px] rounded-[4px] text-[#7E7E7E] w-full max-w-[68px] flex justify-center items-center ">
                <FaRegHeart size={22} />
              </button>
            </div>

            <div className="w-full mt-[25px]">
              <p className="font-[600] text-[20px] text-[#2E2E2E] ">
                Description
              </p>

              <div className="w-full mt-[15px] flex justify-between">
                <p className="text-[14px] font-[400] text-[#5E5E5E]">
                  Lorem ipsum dolor sit amet consectetur. Aliquet vehicula nulla
                  enim dui id amet orci. Est aliquam nec magna egestas turpis
                  porttitor maecenas vitae. Auctor velit lectus velit cursus
                  quam. Diam turpis gravida tincidunt convallis vitae. Bibendum
                  non velit ut arcu pretium hac libero. Egestas at sit sed
                  ornare molestie. Magna ipsum nisl mauris dui mauris non
                  habitant diam. Molestie nisl arcu enim consectetur viverra
                  euismod morbi metus. Molestie facilisi nascetur volutpat
                  suspendisse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
