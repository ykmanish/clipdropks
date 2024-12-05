import React from "react";

const TheDees = () => {
  return (
    <>
      <div className="grid px-20 gap-4 grid-cols-4  justify-center">
        <div className="w-full p-6 h-[60svh] rounded-[35px] flex flex-col justify-between  bg-[#ffffff]">
          <div className="flex flex-col  space-x-3 items-center">
            {/* <span className="bg-[#0c0c0c] w-8 h-8 small text-lg flex justify-center items-center text-[#ffffff] rounded-full">01</span> */}
            <h1 className="small  text-6xl text-[#0c0c0c]">
              Discover
            </h1>
          </div>
        </div>
        <div className="w-full h-[60svh] rounded-[35px]  mt-16 bg-[#c0e5ff]"></div>
        <div className="w-full h-[60svh] rounded-[35px] mt-6 bg-[#d5d4f4]"></div>
        <div className="w-full h-[60svh] rounded-[35px] -mt-10 bg-[#bcf5d5]"></div>
      </div>
    </>
  );
};

export default TheDees;
