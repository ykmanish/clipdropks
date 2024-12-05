"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Serving = () => {
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom top",
            scrub: 1,
            pin: true,
            markers: false, // Enable markers to see where animations start and end (remove in production)
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          
          className="overflow-hidden flex flex-col justify-center items-center"
        >
          
          <h1 className="lg:text-5xl flex  flex-col items-center gap-4 justify-center  text-3xl small  text-[#ffffff] mt-6">
          <span className="bg-[#ffffff] h-10 small font-semibold text-lg w-10 rounded-full text-[#0c0c0c] flex justify-center items-center">
            01
          </span> Web Development
          </h1>
          {/* <p className="small text-center text-sm lg:text-lg text-zinc-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <img src="/webbg.svg" alt="web development" className="mt-6 rounded-3xl  lg:rounded-[40px] h-80" />
        </div>
        

        <div
         
          className="overflow-hidden flex flex-col justify-center items-center "
        >
          <h1 className="lg:text-5xl flex flex-col items-center gap-4 justify-center  text-3xl small  text-[#ffffff] mt-6">
          <span className="bg-[#ffffff] h-10 small font-semibold text-lg w-10 rounded-full text-[#0c0c0c] flex justify-center items-center">
            02
          </span> App Development
          </h1>
          {/* <p className="small text-center text-sm lg:text-lg text-zinc-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <img src="/appbg.svg" alt="app development" className="mt-6 rounded-3xl lg:rounded-[40px] h-80" />
        </div>
        
        
      </div>
      <div ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          
          className="overflow-hidden flex flex-col justify-center items-center"
        >
          
          <h1 className="lg:text-5xl flex  flex-col items-center gap-4 justify-center  text-3xl small  text-[#ffffff] mt-6">
          <span className="bg-[#ffffff] h-10 small font-semibold text-lg w-10 rounded-full text-[#0c0c0c] flex justify-center items-center">
            01
          </span> Web Development
          </h1>
          {/* <p className="small text-center text-sm lg:text-lg text-zinc-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <img src="/webbg.svg" alt="web development" className="mt-6 rounded-3xl  lg:rounded-[40px] h-80" />
        </div>
        

        <div
         
          className="overflow-hidden flex flex-col justify-center items-center "
        >
          <h1 className="lg:text-5xl flex flex-col items-center gap-4 justify-center  text-3xl small  text-[#ffffff] mt-6">
          <span className="bg-[#ffffff] h-10 small font-semibold text-lg w-10 rounded-full text-[#0c0c0c] flex justify-center items-center">
            02
          </span> App Development
          </h1>
          {/* <p className="small text-center text-sm lg:text-lg text-zinc-300 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <img src="/appbg.svg" alt="app development" className="mt-6 rounded-3xl lg:rounded-[40px] h-80" />
        </div>
        
        
      </div>
    </div>
  );
};

export default Serving;
