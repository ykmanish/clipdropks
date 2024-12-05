import React from "react";
import JobDescription from "./JobDescription";
import Link from "next/link";
const page = () => {
  return (
    <div className="pb-28">
      <div className="flex flex-col   max-w-5xl mx-auto justify-center items-start h-screen">
        <h1 className="lg:text-7xl text-6xl small font-semibold text-[#0c0c0c]">
          Regulatory Compliance Assurance Manager
        </h1>
        {/* <h1 className="lg:text-8xl text-6xl small font-semibold mt-2 text-[#9381ff]">
          Quantafile
        </h1> */}
        <p className="lg:mt-16 mt-8 flex items-center gap-4 small text-[15px] lg:text-lg text-[#101010]">
          <img
            src="https://www.svgrepo.com/show/500639/office-building.svg"
            alt="arrow"
            className="h-6 w-6"
          />
          Office: Barcelona · Dublin · Krakow · Lisbon · Madrid · Porto
        </p>
        <Link href="/careers/JobApply" className="bg-[#0c0c0c] text-white px-6 py-3 small rounded-3xl mt-10">
          Apply for this role
        </Link>

      </div>
      <JobDescription/>
    </div>
  );
};

export default page;
