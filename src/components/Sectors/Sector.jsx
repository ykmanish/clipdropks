"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectorCard from "./SectorCard";
import { sectorData } from "./sectorData";

gsap.registerPlugin(ScrollTrigger);

const Sector = () => {
  const rowsRef = useRef([]);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Animate the heading and description to move up only
    gsap.fromTo(
      [headingRef.current, descriptionRef.current],
      { y: 0 }, // Start at the original position
      {
        y: -50, // Move up by 50 pixels
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Animate each card as it enters the viewport from the appropriate direction
    rowsRef.current.forEach((row) => {
      const cards = row.children; // Get the child cards of the row
      Array.from(cards).forEach((card, index) => {
        // Determine the direction for each card's entry based on the index
        const direction =
          window.innerWidth < 768 // Adjust this breakpoint as needed
            ? { y: 100, x: 0 } // Mobile: come from bottom
            : {
                y: 100,
                x: index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100,
              }; // Desktop: first card from left, second straight up, third from right

        // Initial animation setup with slower duration
        gsap.fromTo(
          card,
          {
            y: direction.y, // Start position (below the viewport)
            x: direction.x, // Start position (from the side)
            autoAlpha: 0, // Start as invisible
          },
          {
            y: 0,
            x: 0,
            autoAlpha: 1,
            duration: 1.2, // Adjusted duration for slower entrance
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 60%",
              scrub: 0.6, // Adjusted scrub for smoother effect
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      });
    });
  }, []);

  // Dividing the cards into rows of 3
  const rows = [];
  for (let i = 0; i < sectorData.length; i += 3) {
    rows.push(sectorData.slice(i, i + 3));
  }

  const backgroundImage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1519769930868-bd026b891632?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div ref={headingRef} className="p-6 mt-20 py-24">
      <div className="max-w-7xl relative flex flex-col justify-center items- my-8 mx-auto">
        <div className="flex items-center justify-center gap-4">
          <p className="bg-[#0c0c0c] w-4 h-4 rounded-full"></p>
          <h1 className="lg:text-2xl text-5xl tracking-tight uppercase text-[#0c0c0c] small">
            what we do
          </h1>
        </div>

        {/* <p className="mt-4 small lg:text-2xl text-center text-lg z-10 text-zinc-800">
          we craft immersive digital experiences for forward-thinking companies
        </p> */}

        <div className="mt-20">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => (rowsRef.current[rowIndex] = el)}
              className="grid px-0 lg:grid-cols-3 gap-4 mb-8" // Adjusted to 3 columns
            >
              {row.map((data) => (
                <SectorCard
                  key={data.id}
                  id={data.id}
                  backgroundVideoUrl={data.backgroundVideoUrl}
                  title={data.title}
                  description={data.description}
                  style={{ opacity: 0 }} // Set initial opacity to 0 for animation
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sector;
