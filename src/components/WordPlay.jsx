"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WordPlay = () => {
  const cardsRef = useRef([]);
  const arrowsRef = useRef([]);
  const timeline = useRef(null);

  useEffect(() => {
    // Create a timeline for card animations
    timeline.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        document.body.style.overflow = ""; // Allow scrolling again
      },
      onReverseComplete: () => {
        document.body.style.overflow = ""; // Allow scrolling again
      },
    });

    // Animate cards and arrows
    cardsRef.current.forEach((card, index) => {
      const arrow = arrowsRef.current[index];

      timeline.current
        .fromTo(
          card,
          { xPercent: -100, opacity: 0, scale: 0.8 },
          {
            xPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          index === 0 ? 0 : "-=0.3"
        )
        .fromTo(
          arrow,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        );
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".cards-container",
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => {
        document.body.style.overflow = "hidden"; // Disable scrolling
        timeline.current.play(); // Play timeline on enter
      },
      onLeave: () => {
        timeline.current.play(); // Play forward when leaving
      },
      onLeaveBack: () => {
        timeline.current.reverse(); // Reverse timeline when scrolling back
        document.body.style.overflow = "hidden"; // Disable scrolling
      },
      scrub: true,
      markers: false,
    });

    return () => {
      scrollTrigger.kill(); // Cleanup
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-32 pb-24">
      <h1 className="heading text-[#0c0c0c] text-center text-5xl">
        Our Approach
      </h1>
      <p className="mt-3 small text-lg text-center">
        Simplified process for smooth execution
      </p>

      <div className="cards-container mt-32 flex items-center justify-center relative">
        {/* Card 1 */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="card bg-[#a3d5ff] mx-4 rounded-3xl h-auto py-10 w-[300px] flex  items-center justify-center"
        >
          <div className="text-2xl flex justify-center items-center bg-transparent border border-[#0c0c0c]  rounded-full h-12 w-12 font-bold text-black heading absolute top-36">1</div>
          <img
            src="/1.svg"
            alt="icon"
            className="w-40 relative -top-24 h-40 "
          />
          <h2 className="text-4xl heading text-[#0c0c0c]  font-bold">
            Discover
          </h2>
        </div>

        {/* Arrow 1 */}
        <img
          ref={(el) => (arrowsRef.current[0] = el)}
          src="https://www.svgrepo.com/show/533605/arrow-narrow-right.svg"
          alt="arrow"
          className="h-10 w-10"
        />

        {/* Card 2 */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="card bg-[#e1ff05] mx-4 rounded-3xl h-auto py-10 w-[300px] flex  items-center justify-center"
        >
          <div className="text-2xl flex justify-center items-center bg-transparent border border-[#0c0c0c]  rounded-full h-12 w-12 font-bold text-black heading absolute top-36">2</div>
          <img
            src="/2.svg"
            alt="icon"
            className="w-40 relative -top-24 h-40 "
          />
          <h2 className="text-4xl heading text-[#0c0c0c]  font-bold">
            Develop
          </h2>
        </div>

        {/* Arrow 2 */}
        <img
          ref={(el) => (arrowsRef.current[1] = el)}
          src="https://www.svgrepo.com/show/533605/arrow-narrow-right.svg"
          alt="arrow"
          className="h-10 w-10"
        />

        {/* Card 3 */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="card bg-[#84ffc9] mx-4 rounded-3xl h-auto py-10 w-[300px] flex  items-center justify-center"
        >
          <div className="text-2xl flex justify-center items-center bg-transparent border border-[#0c0c0c]  rounded-full h-12 w-12 font-bold text-black heading absolute top-36">3</div>
          <img
            src="/3.svg"
            alt="icon"
            className="w-40 relative -top-28 h-40 "
          />
          <h2 className="text-4xl heading text-[#0c0c0c]  font-bold">
            Deploy
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WordPlay;
