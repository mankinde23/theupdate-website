// import React from "react";
// import contact from "../../../public/icons/contact.png";
// import Image from "next/image";
// import { ChevronRight } from "lucide-react";
// import bg from "../../../public/images/contact-img.jpg";
// import { Fade, Slide } from "react-awesome-reveal";
// import { motion } from "motion/react";
// export default function ContactUs() {
//   return (
//     <>
//       <div
//         className="h-[50.3125rem] flex justify-between max-lg:justify-normal w-full mt-[112px] bg-cover bg-center rounded-[30px]"
//         style={{ backgroundImage: `url(${bg.src})` }}
//       >
//         <Slide
//           cascade
//           // damping={0.2}
//           // direction="up"
//           // delay={200}
//           triggerOnce={true}
//           fraction={0.3}
//           direction="left"
//           className="h-full"
//         >
//           <div className="bg-[#191919] rounded-[1.875rem] h-full max-lg:rounded-none py-[2.5625rem] px-[45px] flex flex-col gap-[50px] w-[542px] max-lg:w-full">
//             <div className="flex flex-col gap-[7px]">
//               <div className="text-[32px] font-semibold text-[#FFFFFF]">
//                 Get In Touch
//               </div>
//               <div className="text-[#FFFFFF] text-[13px] font-normal">
//                 We value your feedback and inquiries.
//               </div>
//             </div>
//             <div className="flex flex-col gap-[5px]">
//               <div className="flex flex-col gap-[17px]">
//                 <div className="text-[14px] text-[#FFFFFF]">Name</div>
//                 <div className="bg-[#2D2D2D] border-[1px] border-[#2D2D2D] rounded-[10px] h-[46px] w-full"></div>
//                 <div></div>
//               </div>
//               <div className="flex flex-col gap-[17px]">
//                 <div className="text-[14px] text-[#FFFFFF]">Email</div>
//                 <div className="bg-[#2D2D2D] border-[1px] border-[#2D2D2D] rounded-[10px] h-[46px] w-full"></div>
//                 <div></div>
//               </div>
//               <div className="flex flex-col gap-[17px]">
//                 <div className="text-[14px] text-[#FFFFFF]">TBD</div>
//                 <div className="bg-[#2D2D2D] border-[1px] border-[#2D2D2D] rounded-[10px] h-[46px] w-full"></div>
//                 <div></div>
//               </div>
//               <div className="flex flex-col gap-[17px]">
//                 <div className="text-[14px] text-[#FFFFFF]">Message</div>
//                 <div className="bg-[#2D2D2D] border-[1px] border-[#2D2D2D] rounded-[10px] h-[97px] w-full"></div>
//                 <div></div>
//               </div>
//             </div>
//             <div className="bg-[#FFFFFF] flex flex-row justify-center items-center gap-[18px] rounded-[15px] w-[207px] h-[55px]">
//               <div className="text-[#1E1E1E] text-[15px] font-semibold">
//                 Send Message
//               </div>
//               <ChevronRight color="#F1BF41" size={20} />
//             </div>
//           </div>
//         </Slide>
//         <div className="flex items-end max-lg:hidden">
//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             // animate={inView ? { opacity: 1, y: 0 } : {}}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{
//               duration: 0.4,
//               scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
//             }}
//             className="bg-[#000000C9] h-[87px] rounded-[20px] pl-[58px] pr-[110px] flex flex-row justify-center items-center "
//           >
//             <div className="flex flex-row justify-center items-center gap-[16px]">
//               <Image
//                 src={contact}
//                 alt="logo"
//                 width={51}
//                 height={51}
//                 className="bg-cover"
//               />
//               <div className="text-[#FFFFFF] text-[13px] font-normal">
//                 We value your feedback and inquiries.
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import contact from "../../../public/icons/contact.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import bg from "../../../public/images/contact-img.jpg";
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion"; // Fixed import

export default function ContactUs() {
  return (
    <div
      id="contact"
      className="relative h-[50.3125rem] w-full mt-[112px] max-lg:mt-[93px] bg-cover bg-center rounded-[30px] max-lg:rounded-[0px]  overflow-hidden"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Full-width Form - Slides in from left */}
      <Slide
        direction="left"
        triggerOnce
        fraction={0.3}
        className="absolute inset-0 z-10 max-lg:hidden block " // This ensures it covers everything
      >
        <div className="bg-[#191919] rounded-[1.875rem] h-full w-full lg:w-[542px] max-lg:rounded-[0px] py-[2.5625rem] px-[45px] flex flex-col justify-between gap-[50px]">
          <div className="flex flex-col gap-[7px]">
            <div className="text-[32px] font-semibold text-[#FFFFFF]">
              Get In Touch
            </div>
            <div className="text-[#FFFFFF] text-[13px] font-normal">
              We value your feedback and inquiries.
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6">
            {["Name", "Email", "Subject", "Message"].map((label, idx) => (
              <div key={label} className="flex flex-col gap-[17px]">
                <div className="text-[14px] text-[#FFFFFF]">{label}</div>
                <div
                  className={`bg-[#2D2D2D] border border-[#2D2D2D] rounded-[10px] w-full ${
                    label === "Message" ? "h-[97px]" : "h-[46px]"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Send Button */}
          <button className="bg-[#FFFFFF] flex flex-row justify-center items-center gap-[18px] rounded-[15px] w-[207px] h-[55px] hover:bg-gray-100 transition-colors">
            <span className="text-[#1E1E1E] text-[15px] font-semibold">
              Send Message
            </span>
            <ChevronRight color="#F1BF41" size={20} />
          </button>
        </div>
      </Slide>
      <div className="bg-[#191919] rounded-[1.875rem] h-full w-full lg:w-[542px] max-lg:rounded-[0px] py-[2.5625rem] px-[45px] flex flex-col justify-between gap-[50px] hidden max-lg:block">
        <div className="flex flex-col gap-[7px]">
          <div className="text-[32px] max-lg:text-[20px] font-semibold text-[#FFFFFF]">
            Get In Touch
          </div>
          <div className="text-[#FFFFFF] text-[13px] max-lg:text-[12px] font-normal">
            We value your feedback and inquiries.
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-6 max-lg:mt-[42px]">
          {["Name", "Email", "Subject", "Message"].map((label, idx) => (
            <div key={label} className="flex flex-col gap-[17px]">
              <div className="text-[14px] max-lg:text-[12px] text-[#FFFFFF]">
                {label}
              </div>
              <div
                className={`bg-[#2D2D2D] border border-[#2D2D2D] rounded-[10px] w-full ${
                  label === "Message" ? "h-[97px]" : "h-[46px]"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Send Button */}
        <button className="bg-[#FFFFFF] flex flex-row justify-center items-center gap-[18px] rounded-[15px] max-lg:!rounded-[7px] w-[207px] max-lg:w-fit max-lg:p-[8px] h-[55px] max-lg:h-[41px] hover:bg-gray-100 transition-colors mt-[2.625rem]">
          <span className="text-[#1E1E1E] text-[15px] max-lg:text-[0.75rem] font-semibold">
            Send Message
          </span>
          <ChevronRight color="#F1BF41" size={20} />
        </button>
      </div>

      {/* Floating Contact Bubble - Only on desktop */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", stiffness: 200, damping: 20 },
          }}
          className="bg-[#000000C9] backdrop-blur-sm h-[87px] rounded-[20px] pl-[58px] pr-[110px] flex items-center shadow-2xl"
        >
          <div className="flex items-center gap-[16px]">
            <Image
              src={contact}
              alt="Contact"
              width={51}
              height={51}
              className="object-contain"
            />
            <p className="text-[#FFFFFF] text-[13px] font-normal max-w-[200px]">
              We value your feedback and inquiries.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
