"use client";
import AboutUs from "@/components/molecules/AboutUs";
import Business from "@/components/molecules/Business";
import ContactUs from "@/components/molecules/ContactUs";
import Customer from "@/components/molecules/Customer";
import Explore from "@/components/molecules/Explore";
import Hero from "@/components/molecules/Hero";
import Services from "@/components/molecules/Services";
import YourPage from "@/components/molecules/Testimonial";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

import { Element } from "react-scroll";

export default function HomePage() {
  return (
    <>
      <main className="pt-11.25 max-lg:pt-5">
        <Hero />
        <Explore />
        <Customer />
        <Business />

        {/* <AboutUs />

        <Services />
        <YourPage />

     

        <ContactUs /> */}
      </main>
    </>
  );
}
