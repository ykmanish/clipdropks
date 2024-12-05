import React from "react";

const page = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-start mt-32">
      <div className="flex flex-col">
        <h1 className="small flex items-center justify-start gap-2 text-[17px] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] w-2 h-2 rounded-full"></span>
          The Blog
        </h1>
        <div className="flex mt-3 flex-wrap gap-4">
          <h1 className="small  text-4xl text-[#989999]">
            explore all<span className="text-sm ml-2">28</span>
          </h1>
          <h1 className="small  text-4xl text-[#0c0c0c] font-semibold">
            Web Development<span className="text-sm ml-2">28</span>
          </h1>
          <h1 className="small  text-4xl text-[#989999]">
            Web Design<span className="text-sm ml-2">28</span>
          </h1>
          <h1 className="small  text-4xl text-[#989999]">
            branding<span className="text-sm ml-2">28</span>
          </h1>
          <h1 className="small  text-4xl text-[#989999]">
            news & culture<span className="text-sm ml-2">28</span>
          </h1>
          <h1 className="small  text-4xl text-[#989999]">
            archive<span className="text-sm ml-2">28</span>
          </h1>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-8">
        <div className="w-full   h-60  ">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/Migrating-wordpress-to-craft-cms.png?w=800&h=450&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1732021053&s=8c26ec77b84c478b38333b948f5b30ad"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="small mt-4 flex items-center justify-start gap-2 text-[17px] text-[#5e5e5e]">
              <span className="bg-[#0c0c0c]  w-2 h-2 rounded-full"></span>3 min
              read
            </h1>
            <h1 className="small text-2xl text-[#0c0c0c] mt-3">
            Migrating from Wordpress to Craft CMS
            </h1>
          </div>
          <div className="w-full   h-60  ">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/The-Best-Shopify-Plugins_2024-05-09-124955_nvxc.jpg?w=800&h=450&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1715259018&s=2f6dca45510ea67ce60717417c54362d"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="small mt-4 flex items-center justify-start gap-2 text-[17px] text-[#5e5e5e]">
              <span className="bg-[#0c0c0c]  w-2 h-2 rounded-full"></span>3 min
              read
            </h1>
            <h1 className="small text-2xl text-[#0c0c0c] mt-3">
            Best Shopify Agency Manchester

            </h1>
          </div>

          <div className="w-full   h-60  ">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Empty-Studio/Shape-April-2022-HR-22.jpg?w=800&h=450&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142719&s=252ccc9c92cfd6f2e2386d3862303366"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="small mt-4 flex items-center justify-start gap-2 text-[17px] text-[#5e5e5e]">
              <span className="bg-[#0c0c0c]  w-2 h-2 rounded-full"></span>3 min
              read
            </h1>
            <h1 className="small text-2xl text-[#0c0c0c] mt-3">
            Peek into Quantafile’s Environment
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
