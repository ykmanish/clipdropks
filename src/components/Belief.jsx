"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Belief = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Animate each card individually
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 100 }, // Start position below the view
        {
          y: 0,
          duration: 0.1, // Further reduced duration for faster movement
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2, // Decreased scrub value for a snappier feel
            toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full px-1 h-auto my-20 justify-center items-center">
        
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-[#C2FF47] px-4 flex justify-center items-center w-full h-20 lg:h-24 transform rotate-[-3deg]"
        >
          <span className="small text-2xl lg:text-4xl text-[#0c0c0c]">
          Imagination Sparks Potential.
          </span>
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)} 
          className="bg-[#0c0c0c] dark:bg-[#ffffff]  mt-2 flex justify-center items-center w-full h-20 lg:h-24 transform rotate-[2deg]"
        >
          <h1 className="small text-2xl lg:text-4xl dark:text-[#0c0c0c] text-[#ffffff]">
          Design Creates Possibilities.
          </h1>
        </div>
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="bg-[#015bff] mt-2 flex justify-center items-center w-full h-20 lg:h-24 transform rotate-[-1deg]"
        >
          <h1 className="small text-2xl lg:text-4xl text-[#ffffff]">
          Possibilities Shape the Future.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Belief;
