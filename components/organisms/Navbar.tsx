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
import flower from "@/public/images/flower3.png";
import appstore from "@/public/images/appstore.png";
import playstore from "@/public/images/playstore.png";
const navItems = [
  { name: "Home", to: "home" },
  { name: "Features", to: "customer" },
  { name: "Support", to: "services" },
  // { name: "Testimonials", to: "testimonials" },
  // { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50  mt-19.5 max-lg:mt-11.75  font-sans">
      <div className=" mx-[85px] max-lg:mx-10.25  flex items-center justify-between px-[2.38rem]  max-lg:px-6.75 py-[17px] bg-[#FFFFFF] rounded-3xl max-lg:rounded-[15px] ">
        <Link to="/">
          <Image
            src={logo}
            alt={"nation wide logo"}
            className="max-lg:w-[15px] max-lg:h-[20px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="  max-lg:hidden flex gap-[21px] items-center">
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
              offset={-140} // ← tune this number (negative = scroll more)
              duration={500}
              spy={true}
              activeClass="text-[#18BCCA] text-[14px] font-semibold font-poppins after:bg-yellow-500 bg-[#E7F7F8] rounded-[7px] py-[3.5px] px-[14px] text-center flex justify-center items-center h-fit"
              className="cursor-pointer text-[#1E1E1E] font-poppins hover:text-white transition relative text-[14px] font-medium flex justify-center items-center h-fit px-[14px]
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
          {/* {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={18} color="#18BCCA" className="w-5.75" />
          )} */}
          {isOpen ? (
            <Menu size={18} color="#18BCCA" className="w-5.75" />
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
        className={`fixed top-0 left-0 h-full w-[341px] bg-white shadow-lg transform transition-transform duration-300 hidden max-lg:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex  items-center p-4 justify-between ml-[33px] ">
          {/* <span className="font-bold text-lg">Menu</span> */}
          <Image
            src={logo}
            alt={"nation wide logo"}
            className="max-lg:w-[20px] max-lg:h-[27px]"
          />

          <button onClick={() => setIsOpen(false)}>
            <X size={28} color="#3A3A3A" />
          </button>
        </div>
        <div className="flex justify-center">
          <a href="/" className="">
            {/* <Image src={logob} alt={"nation wide logo"} /> */}
          </a>
        </div>
        {/* Nav Items inside Drawer */}
        <div className="flex flex-col space-y-15 p-6 pl-0 ml-[33px]">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-10} // ← tune this number (negative = scroll more)
              duration={500}
              spy={true}
              onClick={() => setIsOpen(false)} // close menu on click
              activeClass="!text-[#18BCCA] text-[14px] font-semibold font-poppins bg-[#E7F7F8] px-[13px] rounded-[10px] h-[42px]  [&>.dot]:!block flex flex-row justify-between items-center [&>.flower]:!block"
              className="cursor-pointer text-[#1E1E1E] text-[14px] font-poppins font-medium transition  px-[13px]  [&>.dot]:hidden"
            >
              {item.name}
              <div className="flower hidden">
                {/* <Dot size={32} /> */}
                <Image
                  src={flower}
                  alt="nation wide logo"
                  className="max-lg:w-[24px] max-lg:h-[24px] "
                />
              </div>
            </Link>
          ))}
          <div className="flex flex-col gap-[8px]">
            <div className="w-[125px] h-[50px] max-lg:w-[87px] max-lg:h-[34px]">
              <Image src={playstore} alt="" className="h-[]" />
            </div>
            <div className="w-[128px] h-[50px] max-lg:w-[87px] max-lg:h-[34px] ">
              <Image src={appstore} alt="" className="h-[]" />
            </div>
          </div>
          <div className="flex gap-4 flex-col ">
            <div className="text-[#1E1E1E] text-[15px] font-medium font-poppins">
              Quick Links
            </div>
            <ul className="flex flex-col gap-3 text-[#1E1E1E] text-[12px] font-normal font-poppins">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0  bg-opacity-40 z-40"
        />
      )}
    </nav>
  );
}
