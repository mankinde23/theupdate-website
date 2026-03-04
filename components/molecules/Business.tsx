// import React from "react";
// import Image from "next/image";
// import update from "@/public/images/updateblue.svg";
// import update2 from "@/public/images/updategreen.svg";
// import app3 from "@/public/images/business.jpg";
// import app2 from "@/public/images/app2.png";
// import logo from "@/public/logo2.svg";
// import booking from "@/public/images/booking.png";
// import download from "@/public/images/download (2).png";
// import appstore from "@/public/images/appstore.png";
// import playstore from "@/public/images/playstore.png";
// import { motion, Variants } from "framer-motion";
// import { ShimmeringText } from "../ui/shadcn-io/shimmering-text";
// const word = "MADE";

// const containerVariants: Variants = {
//   animate: {
//     transition: {
//       // This creates the "flowing" color effect across letters
//       staggerChildren: 0.1,
//       delayChildren: 0.5, // Wait for the entrance animation to finish
//     },
//   },
// };

// const letterVariants: Variants = {
//   initial: {
//     color: "#FFFFFF",
//   },
//   animate: {
//     color: "#ADF7FF",
//     transition: {
//       duration: 0.8,
//       ease: "easeInOut",
//       repeat: Infinity,
//       repeatType: "reverse", // Makes the color "flow" back and forth
//       repeatDelay: 1,
//     },
//   },
// };
// export default function Business() {
//   // Container variants to stagger the children if you want
//   // them to appear one after another
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1, // Delay between each word
//       },
//     },
//   };

//   const wordVariants = {
//     hidden: {
//       opacity: 0,
//       x: 50, // Start 50px to the right
//     },
//     visible: {
//       opacity: 1,
//       x: 0, // Slide to final position
//       transition: {
//         duration: 8.8,
//         ease: [0.22, 1, 0.36, 1] as const, // Smooth "out-expo" easing
//       },
//     },
//   };
//   return (
//     <div id="business">
//       <div className="flex flex-row gap-[137px] mt-[105px] max-lg:flex-col">
//         <div className=" flex flex-col gap-[2.5rem] w-full">
//           <div className="bg-[#18BCCA] py-[2px] pl-[30px] pr-[33px] rounded-[7px] w-fit">
//             <div className="flex justify-end relative ">
//               <Image
//                 src={update}
//                 alt="nation wide logo"
//                 className="max-lg:w-[15px] max-lg:h-[20px] absolute top-[1px] right-[-19px] "
//               />
//             </div>
//             <div className="text-[#FFFFFF] text-[14px] mt-[7px] mb-[9px] font-firs font-bold ">
//               For Businesses
//             </div>
//             <div className="flex justify-start relative">
//               <Image
//                 src={update2}
//                 alt="nation wide logo"
//                 className="max-lg:w-[15px] max-lg:h-[20px] absolute bottom-[1px] left-[-14px]"
//               />
//             </div>
//           </div>
//           <div className=" font-medium text-[48px] max-lg:text-[36px] max-md:text-[20px]">
//             Stay On Top Of Your <br className="max-md:hidden block" /> Bookings
//           </div>
//           <div className="flex flex-col gap-[45px]">
//             <div className="flex flex-row gap-[13px]">
//               <div className="bg-[#081F2F] rounded-[25.5px] max-md:rounded-full w-[33px] h-[33px] flex justify-center items-center">
//                 <Image
//                   src={logo}
//                   alt={"nation wide logo"}
//                   className=" max-md:w-[8px] max-md:h-[11px]"
//                 />
//               </div>
//               <div className="flex flex-col gap-[4px]">
//                 <div className="text-[20px] max-md:text-[13px] font-medium text-[#1E1E1E]">
//                   Track Every Dollar Earned
//                 </div>
//                 <div className="text-[#3A3A3A] text-[16px] font-normal max-md:text-[12px]">
//                   See exactly where your business revenue comes from.
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row gap-[13px]">
//               <div className="bg-[#081F2F] rounded-[25.5px] max-md:rounded-full w-[33px] h-[33px] flex justify-center items-center">
//                 <Image
//                   src={logo}
//                   alt={"nation wide logo"}
//                   className=" max-md:w-[8px] max-md:h-[11px]"
//                 />
//               </div>
//               <div className="flex flex-col gap-[4px]">
//                 <div className="text-[20px] max-md:text-[13px] font-medium text-[#1E1E1E]">
//                   Optimize Team Performance
//                 </div>
//                 <div className="text-[#3A3A3A] text-[16px] font-normal max-md:text-[12px]">
//                   Track staff efficiency to maximize daily output.
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row gap-[13px]">
//               <div className="bg-[#081F2F] rounded-[25.5px] max-md:rounded-full w-[33px] h-[33px] flex justify-center items-center">
//                 <Image
//                   src={logo}
//                   alt={"nation wide logo"}
//                   className=" max-md:w-[8px] max-md:h-[11px]"
//                 />
//               </div>
//               <div className="flex flex-col gap-[4px]">
//                 <div className="text-[20px] max-md:text-[13px] font-medium text-[#1E1E1E]">
//                   Boost Every Sale
//                 </div>
//                 <div className="text-[#3A3A3A] text-[16px] font-normal max-md:text-[12px]">
//                   Know your typical sale value to increase earnings.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="h-[]">
//           <Image src={app3} alt="" className="h-[]" />
//         </div>
//       </div>
//       <div className="mt-[105px] max-lg:mt-[79px]">
//         {/* <div></div>
//         <Image src={booking} alt="test" className="" /> */}
//         <div
//           className="w-full h-[213px] max-lg:h-[108px] bg-cover bg-center rounded-[25px] max-lg:rounded-[1rem] flex justify-center items-center"
//           style={{ backgroundImage: `url(${booking.src})` }}
//         >
//           {/* <div className="text-white  font-archivo text-[64px] tracking-[-8%] font-normal  ">
//             BOOKING <span className="text-[#ADF7FF]">MADE</span> EASY
//           </div> */}
//           <ShimmeringText
//             text="BOOKING MADE EASY"
//             duration={2.5}
//             wave={true}
//             color="#FFFFFF" // Base text color
//             shimmeringColor="#ADF7FF" // The highlight and final "MADE" color
//             className="font-archivo text-[64px] max-lg:text-[20px] tracking-[-8%] font-normal"
//           />
//         </div>
//       </div>

//       <div className="bg-[#ECF1F4] rounded-[44px] h-[515px] max-lg:h-[409px] pt-[147px] max-lg:pt-[84px] pl-[78px] max-lg:pl-[36px] mt-[105px] max-md:pt-[50px] max-md:pl-[26px] max-lg:flex max-lg:flex-col">
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-col  gap-[52px] max-lg:gap-[15px]">
//             <div className="text-[55px] max-lg:text-[36px] max-md:text-[19px] text-[#101010] font-medium">
//               DOWNLOAD NOW
//             </div>
//             <div className="flex flex-row gap-[8px]">
//               <div className="w-[125px] h-[50px] max-lg:w-[87px] max-lg:h-[34px]">
//                 <Image src={playstore} alt="" className="h-[]" />
//               </div>
//               <div className="w-[128px] h-[50px] max-lg:w-[87px] max-lg:h-[34px] ">
//                 <Image src={appstore} alt="" className="h-[]" />
//               </div>
//             </div>
//           </div>
//           <div className="relative max-md:hidden w-[468px] max-lg:w-[267px] max-md:h-[348px]  h-[726px] max-lg:h-[415px]  -mt-[220px] lg:-mt-[280px] max-lg:-mt-[140px] max-md:mt-[167px] ">
//             <Image
//               src={download}
//               alt=""
//               className="max-md:w-[224px] max-md:h-[348px]"
//             />
//           </div>
//         </div>

//         <div className="relative hidden max-md:block w-[468px] max-lg:w-[267px] max-md:h-[348px]  h-[726px] max-lg:h-[415px]  lg:-mt-[280px] max-lg:-mt-[140px] max-md:mt-[23px] ">
//           <Image
//             src={download}
//             alt=""
//             className="max-md:w-[224px] max-md:h-[348px] absolute max-lg:block left-[40px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
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
const downloadTextVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger between each word
    },
  },
};

const downloadWordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Variants for store icons animation
const storeIconsVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between Play Store and App Store
    },
  },
};

const storeIconVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const featuresContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3, // 0.3s delay between each child
    },
  },
};

const featureItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// Variants for the blue button animation
const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const buttonTextVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};
const buttonChildVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};
const buttonIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 200 },
  },
};

// Variants for the heading animation
const headingContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const headingWordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "circOut" as const,
    },
  },
};

// Variants for the images animation
const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "circOut" as const,
    },
  },
};

export default function Business() {
  // Split the heading into words for staggering
  const headingText = "Stay On Top Of Your Bookings";
  const headingWords = headingText.split(" ");
  const downloadText = "DOWNLOAD NOW";
  const downloadWords = downloadText.split(" ");

  return (
    <div id="business">
      <div className="flex flex-row gap-[137px] mt-[105px] max-xl:flex-col  items-center">
        <div className=" flex flex-col gap-[2.5rem] w-full">
          {/* Animated Blue Button */}
          <motion.div
            className="bg-[#18BCCA] py-[2px] pl-[30px] pr-[33px] rounded-[7px] w-fit"
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex justify-end relative"
              variants={buttonChildVariants}
            >
              <Image
                src={update}
                alt="nation wide logo"
                className="max-lg:w-[15px] max-lg:h-[20px] absolute top-[1px] right-[-19px]"
              />
            </motion.div>

            <motion.div
              className="text-[#FFFFFF] text-[14px] mt-[7px] mb-[9px] font-firs font-bold"
              variants={buttonChildVariants}
            >
              For Businesses
            </motion.div>

            <motion.div
              className="flex justify-start relative"
              variants={buttonChildVariants}
            >
              <Image
                src={update2}
                alt="nation wide logo"
                className="max-lg:w-[15px] max-lg:h-[20px] absolute bottom-[1px] left-[-14px]"
              />
            </motion.div>
          </motion.div>

          {/* Animated Heading - Words appear one by one */}
          <motion.div
            className="font-medium text-[32px] max-lg:text-[24px] max-md:text-[17px]"
            variants={headingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={headingWordVariants}
                className="inline-block mr-2"
              >
                {word}
                {index === 2 ? <br className="max-md:hidden block" /> : ""}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-11.25"
            variants={featuresContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex flex-row gap-3.25"
              variants={featureItemVariants}
            >
              <div className="bg-[#081F2F] rounded-[25.5px] max-md:rounded-full w-8.25 h-8.25 flex justify-center items-center">
                <Image
                  src={logo}
                  alt={"nation wide logo"}
                  className=" max-md:w-2 max-md:h-2.75"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[20px] max-md:text-[13px] font-medium text-[#1E1E1E] leading-[200%]">
                  Track Every Dollar Earned
                </div>
                <div className="text-[#3A3A3A] text-[16px] font-normal max-md:text-[12px] leading-[200%]">
                  See exactly where your business revenue comes from.
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-row gap-[13px]"
              variants={featureItemVariants}
            >
              <div className="bg-[#081F2F] rounded-[25.5px] max-md:rounded-full w-[33px] h-[33px] flex justify-center items-center">
                <Image
                  src={logo}
                  alt={"nation wide logo"}
                  className=" max-md:w-[8px] max-md:h-[11px]"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[20px] max-md:text-[13px] font-medium text-[#1E1E1E] leading-[200%]">
                  Optimize Team Performance
                </div>
                <div className="text-[#3A3A3A] text-[16px] font-normal max-md:text-[12px] leading-[200%]">
                  Track staff efficiency to maximize daily output.
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-row gap-3.25"
              variants={featureItemVariants}
            >
              <div className="bg-[#081F2F] rounded-[25.5px] max-md:rounded-full w-8.25 h-8.25 flex justify-center items-center">
                <Image
                  src={logo}
                  alt={"nation wide logo"}
                  className=" max-md:w-2 max-md:h-2.75"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[20px] max-md:text-[13px] font-medium text-[#1E1E1E] leading-[200%]">
                  Boost Every Sale
                </div>
                <div className="text-[#3A3A3A] text-[16px] font-normal max-md:text-[12px] leading-[200%]">
                  Know your typical sale value to increase earnings.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* First Image with Scale Animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={app3} alt="" className="" />
        </motion.div>
      </div>
      <div className="mt-[105px] max-lg:mt-[79px]">
        <div
          className="w-full h-[213px] max-lg:h-[108px] bg-cover bg-center rounded-[25px] max-lg:rounded-[1rem] flex justify-center items-center"
          style={{ backgroundImage: `url(${booking.src})` }}
        >
          <ShimmeringText
            text="BOOKING MADE EASY"
            duration={0.8}
            wave={true}
            color="#FFFFFF"
            shimmeringColor="#ADF7FF"
            className="font-archivo text-[64px] max-lg:text-[20px] tracking-[-8%] font-normal"
          />
        </div>
      </div>

      <div className="bg-[#ECF1F4] rounded-[44px] h-[515px] max-lg:h-[409px] pt-[147px] max-lg:pt-[84px] pl-[78px] max-lg:pl-[36px] mt-[105px] max-md:pt-[50px] max-md:pl-[26px] max-lg:flex max-lg:flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col  gap-[3.25rem] max-lg:gap-3.75">
            <motion.div
              className="text-[40px] max-lg:text-[32px] max-md:text-[22px] text-[#101010] font-medium"
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {downloadWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={headingWordVariants}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-row gap-2"
              variants={storeIconsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="w-31.25 h-12.5 max-lg:w-21.75 max-lg:h-8.5"
                variants={storeIconVariants}
              >
                <Image src={playstore} alt="" className="h-[]" />
              </motion.div>
              <motion.div
                className="w-[128px] h-[50px] max-lg:w-[87px] max-lg:h-[34px] "
                variants={storeIconVariants}
              >
                <Image src={appstore} alt="" className="h-[]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Second Image with Scale Animation */}
          <motion.div
            className="relative max-md:hidden w-[468px] max-lg:w-[267px] max-md:h-[348px] h-[726px] max-lg:h-[415px] -mt-[220px] lg:-mt-[280px] max-lg:-mt-[140px] max-md:mt-[167px]"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image src={download} alt="" className="max-md:w-56 max-md:h-87" />
          </motion.div>
        </div>

        <motion.div
          className="relative hidden max-md:block w-[468px] max-lg:w-[267px] max-md:h-[348px] h-[726px] max-lg:h-[415px] lg:-mt-[280px] max-lg:-mt-[140px] max-md:mt-[23px]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src={download}
            alt=""
            className="max-md:w-[224px] max-md:h-[348px] absolute max-lg:block left-[112px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
