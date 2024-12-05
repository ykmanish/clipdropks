import Button from "@/components/Reusables/Button";
import React from "react";

const Radar = () => {
  return (
    <div className="bg-[#ebebeb] dark:bg-[#010202] dark:border dark:border-zinc-800 p-6 flex justify-between items-center mt-10 w-full rounded-[30px] h-48">
      <div className="flex flex-col">
        <h1 className="small flex items-center dark:text-[#ffffff] justify-start gap-2 text-[17px] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] w-2 h-2 dark:bg-[#ffffff] rounded-full"></span>
          Not for you?
        </h1>
        <h1 className="small text-4xl mt-4 dark:text-[#ffffff] text-[#0c0c0c]">
        Nothing open for you right now?<br/> Stay on the ClipDropk's radar...
        </h1>
      </div>
      <div className="flex gap-4 items-center">
            <div className="flex flex-col">
                <h1 className="small text-xl text-right dark:text-[#ffffff] text-[#0c0c0c]">@clipdropks</h1>
                <Button text="Follow ClipDropks on"rotate={false} customImage="https://www.svgrepo.com/show/494278/linkedin-round.svg" className="bg-[#0c0c0c] gap-3 py-3 px-6 text-[#0c0c0c] mt-4"/>
            </div>
            <div className="bg-[#0c0c0c] dark:bg-[#ffffff] flex justify-center items-center w-36 h-36 rounded-full">
                    <h1 className="small dark:text-[#0c0c0c] text-[#ffffff] text-3xl">
                        Logo
                    </h1>
            </div>
      </div>
    </div>
  );
};

export default Radar;
