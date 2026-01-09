// components/organisms/Navbar.tsx
"use client";

import { useState } from "react";
import { Link } from "react-scroll"; // 👈 use react-scroll for smooth scrolling
import { Menu, X } from "lucide-react"; // icons
import Image from "next/image";
import logo from "@/public//logo.svg";
// import logob from "../../../public/images/nationwidelogoblack.svg";
import { Dot } from "@phosphor-icons/react/dist/ssr/Dot";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", to: "home" },
  { name: "Features", to: "about" },
  { name: "Support", to: "services" },
  // { name: "Testimonials", to: "testimonials" },
  // { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50  mt-19.5 max-lg:mt-11.75  font-sans">
      <div className=" mx-[85px] max-lg:mx-10.25  flex items-center justify-between px-[2.38rem]  max-lg:px-6.75 py-[17px] bg-[#FFFFFF] rounded-3xl max-lg:rounded-[15px] ">
        <a href="/" className="">
          <Image
            src={logo}
            alt={"nation wide logo"}
            className="max-lg:w-[15px] max-lg:h-[20px]"
          />
        </a>

        {/* Desktop Nav */}
        <div className="  max-lg:hidden flex space-x-15 items-center">
          {navItems.map((item) => (
            // <Link
            //   key={item.to}
            //   to={item.to}
            //   smooth={true}
            //   offset={-190}
            //   duration={500}
            //   spy={true}
            //   // activeClass=" text-white font-semibold relative   after:content-[''] after:block after:w-full after:h-[2px]  after:bg-yellow-500 after:rounded-full after:mt-1  "
            //   // className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
            //   className="cursor-pointer text-gray-400 hover:text-white transition inline-block relative px-1 py-2"
            // >
            //   {item.name}
            // </Link>
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-190}
              duration={500}
              spy={true}
              activeClass="text-[#18BCCA] font-semibold after:bg-yellow-500 bg-[#E7F7F8] rounded-[7px] py-[3.5px] px-[14px] text-center flex justify-center items-center h-fit"
              className="cursor-pointer text-[#1E1E1E] hover:text-white transition relative text-[14px] font-medium flex justify-center items-center h-fit
             after:content-[''] after:block  after:text-[#18BCCA] after:text-[14px] after:rounded-[7px]  after:mx-auto after:bg-transparent"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className=" max-lg:block hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={18} color="#18BCCA" className="w-5.75" />
          )}
        </button>
        <Button className="bg-[#1ABAC9] rounded-[0.625rem] px-[1.2188rem] py-[0.4688rem] text-[#FFFFFF] font-semibold text-[13px] block  max-lg:hidden ">
          Download App
        </Button>
      </div>

      {/* Mobile Side Menu (Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center p-4 ">
          {/* <span className="font-bold text-lg">Menu</span> */}

          <button onClick={() => setIsOpen(false)}>
            <X size={28} color="#8B8B8B" />
          </button>
        </div>
        <div className="flex justify-center">
          <a href="/" className="">
            {/* <Image src={logob} alt={"nation wide logo"} /> */}
          </a>
        </div>
        {/* Nav Items inside Drawer */}
        <div className="flex flex-col space-y-15 p-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-180}
              duration={500}
              spy={true}
              onClick={() => setIsOpen(false)} // close menu on click
              activeClass="!text-[#FFFFFF] text-[12px] font-semibold bg-[#191919] px-[13px] rounded-[10px] h-[42px]  [&>.dot]:!block flex flex-row justify-between items-center"
              className="cursor-pointer text-[#191919] text-[0.75rem] font-semibold transition  px-[13px]  [&>.dot]:hidden"
            >
              {item.name}
              <div className="dot w-[6px] h-[6px] bg-[#F1BF41] rounded-full">
                {/* <Dot size={32} /> */}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay (dark background when drawer is open) */}
      {/* {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40"
        />
      )} */}
    </nav>
  );
}
