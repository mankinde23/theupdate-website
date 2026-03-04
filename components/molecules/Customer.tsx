// Customer.tsx (or your component)
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import update from "@/public/images/updateblue.svg";
import update2 from "@/public/images/updategreen.svg";
import logo from "@/public/logo2.svg";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Customer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const cards = container.children;
    const totalWidth = container.scrollWidth;

    // Pin the section and drive horizontal scroll with vertical scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`, // scroll distance = content width
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // tl.to(container, {
    //   x: () => +(totalWidth - window.innerWidth), // move left by overflow amount
    //   ease: "none",
    // });
    const scrollAmount = Math.max(0, totalWidth - window.innerWidth);

    tl.to(container, {
      x: -scrollAmount, // 👈 NEGATIVE = move left
      ease: "none",
    });

    // Update progress bar based on same ScrollTrigger progress
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${totalWidth}`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress * 100;
        gsap.to(progressRef.current, {
          width: `${progress}%`,
          ease: "none",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  const buttonChildVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };
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
  return (
    <div id="customer">
      <section ref={sectionRef} className=" relative">
        <div className="py-16 pt-[105px]">
          <div className=" flex flex-col gap-[63px] text-center">
            <motion.div
              variants={buttonContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-[#18BCCA] py-[2px] pl-[30px] pr-[34px] rounded-[7px] w-fit"
            >
              <motion.div
                variants={buttonChildVariants}
                className="flex justify-end relative "
              >
                <Image
                  src={update}
                  alt="nation wide logo"
                  className="max-lg:w-[15px] max-lg:h-[20px] absolute top-[1px] right-[-19px] "
                />
              </motion.div>
              <motion.div
                variants={buttonChildVariants}
                className="text-[#FFFFFF] text-[14px] mt-[7px] mb-[9px] font-firs font-bold "
              >
                For Customers
              </motion.div>
              <motion.div
                className="flex justify-start relative"
                variants={buttonChildVariants}
              >
                <Image
                  src={update2}
                  alt="nation wide logo"
                  className="max-lg:w-[15px] max-lg:h-[20px] absolute bottom-[1px] left-[-14px]"
                />
              </motion.div>
            </motion.div>
            <div className="w-full flex flex-col gap-[63px]">
              <h2 className="text-[32px] max-lg:text-[24px] max-md:text-[20px] font-medium text-[#101010] text-start">
                Why You’ll Love Using Our App
              </h2>

              <div className=" overflow-x-auto scrollbar-hide">
                <div
                  ref={containerRef}
                  className="flex gap-[92px] pb-8"
                  style={{ width: "fit-content" }}
                >
                  {/* Card 1 */}
                  <div className="flex-shrink-0 w-[90vw] max-w-md">
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#3A3A3A] text-[16px] font-medium text-start leading-[200%]">
                        We simplify choosing the right time, displaying
                        available slots instantly. Find the perfect moment and
                        book without any hassle.
                      </p>
                      <div className="flex flex-row mt-[40px] gap-[16px] items-center">
                        <div className="bg-[#081F2F] rounded-[25.5px] w-[41px] h-[41px] flex justify-center items-center">
                          <Image
                            src={logo}
                            alt={"nation wide logo"}
                            className=""
                          />
                        </div>
                        <div className="text-[18px] text-[#1E1E1E] font-medium text-[#1E1E1E] leading-[200%]">
                          Find Your Perfect Time!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[90vw] max-w-md">
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#3A3A3A] text-[16px] font-medium text-start leading-[200%]">
                        Enjoy a clear and simple booking experience.{" "}
                        <br className="block max-lg:hidden" /> Discover
                        services, choose your professional,{" "}
                        <br className="block max-lg:hidden" />
                        and schedule instantly.
                      </p>
                      <div className="flex flex-row mt-[40px] gap-[16px] items-center">
                        <div className="bg-[#081F2F] rounded-[25.5px] w-[41px] h-[41px] flex justify-center items-center">
                          <Image
                            src={logo}
                            alt={"nation wide logo"}
                            className=""
                          />
                        </div>
                        <div className="text-[18px] text-[#1E1E1E] font-medium text-[#1E1E1E] leading-[200%]">
                          Pick. Tap. Done.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-[90vw] max-w-md">
                    <div className="flex flex-col gap-[13px]">
                      <p className="text-[#3A3A3A] text-[16px] font-medium text-start leading-[200%]">
                        We connect you with reliable professionals,{" "}
                        <br className="block max-lg:hidden" /> offering clear
                        details and confidence at every{" "}
                        <br className="block max-lg:hidden" /> step of your
                        booking journey.
                      </p>
                      <div className="flex flex-row mt-[40px] gap-[16px] items-center">
                        <div className="bg-[#081F2F] rounded-[25.5px] w-[41px] h-[41px] flex justify-center items-center">
                          <Image
                            src={logo}
                            alt={"nation wide logo"}
                            className=""
                          />
                        </div>
                        <div className="text-[18px] text-[#1E1E1E] font-medium text-[#1E1E1E] leading-[200%]">
                          Match With the Best
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bottom-8  z-10 w-full ">
                <div className="h-[5px] bg-[#EBEBEB] rounded-full overflow-hidden shadow-lg">
                  <div
                    ref={progressRef}
                    className="h-full bg-[#18BCCA] rounded-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
