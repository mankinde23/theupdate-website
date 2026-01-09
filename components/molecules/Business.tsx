import React from "react";
import Image from "next/image";
import update from "@/public/images/updateblue.svg";
import update2 from "@/public/images/updategreen.svg";
import app3 from "@/public/images/business.jpg";
import app2 from "@/public/images/app2.png";
import logo from "@/public/logo2.svg";
import booking from "@/public/images/booking.png";
import download from "@/public/images/download (2).png";
import appstore from "@/public/images/appstore.png";
import playstore from "@/public/images/playstore.png";
import { motion, Variants } from "framer-motion";
import { ShimmeringText } from "../ui/shadcn-io/shimmering-text";
const word = "MADE";

const containerVariants: Variants = {
  animate: {
    transition: {
      // This creates the "flowing" color effect across letters
      staggerChildren: 0.1,
      delayChildren: 0.5, // Wait for the entrance animation to finish
    },
  },
};

const letterVariants: Variants = {
  initial: {
    color: "#FFFFFF",
  },
  animate: {
    color: "#ADF7FF",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse", // Makes the color "flow" back and forth
      repeatDelay: 1,
    },
  },
};
export default function Business() {
  // Container variants to stagger the children if you want
  // them to appear one after another
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: 50, // Start 50px to the right
    },
    visible: {
      opacity: 1,
      x: 0, // Slide to final position
      transition: {
        duration: 8.8,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth "out-expo" easing
      },
    },
  };
  return (
    <div id="business">
      <div className="flex flex-row gap-[137px] mt-[105px] max-lg:flex-col">
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
          <div className=" font-medium text-[48px] max-lg:text-[36px]">
            Stay On Top Of Your <br /> Bookings
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
        {/* <div></div>
        <Image src={booking} alt="test" className="" /> */}
        <div
          className="w-full h-[213px] max-lg:h-[108px] bg-cover bg-center rounded-[25px] flex justify-center items-center"
          style={{ backgroundImage: `url(${booking.src})` }}
        >
          {/* <div className="text-white  font-archivo text-[64px] tracking-[-8%] font-normal  ">
            BOOKING <span className="text-[#ADF7FF]">MADE</span> EASY
          </div> */}
          <ShimmeringText
            text="BOOKING MADE EASY"
            duration={2.5}
            wave={true}
            color="#FFFFFF" // Base text color
            shimmeringColor="#ADF7FF" // The highlight and final "MADE" color
            className="font-archivo text-[64px] max-lg:text-[48px] tracking-[-8%] font-normal"
          />
        </div>
      </div>

      <div className="bg-[#ECF1F4] rounded-[44px] h-[515px] max-lg:h-[409px] pt-[147px] max-lg:pt-[84px] pl-[78px] max-lg:pl-[36px] mt-[105px]">
        <div className="flex flex-col  gap-[52px]">
          <div className="text-[55px] lg:text-[36px] text-[#101010] font-medium">
            DOWNLOAD NOW
          </div>
          <div className="flex flex-row gap-[8px]">
            <div className="w-[125px] h-[50px]">
              <Image src={playstore} alt="" className="h-[]" />
            </div>
            <div className="w-[128px] h-[50px]">
              <Image src={appstore} alt="" className="h-[]" />
            </div>
          </div>
        </div>
        <div className="relative w-[468px] h-[726px] max-lg:w-[267px] max-lg:h-[415px]">
          <Image
            src={download}
            alt=""
            className="h-[] absolute left-[938px] top-[-428px] max-lg:left-[550px] max-lg:top-[-150px]"
          />
        </div>
      </div>
    </div>
  );
}
