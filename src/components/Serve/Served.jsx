import React from "react";

const Served = () => {
  return (
    <div className="max-w-6xl mx-auto">
     <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#101010] flex flex-col  items-center h-auto py-12 w-full rounded-[35px]">
          <h1 className="text-5xl mt- text-center text-[#ffffff] small font-semibold">
            Web Development
          </h1>
          <p className="small mt-6 max-w-sm text-center text-xl text-zinc-400">
          We establish comprehensive product-market fit hypotheses, validate them, and visualise in the most creative ways.
          </p>
          <img src="https://assets.lummi.ai/assets/QmZnisxvzwWMNTv7mj8ohVCkaedJBGLmTu7u24KCkTeg6o?auto=format&w=1500" alt="web" 
          className="h-80 w-80 rounded-full mt-16" />
        </div>
        <div className="bg-[#101010] h-96 w-full rounded-[35px]">

        </div>
     </div>

    </div>
  );
};

export default Served;
