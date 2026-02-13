// "use client";

// import * as React from "react";
// import { type HTMLMotionProps, motion, type Transition } from "motion/react";

// import { cn } from "@/lib/utils";

// type ShimmeringTextProps = {
//   text: string;
//   duration?: number;
//   transition?: Transition;
//   wave?: boolean;
//   color?: string;
//   shimmeringColor?: string;
// } & Omit<HTMLMotionProps<"span">, "children">;

// function ShimmeringText({
//   text,
//   duration = 1,
//   transition,
//   wave = false,
//   className,
//   color = "var(--color-neutral-500)",
//   shimmeringColor = "var(--color-neutral-300)",
//   ...props
// }: ShimmeringTextProps) {
//   return (
//     <motion.span
//       className={cn("relative inline-block [perspective:500px]", className)}
//       initial="initial"
//       whileInView="animate"
//       viewport={{ once: true, margin: "-100px" }}
//       style={
//         {
//           "--shimmering-color": shimmeringColor,
//           "--color": color,
//           color: "var(--color)",
//         } as React.CSSProperties
//       }
//       {...(props as any)}
//     >
//       {/* {text?.split("")?.map((char, i) => (
//         <motion.span
//           key={i}
//           className="inline-block whitespace-pre [transform-style:preserve-3d]"
//           initial={{
//             ...(wave
//               ? {
//                   scale: 1,
//                   rotateY: 0,
//                 }
//               : {}),
//             color: "var(--color)",
//           }}
//           animate={{
//             ...(wave
//               ? {
//                   // x: [0, 5, 0],
//                   // y: [0, -5, 0],
//                   // scale: [1, 1.1, 1],
//                   // rotateY: [0, 15, 0],
//                   x: 0,
//                   y: 0,
//                   scale: 1,
//                   rotateY: 0,
//                 }
//               : {}),
//             // color: ["var(--color)", "var(--shimmering-color)", "var(--color)"],
//             color: "var(--shimmering-color)",
//           }}
//           transition={{
//             // duration,
//             // repeat: Infinity,
//             // repeatType: "loop",
//             // repeatDelay: text.length * 0.05,
//             // delay: (i * duration) / text.length,
//             // ease: "easeInOut",
//             // ...transition,
//             duration: duration,
//             repeat: 0, // CHANGE: Do not repeat
//             delay: i * 0.1, // CHANGE: Clearer stagger delay
//             ease: [0.22, 1, 0.36, 1], // CHANGE: Smooth professional easing
//             ...transition,
//           }}
//         >
//           {char}
//         </motion.span>
//       ))} */}
//       {text?.split("")?.map((char, i) => {
//         // 1. Identify where "MADE" is in your specific string
//         // If the text is "BOOKING MADE EASY", MADE starts at index 8 and ends at 11
//         const isTargetWord = i >= 8 && i <= 11;

//         return (
//           <motion.span
//             key={i}
//             className="inline-block whitespace-pre [transform-style:preserve-3d]"
//             initial={{
//               ...(wave ? { scale: 1, rotateY: 0 } : {}),
//               color: "var(--color)",
//             }}
//             animate={{
//               ...(wave
//                 ? {
//                     x: [0, 5, 0],
//                     y: [0, -5, 0],
//                     scale: [1, 1.1, 1],
//                     rotateY: [0, 15, 0],
//                   }
//                 : {}),

//               // 2. THIS IS THE UPDATE:
//               // If it's the target word, it stays blue. Otherwise, it returns to white.
//               color: isTargetWord
//                 ? [
//                     "var(--color)",
//                     "var(--shimmering-color)",
//                     "var(--shimmering-color)",
//                   ]
//                 : ["var(--color)", "var(--shimmering-color)", "var(--color)"],
//             }}
//             transition={{
//               duration: duration,
//               repeat: 0,
//               // repeat: Infinity,
//               // repeatType: "loop",
//               // delay: i * 0.08,
//               delay: (i * duration) / text.length,
//               // ease: [0.22, 1, 0.36, 1],
//               ease: "easeInOut",
//               ...transition,
//             }}
//           >
//             {char}
//           </motion.span>
//         );
//       })}
//     </motion.span>
//   );
// }

// export { ShimmeringText, type ShimmeringTextProps };
"use client";

import * as React from "react";
import { type HTMLMotionProps, motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

type ShimmeringTextProps = {
  text: string;
  duration?: number;
  transition?: Transition;
  wave?: boolean;
  color?: string;
  shimmeringColor?: string;
} & Omit<HTMLMotionProps<"span">, "children">;

function ShimmeringText({
  text,
  duration = 1,
  transition,
  wave = false,
  className,
  color = "var(--color-neutral-500)",
  shimmeringColor = "var(--color-neutral-300)",
  ...props
}: ShimmeringTextProps) {
  return (
    <motion.span
      className={cn("relative inline-block [perspective:500px]", className)}
      // This tells Framer Motion to trigger the "initial" and "animate"
      // variants of all children when this span enters the viewport.
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-200px" }}
      style={
        {
          "--shimmering-color": shimmeringColor,
          "--color": color,
          color: "var(--color)",
        } as React.CSSProperties
      }
      {...(props as any)}
    >
      {text?.split("")?.map((char, i) => {
        const isTargetWord = i >= 8 && i <= 11; // Index for "MADE"

        return (
          <motion.span
            key={i}
            className="inline-block whitespace-pre [transform-style:preserve-3d]"
            // FIX: We move initial and animate into a variants object
            variants={{
              initial: {
                color: "var(--color)",
                scale: 1,
                rotateY: 0,
                x: 0,
                y: 0,
              },
              animate: {
                // If it's "MADE", it stays shimmeringColor.
                // Others go: White -> Blue -> White
                color: isTargetWord
                  ? [
                      "var(--color)",
                      "var(--shimmering-color)",
                      "var(--shimmering-color)",
                    ]
                  : ["var(--color)", "var(--shimmering-color)", "var(--color)"],
                ...(wave
                  ? {
                      x: [0, 5, 0],
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                      rotateY: [0, 15, 0],
                    }
                  : {}),
              },
            }}
            transition={{
              duration: duration,
              repeat: 0,
              // stagger the characters based on the total duration
              delay: (i * duration) / text.length,
              ease: "easeInOut",
              ...transition,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export { ShimmeringText, type ShimmeringTextProps };