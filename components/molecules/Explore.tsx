import React from "react";
import Image from "next/image";
import update from "@/public/images/updateblue.svg";
import update2 from "@/public/images/updategreen.svg";
import star from "@/public/images/star.png";
import app3 from "@/public/images/app3.jpg";
import app2 from "@/public/images/app2.png";
import { motion } from "framer-motion";

export default function Explore() {
  // Animation variants
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

  const buttonChildVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "circOut" as const,
      },
    },
  };

  const line1 = "Discover the incredible features and".split(" ");
  const line2 = "functionalities of our app!".split(" ");

  return (
    <div id="explore">
      <div className="flex flex-col gap-[5.625rem] max-md:gap-[51px] mt-[6.5625rem]">
        <div className="flex flex-col gap-[2.5rem]">
          <motion.div
            className="bg-[#18BCCA] py-[2px] pl-[37px] pr-[42.2px] rounded-[7px] w-fit"
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* First icon */}
            <motion.div
              className="flex justify-end relative"
              variants={buttonChildVariants}
            >
              <Image
                src={update}
                alt="nation wide logo"
                className="max-lg:w-[0.9375rem] max-lg:h-[1.25rem] max-md:w-[14px] max-md:h-[1.25rem] absolute top-[0.025rem] right-[-1.1875rem]"
              />
            </motion.div>

            {/* Button text */}
            <motion.div
              className="text-[#FFFFFF] text-[14px] max-md:text-[12px] mt-[7px] mb-[9px] font-firs font-bold"
              variants={buttonChildVariants}
            >
              Explore Now
            </motion.div>

            {/* Second icon */}
            <motion.div
              className="flex justify-start relative"
              variants={buttonChildVariants}
            >
              <Image
                src={update2}
                alt="nation wide logo"
                className="max-lg:w-[15px] max-lg:h-[20px] max-md:w-[13px] max-lg:h-[11px] absolute bottom-[1px] left-[-14px]"
              />
            </motion.div>
          </motion.div>

          {/* Text animation - words appear one by one */}
          <div className="flex flex-row justify-between items-center">
            <div className="font-medium text-[32px] max-lg:text-[24px] max-md:text-[17px]">
              <div className="flex flex-wrap">
                {line1.map((word, index) => (
                  <motion.span
                    key={`line1-${index}`}
                    custom={index}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="font-light text-[32px] max-lg:text-[24px] max-md:text-[17px]">
                <div className="flex flex-wrap">
                  {line2.map((word, index) => (
                    <motion.span
                      key={`line2-${index}`}
                      custom={index + line1.length}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              {" "}
              <Image
                src={star}
                alt="shooting star"
                className=" w-[153px] h-[157px] block max-md:hidden"
              />
            </div>
          </div>
        </div>

        {/* Images with scale animation */}
        <div className="flex flex-row gap-[26px] max-md:flex-col">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Image src={app3} alt="App preview 1" className="w-full h-auto" />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <Image src={app2} alt="App preview 2" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
