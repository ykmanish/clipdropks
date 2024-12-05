"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dData } from "./dData";

gsap.registerPlugin(ScrollTrigger);

const StickyDee = () => {
  const serviceCardsRef = useRef([]);
  const [backgroundColor, setBackgroundColor] = useState("#ECECEC"); // Default background color

  const colors = ["#C0FF70", "#5EFFC8", "#67EDF9", "#8A97FF"]; // Unique colors for each card

  useEffect(() => {
    serviceCardsRef.current = serviceCardsRef.current.slice(0, dData.length);

    serviceCardsRef.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setBackgroundColor(colors[index] || "#ECECEC"), // Set background color for current card
        onLeaveBack: () =>
          setBackgroundColor(colors[index - 1] || "#ECECEC"), // Revert to the previous card's color
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up
  }, [dData, colors]);

  return (
    <div
      className="bg-[#ECECEC] dark:bg-[#0c0c0c] mt-40 py-10 h-auto transition-colors duration-500"
      style={{ backgroundColor }} // Dynamically set background color
    >
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto lg:grid-cols-5">
        {/* Left Section */}
        <div className="lg:col-span-2 px-6 lg:px-0 lg:h-screen lg:sticky lg:top-0 flex flex-col lg:justify-center items-start ">
          <h1 className="small gap-2 max-w-2xl items-center flex lg:text-2xl text-lg text-[#0c0c0c] ">
            <span className=" w-2 h-2 rounded-full bg-[#0c0c0c] inline-block"></span>
            our approach
          </h1>
          <h1 className="small mt-10 font-semibold text-start tracking-tight text-7xl lg:text-8xl uppercase  text-[#0c0c0c]">
            The 4D Success Blueprint
          </h1>
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="lg:col-span-3 px-4 overflow-y-auto">
          <div className="flex flex-col mt-16 lg:mt-32 mb-20">
            <div className="w-full flex gap-6 flex-col items-start justify-center">
              {dData.map((item, index) => (
                <div
                  key={index}
                  className="card w-full lg:h-96 h-auto bg-zinc-100 rounded-[40px] flex items-center justify-between p-8"
                  ref={(el) => (serviceCardsRef.current[index] = el)}
                >
                  <div className="flex lg:flex-row flex-col h-full gap-10 items-center  rounded-[32px] overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className="lg:w-52 w-32 lg:h-52 h-32 object-cover"
                    />
                    <div className="flex flex-col items-center lg:items-start gap-4">
                      <h1 className="text-zinc-100 font-semibold bg-[#0c0c0c] rounded-full w-10 h-10 flex items-center justify-center small">
                        <span>{index + 1}</span>
                      </h1>
                      <h2 className="lg:text-6xl text-5xl my-4 font-bold text-[#0c0c0c] small">
                        {item.title}
                      </h2>
                      <p className="text-zinc-600 text-center lg:text-left text-md lg:text-lg small">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyDee;
