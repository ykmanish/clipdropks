import React from "react";
import Button from "./Reusables/Button";
import Link from "next/link";
const CTAOne = () => {
  return (
    <div>
      <div className="max-w-5xl p-4 pt-20 pb-20 mx-auto">
        <div className="bg-[#ffffff] dark:bg-[#101010] flex flex-col px-2 lg:px-20 justify-center items-center h-auto py-12 rounded-[35px] w-full ">
          <div className="bg-white dark:bg-transparent border dark:border-zinc-800 text-[#0c0c0c] dark:text-[#ffffff] small text-sm gap-1 flex justify-center items-center w-56 h-7 rounded-3xl ">
            <img src="/thunder.svg" alt="chat" className="h-5 w-5 inline" />
            What are you waiting for?
          </div>
          <h1 className="lg:text-6xl text-3xl font-semibold dark:text-[#ffffff] text-[#0c0c0c] mt-8 text-center small">
            There is only one more step separating you from your{" "}
            <br className="hidden lg:block" />
            <span className="text-[#9381ff]">dream</span> website.
          </h1>
          <div className="flex flex-col lg:flex-row gap-6 mt-6 ">
            <Link href="/contact-us">
            <Button
              text="Let's talk"
              className="mt-6  small gap-2 flex justify-center  items-center  text-[#0c0c0c] h-14 px-10 rounded-[35px]"
            ></Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAOne;
