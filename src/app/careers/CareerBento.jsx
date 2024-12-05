import React from "react";

const CareerBento = () => {
  const benefitsData = [
    {
      title: "28 Days Holiday",
      description: "for some rest and relaxation...and that’s excluding bank holidays.",
      icon: "https://www.svgrepo.com/show/491281/money-pounds.svg",
    },
    {
      title: "Mobile Phone",
      description: "for some rest and relaxation...and that’s excluding bank holidays.",
      icon: "https://www.svgrepo.com/show/491281/money-pounds.svg",
    },
    {
      title: "Equipment",
      description: "for some rest and relaxation...and that’s excluding bank holidays.",
      icon: "https://www.svgrepo.com/show/491281/money-pounds.svg",
    },
    {
      title: "2 Weeks off @ xmas",
      description: "for some rest and relaxation...and that’s excluding bank holidays.",
      icon: "https://www.svgrepo.com/show/491281/money-pounds.svg",
    },
    {
      title: "Spotify",
      description: "for some rest and relaxation...and that’s excluding bank holidays.",
      icon: "https://www.svgrepo.com/show/491281/money-pounds.svg",
    },
    {
      title: "Flexible hours",
      description: "for some rest and relaxation...and that’s excluding bank holidays.",
      icon: "https://www.svgrepo.com/show/491281/money-pounds.svg",
    },
  ];

  return (
    <div className="max-w-7xl mb-28 mx-auto">
      <div className="bg-[#ffffff] flex flex-col items-start justify-start p-10 dark:bg-[#0c0c0c] w-full h-auto rounded-[35px]">
        <div>
          <h1 className="small flex items-center justify-start gap-2 lg:text-md text-lg dark:text-[#ffffff] text-[#0c0c0c]">
            <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
            Benefits
          </h1>
          <h1 className="lg:text-5xl mt-6 font-semibold text-[20px] small tracking-tight dark:text-[#ffffff] text-[#0c0c0c]">
            A snippet of our perks
          </h1>
        </div>
        <div className="mt-24 grid grid-cols-1 justify-center lg:grid-cols-3 gap-10">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="border-b border-[#0c0c0c]/10 dark:bg-[#0c0c0c] w-full h-40"
            >
              <div className="flex items-center gap-4">
                <span className="bg-[#c2ff47]  w-10 h-10 rounded-full flex items-center justify-center">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-6 h-6 object-cover"
                  />
                </span>
                <h1 className="text-2xl small  dark:text-[#ffffff] text-[#0c0c0c]">
                  {benefit.title}
                </h1>
              </div>
              <p className="text-[16px] mt-4 small dark:text-[#ffffff] text-[#0c0c0c]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerBento;
