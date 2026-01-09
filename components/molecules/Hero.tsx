"use client";

import React, { useState } from "react";
import hero from "@/public/images/update-hero2.jpg";
import Image from "next/image";
import update from "@/public/images/the-updatet.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import flower from "@/public/images/flower.svg";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
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
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

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
      style={{ backgroundImage: `url(${hero.src})` }}
      className="
        relative
        bg-cover
        bg-center
        bg-no-repeat
        min-h-screen
        rounded-[36px]
        max-lg:rounded-[27px]
        w-full
      "
    >
      <div className=" mb-[7.5625rem] ">
        <div className=" max-lg:w-full max-lg:px-[1.4375rem] flex flex-col gap-[4.125rem] max-lg:gap-0 justify-end">
          <div className="ml-[111px] mr-[52px]">
            <Image
              src={update}
              alt="nation wide logo"
              className=" mt-[289px]"
            />
          </div>

          <div className="overflow-x-auto pb-2 mx-[65px] min-h-[280px] flex items-end">
            <ScrollArea className="w-full">
              <div className="flex items-end justify-center gap-4 relative min-h-[280px]">
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
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="flex justify-end mr-[42px] mb-[39px]">
            <Image
              src={flower}
              alt="nation wide logo"
              className="max-lg:w-[15px] max-lg:h-[20px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
