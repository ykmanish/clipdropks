import React from "react";

const Hero = () => {
  return (
    <div className="flex  p-1 flex-col max-w-7xl mx-auto   h-screen">
      <div className="flex items-center mt-28">
        <h1 className="small flex items-center   lg:text-9xl text-6xl  font-black text-zinc-300">
          <span className="text-[#0c0c0c] mr-4">code</span> that
        </h1>
        <span className="lg:w-28 w-12 h-12 lg:h-28 lg:ml-6 ml-3 flex justify-center items-center rounded-full bg-[#2fffc7]">
          <img src="/codeh.svg" alt="code" className="lg:w-16 w-8 h-8 lg:h-16" />
        </span>
      </div>

      <div className="flex justify-start  lg:mt-0 lg:justify-center items-center ">
        <span className="lg:w-28 w-12 h-12 lg:h-28 mr-3 lg:mr-6 flex justify-center items-center rounded-full bg-[#5ce1e6]">
          <img
            src="https://www.svgrepo.com/show/511049/link.svg"
            alt="code"
            className="lg:w-16 w-8 h-8 lg:h-16"
          />
        </span>
        <h1 className="small flex items-center   lg:text-9xl text-6xl  font-black text-zinc-300">
          <span className="text-[#0c0c0c] mr-3 lg:mr-6">connects</span>to
        </h1>
      </div>
      <div className="flex justify-start lg:justify-center flex-col lg:flex-row items-start lg:items-center ">
        <div className="flex  flex-col items-center">
          <div className="flex items-center">
          <h1 className="small flex items-center   lg:text-9xl text-6xl  font-black text-[#0c0c0c]">
            innovative
          </h1>
          <span className="lg:w-28 w-12 h-12 lg:h-28 ml-3 lg:mx-6 flex justify-center items-center rounded-full bg-[#d0ff93]">
            <img
              src="https://www.svgrepo.com/show/454720/think-creative-thinking.svg"
              alt="code"
              className="lg:w-16 w-8 h-8 lg:h-16"
            />
          </span>
          </div>
          
        </div>
        <h1 className="small flex  items-center   lg:text-9xl text-6xl   font-black text-zinc-300">
          solutions
        </h1>
      </div>
      <p className="small text-center px-4 text-md lg:text-xl mt-10">
        We are a team of passionate developers who love to build amazing
        products that help people.
      </p>
      <div className="flex justify-center gap-6 mt-8 ">
        <button className="mt-6  small gap-2 flex justify-center items-center bg-[#0c0c0c] text-white py-3 px-6 rounded-[35px]">
          <img src="/call.svg" alt="chat" className="h-5 w-5 inline" />
          Let's talk
        </button>
        
      </div>
    </div>
  );
};

export default Hero;
