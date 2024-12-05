'use client'
import React, { useState } from "react";
import { tabContent } from "./deesData";
import { deesData } from "./deesData";
const CTAOne = () => {
  const [activeTab, setActiveTab] = useState("discover");

  

  return (
    <div>
      <div className="max-w-7xl   pb-10 mx-auto">
        <div className="flex justify-start mt-20 items-center gap-10">
          {Object.keys(deesData).map((tab,index) => (
            <>
            
            <h1
              key={tab}
              className={`small    text-xl cursor-pointer ${
                activeTab === tab ? "text-[#0c0c0c] dark:text-[#ffffff]  font-semibold" : "text-[#989999]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </h1>
            </>
          ))}
        </div>
        <div className="bg-[#ffffff]  dark:bg-[#101010] flex gap-10 mt-16 px-4 lg:px-20 justify-start items-center h-auto py-12 rounded-[35px] w-[6ss0svw]">
          <img
            src={deesData[activeTab].imgSrc}
            alt={activeTab}
            className="h-60 w-60 inline"
          />
          <div className="flex flex-col">
           
            <h1 className="lg:text-5xl font-semibold text-3xl dark:text-[#ffffff] text-[#0c0c0c] small">
              {deesData[activeTab].title}
              <br />
              {activeTab === "discover" ? "" : ""}
            </h1>
            <p className="mt-6 text-[#0c0c0c] dark:text-gray-200 text-lg small">
              {deesData[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAOne;
