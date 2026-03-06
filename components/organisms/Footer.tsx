// import React from "react";
// import Image from "next/image";
// import logo from "@/public//logo.svg";
// import { Separator } from "../ui/separator";
// import { Instagram, Youtube } from "lucide-react";
// import { XLogo } from "@phosphor-icons/react/ssr";
// import update from "@/public/images/the-updatet.png";
// import { montserrat } from "@/app/layout";
// export default function Footer() {
//   return (
//     <>
//       <div>
//         <div className="bg-[#222222]  mt-[105px] mb-[45px] text-[#FFFFFF] font-sans mx-[45px] max-lg:mx-[20px] max-lg:px-[30px] rounded-[44px]  max-lg:py-9 p-[61px]">
//           <div className="flex flex-row gap-[148px] max-lg:flex-col max-lg:gap-[55px]  ">
//             <div className="flex flex-col gap-[48px]">
//               <div>
//                 <div className="w-[369px] max-md:w-fit">
//                   <Image src={update} alt="nation wide logo" className="" />
//                 </div>
//                 <div className="text-[#FFFFFFB2] text-[14px] max-md:text-[11px] font-normal mt-[16px] flex justify-start max-md:justify-center items-center">
//                   Book Fast. Book smart. Book your way.
//                 </div>
//               </div>
//               <div className="flex flex-col gap-6.5 max-md:justify-center max-md:items-center">
//                 <div>Follow Us:</div>
//                 <div className="flex flex-row gap-7.25 ">
//                   <Youtube size={22} fill="" color="#FFFFFF" />
//                   <XLogo size={22} />
//                   <Instagram size={22} />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row justify-between w-full max-md:flex-col max-md:justify-center max-md:items-center">
//               <div className="flex gap-4 flex-col">
//                 <div
//                   className={`text-[#FFFFFF] text-[18px] font-medium max-md:text-center ${montserrat.className}`}
//                 >
//                   Quick Links
//                 </div>
//                 <ul
//                   className={`flex flex-col gap-3 text-[#FFFFFFB2] text-[16px] font-normal max-md:justify-center max-md:items-center ${montserrat.className}`}
//                 >
//                   <li>About</li>
//                   <li>Contact</li>
//                   <li>Privacy Policy</li>
//                   <li>Terms</li>
//                 </ul>
//               </div>
//               <div className="flex gap-4 flex-col max-md:mt-[35px]">
//                 <div
//                   className={`text-[#FFFFFF] text-[18px] font-medium max-md:text-center ${montserrat.className}`}
//                 >
//                   More Info
//                 </div>
//                 <ul
//                   className={`flex flex-col gap-3 text-[#FFFFFFB2] text-[16px] font-normal max-md:justify-center max-md:items-center ${montserrat.className}`}
//                 >
//                   <li>News</li>
//                   <li>New features</li>
//                   <li>Announcements</li>
//                   <li>The Release</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="border-t  border-t-[#FFFFFF1C] b-t-border-[1px] pt-[47px] border-transparent mt-11.75">
//             <p className="text-center text-[12px] text-[#FFFFFFB2] font-normal">
//               © 2026 The Update App. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
// "use client";
import React from "react";
import Image from "next/image";
import logo from "@/public//logo.svg";
import { Separator } from "../ui/separator";
import { Instagram, Youtube } from "lucide-react";
import { XLogo } from "@phosphor-icons/react/ssr";
import update from "@/public/images/the-updatet.png";
import { montserrat } from "@/app/layout";
import { motion, Variants } from "framer-motion";

// Simplified animation variants - just fade in
const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <>
      <div>
        <motion.div
          className="bg-[#222222] mt-26.25 mb-11.25 max-md:mb-[5.71px] text-[#FFFFFF] font-sans mx-[45px] max-lg:mx-[20px] max-lg:px-[30px] rounded-[44px] max-lg:py-9 p-[61px]"
          variants={footerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-row !justify-between gap-[0px]  max-md:flex-col max-md:gap-13.75">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col">
                {" "}
                <motion.div variants={imageVariants}>
                  <div className="w-92.25 max-md:w-fit">
                    <Image src={update} alt="nation wide logo" className="" />
                  </div>
                </motion.div>
                {/* Book Fast. Book smart. Book your way. - Appears second */}
                <motion.div
                  className="text-[#FFFFFFB2] text-[14px] max-md:text-[11px] font-normal mt-4 max-md:mt-[1rem] flex justify-start max-md:justify-center items-center"
                  variants={fadeInVariants}
                >
                  Book Fast. Book smart. Book your way.
                </motion.div>
              </div>

              <div className="flex flex-col gap-6.5 max-md:justify-center max-md:items-center">
                <motion.div
                  variants={fadeInVariants}
                  className="max-md:text-[14px]"
                >
                  Follow Us:
                </motion.div>
                <motion.div
                  className="flex flex-row gap-7.25"
                  variants={fadeInVariants}
                >
                  <Youtube size={22} fill="" color="#FFFFFF" />
                  <XLogo size={22} />
                  <Instagram size={22} />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-row gap-[98px] max-md:gap-0 max-md:justify-between  max-md:flex-col max-md:justify-center max-md:items-center">
              {/* Quick Links - Appears fourth */}
              <motion.div
                className="flex gap-4 flex-col"
                variants={fadeInVariants}
              >
                <div
                  className={`text-[#FFFFFF] text-[14px] font-medium max-md:text-center ${montserrat.className}`}
                >
                  Quick Links
                </div>
                <ul
                  className={`flex flex-col gap-3 text-[#FFFFFFB2] text-[12px] font-normal max-md:justify-center max-md:items-center ${montserrat.className}`}
                >
                  <li>About</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms</li>
                </ul>
              </motion.div>

              {/* More Info - Appears fifth (last) */}
              <motion.div
                className="flex gap-4 flex-col max-md:mt-8.75"
                variants={fadeInVariants}
              >
                <div
                  className={`text-[#FFFFFF] text-[14px] font-medium max-md:text-center ${montserrat.className}`}
                >
                  More Info
                </div>
                <ul
                  className={`flex flex-col gap-3 text-[#FFFFFFB2] text-[12px] font-normal max-md:justify-center max-md:items-center ${montserrat.className}`}
                >
                  <li>News</li>
                  <li>New features</li>
                  <li>Announcements</li>
                  <li>The Release</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            className="border-t border-t-[#FFFFFF1C] b-t-border-[1px] pt-[47px] border-transparent mt-11.75"
            variants={fadeInVariants}
          >
            <p className="text-center text-[12px] text-[#FFFFFFB2] font-normal">
              © 2026 The Update App. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
