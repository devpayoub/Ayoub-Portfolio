"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { ExperienceItemsProps } from "./ExperienceSection";
import Image from "next/image";

export const Timeline = ({ data }: { data: ExperienceItemsProps[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateHeight = () => {
      const rect = element.getBoundingClientRect();
      setHeight(rect.height);
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10 pt-28"
      ref={containerRef}
    >
      <div className="text-white text-center text-4xl font-bold">
        My Journey
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full -left-[23px] sm:-left-[35px] bg-midnight">
                <Image
                  src={item.logo}
                  alt="logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <div className="text-2xl text-white">{item.title}</div>
                <div className="text-2xl text-[#ADB7BE] ">{item.location}</div>
                <div className="text-neutral-500 text-xl">{item.date}</div>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4 font-bold">
              <div className="block mb-4 text-left md:hidden">
                <div className="text-xl text-white font-semibold">
                  {item.title}
                </div>
                <div className="text-xl text-[#ADB7BE]">{item.location}</div>
                <div className="text-neutral-500 text-xl">{item.date}</div>
              </div>
              {item.description.map((content, index) => (
                <p className="mb-3 font-normal text-[#ADB7BE]" key={index}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-r from-[#6b22cf] via-[#7074e5] to-[#74aff5] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
