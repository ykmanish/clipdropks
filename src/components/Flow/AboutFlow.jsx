'use client'
// components/FlowChart.js
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const FlowChart = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (hoveredCard !== null) {
      // Animate the hovered card
      gsap.to(cardRefs.current[hoveredCard], {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    return () => {
      // Reset scale on all cards when hover state changes
      cardRefs.current.forEach((card) => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };
  }, [hoveredCard]);

  // Define the background colors for the cards
  const backgroundColors = ["#d0ff93", "#c0e5ff", "#d5d4f4", "#bcf5d5"];

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="flex space-x-10 justify-center items-center">
        {["Discover", "Define", "Develop", "Deliver"].map((title, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`relative group ${
              hoveredCard !== null && hoveredCard !== index
                ? "grayscale opacity-50"
                : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src="/uparrow.png"
              className="w-32 absolute z-0 left-14 -top-16 h-32 opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
            <p className="small text-[#ffffff] text-center w-full absolute text-md left-0 -top-36 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Discover the problem and define the solution. Develop the product
              and deliver it to the client.
            </p>
            <div
              style={{ backgroundColor: backgroundColors[index] }} // Set background color using inline style
              className="relative z-10 p-4 flex flex-col justify-center items-center rounded-full w-60 h-60"
            >
              <span className="bg-[#0c0c0c] small w-12 h-12 rounded-full flex justify-center text-[#ffffff] items-center text-xl font-bold tracking-wider">
                0{index + 1}
              </span>
              <h1 className="text-4xl small font-semibold mt-6 text-center text-[#0c0c0c]">
                {title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowChart;
