// // components/Testimonials.tsx
// "use client"; // If using Next.js App Router

// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils"; // shadcn's class merger
// import { Testimonial, testimonials } from "@/data";
// import { Quote } from "lucide-react";

// export function Testi() {
//   //   const [selected, setSelected] = useState<Testimonial | null>(null);

//   //   const handleSelect = (testimonial: Testimonial) => {
//   //     setSelected(testimonial === selected ? null : testimonial);
//   //   };
//   const [selected, setSelected] = useState<Testimonial | null>(
//     testimonials.length > 0 ? testimonials[0] : null
//   );

//   const handleSelect = (testimonial: Testimonial) => {
//     setSelected(testimonial); // Update to the selected testimonial
//   };

//   return (
//     <div className="flex  gap-[38px] max-lg:flex-col-reverse">
//       <div className=" space-y-2 overflow-y-auto">
//         {testimonials.map((testimonial) => (
//           <button
//             key={testimonial.id}
//             onClick={() => handleSelect(testimonial)}
//             className={cn(
//               "w-full text-left h-[142px] rounded-[20px]  py-[34px] hover:bg-muted transition-colors",
//               selected?.id === testimonial.id &&
//                 "bg-[#EBEBEB] text-accent-foreground pl-[54px]"
//             )}
//           >
//             <div className="flex flex-row items-center">
//               {selected?.id !== testimonial.id && (
//                 <span className="inline-block w-2 h-2 bg-[#101010] rounded-full mr-2 pl-[3px]"></span>
//               )}
//               <div
//                 className={cn(
//                   "flex flex-col items-start gap-3 ",
//                   selected?.id !== testimonial.id && " pl-[36px]"
//                 )}
//               >
//                 <div className="flex-1 font-semibold text-[#101010] text-[28px]">
//                   {testimonial.name}
//                 </div>
//                 <div className="text-[15px] font-medium text-[#3A3A3A]">
//                   {testimonial.title}
//                 </div>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//       {/* Right: Side Preview Panel */}
//       <div className="relative ">
//         {selected ? (
//           <Card className="h-full border-0 bg-[#1E1E1E] text-white shadow-lg rounded-[30px] max-lg:py-[61px] ">
//             {/* <CardHeader className="flex flex-col items-center text-center gap-6 pb-0">
//               <div className="relative w-24 h-24">
//                 <Avatar className="w-full h-full">
//                   <AvatarImage src={selected.image} className="object-cover" />
//                   <AvatarFallback className="bg-gray-700 text-white">
//                     {selected.name[0]}
//                   </AvatarFallback>
//                 </Avatar>
//               </div>
//             </CardHeader> */}
//             <CardContent className="flex flex-col items-center text-center pt-[107px] pl-[51px] pr-[36px] max-lg:pr-0 max-lg:pl-0 max-lg:px-[39px] max-lg:pt-0">
//               <div className="mb-4 self-start">
//                 <Quote className="h-[26px] w-[30px] text-[#F1BF41] transform scale-x-[-1]" />
//               </div>
//               <div className="flex flex-col gap-[42px] mx-auto justify-center items-center">
//                 <div className="relative w-24 h-24 max-lg:w-9 max-lg:h-9">
//                   <Avatar className="w-full h-full">
//                     <AvatarImage
//                       src={selected.image}
//                       className="object-cover"
//                     />
//                     <AvatarFallback className="bg-gray-700 text-white">
//                       {selected.name[0]}
//                     </AvatarFallback>
//                   </Avatar>
//                 </div>
//                 {/* Second div: Quote content */}
//                 <div className="text-[2rem] max-lg:text-[0.875rem] text-white font-semibold font-sans">
//                   {selected.quote}
//                 </div>
//               </div>

//               {/* Third div: Closing quote (flipped for closing appearance) */}
//               <div className="mt-4 self-end">
//                 <Quote className="h-[26px] w-[30px] text-[#F1BF41]" />
//               </div>
//             </CardContent>
//           </Card>
//         ) : (
//           <div className="flex h-full items-center justify-center text-muted-foreground">
//             Click a testimonial to preview
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amos Coleman",
    title: "Homeowner | Houston, Texas",
    image: "/avatars/amos.jpg",
    quote:
      "Nationwide Realty Real Estate has helped me find a perfect home to stay in.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    title: "Investor | Dallas, Texas",
    image: "/avatars/sarah.jpg",
    quote:
      "The experience was professional and seamless — I felt supported at every step.",
  },
  {
    id: 3,
    name: "Michael Scott",
    title: "Renter | Austin, Texas",
    image: "/avatars/michael.jpg",
    quote:
      "Finding a rental has never been easier — they truly understand client needs.",
  },
  {
    id: 4,
    name: "Jessica Ray",
    title: "Landlord | San Antonio, Texas",
    image: "/avatars/jessica.jpg",
    quote:
      "I trust Nationwide Realty to manage my properties — always reliable and transparent.",
  },
];

export function Testi() {
  const [selected, setSelected] = useState<Testimonial>(
    testimonials.length > 0 ? testimonials[0] : ({} as Testimonial)
  );

  const handleSelect = (testimonial: Testimonial) => {
    setSelected(testimonial);
  };

  return (
    <div className="flex gap-[38px] max-lg:flex-col-reverse max-lg:gap-[47px] w-full justify-between">
      {/* LEFT SIDE - Desktop List / Mobile Carousel */}
      <div className="space-y-2 w-full max-lg:space-y-0 max-lg:flex max-lg:gap-4 max-lg:overflow-x-auto max-lg:scrollbar-hide max-lg:flex-row flex flex-col">
        {testimonials.map((testimonial) => (
          <button
            key={testimonial.id}
            onClick={() => handleSelect(testimonial)}
            className={cn(
              "text-left h-[142px] rounded-[20px] max-lg:h-full max-lg:rounded-[16px] py-[34px] max-lg:py-5 px-[36px] hover:bg-muted transition-colors flex-shrink-0",
              selected?.id === testimonial.id
                ? "bg-[#EBEBEB] text-accent-foreground max-lg:min-w-[271px]"
                : "bg-transparent max-lg:min-w-[271px]"
            )}
          >
            <div className="flex flex-row items-center gap-3">
              {selected?.id !== testimonial.id && (
                <span className="inline-block w-4 h-4 bg-[#101010] rounded-full"></span>
              )}
              <div className="flex flex-col items-start">
                <div className="font-semibold text-[#101010] text-[22px] max-lg:text-[18px]">
                  {testimonial.name}
                </div>
                <div className="text-[15px] font-medium text-[#3A3A3A] max-lg:text-[13px]">
                  {testimonial.title}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* RIGHT SIDE - Testimonial Card */}
      <div className="relative max-w-[556px] max-lg:max-w-full">
        {selected ? (
          <Card className="border-0 bg-[#191919] text-white shadow-lg rounded-[30px] max-lg:rounded-[15px] flex items-center justify-center p-8 max-lg:p-6 h-full max-lg:min-h-[300px]">
            <CardContent className="flex flex-col justify-between items-center text-center w-full h-full">
              {/* Opening quote */}
              <div className="self-start">
                <Quote
                  fill="#F1BF41"
                  className="h-[26px] w-[30px] text-[#F1BF41] transform scale-x-[1] sacle-y-[1] rotate-180"
                />
              </div>

              {/* Center: Avatar + Quote */}
              <div className="flex flex-col gap-[30px] items-center justify-center flex-1">
                <Avatar className="w-24 h-24 max-lg:w-12 max-lg:h-12">
                  <AvatarImage src={selected.image} alt={selected.name} />
                  <AvatarFallback className="bg-gray-700 text-white">
                    {selected.name[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="text-[1.5rem] max-lg:text-[0.95rem] font-semibold leading-snug max-w-[90%]">
                  {selected.quote}
                </div>
              </div>

              {/* Closing quote */}
              <div className="self-end">
                <Quote
                  fill="#F1BF41"
                  className="h-[26px] w-[30px] text-[#F1BF41]"
                />
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Click a testimonial to preview
          </div>
        )}
      </div>
    </div>
  );
}
