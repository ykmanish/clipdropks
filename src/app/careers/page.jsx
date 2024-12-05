import React from "react";
import Posting from "./Posting";
import Roles from "./Roles";
import CareerBento from "./CareerBento";
import Benefits from "./Benefits";
import Button from "@/components/Reusables/Button";
const page = () => {
  return (
    <div>
      <div className="flex flex-col max-w-7xl mx-auto justify-center items-center h-screen relative">
        {/* Left floating image */}
        <div className="absolute left-0 top-1/4 -translate-x-1/4 w-48 h-48 rounded-2xl overflow-hidden">
          <img src="https://www.svgrepo.com/show/530124/money.svg" alt="Team member" className="w-full h-full object-cover" />
        </div>

        {/* Right floating image */}
        <div className="absolute right-10 top-16 w-36 h-36 rounded-2xl overflow-hidden">
          <img src="https://www.svgrepo.com/show/530126/gamepad.svg" alt="Office space" className="w-full h-full object-cover" />
        </div>

        <h1 className="small flex items-center justify-start gap-2 dark:text-[#ffffff] text-[17px] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] w-2 h-2 dark:bg-[#ffffff] rounded-full"></span>
          careers
        </h1>
        <h1 className="lg:text-8xl text-center tracking-tight dark:text-[#ffffff] mt-4 text-6xl small  text-[#0c0c0c]">
          Embrace life at <br/> ClipDropks.
        </h1>
        
        {/* Bottom right floating image */}
        <div className="absolute right-0 bottom-1/4 translate-x-1/4 w-40 h-40 rounded-2xl overflow-hidden">
          <img src="https://www.svgrepo.com/show/530134/trophy.svg" alt="Team collaboration" className="w-full h-full object-cover" />
        </div>

        {/* Bottom left floating image */}
        <div className="absolute left-20 bottom-16 w-32 h-32 rounded-2xl overflow-hidden">
          <img src="https://www.svgrepo.com/show/530127/liquid.svg" alt="Workspace" className="w-full h-full object-cover" />
        </div>

        <div className="flex mt-16 gap-6 items-center justify-center">
        <p className="small dark:text-zinc-200 text-[15px] lg:text-md text-[#101010]">
          Let's get you started...
        </p>
        <Button text="View Open Positions" className="px-6"></Button>
        </div>
        
      </div>
      <Posting />
      <CareerBento />
      {/* <Benefits /> */}
    </div>
  );
};

export default page;
