import React from "react";

const ServeWhole = () => {
  return (
    <div className="bg-[#0c0c0c] ">
      <div className="flex items-center max-w-6xl mx-auto justify-between h-screen">
        <div>
          <h1 className="text-7xl small font-semibold text-[#ffffff]">
            Web <br /> Development
          </h1>
          <p className="mt-12 small max-w-xl mx-auto text-xl text-zinc-100">
          There's as much as you need in Bielik. Nothing more, nothing less. You're entitled to full focus!
          </p>
        </div>
        <div>
          <div className="bg-white h-[60svh] overflow-hidden w-96 rounded-[35px]">
                    <img src="https://assets.lummi.ai/assets/QmZnisxvzwWMNTv7mj8ohVCkaedJBGLmTu7u24KCkTeg6o?auto=format&w=1500" alt="ai" className="w-full h-full z-10 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeWhole;
