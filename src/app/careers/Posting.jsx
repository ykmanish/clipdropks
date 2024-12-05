import React from "react";
import Dropdown from "./Dropdown";
import Roles from "./Roles";
import CareerBento from "./CareerBento";
import Input from "@/components/Reusables/Input";
import Radar from "./Radar";

const CTAOne = () => {
  return (
    <div>
      <div className="  pb-20 mx-auto">
        <div className="flex flex-col max-w-7xl mx-auto justify-center items-center h-auto py-12 w-full ">
        <h1 className="small flex items-center justify-center gap-2 text-[17px] dark:text-[#ffffff] text-[#0c0c0c]">
            <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
           Open Positions
          </h1>
          <h1 className="lg:text-6xl text-3xl dark:text-[#ffffff]  font- text-[#0c0c0c]  text-center small">
           Find your next job
          </h1>
          {/* <p className="text-lg mt-6 small">
            The future of money is here. Be the one who creates it
          </p> */}
          <div className="flex mt-14 mb-6 w-full gap-6 items-center">
          <Dropdown/>
          <Input
            type="text"
            label="Search for open positions"
            className="  bg-[#ebebf0]/80 dark:bg-transparent text-lg border-none  placeholder:text-lg small  h-14 rounded-2xl  w-full "
          />
          </div>
          
          <Roles/>
         <Radar/>
        
        </div>
      </div>
    </div>
  );
};

export default CTAOne;
