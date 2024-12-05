import React from "react";
import Button from "./Button";
const ThankYou = () => {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div className="flex items-center flex-col">
          <h1 className="text-8xl dark:text-[#ffffff] small font-semibold text-[#0c0c0c] mb-4">
            Your submission<br /> has been received!
          </h1>
          <p className="text-lg dark:text-zinc-200 mt-10 small text-[#0c0c0c]">
            ClipDropks will aim to get back to you within 2 working days, in the meantime,<br/> why not check out our latest blog posts.
          </p>
          <Button text="Go to Blog" className="mt-8 w-fit px-6" />
        </div>
      </div>
    );
  };
  
  export default ThankYou;
  