import React from "react";
import ChooseCard from "./ChooseCard";
import { chooseData } from "./chooseData";
const Choose = () => {
  return (
    <div>
      <div className="max-w-7xl my-40 mx-auto">
        <div className="flex flex-col mb-16 lg:mb-0 whitespace-nowrap">
          <h1 className="lg:text-7xl text-4xl text-center text-[#0c0c0c] small ">
            Why <span className="text-[#9381ff]">choose</span> us
          </h1>
          <div className="grid gap-3 mt-16 grid-cols-4">
            {chooseData.map((data) => (
              <ChooseCard
                key={data.order}
                order={data.order}
                headOne={data.headOne}
                headTwo={data.headTwo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
