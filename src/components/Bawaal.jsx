import React from "react";

const Bawaal = () => {
  return (
    <div className="max-w-7xl pt-16 mx-auto ">
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="text-5xl text-[#0c0c0c] heading">Our core values</h1>
        <p className="mt-3 small text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
        <div className="grid gap-6 mt-28 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {/* Card 1 */}
          <div className="p-1 bg-zinc-100 rounded-[40px] border border-zinc-100">

          
          <div className="bg-[#ffffff] border border-zinc-100 group z-100 w-full flex flex-col justify-center items-center h-60 rounded-[35px] p-4 relative">
            <img
              src="/deadline.svg"
              alt="Respect Deadlines"
              className="relative z-10 group-hover:scale-105 group-hover:-translate-y-6 -top-24 duration-700 transition-all w-32 h-32"
            />
            <h1 className="absolute text-center text-zinc-600 text-[300px] z-0 heading font-semibold opacity-5">
              1
            </h1>
            <h1 className=" -mt-12 text-center z-10 text-4xl text-[#101010] heading ">
              Respect <br /> Deadlines
            </h1>
          </div>
          </div>
          {/* Card 2 */}
          <div className="p-1 bg-zinc-100 rounded-[40px] border border-zinc-100">

          <div className="bg-[#ffffff] border border-zinc-100 group z-100 w-full flex flex-col justify-center items-center h-60 rounded-[35px] p-4 relative">
            <img
              src="/satisfy.svg"
              alt="Respect Deadlines"
              className="relative z-10 group-hover:scale-105 group-hover:-translate-y-6 -top-24 duration-700 transition-all w-32 h-32"
            />
            <h1 className="absolute text-center text-[300px] text-zinc-600 z-0 heading font-semibold opacity-5">
              2
            </h1>
            <h1 className=" -mt-12 text-center z-10 text-4xl text-[#101010] small ">
              Satisfy <br /> Expectations
            </h1>
          </div>
</div>
          {/* Card 3 */}
          <div className="p-1 bg-zinc-100 rounded-[40px] border border-zinc-100">

          <div className="bg-[#ffffff] border border-zinc-100 group z-100 w-full flex flex-col justify-center items-center h-60 rounded-[35px] p-4 relative">
            <img
              src="/collaboration.svg"
              alt="Respect Deadlines"
              className="relative z-10 group-hover:scale-105 group-hover:-translate-y-6 -top-24 duration-700 transition-all w-32 h-32"
            />
            <h1 className="absolute text-center text-[300px] text-zinc-600 z-0 heading font-semibold opacity-5">
              3
            </h1>
            <h1 className=" -mt-12 text-center z-10 text-4xl text-[#101010] small ">
              Foster <br /> Collaboration
            </h1>
          </div>
          </div>

          {/* Card 4 */}
          <div className="p-1 bg-zinc-100 rounded-[40px] border border-zinc-100">

          <div className="bg-[#ffffff] border border-zinc-100 group z-100 w-full flex flex-col justify-center items-center h-60 rounded-[35px] p-4 relative">
            <img
              src="/integrity.svg"
              alt="Respect Deadlines"
              className="relative z-10 group-hover:scale-105 group-hover:-translate-y-6 -top-24 duration-700 transition-all w-32 h-32"
            />
            <h1 className="absolute text-center text-[300px] text-zinc-600  z-0 heading font-semibold opacity-5">
              4
            </h1>
            <h1 className=" -mt-12 text-center z-10 text-4xl text-[#101010] small ">
              Maintain <br /> Integrity
            </h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bawaal;
