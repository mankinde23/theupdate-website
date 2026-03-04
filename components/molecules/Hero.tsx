"use client";

import React, { useState } from "react";
import hero from "@/public/images/update-hero2.jpg";
import Image from "next/image";
import update from "@/public/images/the-updatet.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import heroVideo from "@/public/video/hero.mp4";
import flower from "@/public/images/flower.svg";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { motion } from "framer-motion";
const imageRevealVariants = {
  hidden: {
    opacity: 0,
    y: 80, // start lower
    scale: 0.96, // tiny bit smaller (premium touch)
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] as const,
      // or use: ease: "easeOut"
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22, // time between each card (~140ms) - feels natural
      delayChildren: 0.6, // small delay before the first card starts
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94, // very subtle shrink → normal size
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.1, 0.25, 1] as const, // smooth modern easing
    },
  },
};
export default function Hero() {
  // const tabs = [
  //   {
  //     value: "update",
  //     label: "THE UPDATE",
  //     content:
  //       "Dive into the latest updates and improvements we've made to enhance your experience.",
  //   },
  //   {
  //     value: "features",
  //     label: "NEW FEATURES",
  //     content:
  //       "Discover exciting new features like improved UI, faster loading, and more customization options.",
  //   },
  //   {
  //     value: "release",
  //     label: "THE RELEASE",
  //     content:
  //       "Version 2.0 is out! Check out what's new in this major release.",
  //   },
  //   {
  //     value: "announcement",
  //     label: "ANNOUNCEMENT",
  //     content: "Stay tuned for upcoming events and announcements.",
  //   },
  // ];

  const [active, setActive] = React.useState("update");
  // const decorativeTabs = [
  //   "THE UPDATE",
  //   "NEW FEATURES",
  //   "THE RELEASE",
  //   "ANNOUNCEMENT",
  // ];
  // const tabs = [
  //   { value: "update", label: "THE UPDATE" },
  //   { value: "features", label: "NEW FEATURES" },
  //   { value: "release", label: "THE RELEASE" },
  //   { value: "announcement", label: "ANNOUNCEMENT" },
  // ];
  // const [active, setActive] = React.useState("update");
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const tabs = [
    {
      id: "latest",
      label: "THE LATEST",
      content:
        "Dive into a world where updates meet you! Get ready for a seamless, intuitive experience designed with your needs in mind.",
    },
    {
      id: "update",
      label: "THE UPDATE",
      content:
        "Discover the latest improvements and enhancements we've made to elevate your experience to the next level.",
    },
    {
      id: "release",
      label: "THE RELEASE",
      content:
        "Version 2.0 is here! Explore all the exciting new features and improvements in this major release.",
    },
    {
      id: "announcement",
      label: "ANNOUNCEMENT",
      content:
        "Stay informed about upcoming events, features, and important announcements from our team.",
    },
  ];

  const isExpanded = (tabId: string | null) => {
    return activeTab === tabId || hoveredTab === tabId;
  };
  return (
    <div
      id="home"
      // style={{ backgroundImage: `url(${hero.src})` }}
      // className="
      //   relative
      //   bg-cover
      //   bg-center
      //   bg-no-repeat
      //   rounded-[36px]
      //   bg-[position:50%_20%]
      //   max-lg:rounded-[27px]
      //   max-lg:bg-cover
      //   max-lg:bg-center

      //   w-full

      // "
      className="
        relative
        rounded-[36px]
        overflow-hidden           // ← important: clips the video
        max-lg:rounded-[27px]
        w-full
                 
        bg-black/40               // ← optional dark overlay if video is too bright
      "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0
          w-full h-full
          object-cover              
          -z-10                     
        "
        // Optional: poster image shown before video loads
        // poster={hero.src}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" mb-[28px] max-lg:mb-[0px] ">
        <div className=" max-lg:w-full max-lg:px-[0rem] flex flex-col gap-[4.125rem] max-lg:gap-0 justify-end">
          <div className="ml-27.75 mr-[52px] max-lg:ml-0 max-lg:mr-0 max-lg:px-[1.4375rem]">
            {/* <Image
              src={update}
              alt="nation wide logo"
              className=" mt-[289px]"
            /> */}
            <motion.div
              initial="hidden"
              // animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={imageRevealVariants}
              // Optional: delay if you want it to appear after background or other elements
              // transition={{ delay: 0.4 }}
            >
              <Image
                src={update}
                alt="The Update logo"
                className="mt-[228px] max-lg:mt-[207px] w-auto h-auto"
                priority // ← important for hero!
              />
            </motion.div>
          </div>

          <div className="overflow-x-auto  pb-2 mx-[65px] max-lg:mx-0 min-h-[280px] flex items-end max-lg:pl-[1.4375rem]">
            <ScrollArea className="w-full ">
              <motion.div
                className="flex items-end justify-center gap-4 relative min-h-[280px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible" // starts automatically when component mounts
                // Alternative (scroll triggered):
                // whileInView="visible"
                // viewport={{ once: true, amount: 0.25 }}
              >
                {tabs.map((tab) => {
                  const expanded = isExpanded(tab.id);

                  return (
                    <motion.div
                      key={tab.id}
                      variants={cardVariants} // ← each card gets staggered animation
                      className="relative"
                      style={{ width: "256px", height: "47px" }}
                    >
                      <div
                        className={`
                      absolute bottom-0 left-0 right-0
                      bg-white rounded-[10px] shadow-lg cursor-pointer
                      transition-all duration-500 ease-out origin-bottom
                      ${
                        expanded
                          ? "h-[213px] pt-[25px] rounded-[14px]"
                          : "h-[50px]"
                      }
                    `}
                        onMouseEnter={() => setHoveredTab(tab.id)}
                        onMouseLeave={() => setHoveredTab(null)}
                        onClick={() =>
                          setActiveTab(activeTab === tab.id ? null : tab.id)
                        }
                      >
                        <div className="h-full flex flex-col pt-[16.5px] px-[25px] w-[256px]">
                          <div className="flex items-center justify-between flex-shrink-0">
                            <h3 className="font-semibold text-[13px] text-[#1E1E1E]">
                              {tab.label}
                            </h3>
                            <div className="border-[0.5px] border-[#18BCCA] rounded-full w-[18px] h-[18px] flex justify-center items-center">
                              <div className="rounded-full bg-[#18BCCA] w-[7.5px] h-[7.5px]" />
                            </div>
                          </div>

                          <div
                            className={`
                          overflow-hidden transition-all duration-500 ease-out mt-4
                          ${
                            expanded
                              ? "opacity-100 flex-1"
                              : "opacity-0 h-0 mt-0"
                          }
                        `}
                          >
                            <p className="text-[#1E1E1E] leading-[200%] text-[12px] font-garet font-light">
                              {tab.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* <div className="flex items-end justify-center gap-4 relative min-h-[280px]">
                {tabs.map((tab) => {
                  const expanded = isExpanded(tab.id);

                  return (
                    <div
                      key={tab.id}
                      className="relative" // Add this wrapper
                      style={{ width: "256px", height: "47px" }}
                    >
                      <div
                        // key={tab.id}
                        className={`
                         absolute bottom-0 left-0 right-0
                        bg-white rounded-[10px] shadow-lg cursor-pointer
                          transition-all duration-500 ease-out origin-bottom 
                  ${
                    expanded ? "h-[213px] pt-[25px] rounded-[14px]" : "h-[50px]"
                  }
                `}
                        // style={{ width: "220px" }}
                        onMouseEnter={() => setHoveredTab(tab.id)}
                        onMouseLeave={() => setHoveredTab(null)}
                        onClick={() =>
                          setActiveTab(activeTab === tab.id ? null : tab.id)
                        }
                      >
                        <div className=" h-full flex flex-col pt-[16.5px] px-[25px] w-[256px]">
                          <div className="flex items-center justify-between flex-shrink-0">
                            <h3 className="font-semibold text-[13px] text-[#1E1E1E]">
                              {tab.label}
                            </h3>
                            <div className="border-[0.5px] border-[#18BCCA] rounded-full w-[18px] h-[18px] flex justify-center items-center">
                              <div className="rounded-full bg-[#18BCCA]  w-[7.5px] h-[7.5px]" />
                            </div>
                          </div>

                          <div
                            className={`
                           overflow-hidden transition-all duration-500 ease-out mt-4
                            ${
                              expanded
                                ? "opacity-100 flex-1"
                                : "opacity-0 h-0 mt-0"
                            }
                    `}
                          >
                            <p className="text-[#1E1E1E] leading-[200%] text-[12px] font-garet font-light">
                              {tab.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div> */}
              <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
          </div>
          <div className="flex justify-start max-md:justify-start ml-[42px] max-lg:ml-[0px] mb-[39px] max-lg:px-[1.4375rem]">
            <Image
              src={flower}
              alt="nation wide logo"
              className="max-lg:w-[24px] max-lg:h-[24px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
