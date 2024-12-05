import React from "react";
import DeesCard from "./Discover";
import { deesData } from "./deesData";
const Dees = () => {
  return (
    <div>
      <div className="max-w-7xl pt-40 mx-auto">
        <h1 className="text-5xl w-2/3 dark:text-[#ffffff] text-left small font-semibold  text-[#0c0c0c]">
        Harness exceptional strategies to transform problems into possibilities
        </h1>
        
       <DeesCard/>
      </div>
    </div>
  );
};

export default Dees;
