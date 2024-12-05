import React from 'react';

const Services = () => {
  return (
    <div className="max-w-7xl my-24 mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="heading text-8xl text-center">
          Our <span className="text-[#9381ff]">Expertise</span>
        </h1>
        <p className="small text-center text-lg mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non odio nec urna posuere lacinia.
        </p>
        <div className="flex justify-center items-center flex-col mt-10 space-y-4">
          <div className="group">
            <h1 className="small w-fit text-zinc-200 duration-500 transition-all group-hover:text-[#0c0c0c] group-hover:bg-[#dcf48e] px-8 py-3 rounded-[35px] text-6xl text-center">
              Web Development
            </h1>
          </div>
          <div className="group">
            <h1 className="small w-fit text-zinc-200 duration-500 transition-all group-hover:text-[#0c0c0c] group-hover:bg-[#dcf48e] px-8 py-3 rounded-[35px] text-6xl text-center">
              Mobile Development
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
