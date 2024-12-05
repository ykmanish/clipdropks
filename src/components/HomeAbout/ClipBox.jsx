import React from "react";
import Button from "../Reusables/Button";
import Link from "next/link";
const ClipBox = () => {
  return (
    <div className="">
      <div className="bg-[#101010] w-full  h-screen relative">
        {/* Video element */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/herovid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        {/* Text card overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-[#0c0c0c] bg-opacity-20 backdrop-blur-md rounded-[40px] p-8 text-center">
            <h1 className="small flex items-center justify-start gap-2 text-[17px] text-[#ffffff]">
              <span className="bg-[#ffffff] w-2 h-2 rounded-full"></span>
              Hiya, we’re ClipDropks 👋
            </h1>
            <h1 className="text-white my-8 small text-center text-4xl md:text-8xl font-bold">
             A digital agency that delivers
              <br />
              innovative solutions
            </h1>
            <div className="flex gap-6 justify-end">
            <Link href="/contact-us">
              <Button text="Start a project" className=" w-fit px-6" /></Link>
              <Button text="View our work" className="bg-[#ffffff]  w-fit px-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipBox;
