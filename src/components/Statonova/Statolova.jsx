'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    bgColor: "#ffffff",
    textColor: "#0c0c0c",
    count: 100, // Use a number for counting
    spanAllowed: false,
    isAllside: true,
    description: "successful projects delivered with quality and innovation.",
    imageSrc: "/tick.svg",
  },
  {
    id: 2,
    bgColor: "#4f50ff",
    textColor: "#ffffff",
    count: 70,
    spanAllowed: false,
    isAllside: false,
    description: "satisfied clients who trust our expertise and dedication.",
    imageSrc: "/rwface.svg",
  },
  {
    id: 3,
    bgColor: "#0c0c0c",
    textColor: "#ffffff",
    count: 7,
    spanAllowed: true,
    isAllside: false,
    description: "global presence across multiple countries.",
    imageSrc: "/flag.svg",
  },
];

const Statolova = () => {
  const statsRef = useRef([]);
  const numberRefs = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((stat, index) => {
      const targetCount = statsData[index].count;

      gsap.fromTo(
        stat,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            end: "top 50%",
            onEnter: () => startCounting(index, targetCount),
            markers: false, // Set to true to see scroll markers
          },
        }
      );
    });
  }, []);

  const startCounting = (index, targetCount) => {
    gsap.fromTo(
      numberRefs.current[index],
      { innerText: 0 },
      {
        innerText: targetCount,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
        onUpdate: function () {
          numberRefs.current[index].innerText = Math.floor(
            this.targets()[0].innerText
          );
        },
      }
    );
  };

  return (
    <>
    <div></div>
    <div className="flex flex-col z-100 h-screen items-center justify-center">
      {statsData.map((stat, index) => (
        <div
          ref={(el) => (statsRef.current[index] = el)}
          key={stat.id}
          className={`px-10 grid grid-cols-5 items-center justify-between ${
            stat.isAllside ? "rounded-[75px]" : "rounded-b-[75px]"
          } h-40`}
          style={{ backgroundColor: stat.bgColor, width: `${65 - (stat.id - 1) * 10}vw` }}
        >
          <div className="col-span-1 flex">
            <h1
              ref={(el) => (numberRefs.current[index] = el)}
              className={`text-7xl small font-bold`}
              style={{ color: stat.textColor }}
            >
              0
            </h1>
            <span className="text-7xl small font-bold" style={{ color: stat.textColor }}>
              +
            </span>
          </div>
          <div className="col-span-3 flex justify-center">
            <h1 className="text-2xl small text-center" style={{ color: stat.textColor }}>
              {stat.description}
            </h1>
          </div>
          <div className="col-span-1 flex justify-end">
            <span
              className={`w-20 flex justify-center items-center ${
                stat.spanAllowed ? "bg-white" : ""
              } h-20 rounded-full`}
            >
              <img
                src={stat.imageSrc}
                className={`${
                  stat.spanAllowed
                    ? "lg:w-16 lg:h-16"
                    : "lg:w-20 w-8 h-8 lg:h-20"
                }`}
                alt="icon"
              />
            </span>
          </div>
        </div>
      ))}
          

    </div>
  
    </>
    
  );
};

export default Statolova;
