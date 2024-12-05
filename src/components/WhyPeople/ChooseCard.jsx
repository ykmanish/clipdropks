import React from "react";

const ChooseCard = ({order,headOne,headTwo}) => {
  return (
    <div>
      
        <div className="bg-[#ffffff] flex flex-col justify-center items-center w-full h-[60svh] rounded-[35px]">
          <img
            src="https://storage.googleapis.com/labs-web-prod/AI-Search.webp"
            alt="choose1"
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
          <span className="bg-white mt-6 flex justify-center items-center text-xl small font-semibold border h-14 w-14 rounded-full">
            {order}
          </span>
          <h1 className="text-3xl text-[#0c0c0c] text-center small font-semibold mt-6">
            {headOne}
            <br />
            {headTwo}
          </h1>
        </div>
  
    </div>
  );
};

export default ChooseCard;
