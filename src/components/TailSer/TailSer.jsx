'use client'
import React from "react";
import ServiceCard from "../Services/ServiceCard";
import { serviceData } from "../Services/serviceData"

const TailSer = () => {
  return (
    <div className=" bg-[#ececec] ">
      <div className="grid  grid-cols-5">
        <div className="col-span-2 p-20 flex flex-col justify-between items-start w-full h-screen  ">
          <h1 className="small gap-2 max-w-2xl items-center flex text-2xl lg:text-2xl text-[#0c0c0c] dark:text-[#ffffff]">
            <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
            our services
          </h1>
          <h1 className="small mt-10 tracking-tight text-8xl uppercase text-[#0c0c0c]">
           what we’re good at
          </h1>
          <p className="small text-lg text-[#0c0c0c] mt-10">
            We are a team of passionate individuals who are committed to
            providing the best services to our clients. Our goal is to help you
            achieve your business goals by providing you with the best possible.
          </p>
        </div>

        <div className="col-span-3 flex flex-col items-start justify-center w-full h-screen ">
            {
                serviceData.map((data, index) => (
                    <div key={data.id}>
                    <ServiceCard
                        id={data.id}
                        videoSrc={data.videoSrc}
                        bgcolor={data.bgcolor}
                        imgSrc={data.imgSrc}
                        title={data.title}
                    />
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default TailSer;
