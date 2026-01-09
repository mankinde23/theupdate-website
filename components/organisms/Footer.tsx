import React from "react";
import Image from "next/image";
import logo from "@/public//logo.svg";
import { Separator } from "../ui/separator";
import { Instagram, Youtube } from "lucide-react";
import { XLogo } from "@phosphor-icons/react/ssr";
import update from "@/public/images/the-updatet.png";
export default function Footer() {
  return (
    <>
      <div>
        <div className="bg-[#222222]  mt-[105px] mb-[45px] max-lg:mt-0 text-[#FFFFFF] font-sans mx-[45px] rounded-[44px]  max-lg:py-9 p-[61px]">
          <div className="flex flex-row gap-[148px] max-lg:flex-col max-lg:gap-[55px]  ">
            <div className="flex flex-col gap-[48px]">
              <div>
                <div className="w-[369px]">
                  <Image src={update} alt="nation wide logo" className="" />
                </div>
                <div className="text-[#FFFFFFB2] text-[14px] font-normal mt-[16px]">
                  Book Fast. Book smart. Book your way.
                </div>
              </div>
              <div className="flex flex-col gap-6.5">
                <div>Follow Us:</div>
                <div className="flex flex-row gap-7.25 ">
                  <Youtube size={22} fill="" color="#FFFFFF" />
                  <XLogo size={22} />
                  <Instagram size={22} />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex gap-4 flex-col">
                <div className="text-[#FFFFFF] text-[18px] font-medium">
                  Quick Links
                </div>
                <ul className="flex flex-col gap-3 text-[#FFFFFFB2] text-[16px] font-normal">
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
                  <li>Newsletter</li>
                </ul>
              </div>
              <div className="flex gap-4 flex-col">
                <div className="text-[#FFFFFF] text-[18px] font-medium">
                  More Info
                </div>
                <ul className="flex flex-col gap-3 text-[#FFFFFFB2] text-[16px] font-normal">
                  <li>News</li>
                  <li>New features</li>
                  <li>Announcements</li>
                  <li>The Release</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t  border-t-[#FFFFFF1C] b-t-border-[1px] pt-[47px] border-transparent mt-11.75">
            <p className="text-center text-[12px] text-[#FFFFFFB2] font-normal">
              © 2026 The Update App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
