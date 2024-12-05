"use client";
// components/FlowChart.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { deeData } from "./deeData";

const FlowD = () => {
  const titleRef = useRef(null); // Reference for the top title
  const titleRefBottom = useRef(null); // Reference for the bottom title

  // Define the background colors for the cards
  const backgroundColors = ["#c0ff70", "#5effc8", "#67edf9", "#8a97ff"];

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
    <div className="">
      <div className=" flex overflow-hidden bg-[#ffffff] pb-16 h-screen justify-center    flex-col  ">
      <div className="flex flex-col justify-start max-w-7xl mx-auto  mt-16">
          <h1 className="small  text-3xl lg:text-7xl font-semibold  text-[#0c0c0c]  ">
            Your path to product <br />success <span className="text-[#0c0c0c] ">starts here</span>
          </h1>
          <p className="mt-8 small text-xl lg:text-2xl text-zinc-900">
            Get a free quote and suggestions for your project.
          </p>
        </div>
        {/* <div className="flex flex-col items-center  p-4 lg:p-0  gap-4">
          <div className="">
            <h1
              ref={titleRef}
              className="lg:text-[6em] hidden lg:block  text-zinc-300 relative  lg:left-[-50vw] font-black small tracking-tight "
            >
              our <span className="text-[#0c0c0c]">approach</span> <span className="text-7xl">⚡</span> our <span className="text-[#0c0c0c]">approach</span>
            </h1>
            <h1 className="lg:text-6xl block lg:hidden text-5xl tracking-tight z-10 text-[#0c0c0c] font-bold text-center small">
              our approach
            </h1>
            <p className="mt-4 small block lg:hidden  lg:text-2xl mb-14 text-center text-lg z-10 text-zinc-800">
              we craft immersive digital experiences for forward-thinking
              companies
            </p>
          </div>
          
        </div> */}

        <div className="grid mt-16   lg:grid-cols-4 grid-cols-1   ">
          {deeData.map((step, index) => (
            <div key={index} className="flex  flex-col justify-center">
              {/* <div className="lg:flex hidden lg:block items-center">
                <span
                  className={`w-3 h-8 mr-2`}
                  style={{ backgroundColor: step.spanColor }}
                ></span>
                <h1 className="small text-[#0c0c0c] text-3xl lg:text-2xl">
                  {step.title}
                </h1>
              </div> */}
              <div
                className={`w-full relative z-100 bg-[#ffffff] border border-dashed   lg:rounded-none flex p-4  justify-between items-center flex-col  h-80`}
              >
                <img
                  src={step.imageSrc}
                  alt={step.title}
                  className="w-40 h-40 object-cover"
                />
                <h1 className="text-3xl block font-semibold small text-[#0c0c0c]">
                  {step.title}
                </h1>
                <p className="small text-lg lg:text-xl text-center mb-4 text-[#0c0c0c]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="-mt-16 z-0">
          <h1
            ref={titleRefBottom}
            className="lg:text-[7em] z-0 text-zinc-200 hidden lg:block relative lg:left-[80vw] font-black small tracking-tight "
          >
            the four D’s <span className="text-7xl">✨</span> the four D’s
          </h1>
        </div> */}
        
      </div>
    </div>
  );
};

export default FlowD;
