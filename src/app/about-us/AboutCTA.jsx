import React from "react";

const AboutCTA = () => {
  return (
    <div>
      <div className="max-w-5xl p-4 pt- pb-20 mx-auto">
        <div className="bg-[#ffffff] dark:bg-[#101010] flex flex-col px-2 lg:px-20 justify-center items-center h-auto py-12 rounded-[35px] w-full ">
          <div className="bg-white border text-[#0c0c0c] small text-sm gap-1 flex justify-center items-center w-56 h-7 rounded-3xl ">
            <img src="/thunder.svg" alt="chat" className="h-5 w-5 inline" />
            What are you waiting for?
          </div>
          <h1 className="mt-10 text-[#0c0c0c] dark:text-[#ffffff] small font-semibold text-6xl text-center">
            Let’s collaborate and <br />
            create the <span className="text-[#9381ff]">Extraordinary</span>
          </h1>
          <p className="mt-6 small dark:text-[#ffffff] text-lg">We’d Love to Chat!</p>
          <div className="flex flex-col lg:flex-row gap-6 mt-6 ">
            <button className="mt-6  small  dark:bg-[#21b0fe] gap-2 flex justify-center  items-center bg-[#0c0c0c] text-white py-3 px-6 rounded-[35px]">
              <img src="/call.svg" alt="chat" className="h-5 w-5 inline" />
              Let's talk
            </button>
            <button className="lg:mt-6 small gap-2 border border-zinc-200 flex justify-center items-center bg-[#ffffff] text-black py-3 px-6 rounded-[35px]">
              <img
                src="https://www.svgrepo.com/show/382712/whatsapp-whats-app.svg"
                alt="chat"
                className="h-5 w-5 inline"
              />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
