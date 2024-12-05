import React from "react";
import Button from "../Reusables/Button";
import Link from "next/link";
const HomeAbout = () => {
  return (
    <div className=" ">
      <div className="lg:grid grid-cols-1 px-6 lg:px-0 max-w-7xl mx-auto lg:grid-cols-6 mt-20 mb-20 ">
        <div className="lg:col-span-2">
        <h1 className="small flex items-center justify-start gap-2 text-[17px] dark:text-[#ffffff] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
        who we are?
        </h1>
        </div>
        <div className="lg:col-span-4 mt-4 lg:mt-0  flex flex-col justify-end">
          <h1 className="small text-xl lg:text-4xl  tracking-tight  text-[#0c0c0c] dark:text-[#ffffff] text-left">
          ClipDropks is a digital agency that specializes in creating custom
            software solutions for businesses, startups, and enterprises. We are
            a team of experienced developers, designers.
          </h1>
          <div className="flex gap-2">
            <Link href="/about-us">
          <Button text="About ClipDropks" className="mt-6  w-fit px-4" /></Link>
          <Button text="View our work" className="mt-6 bg-transparent dark:bg-[#ffffff] dark:text-[#0c0c0c] w-fit px-6" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
