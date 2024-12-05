import React from "react";
import Link from "next/link";

const RoleCard = ({ role, description, link, id, status }) => {
  return (
    // Conditionally render either a Link or a div based on the status
    status === "Open" ? (
      <Link
        href={link}
        className={`${
          status === "Open" ? "bg-[#fcfcfc] dark:bg-[#101010]" : " bg-[#f5f5f5] "
        } group cursor-pointer rounded-[30px] mt-4 px-8 flex justify-between items-center w-full h-auto py-4 lg:h-24`}
      >
        <div>
          <h1
            className={`text-2xl ${
              status === "Open" ? "text-[#0c0c0c] dark:text-[#ffffff]" : "text-[#bdbdbd]"
            } small`}
          >
            0{id}
          </h1>
        </div>
        <div className="">
          <h1
            className={`small ${
              status === "Open"
                ? "bg-[#c2ff47] text-[#0c0c0c]"
                : "bg-[#b2b3b3] text-[#ffffff]"
            } flex justify-center items-center rounded-full  w-24  h-8`}
          >
            {status}
          </h1>
        </div>
        <div className="flex-col flex">
          <h1
            className={`small  flex gap-3 ${
              status === "Open" ? "text-[#0c0c0c] dark:text-[#ffffff]" : "text-[#bdbdbd]"
            } items-start text-2xl lg:text-2xl`}
          >
            {role}
          </h1>

          <p
            className={`mt-2 ${
              status === "Open" ? "text-[#0c0c0c] dark:text-zinc-300" : "text-[#bdbdbd]"
            } small`}
          >
            {description}
          </p>
        </div>
        <div>
          <span
            className={`${
              status === "Open" ? "bg-[#0c0c0c] dark:bg-[#ffffff]" : "bg-[#b5b5b5] group-hover:-rotate-0"
            } flex group-hover:rotate-90 duration-500 transition-all justify-center items-center h-10 w-10 rounded-full`}
          >
            <img src="/lwarrow.svg" alt="arrow" className="h-6 -rotate-45 w-6" />
          </span>
        </div>
      </Link>
    ) : (
      // Render as a div when status is not Open
      <div
        className={`${
          status === "Open" ? "bg-[#fcfcfc]" : " bg-[#f5f5f5] dark:bg-[#010202]"
        } group cursor-not-allowed rounded-[30px] mt-4 px-8 flex justify-between items-center w-full h-auto py-4 lg:h-24`}
      >
        <div>
          <h1
            className={`text-2xl ${
              status === "Open" ? "text-[#0c0c0c]" : "text-[#bdbdbd]"
            } small`}
          >
            0{id}
          </h1>
        </div>
        <div className="">
          <h1
            className={`small ${
              status === "Open"
                ? "bg-[#c2ff47] text-[#0c0c0c]"
                : "bg-[#b2b3b3] text-[#ffffff]"
            } flex justify-center items-center rounded-full  w-24  h-8`}
          >
            {status}
          </h1>
        </div>
        <div className="flex-col flex">
          <h1
            className={`small  flex gap-3 ${
              status === "Open" ? "text-[#0c0c0c]" : "text-[#bdbdbd] dark:text-zinc-600"
            } items-start text-2xl lg:text-2xl`}
          >
            {role}
          </h1>

          <p
            className={`mt-2 ${
              status === "Open" ? "text-[#0c0c0c]" : "text-[#bdbdbd] dark:text-zinc-600"
            } small`}
          >
            {description}
          </p>
        </div>
        <div>
          <span
            className={`${
              status === "Open" ? "bg-[#0c0c0c]" : "bg-[#b5b5b5] group-hover:-rotate-0"
            } flex group-hover:rotate-90 duration-500 transition-all justify-center items-center h-10 w-10 rounded-full`}
          >
            <img src="/lwarrow.svg" alt="arrow" className="h-6 -rotate-45 w-6" />
          </span>
        </div>
      </div>
    )
  );
};

export default RoleCard;
