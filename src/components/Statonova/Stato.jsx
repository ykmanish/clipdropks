"use client";
import React from "react";
import useScrollAnimation from "../useScrollAnimation";

const Stato = () => {
  const getCardRef = useScrollAnimation();

  return (
    <div  className="">
      <div className="flex  flex-col   h-screen justify-center   p-10   ">
        <div>
          <h1 className="small text-7xl  text-zinc-300 font-semibold ">
            Some facts are <br />
            just that, <span className="text-[#0c0c0c] ">facts.</span>
          </h1>
        </div>
        <div className="grid mt-20  grid-cols-3 ">
          <div className="w-full p-6  border flex flex-col justify-between h-80    ">
            <h1 className="text-8xl small outlined-text  text-[#0c0c0c]">100+</h1>
            <div className="flex flex-col justify-center gap-2">
              {/* <span className="bg-[#a7f544] h-4 w-4 rounded-full"></span> */}
              <h1 className="text-2xl small   text-[#101010]">
              successful projects delivered with quality and innovation.
              </h1>
            </div>
          </div>
          <div className="w-full p-6 flex flex-col border justify-between h-80 bg-[#f4f4f4]  border-zinc-200 ">
            <h1 className="text-8xl small outlined-text text-[#0c0c0c]">75+</h1>
            <div className="flex items-center gap-2">
              {/* <span className="bg-[#31ffb9] h-4 w-4 rounded-full"></span> */}
              <h1 className="text-2xl small   text-[#101010]">
              satisfied clients who trust our expertise and dedication.
              </h1>
            </div>
          </div>
          <div className="w-full p-6 flex flex-col border justify-between h-80 bg-[#f4f4f4]  border-zinc-200 ">
            <h1 className="text-8xl small outlined-text text-[#0c0c0c]">7+</h1>
            <div className="flex items-center gap-2">
              {/* <span className="bg-[#32eeff] h-4 w-4 rounded-full"></span> */}
              <h1 className="text-2xl small  text-[#101010]">
              global presence across multiple countries.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stato;
