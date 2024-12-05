import React from "react";
import LogoSlider from "./LogoSlider";
import Discover from "./Dees/Discover";
import Dees from "./Dees/Dees";
import Why from "./Why/Why";
import AboutCTA from "./AboutCTA";
import Button from "@/components/Reusables/Button";
import Stats from "@/components/Statonova/Stats";
const page = () => {
  return (
    <div className="">
      <div className="flex flex-col max-w-7xl mx-auto justify-center items-center h-screen relative">
        {/* Left floating image */}
        <div className="absolute left-0 top-1/4 -translate-x-1/4 w-48 h-48 rounded-2xl overflow-hidden">
          <img
            src="https://www.svgrepo.com/show/530124/money.svg"
            alt="Team member"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right floating image */}
        <div className="absolute right-10 top-16 w-36 h-36 rounded-2xl overflow-hidden">
          <img
            src="https://www.svgrepo.com/show/530126/gamepad.svg"
            alt="Office space"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="small flex items-center justify-start gap-2 dark:text-[#ffffff] text-[17px] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] w-2 h-2 dark:bg-[#ffffff] rounded-full"></span>
          about us
        </h1>
        <h1 className="lg:text-8xl text-center tracking-tight dark:text-[#ffffff] mt-4 text-6xl small  text-[#0c0c0c]">
          Good design <br /> makes life better.
        </h1>


        {/* Bottom right floating image */}
        <div className="absolute right-0 bottom-1/4 translate-x-1/4 w-40 h-40 rounded-2xl overflow-hidden">
          <img
            src="https://www.svgrepo.com/show/530134/trophy.svg"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom left floating image */}
        <div className="absolute left-20 bottom-16 w-32 h-32 rounded-2xl overflow-hidden">
          <img
            src="https://www.svgrepo.com/show/530127/liquid.svg"
            alt="Workspace"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex mt-16 gap-6 items-center justify-center">
        <Button text="Learn about us" className="px-6"></Button>

        </div>
      </div>

      {/* Image section with dark gradient and centered text overlay */}
      <div className="relative  w-full h-[80svh]">
        <img
          src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Quantafile"
          className="w-full h-[80svh] object-cover"
        />

        {/* Dark gradient starting from the middle */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
          style={{ top: "30%" }}
        />

        {/* Centered text over the image with max width matching the heading */}
        <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center h-full p-4 text-white">
          <h2 className="text-3xl text-left small lg:text-6xl ">
            How it all began
          </h2>
          <h2 className="text-3xl  mt-3 text-left small lg:text-6xl font-semibold">
            our <span className="text-[#ffffff]">journey..</span>
          </h2>

          <p className="mt-8 max-w-3xl small text-lg lg:text-2xl text-left">
            As a global UI/UX design agency, we strive to push benchmarks one
            solution at a time delivering nothing short of UX Brilliance.
          </p>
          <p className="mt-8 max-w-3xl small text-lg lg:text-2xl text-left">
          ClipDropks, much like its name, embodies precision, adaptability,
            and innovation. It emerged stronger in the wake of the pandemic,
            evolving with the changing digital landscape. With a focus on
            aesthetics, functionality, and resilience, ClipDropks continues to
            flourish, crafting solutions that enhance user experiences globally.
          </p>
        </div>
      </div>

      <Why />
      
      <Dees />
      <Stats/>
      <LogoSlider />
      <AboutCTA />
      {/* <LogoSlider/> */}
    </div>
  );
};

export default page;
