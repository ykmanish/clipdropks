import React from "react";


const ExBento = () => {
 
  return (
    <div className="max-w-6xl pb-40 px-6 mx-auto">
      <h1 className="heading text-[#0c0c0c] text-center text-5xl">
        Our Expertise
      </h1>
      <p className="mt-3 small text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non odio
      </p>

      <section>
        <div className="grid   gap-4 mt-12 grid-cols-3">
         
          <div className="border flex flex-col justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
          <img src="/cloud.svg" alt="cloud" className="h-20 w-20" />
            <h1 className="heading text-3xl mt-3 text-center ">
              Cloud<br/>development
            </h1>
          </div>
          <div className="border flex flex-col justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
          <img src="/ai.svg" alt="cloud" className="h-20 w-20" />

            <h1 className="heading mt-3 text-3xl text-center ">
         AI/ML <br/>development
            </h1>
          </div>          
          <div className="border flex flex-col justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
          <img src="/blockchain.svg" alt="cloud" className="h-20 w-20" />
            <h1 className="heading text-3xl mt-3 text-center ">
              Blockchain <br/>development
            </h1>
          </div>        </div>
        <div className="grid gap-4 mt-3 grid-cols-2">
        <div className="border flex justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
            <h1 className="heading text-3xl text-center ">
             Web development
            </h1>
          </div>      
          <div className="border flex justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
            <h1 className="heading text-3xl text-center ">
            App development
            </h1>
          </div>        </div>
        <div className="grid gap-4 mt-3 grid-cols-3">
        <div className="border flex justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
            <h1 className="heading text-3xl text-center ">
              API Integration
            </h1>
          </div>
          <div className="border flex justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
            <h1 className="heading text-3xl text-center ">
             Cybersecurity <br/>services
            </h1>
          </div>      
          <div className="border flex justify-center items-center  border-zinc-300 rounded-3xl w-full h-60">
            <h1 className="heading text-3xl text-center ">
              Testing &<br/>Maintenance
            </h1>
          </div>        </div>
      </section>
    </div>
  );
};

export default ExBento;
