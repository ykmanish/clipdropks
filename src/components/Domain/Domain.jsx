'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { domainData } from "./domainData";

gsap.registerPlugin(ScrollTrigger);

const Domain = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="p-16">
      <div className="p-20 h-auto w-full rounded-[35px]">
        <h1 className="small text-7xl font-semibold text-zinc-300">
          Delivering brilliance across domains.
        </h1>
        <div className="grid gap-4 mt-14 grid-cols-4">
          {domainData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${card.bgColor} overflow-hidden relative hover:border-[#0c0c0c] duration-500 transition-all flex flex-col justify-between p-8 h-44 w-full rounded-[21px]`}
            >
              <h1 className="small bg-[#0c0c0c] w-9 h-9 flex justify-center items-center text-[#ffffff] rounded-full text-md font-semibold">
                {card.id}
              </h1>
              <h1 className="small text-3xl font-semibold text-[#0c0c0c]">
                {card.title}
              </h1>
              <img
                src={card.imgSrc}
                className={`w-36 ${card.imgPosition} absolute h-36`}
                alt={card.title}
              />
            </div>
          ))}
          <div className="border border-zinc-300 flex justify-center items-center p-8 h-44 w-full rounded-[21px]">
            <h1 className="small text-3xl font-semibold text-[#0c0c0c]">
              and still more discovering...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
