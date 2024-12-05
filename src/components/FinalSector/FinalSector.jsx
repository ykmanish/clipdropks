import React from "react";

const FinalSector = () => {
  return (
    <div className="bg-[#010202]">
      <div className=" max-w-7xl mx-auto w-full flex h-screen ">
        <div className="grid mt-20 grid-cols-8">
          <div className="col-span-2">
            <h1 className="small flex items-center justify-start gap-2 text-[17px] text-[#ffffff]">
              <span className="bg-[#ffffff] w-2 h-2 rounded-full"></span>
              Our Services
            </h1>
          </div>
          <div className="col-span-6 ">
            <div className="grid gap-10 grid-cols-5">
              <div className="col-span-3">
                <h1 className="text-5xl text-end text-[#ffffff] small">
                  How we take your
                  <br /> business to the next level
                </h1>
              </div>
              <div className="col-span-2">
                <h1 className="text-lg text-start  text-gray-100 small">
                  We are a digital marketing agency with expertise, and we’re on
                  a mission to help you take the next step in your business.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSector;
