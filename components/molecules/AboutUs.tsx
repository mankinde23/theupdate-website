// "use client";
// import React, { useEffect } from "react";
// import { Card } from "../ui/card";
// import about from "../../../public/images/about-image.jpg";
// import Image from "next/image";
// import { Separator } from "../ui/separator";
// import { Fade } from "react-awesome-reveal";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// interface AnimatedCounterProps {
//   end: number;
//   suffix?: string;
//   duration?: number;
// }
// export default function AboutUs() {
//   const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
//     end,
//     suffix = "",
//     duration = 2.5,
//   }) => {
//     const count = useMotionValue(0);
//     const rounded = useTransform(
//       count,
//       (latest) => Math.round(latest) + suffix
//     );

//     useEffect(() => {
//       const controls = animate(count, end, {
//         duration,
//         ease: "easeOut",
//       });
//       return controls.stop;
//     }, [count, end, duration]);

//     return <motion.span>{rounded}</motion.span>;
//   };
//   return (
//     <>
//       <div id="about">
//         <div className="flex flex-col gap-[14.4375rem] max-lg:gap-[5.815rem] mt-[12.625rem] font-[montserrat] max-lg:mt-[5.815rem]">
//           <div className="w-[49.3125rem] max-lg:w-full max-lg:px-[1.4375rem]">
//             <Fade
//               cascade
//               damping={0.08} // Faster letter-by-letter reveal
//               // direction="up"
//               delay={300}
//               triggerOnce
//               fraction={0.2}
//               className="inline-block overflow-hidden max-lg:flex max-lg:justify-center" // Important!
//             >
//               <div className="text-[2.5rem] max-lg:text-[1.5rem] max-lg:text-center font-medium text-[#101010] ">
//                 EXPERTS IN REAL ESTATE
//               </div>
//             </Fade>
//             <Fade
//               cascade
//               damping={0.08} // Faster letter-by-letter reveal
//               // direction="up"
//               delay={400}
//               triggerOnce
//               fraction={0.2}
//               className="inline-block overflow-hidden" // Important!
//             >
//               {" "}
//               <div className="text-[#3A3A3A] font-medium text-[1rem] max-lg:text-center max-lg:text-[0.75rem] mt-[2rem]">
//                 At Nationwide Realty, we provide a refined real estate
//                 experience for clients in Georgia and Texas. Our mission is to
//                 handle every transaction with precision and excellence. From
//                 exclusive properties in Atlanta to commercial opportunities in
//                 Dallas, we guide clients with strategic insight and
//                 professionalism. Our results include millions in closed
//                 transactions and exceptional equity growth.
//               </div>
//             </Fade>
//           </div>
//           <Card className="w-[] h-[22.375rem] max-lg:h-full bg-[#1E1E1E] rounded-[0.9375rem] max-lg:rounded-none">
//             <div className="flex flex-row max-lg:flex-col gap-[3.125rem] pl-[50px] pt-[5.437rem] max-lg:pb-[5.437rem] max-lg:px-[2.8125rem]">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col gap-[1.5rem] max-lg:items-center"
//               >
//                 <div className="text-[3rem] font-medium text-[#F1BF41]">
//                   <AnimatedCounter end={50} suffix="M+" duration={3} />
//                 </div>
//                 <div className="text-[#E9E9E9] text-[16px] font-medium">
//                   Property Sales Value
//                 </div>
//               </motion.div>
//               <Separator
//                 orientation="vertical"
//                 className="bg-transparent border-[#DADADA59] border-[0.0625rem] max-lg:hidden block"
//               />
//               <Separator
//                 orientation="horizontal"
//                 className="border-[0.0625rem] border-[#DADADA1C] bg-transparent max-lg:block hidden"
//               />
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 transition={{ duration: 0.6, delay: 0.15 }}
//                 className="flex flex-col gap-[1.5rem] max-lg:items-center"
//               >
//                 <div className="text-[3rem] font-medium text-[#F1BF41]">
//                   <AnimatedCounter end={100} suffix="+" duration={2.7} />
//                 </div>
//                 <div className="text-[#E9E9E9] text-[16px] font-medium">
//                   Properties Sold
//                 </div>
//               </motion.div>
//               <Separator
//                 orientation="vertical"
//                 className="bg-transparent border-[#DADADA59] border-[0.0625rem] max-lg:hidden block"
//               />
//               <Separator
//                 orientation="horizontal"
//                 className="border-[0.0625rem] border-[#DADADA1C] bg-transparent max-lg:block hidden"
//               />
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="flex flex-col gap-[1.5rem] max-lg:items-center"
//               >
//                 <div className="text-[3rem] font-medium text-[#F1BF41]">
//                   <AnimatedCounter end={5} suffix="+" duration={2.2} />
//                 </div>
//                 <div className="text-[#E9E9E9] text-[16px] font-medium">
//                   Years of Service
//                 </div>
//               </motion.div>
//             </div>

//             <div className="absolute right-[56px] top-[892px] max-lg:hidden">
//               <Fade
//                 // cascade
//                 // damping={0.08} // Faster letter-by-letter reveal
//                 direction="up"
//                 delay={300}
//                 triggerOnce
//                 // fraction={0.2}
//                 // className="inline-block overflow-hidden" // Important!
//               >
//                 <Image
//                   src={about}
//                   alt="a building"
//                   className="w-[422.4px] h-[785.26px]"
//                 />
//               </Fade>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// }

// ("use client");

// import React, { useEffect } from "react";
// import { Card } from "../ui/card";
// import about from "../../../public/images/about-image.jpg";
// import Image from "next/image";
// import { Separator } from "../ui/separator";
// import { Fade } from "react-awesome-reveal";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// // Reusable Animated Counter Component (you can extract this later)
// const AnimatedCounter = ({ end, suffix = "", duration = 2.5 }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

//   useEffect(() => {
//     const controls = animate(count, end, {
//       duration,
//       ease: "easeOut",
//     });
//     return controls.stop;
//   }, [count, end, duration]);

//   return <motion.span>{rounded}</motion.span>;
// };

// export default function AboutUs() {
//   return (
//     <div id="about">
//       <div className="flex flex-col gap-[14.4375rem] max-lg:gap-[5.815rem] mt-[12.625rem] font-[montserrat] max-lg:mt-[5.815rem]">
//         {/* Hero Text */}
//         <div className="w-[49.3125rem] max-lg:w-full max-lg:px-[1.4375rem]">
//           <Fade cascade damping={0.08} delay={300} triggerOnce fraction={0.2}>
//             <div className="text-[2.5rem] max-lg:text-[1.5rem] max-lg:text-center font-medium text-[#101010]">
//               EXPERTS IN REAL ESTATE
//             </div>
//           </Fade>
//           <Fade cascade damping={0.08} delay={400} triggerOnce fraction={0.2}>
//             <div className="text-[#3A3A3A] font-medium text-[1rem] max-lg:text-center max-lg:text-[0.75rem] mt-[2rem]">
//               At Nationwide Realty, we provide a refined real estate
//               experience...
//             </div>
//           </Fade>
//         </div>

//         {/* Stats Card */}
//         <Card className="relative w-full h-[22.375rem] max-lg:h-full bg-[#1E1E1E] rounded-[0.9375rem] max-lg:rounded-none overflow-hidden">
//           <div className="flex flex-row max-lg:flex-col gap-[3.125rem] pl-[50px] pt-[5.437rem] max-lg:pb-[5.437rem] max-lg:px-[2.8125rem]">
//             {/* Stat 1 */}
//             <motion.div
//               className="flex flex-col gap-[1.5rem] max-lg:items-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tight">
//                 <AnimatedCounter end={50} suffix="M+" duration={3} />
//               </div>
//               <div className="text-[#E9E9E9] text-[16px] font-medium">
//                 Property Sales Value
//               </div>
//             </motion.div>

//             <Separator
//               orientation="vertical"
//               className="bg-transparent border-[#DADADA59] max-lg:hidden"
//             />
//             <Separator
//               orientation="horizontal"
//               className="border-[#DADADA1C] max-lg:block hidden"
//             />

//             {/* Stat 2 */}
//             <motion.div
//               className="flex flex-col gap-[1.5rem] max-lg:items-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//             >
//               <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tight">
//                 <AnimatedCounter end={100} suffix="+" duration={2.7} />
//               </div>
//               <div className="text-[#E9E9E9] text-[16px] font-medium">
//                 Properties Sold
//               </div>
//             </motion.div>

//             <Separator
//               orientation="vertical"
//               className="bg-transparent border-[#DADADA59] max-lg:hidden"
//             />
//             <Separator
//               orientation="horizontal"
//               className="border-[#DADADA1C] max-lg:block hidden"
//             />

//             {/* Stat 3 */}
//             <motion.div
//               className="flex flex-col gap-[1.5rem] max-lg:items-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tight">
//                 <AnimatedCounter end={5} suffix="+" duration={2.2} />
//               </div>
//               <div className="text-[#E9E9E9] text-[16px] font-medium">
//                 Years of Service
//               </div>
//             </motion.div>
//           </div>

//           {/* Background Image
//           <motion.div
//             className="absolute right-[56px] top-[892px] max-lg:hidden pointer-events-none"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             <Fade direction="up" delay={300} triggerOnce>
//               <Image
//                 src={about}
//                 alt="Luxury building"
//                 className="w-[422.4px] h-[785.26px] object-cover rounded-lg"
//               />
//             </Fade>
//           </motion.div> */}

//           <div className="absolute right-[56px] top-[892px] max-lg:hidden">
//             <Fade
//               // cascade
//               // damping={0.08} // Faster letter-by-letter reveal
//               direction="up"
//               delay={300}
//               triggerOnce
//               // fraction={0.2}
//               // className="inline-block overflow-hidden" // Important!
//             >
//               <Image
//                 src={about}
//                 alt="a building"
//                 className="w-[422.4px] h-[785.26px]"
//               />
//             </Fade>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { Card } from "../ui/card";
// import about from "../../../public/images/about-image.jpg";
// import Image from "next/image";
// import { Separator } from "../ui/separator";
// import { Fade } from "react-awesome-reveal";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   animate,
//   useInView,
// } from "framer-motion";

// // Animated Counter Component (with proper typing)
// interface AnimatedCounterProps {
//   end: number;
//   suffix?: string;
//   duration?: number;
// }

// const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
//   end,
//   suffix = "",
//   duration = 2.5,
// }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

//   React.useEffect(() => {
//     const controls = animate(count, end, {
//       duration,
//       ease: "easeOut",
//     });
//     return controls.stop;
//   }, [count, end, duration]);

//   return <motion.span>{rounded}</motion.span>;
// };

// export default function AboutUs() {
//   // This ref watches the entire section
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, {
//     once: true, // Animate only once
//     amount: 0.3, // Trigger when 30% of section is visible
//     margin: "-100px", // Trigger a bit earlier (optional but smooth)
//   });

//   return (
//     <div id="about" ref={ref}>
//       <div className="flex flex-col gap-[14.4375rem] max-lg:gap-[5.815rem] mt-[12.625rem] font-[montserrat] max-lg:mt-[5.815rem]">
//         {/* Text Section */}
//         <div className="w-[49.3125rem] max-lg:w-full max-lg:px-[1.4375rem]">
//           <Fade
//             cascade
//             damping={0.08} // Faster letter-by-letter reveal
//             // direction="up"
//             delay={300}
//             triggerOnce
//             fraction={0.2}
//             className="inline-block overflow-hidden max-lg:flex max-lg:justify-center" // Important!
//           >
//             <div className="text-[2.5rem] max-lg:text-[1.5rem] max-lg:text-center font-medium text-[#101010] ">
//               EXPERTS IN REAL ESTATE
//             </div>
//           </Fade>
//           <Fade
//             cascade
//             damping={0.08}
//             delay={400}
//             triggerOnce
//             fraction={0.2}
//             className="inline-block overflow-hidden"
//           >
//             <div className="text-[#3A3A3A] font-medium text-[1rem] max-lg:text-center max-lg:text-[0.75rem] max-lg:leading-[1.5rem] mt-[2rem]">
//               At Nationwide Realty, we provide a refined real estate experience
//               for clients in Georgia and Texas. Our mission is to handle every
//               transaction with precision and excellence. From exclusive
//               properties in Atlanta to commercial opportunities in Dallas, we
//               guide clients with strategic insight and professionalism. Our
//               results include millions in closed transactions and exceptional
//               equity growth.
//             </div>
//           </Fade>
//         </div>

//         {/* Stats Card */}
//         <Card className="w-[] h-[22.375rem] max-lg:h-full bg-[#1E1E1E] rounded-[0.9375rem] max-lg:rounded-none">
//           <div className="flex flex-row max-lg:flex-col gap-[3.125rem] pl-[50px] pt-[5.4375rem] max-lg:pb-[5.437rem] max-lg:px-[2.8125rem]">
//             {/* Stat 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="flex flex-col gap-[1.5rem] max-lg:items-center"
//             >
//               <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-t-tight">
//                 {isInView && (
//                   <AnimatedCounter end={50} suffix="M+" duration={3} />
//                 )}
//               </div>
//               <div className="text-[#E9E9E9] text-[16px] font-medium">
//                 Property Sales Value
//               </div>
//             </motion.div>

//             <Separator
//               orientation="vertical"
//               className="max-lg:hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent text-[#9E9E9E99]"
//             />
//             <Separator
//               orientation="horizontal"
//               className="max-lg:block hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent  text-[#9E9E9E99]"
//             />

//             {/* Stat 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.25 }}
//               className="flex flex-col gap-[1.5rem] max-lg:items-center"
//             >
//               <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tight">
//                 {isInView && (
//                   <AnimatedCounter end={100} suffix="+" duration={2.7} />
//                 )}
//               </div>
//               <div className="text-[#E9E9E9] text-[16px] font-medium">
//                 Properties Sold
//               </div>
//             </motion.div>

//             <Separator
//               orientation="vertical"
//               className="max-lg:hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent  text-[#9E9E9E99]"
//             />
//             <Separator
//               orientation="horizontal"
//               className="max-lg:block hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent  text-[#9E9E9E99]"
//             />

//             {/* Stat 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="flex flex-col gap-[1.5rem] max-lg:items-center"
//             >
//               <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tight">
//                 {isInView && (
//                   <AnimatedCounter end={5} suffix="+" duration={2.2} />
//                 )}
//               </div>
//               <div className="text-[#E9E9E9] text-[16px] font-medium">
//                 Years of Service
//               </div>
//             </motion.div>
//           </div>

//           <div className="absolute right-[56px] top-[907px] max-lg:hidden">
//             <Fade
//               // cascade
//               // damping={0.08} // Faster letter-by-letter reveal
//               direction="up"
//               delay={300}
//               triggerOnce
//               // fraction={0.2}
//               // className="inline-block overflow-hidden" // Important!
//             >
//               <Image
//                 src={about}
//                 alt="a building"
//                 className="w-[422.4px] h-[785.26px]"
//               />
//             </Fade>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { Card } from "../ui/card";
import about from "../../../public/images/about-image.jpg";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Fade } from "react-awesome-reveal";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

// Improved AnimatedCounter that accepts a "start" trigger
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  shouldStart: boolean; // <-- new prop
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = "",
  duration = 2.5,
  shouldStart,
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  React.useEffect(() => {
    if (!shouldStart) return;

    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [shouldStart, count, end, duration]);

  return <motion.span>{rounded}</motion.span>;
};

export default function AboutUs() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div id="about" ref={ref}>
      <div className="flex flex-col gap-[14.4375rem] max-lg:gap-[5.815rem] mt-[12.625rem] font-[montserrat] max-lg:mt-[5.815rem]">
        {/* Text Section */}
        <div className="w-[49.3125rem] max-lg:w-full max-lg:px-[1.4375rem]">
          <Fade cascade damping={0.08} delay={300} triggerOnce fraction={0.2}>
            <div className="text-[2.5rem] max-lg:text-[1.5rem] max-lg:text-center font-medium text-[#101010]">
              EXPERTS IN REAL ESTATE
            </div>
          </Fade>

          <Fade cascade damping={0.08} delay={400} triggerOnce fraction={0.2}>
            <div className="text-[#3A3A3A] font-medium text-[1rem] max-lg:text-center max-lg:text-[0.75rem] mt-[2rem] leading-relaxed">
              At Nationwide Realty, we provide a refined real estate experience
              for clients in Georgia and Texas. Our mission is to handle every
              transaction with precision and excellence. From exclusive
              properties in Atlanta to commercial opportunities in Dallas, we
              guide clients with strategic insight and professionalism. Our
              results include millions in closed transactions and exceptional
              equity growth.
            </div>
          </Fade>
        </div>

        {/* Stats Card */}
        <Card className=" h-[22.375rem] max-lg:h-full bg-[#1E1E1E] rounded-[0.9375rem] max-lg:rounded-none overflow-hidden">
          <div className="flex flex-row max-lg:flex-col gap-[3.125rem] pl-[50px] max-xl:pl-[13.63px] pt-[5.437rem] max-lg:px-[2.8125rem] max-lg:pb-[5.437rem]">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-[1.5rem] max-lg:items-center"
            >
              <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tighter">
                <AnimatedCounter
                  end={50}
                  suffix="M+"
                  duration={3}
                  shouldStart={isInView}
                />
              </div>
              <div className="text-[#E9E9E9] text-[16px] font-medium">
                Property Sales Value
              </div>
            </motion.div>
            <Separator
              orientation="vertical"
              className="max-lg:hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent text-[#9E9E9E99]"
            />
            <Separator
              orientation="horizontal"
              className="max-lg:block hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent  text-[#9E9E9E99]"
            />

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col gap-[1.5rem] max-lg:items-center"
            >
              <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tighter">
                <AnimatedCounter
                  end={100}
                  suffix="+"
                  duration={2.7}
                  shouldStart={isInView}
                />
              </div>
              <div className="text-[#E9E9E9] text-[16px] font-medium">
                Properties Sold
              </div>
            </motion.div>

            <Separator
              orientation="vertical"
              className="max-lg:hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent  text-[#9E9E9E99]"
            />
            <Separator
              orientation="horizontal"
              className="max-lg:block hidden bg-[#9E9E9E] border-[0.0625rem] bg-transparent  text-[#9E9E9E99]"
            />

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-[1.5rem] max-lg:items-center"
            >
              <div className="text-[3rem] font-medium text-[#F1BF41] font-mono tracking-tighter">
                <AnimatedCounter
                  end={5}
                  suffix="+"
                  duration={2.2}
                  shouldStart={isInView}
                />
              </div>
              <div className="text-[#E9E9E9] text-[16px] font-medium">
                Years of Service
              </div>
            </motion.div>
          </div>

          <div className="absolute right-[56px] top-[1083px] max-xl:top-[1225px]  max-lg:hidden">
            <Fade
              // cascade
              // damping={0.08} // Faster letter-by-letter reveal
              direction="up"
              delay={300}
              triggerOnce
              // fraction={0.2}
              // className="inline-block overflow-hidden" // Important!
            >
              <Image
                src={about}
                alt="a building"
                className="w-[422.4px] h-[604.26px] max-xl:w-[248px] max-xl:h-[462px]"
              />
            </Fade>
          </div>
        </Card>
      </div>
    </div>
  );
}
