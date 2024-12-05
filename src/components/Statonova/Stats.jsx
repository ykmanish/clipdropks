"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountingCard from "./CountingCard";
import useCountUp from "./Hooks/useCountUp";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const countUp = useCountUp();
  const [startIndex, setStartIndex] = useState(0);
  const [isCounting, setIsCounting] = useState(false); // New state to track counting
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const cardRef = React.useRef(null);

  const statsData = [
    {
      id: 1,
      title: "Projects",
      iconSrc: "/tick.svg",
      countEnd: 100,
      description: "successful projects delivered with quality and innovation.",
    },
    {
      id: 2,
      title: "Clients",
      iconSrc: "/yellowf.svg",
      countEnd: 75,
      description: "satisfied clients who trust our expertise and dedication.",
    },
    {
      id: 3,
      title: "Countries",
      iconSrc: "/flag.svg",
      countEnd: 7,
      description: "global presence across multiple countries.",
      iconBgColor: "bg-[#0c0c0c]",
    },
  ];

  const handleNext = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.3,
        onComplete: () => {
          setStartIndex((prevIndex) => (prevIndex + 1) % statsData.length);
          setIsCounting(false); // Reset counting flag
          gsap.fromTo(cardRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        }
      });
    }
  };

  const handlePrevious = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: 100,
        duration: 0.3,
        onComplete: () => {
          setStartIndex((prevIndex) => (prevIndex - 1 + statsData.length) % statsData.length);
          setIsCounting(false); // Reset counting flag
          gsap.fromTo(cardRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.3 }
          );
        }
      });
    }
  };

  useEffect(() => {
    const scrollTriggerConfig = {
      trigger: ".countSection",
      start: "top bottom",
      toggleActions: "play none none reverse",
      onEnter: () => {
        if (!isCounting) { // Check if counting has not been triggered
          setIsCounting(true); // Set counting flag
          countUp(statsData[startIndex].countEnd); // Call counting function
        }
      },
    };

    const trigger = ScrollTrigger.create(scrollTriggerConfig);

    return () => {
      trigger.kill();
    };
  }, [startIndex, isCounting]); // Add isCounting to dependency array

  return (
    <div className="flex overflow-hidden max-w-7xl p-6 lg:p-10 mx-auto py-20 h-screen justify-start items-center">
      <div className="flex flex-col items-start">
        <h1 className="small flex items-center justify-start gap-2 text-[17px] dark:text-[#ffffff] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
          our stats
        </h1>
        <h1 className="lg:text-6xl mt-6 text-4xl font-semibold small tracking-tight dark:text-[#ffffff] text-[#0c0c0c]">
         ClipDropks by the<br/> numbers
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center mt-20 gap-6 countSection">
          {isMobile ? (
            <div ref={cardRef}>
              <CountingCard
                iconSrc={statsData[startIndex].iconSrc}
                title={statsData[startIndex].title}
                countEnd={statsData[startIndex].countEnd}
                description={statsData[startIndex].description}
                iconBgColor={statsData[startIndex].iconBgColor}
                countUp={countUp}
              />
            </div>
          ) : (
            statsData.map((stat) => (
              <CountingCard
                key={stat.id}
                iconSrc={stat.iconSrc}
                title={stat.title}
                countEnd={stat.countEnd}
                description={stat.description}
                iconBgColor={stat.iconBgColor}
                countUp={countUp}
              />
            ))
          )}
        </div>

        {/* Navigation buttons for mobile */}
        {isMobile && (
          <div className="flex justify-center mt-10 gap-4 ">
            <button
              onClick={handlePrevious}
              className="text-white flex justify-center items-center bg-[#eeeeee] w-10 h-10 rounded-full disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <img
                src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
                alt="Previous"
                className="w-6 h-6"
              />
            </button>
            <button
              onClick={handleNext}
              className="text-white bg-[#eeeeee] flex justify-center items-center w-10 h-10 rounded-full disabled:opacity-50"
              disabled={startIndex >= statsData.length - 1}
            >
              <img
                src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
                alt="Next"
                className="w-6 h-6"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
