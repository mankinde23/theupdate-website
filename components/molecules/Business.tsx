import React from "react";
import Image from "next/image";
import update from "@/public/images/updateblue.svg";
import update2 from "@/public/images/updategreen.svg";
import app3 from "@/public/images/business.jpg";
import app2 from "@/public/images/app2.png";
import logo from "@/public/logo2.svg";
import booking from "@/public/images/booking.png";
import download from "@/public/images/download (5).jpg";
export default function Business() {
  return (
    <div id="business">
      <div className="flex flex-row gap-[137px] mt-[105px]">
        <div className=" flex flex-col gap-[2.5rem] w-full">
          <div className="bg-[#18BCCA] py-[2px] pl-[30px] pr-[33px] rounded-[7px] w-fit">
            <div className="flex justify-end relative ">
              <Image
                src={update}
                alt="nation wide logo"
                className="max-lg:w-[15px] max-lg:h-[20px] absolute top-[1px] right-[-19px] "
              />
            </div>
            <div className="text-[#FFFFFF] text-[14px] mt-[7px] mb-[9px] font-firs font-bold ">
              For Businesses
            </div>
            <div className="flex justify-start relative">
              <Image
                src={update2}
                alt="nation wide logo"
                className="max-lg:w-[15px] max-lg:h-[20px] absolute bottom-[1px] left-[-14px]"
              />
            </div>
          </div>
          <div className=" font-medium text-[48px]">
            Stay On Top Of Your Bookings
          </div>
          <div className="flex flex-col gap-[45px]">
            <div className="flex flex-row gap-[13px]">
              <div className="bg-[#081F2F] rounded-[25.5px] w-[33px] h-[33px] flex justify-center items-center">
                <Image src={logo} alt={"nation wide logo"} className="" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[20px] font-medium text-[#1E1E1E]">
                  Track Every Dollar Earned
                </div>
                <div className="text-[#3A3A3A] text-[16px] font-normal">
                  See exactly where your business revenue comes from.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[13px]">
              <div className="bg-[#081F2F] rounded-[25.5px] w-[33px] h-[33px] flex justify-center items-center">
                <Image src={logo} alt={"nation wide logo"} className="" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[20px] font-medium text-[#1E1E1E]">
                  Optimize Team Performance
                </div>
                <div className="text-[#3A3A3A] text-[16px] font-normal">
                  Track staff efficiency to maximize daily output.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[13px]">
              <div className="bg-[#081F2F] rounded-[25.5px] w-[33px] h-[33px] flex justify-center items-center">
                <Image src={logo} alt={"nation wide logo"} className="" />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[20px] font-medium text-[#1E1E1E]">
                  Boost Every Sale
                </div>
                <div className="text-[#3A3A3A] text-[16px] font-normal">
                  Know your typical sale value to increase earnings.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[]">
          <Image src={app3} alt="" className="h-[]" />
        </div>
      </div>
      <div className="mt-[105px]">
        <Image src={booking} alt="test" className="" />
      </div>
      <div>
        <Image src={download} alt="" className="h-[]" />
      </div>
    </div>
  );
}
