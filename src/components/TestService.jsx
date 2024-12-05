'use client'
import React from "react";
import Testimonials from "./Testimonial/Testimonials";
import useScrollAnimation from "./useScrollAnimation";

const TestService = () => {

  const getCardRef = useScrollAnimation();

  return (
    <div ref={getCardRef} id="testi" className=" max-w-7xl mt-20 mx-auto lg:pb-20">
      <div className="overflow-hidden ">
      <div className="flex items-center justify-center gap-4">
          <p className="bg-[#0c0c0c] w-4 h-4 rounded-full"></p>
          <h1 className="lg:text-2xl text-5xl text-center tracking-tight  uppercase  text-[#0c0c0c] small">
            what our clients say
          </h1>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default TestService;
