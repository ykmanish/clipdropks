'use client'
import React from "react";
import useScrollAnimation from "../useScrollAnimation";


const Standard = () => {
  const getCardRef = useScrollAnimation();


  return (
    <div ref={getCardRef} className="bg-[#6a54e4]  py-10 dark:bg-[#0c0c0c]">
      <div className="flex flex-col max-w-7xl mx-auto ">
      <div className="flex flex-col items-start h-auto justify-center p-6 lg:p-10" style={{ backgroundColor: 'transparent' }}>
        <div className=" ">
        <h1 className="small flex items-center justify-start gap-2 text-[17px] dark:text-[#ffffff] text-[#ffffff]">
          <span className="bg-[#ffffff] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
         our process
        </h1>
          <h1 className="small  w-full font-semibold  text-3xl font- lg:text-6xl dark:text-[#ffffff]  mt-6 text-[#ffffff]  ">
            Your path to product success<br className="hidden lg:block"/><span className="text-[#ffffff] dark:text-[#ffffff] "> starts here</span>
          </h1>
          <p className="mt-4 small text-xl lg:text-xl dark:text-zinc-200 text-zinc-200">
            Get a free quote and suggestions for your project.
          </p>
        </div>
        
        <div className="grid w-full mt-28 grid-cols-1 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="w-full flex justify-between  flex-col items-start h-auto lg:h-64 ">
            <div className="flex px-6  gap-3">
              <span className="small text-[#ffffff] dark:text-[#ffffff] text-xl">01.</span>
              <h1 className="small flex   gap-3 text-[#ffffff] dark:text-[#ffffff] text-xl">Get in touch
                <button className="bg-[#c2ff47] -mt-1 hover:scale-110 duration-500 transition-all flex justify-center items-center w-10 h-10 rounded-full">
                  <img src="/lbarrow.svg" alt="" className="w-6 h-6" />
                </button>
              </h1>
            </div>
            <div className="flex -mt-10 lg:mt-0">
              <img src="/start.svg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full flex justify-between -mt-10 lg:mt-0 flex-col items-start h-auto lg:h-64 ">
            <div className="flex px-6 gap-3">
              <span className="small text-zinc-100 dark:text-gray-300 text-xl">02.</span>
              <h1 className="small text-zinc-100 dark:text-gray-300 text-xl">Meet us online</h1>
            </div>
            <div className="flex -mt-10 lg:mt-0">
              <img src="/meet.svg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full flex justify-between -mt-10 lg:mt-0 flex-col items-start h-auto lg:h-64 ">
            <div className="flex px-6 gap-3">
              <span className="small text-zinc-100 dark:text-gray-300 text-xl">03.</span>
              <h1 className="small text-zinc-100 dark:text-gray-300 text-xl">Free estimation</h1>
            </div>
            <div className="flex -mt-10 lg:mt-0">
              <img src="/quote.svg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full flex  justify-between -mt-10 lg:mt-0 flex-col items-start h-auto lg:h-64">
            <div className="flex px-6 gap-3">
              <span className="small text-zinc-100 dark:text-gray-300 text-xl">04.</span>
              <h1 className="small text-zinc-100 dark:text-gray-300 text-xl">Work together</h1>
            </div>
            <div className="flex -mt-10 lg:mt-0 ">
              <img src="/work.svg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Standard;
