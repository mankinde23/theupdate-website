import React, { useState } from "react";
import hero from "@/public/images/update-hero.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import update from "@/public/images/the-updatet.png";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { ScrollArea } from "../ui/scroll-area";
export default function Hero() {
  const [value, setValue] = useState("update");
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${hero.src})` }}
        className="
        relative
        // bg-[url('/images/hero-image.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        min-h-screen
        rounded-[36px]
        max-lg:rounded-[27px]
      "
      >
        <div className="flex flex-row max-lg:flex-col justify-between mb-[7.5625rem] font-[montserrat]">
          <div className="w-[34.34rem] max-lg:w-full max-lg:px-[1.4375rem] flex flex-col gap-[4.125rem] max-lg:gap-0 justify-end">
            {/* <Fade
                cascade
                damping={0.2}
                direction="up"
                // delay={200}
                triggerOnce={true}
                fraction={0.3}
              >
                <span className="text-[#101010] ">YOUR HOME</span>
                <span className="text-[#595959]">OUR PRIORITY</span>
              </Fade> */}
            <br />
            <Image
              src={update}
              alt={"nation wide logo"}
              className="max-lg:w-[15px] max-lg:h-[20px] mt-[289px]"
            />
            <ScrollArea className="w-full whitespace-nowrap rounded-full">
              <ToggleGroup
                type="single"
                value={value}
                onValueChange={(v) => v && setValue(v)}
                className="inline-flex items-center justify-center rounded-full bg-muted p-1 text-muted-foreground"
              >
                <ToggleGroupItem
                  value="update"
                  aria-label="The Update"
                  className="rounded-full px-6 py-2 text-sm font-medium data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <span className="relative">
                    THE UPDATE
                    {value === "update" && (
                      <span className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400 w-2 h-2" />
                    )}
                  </span>
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="features"
                  aria-label="New Features"
                  className="rounded-full px-6 py-2 text-sm font-medium data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <span className="relative">
                    NEW FEATURES
                    {value === "features" && (
                      <span className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400 w-2 h-2" />
                    )}
                  </span>
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="release"
                  aria-label="The Release"
                  className="rounded-full px-6 py-2 text-sm font-medium data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <span className="relative">
                    THE RELEASE
                    {value === "release" && (
                      <span className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400 w-2 h-2" />
                    )}
                  </span>
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="announcement"
                  aria-label="Announcement"
                  className="rounded-full px-6 py-2 text-sm font-medium data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  <span className="relative">
                    ANNOUNCEMENT
                    {value === "announcement" && (
                      <span className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-full bg-cyan-400 w-2 h-2" />
                    )}
                  </span>
                </ToggleGroupItem>
              </ToggleGroup>
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}
