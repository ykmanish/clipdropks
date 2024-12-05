"use client";
// components/CountingCard.js
import React, { useRef, useEffect } from "react";

const CountingCard = ({
  iconSrc,
  countEnd,
  title,
  description,
  iconBgColor,
  countUp,
}) => {
  const countRef = useRef(null);

  useEffect(() => {
    countUp(countRef, 0, countEnd, 2); // Call the countUp function
  }, [countUp, countEnd]);

  return (
    <div className="bg-transparent backdrop-blur-3xl   flex flex-col justify-between w-full lg:w-96 h-72 lg:h-80 rounded-3xl">
      {/* <div className="flex justify-end">
        {iconBgColor ? (
          <span
            className={`${iconBgColor} flex justify-center p-2 items-center rounded-full lg:w-12 w-10 h-10 lg:h-12`}
          >
            <img
              src={iconSrc}
              className="lg:w-12 w-10 h-10 lg:h-12"
              alt="icon"
            />
          </span>
        ) : (
          <img src={iconSrc} className="lg:w-12 w-10 h-10 lg:h-12" alt="icon" />
        )}
      </div> */}
      <div className="flex flex-col mt-3 lg:mt-10 justify-start">
        <h1 className="small text-2xl  dark:text-[#ffffff] text-[#0c0c0c] lg:text-xl ">{title} </h1>
        <div className="flex items-center my-4 border dark:border-[#101010] border-[#ebebeb]"></div>
        <h1 className="small font-black text-6xl lg:text-7xl dark:text-[#ffffff] text-[#0c0c0c] flex items-center">
          <span ref={countRef}>0</span>
          +
        </h1>
        <p className="small dark:text-[#8C8C8D] text-md lg:text-lg mt-6">{description}</p>
      </div>
    </div>
  );
};

export default CountingCard;
