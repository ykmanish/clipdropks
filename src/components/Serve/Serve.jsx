import React from "react";

const Serve = () => {
  
  return (
    <>
      <div className="max-w-7xl  mx-auto">
        <div className="grid gap-4 mx-10  grid-cols-6">
          <div className="col-span-3   w-full h-auto py-12">
            <div className="grid  grid-cols-2 gap-4">
              <div className="flex flex-col  space-y-3">
                <div className="bg-[#ffffff] group duration-300 transition-all hover:bg-teal-600  overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                  
                  <h1 className="absolute z-0 group-hover:opacity-10 text-[200px] -top-16 right-40 text-zinc-50 font-semibold small">
                    01
                  </h1>
                  <div className="z-10 flex p-6 flex-col">
                  <img
                    src="https://www.svgrepo.com/show/170853/web-development.svg"
                    alt="ai"
                    className="w-6 h-6 z-10  object-cover"
                  />
                  <h1 className="small  z-10 mt-6 font-semibold text-3xl  text-[#0c0c0c]">
                    Web
                    <br />
                    Development
                  </h1>
                  </div>
                 
                  <img
                    src="/website.png"
                    alt="ai"
                    className="h-56 group-hover:left-0 group-hover:rounded-none duration-300 transition-all rounded-t-3xl relative left-6 w-[40svw] top-8 object-cover"
                  />
                </div>
                <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                  <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                    05
                  </h1>
                  <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                    AI &<br />
                    Machine Learning
                  </h1>
                </div>{" "}
              </div>
              <div className="bg-[#ffffff] rounded-3xl mt-20 w-full h-96 ">
                <div className="flex flex-col space-y-3">
                  <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                    <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                      02
                    </h1>
                    <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                      App
                      <br />
                      Development
                    </h1>
                  </div>
                  <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                    <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                      06
                    </h1>
                    <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                      Cyber Security
                      <br /> Services
                    </h1>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3  w-full h-auto py-12">
            <div className="grid grid-cols-2  gap-4">
              <div className="flex flex-col space-y-3">
                <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                  <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                    03
                  </h1>
                  <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                    UI/UX <br />
                    Development
                  </h1>
                </div>{" "}
                <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                  <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                    07
                  </h1>
                  <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                    Blockchain &<br /> Web3
                  </h1>
                </div>{" "}
              </div>
              <div className="bg-[#ffffff] rounded-3xl mt-20 w-full h-96 ">
                <div className="flex flex-col space-y-3">
                  <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                    <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                      04
                    </h1>
                    <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                      Cloud
                      <br />
                      Computing
                    </h1>
                  </div>{" "}
                  <div className="bg-[#ffffff] p-6 overflow-hidden relative flex flex-col justify-between  rounded-3xl w-full h-96 ">
                    <h1 className="absolute z-0 text-[200px] -top-16 right-28 text-zinc-50 font-semibold small">
                      08
                    </h1>
                    <h1 className="small z-10 mt-6 font-semibold text-3xl text-[#0c0c0c]">
                      Testing &<br /> Maintenance
                    </h1>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serve;
