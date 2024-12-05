import React from "react";

const Navlav = () => {
  return (
    <div className="bg-transparent backdrop-blur fixed top-0 left-0 right-0 z-50"> 
      <div className="flex justify-between max-w-7xl mx-auto items-center h-16">
        <div>
          <h1 className="text-2xl  font-semibold small text-[#0c0c0c]">
            quantafile.
          </h1>
        </div>
       
        <div>
          <button className="bg-black flex justify-center items-center h-10 w-10 rounded-full">
        <img src="/ham.svg" alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navlav;
