'use client';
import React, { forwardRef } from "react";

const SectorCard = forwardRef(({ id, title, color, description, backgroundVideoUrl }, ref) => {
  return (
    <div
      ref={ref}
      className="relative  w-full  bg-[#ffffff] flex flex-col p-5 rounded-[35px] h-[65svh] lg:h-[70svh] overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative  z-10">
        {/* <h1 className="lg:h-8 lg:w-8 small h-8 w-8 text-[#ffffff] rounded-full text-sm lg:text-lg font-semibold bg-[#0c0c0c] flex justify-center items-center">
          {id}
        </h1> */}
        <div className="">
          <h1 className="lg:text-3xl  small text-3xl text-center  mt-5 font-semibold text-[#ffffff]">{title}</h1>
          <p className="mt-6 text-zinc-200 text-center small text-sm lg:text-[17px]">{description}</p>
          
        </div>
      </div>

      {/* Overlay for Video Tint (optional) */}
    </div>
  );
});

export default SectorCard;
