import React from "react";
import Image from "next/image";
import logo from "@/public//logo.svg";
import { Separator } from "../ui/separator";
import { Instagram, Youtube } from "lucide-react";
import { XLogo } from "@phosphor-icons/react/ssr";
export default function Footer() {
  return (
    <>
      <div>
        <div className="bg-[#191919]  mt-[2.5625rem] max-lg:mt-0 text-[#FFFFFF] font-sans">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex justify-center ">
              <Image
                src={logo}
                alt="hero-image"
                className="w-[17.8125rem] h-[6.6875rem] max-lg:h-[3.0625rem] max-lg:w-[8.8175rem]"
              />
            </div>
            <Separator className="bg-[#9E9E9E] border-[0.0625rem] bg-transparent mt-[2.375rem] text-[#9E9E9E99]" />
            <div className="flex flex-col mt-[3.625rem] gap-[4.4375rem]">
              <div>
                <ul className="flex flex-row justify-between max-lg:text-[13px]">
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
                  <li>Newsletter</li>
                </ul>
              </div>
              <div className="flex flex-row gap-[96px] justify-center">
                <Youtube size={22} />
                <XLogo size={22} />
                <Instagram size={22} />
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t  border-t-[#0000001F] b-t-border-[1px] py-6 border-transparent">
            <p className="text-center text-[11px] text-[#FFFFFF] font-normal">
              Copyright © 2025 Nationwide Realty Real Estate, All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
