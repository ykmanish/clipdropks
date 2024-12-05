import React from "react";
import JobDetail from "./JobDetail";
import JobForm from "./JobForm/JobForm";
const Page = () => {
  // Style for the background image
  const backgroundImage = {
    backgroundImage: `url('https://images.unsplash.com/photo-1563461660947-507ef49e9c47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="relative mb-20 w-full h-[65svh]" style={backgroundImage}>
        {/* Dark overlay */}

        {/* Text at the bottom left */}
        <div className="max-w-7xl mx-auto">
          <div className="absolute flex flex-col justify-center  items-start bottom-14 w-2/5 h-56 bg-[#ffffff] dark:bg-[#0c0c0c] bg-opacity-70 dark:bg-opacity-90 backdrop-blur dark:backdrop-blur rounded-[40px] p-8">
            <div className="flex items-center gap-4">
              <h1 className="small text-[#0c0c0c] dark:text-gray-200 text-lg">Full Time</h1>
              <span className="bg-[#0c0c0c] w-2 h-2 dark:bg-gray-300 rounded-full"></span>
              <h1 className="small text-[#0c0c0c] dark:text-gray-200 text-lg">Hybrid</h1>
              <span className="bg-[#0c0c0c] w-2 h-2  dark:bg-gray-300 rounded-full"></span>
              <h1 className="small text-[#0c0c0c] dark:text-gray-200 text-lg">Mumbai</h1>
            </div>

            <h1 className="text-5xl font-semibold dark:text-[#ffffff] text-[#0c0c0c] mt-6 small">
              Regulatory Compliance Assurance Manager
            </h1>
          </div>
        </div>
      </div>
      <JobDetail />
      <JobForm/>
    </>
  );
};

export default Page;
