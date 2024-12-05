"use client";
// components/FlowChart.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FlowChart = () => {
  const titleRef = useRef(null); // Reference for the top title
  const titleRefBottom = useRef(null); // Reference for the bottom title

  // Define the background colors for the cards
  const backgroundColors = ["#d0ff93", "#c0e5ff", "#d5d4f4", "#bcf5d5"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current scroll position
      const maxScroll = 500; // Maximum scroll distance before significant movement
      const movement = (scrollY / maxScroll) * 200; // Calculate movement amount; adjust this for speed

      // Update x position of the top title
      gsap.to(titleRef.current, {
        x: movement, // Move the title to the right based on scroll
        ease: "power1.out",
      });

      // Update x position of the bottom title (moving in the opposite direction)
      gsap.to(titleRefBottom.current, {
        x: -movement, // Move the title to the left based on scroll
        ease: "power1.out",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex  py-16 overflow-hidden flex-col justify-center items-center">
      <div className="">
        <h1
          ref={titleRef}
          className="lg:text-8xl hidden lg:block  text-zinc-200 relative  lg:left-[-80vw] font-black small tracking-tight mb-20"
        >
          our approach <span className="text-7xl">✨</span> our approach
        </h1>
        <h1 className="lg:text-6xl block lg:hidden text-5xl tracking-tight z-10 text-[#0c0c0c] font-bold text-center small">
          our approach
        </h1>
        <p className="mt-4 small block lg:hidden  lg:text-2xl mb-14 text-center text-lg z-10 text-zinc-800">
          we craft immersive digital experiences for forward-thinking companies
        </p>
      </div>

      <div className="grid grid-cols-4 mt-14 gap-4">
          <div className="flex flex-col   justify-center">
            <div className="flex items-center">
              <span className="w-3 h-8 mr-2 bg-[#c1ff72]"></span>
              <h1 className="small text-[#0c0c0c] text-2xl">Discover</h1>
            </div>
            <div className="w-full  relative p-4 flex justify-between items-center flex-col right-12 -rotate-3 mt-12 h-80 bg-[#c1ff72]">
              <img
                src="/discover.svg"
                alt=""
                className="w-40 h-40 object-cover"
              />
              <p className="small text-2xl mb-4 text-[#0c0c0c]">
               Discover the Possibilities
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center">
            <div className="flex items-center">
              <span className="w-3 h-8 mr-2 bg-[#5ce1e6]"></span>
              <h1 className="small text-[#0c0c0c] text-2xl">Define</h1>
            </div>
            <div className="w-full mt-12  relative flex p-4 justify-between items-center flex-col right-6 top-4 rotate-3 h-80 bg-[#5ce1e6]">
            <img
                src="/define.svg"
                alt=""
                className="w-40 h-40 object-cover"
              />
              <p className="small text-2xl mb-4 text-[#0c0c0c]">
              Define the Challenge
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center">
            <div className="flex items-center">
              <span className="w-3 h-8 mr-2 bg-[#ffde59]"></span>
              <h1 className="small text-[#0c0c0c] text-2xl">Develop</h1>
            </div>
            <div className="w-full  relative flex p-4 justify-between items-center flex-col  -top-2 -rotate-3 mt-12 h-80 bg-[#ffde59]">
            <img
                src="/develop.svg"
                alt=""
                className="w-40 h-40 object-cover"
              />
              <p className="small text-2xl mb-4 text-[#0c0c0c]">
              Develop the Strategy
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center">
            <div className="flex items-center">
              <span className="w-3 h-8 mr-2 bg-[#d3aeff]"></span>
              <h1 className="small text-[#0c0c0c] text-2xl">Deliver</h1>
            </div>
                <div className="w-full  flex p-4 justify-between items-center flex-col relative rotate-6 left-6 mt-12 h-80 bg-[#d3aeff]">
                <img
                src="/delivers.svg"
                alt=""
                className="w-40 h-40 object-cover"
              />
              <p className="small text-2xl mb-4 text-[#0c0c0c]">
              Deliver the Possibility
              </p>
                </div>
          </div>
        </div>

      <div>
        <h1
          ref={titleRefBottom}
          className="text-8xl text-zinc-200 hidden lg:block relative lg:left-[80vw] font-black small tracking-tight "
        >
          the four D’s <span className="text-7xl">✨</span> the four D’s
        </h1>
      </div>
    </div>
  );
};

export default FlowChart;
