import React, { useEffect } from "react";
import { Card } from "../ui/card";
import service1 from "../../../public/images/service1.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import service2 from "../../../public/images/service2.jpg";
import { ServicesDialog } from "../organisms/ServiceDialog";
// import { motion, useAnimation, useInView } from "motion/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Fade } from "react-awesome-reveal";
export default function Services() {
  // const { ref: sectionRef, inView } = useInView({
  //   threshold: 0.3,
  //   triggerOnce: true, // Only animate once
  // });
  const sectionRef = React.useRef(null);
  const inView = useInView(sectionRef, {
    amount: 0.3,
    once: true,
  });
  // Controls for Framer Motion
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <div id="services" ref={sectionRef}>
        <div className="flex flex-col gap-[4.5rem] max-lg:gap-[0] mt-[9.1875rem] max-lg:mt-[93px] rounded-[30px] font-[montserrat] max-lg:px-[1.1875rem]">
          <div className="text-[#101010] font-medium text-[2.5rem] max-lg:text-[1.25rem] max-lg:mb-[40px]">
            WHY CHOOSE US?
          </div>
          <div className="flex flex-col gap-[0.875rem] max-md:gap-[2.1875rem]">
            <div className="flex flex-row gap-[0.875rem] h-[398px] max-md:flex-col max-lg:h-full max-md:gap-[2.1875rem]">
              {/* <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
              > */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
                }}
                className="bg-[#1E1E1E] rounded-[0.625rem] max-lg:rounded-[0.9375rem] py-[2.3125rem] px-[2.625rem] max-lg:px-[23px] max-lg:py-[35px] flex flex-col justify-between gap-[28px]"
              >
                <Fade
                  cascade
                  damping={0.7}
                  direction="up"
                  // delay={200}
                  triggerOnce={true}
                  fraction={0.2}
                  className="flex flex-col gap-[28px]"
                >
                  <div className="text-[#FFFFFF] text-[1.75rem] max-lg:text-[16px] font-medium">
                    Tailored Leasing Solutions
                  </div>
                  <div className="text-[#CECECE] text-[1rem] max-lg:text-[12px] font-medium ">
                    We provide marketing strategies and tenant assessments for
                    property owners. For renters, we find quality rental
                    properties that fit their needs.
                  </div>

                  <ServicesDialog
                    trigger={
                      <Button className=" !p-0 !pl-0 cursor-pointer flex flex-row gap-[0.375rem] bg-transparent justify-start hover:bg-transparent">
                        <div className="text-[#FFFFFF] text-[0.9375rem]  max-lg:text-[13px] font-medium">
                          See More
                        </div>
                        <ChevronRight
                          className="flex items-center justify-center w-[7.36px] h-[12.73px]"
                          color="#F1BF41"
                        />
                      </Button>
                    }
                    title={
                      <p>
                        Tailored Leasing <br /> Solutions
                      </p>
                    }
                    content={
                      <p className="text-start">
                        For property owners, we deliver focused marketing
                        strategies and thorough tenant assessments to ensure the
                        perfect match. For renters, we identify high-quality
                        rental properties that meet both personal and
                        professional requirements.
                      </p>
                    }
                    footerButton={
                      <Button className="bg-[#1E1E1E] w-[13rem] rounded-[0.75rem] flex flex-row justify-center items-center px-[2.6875rem] gap-[0.8125rem] py-[1rem]  h-full">
                        <div className="text-[#FFFFFF] font-medium text-[0.9375rem] max-lg:text-[0.75rem]">
                          Get In Touch
                        </div>
                        <ChevronRight
                          className="flex items-center justify-center w-[7.36px] h-[12.73px]"
                          color="#F1BF41"
                        />
                      </Button>
                    }
                  />
                </Fade>
              </motion.div>
              {/* </motion.div> */}

              <div className="max-lg:rounded-[0.9375rem]">
                <Image
                  src={service1}
                  alt="hero-image"
                  className="h-[24.875rem] max-md:h-[19.8175rem]"
                />
              </div>
            </div>
            <div className="flex flex-row gap-[0.875rem] h-[398px] max-md:flex-col-reverse max-lg:h-full max-md:gap-[2.1875rem] ">
              <div className="max-lg:rounded-[0.9375rem]">
                <Image
                  src={service2}
                  alt="hero-image"
                  className="h-[24.875rem] max-md:h-[19.8175rem]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
                }}
                className="bg-[#1E1E1E] rounded-[0.625rem] max-lg:rounded-[0.9375rem] py-[2.3125rem] px-[2.625rem] max-lg:px-[23px] max-lg:py-[35px] flex flex-col justify-between gap-[28px]"
              >
                <Fade
                  cascade
                  damping={0.7}
                  direction="up"
                  // delay={200}
                  triggerOnce={true}
                  fraction={0.2}
                >
                  <div className="text-[#FFFFFF] text-[1.75rem] max-lg:text-[16px] font-medium">
                    Premium Property Transactions
                  </div>
                  <div className="text-[#CECECE] text-[1rem] max-lg:text-[12px] font-medium ">
                    We guide personalized property searches for your lifestyle
                    and investment goals. Our approach includes market analysis,
                    private tours, and negotiation support.
                  </div>
                  {/* <Button className="flex flex-row gap-[0.375rem] bg-transparent justify-start hover:bg-transparent">
                  <div className="text-[#FFFFFF] text-[0.9375rem] font-medium">
                    See More
                  </div>
                  <ChevronRight
                    className="flex items-center justify-center w-[7.36px] h-[12.73px]"
                    color="#F1BF41"
                  />
                </Button> */}
                  <ServicesDialog
                    trigger={
                      <Button className="!p-0 !pl-0 cursor-pointer flex flex-row gap-[0.375rem] bg-transparent justify-start hover:bg-transparent">
                        <div className="text-[#FFFFFF] text-[0.9375rem]  max-lg:text-[13px]  font-medium">
                          See More
                        </div>
                        <ChevronRight
                          className="flex items-center justify-center w-[7.36px] h-[12.73px] max-lg:w-[0.75rem] max-lg:h-[1.5rem]"
                          color="#F1BF41"
                        />
                      </Button>
                    }
                    title={
                      <p>
                        Premium Property <br /> Transactions
                      </p>
                    }
                    content={
                      <p>
                        We guide you through personalized property searches that
                        align with your lifestyle and investment goals, whether
                        it’s luxurious residences or prime commercial spaces.
                        Our approach includes: Comprehensive market analysis and
                        property discovery, Private tours and strategic
                        negotiation support, Management of inspections,
                        valuations, and legal processes.
                      </p>
                    }
                    footerButton={
                      <Button className="bg-[#1E1E1E] w-[13rem] rounded-[0.75rem] flex flex-row justify-center items-center px-[2.6875rem] gap-[0.8125rem] py-[1rem]  h-full">
                        <div className="text-[#FFFFFF] font-medium text-[0.9375rem] max-lg:text-[0.75rem]">
                          Get In Touch
                        </div>
                        <ChevronRight
                          className="flex items-center justify-center w-[0.46rem] h-[0.79rem] max-lg:w-[0.75rem] max-lg:h-[1.5rem]"
                          color="#F1BF41"
                        />
                      </Button>
                    }
                  />
                </Fade>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
