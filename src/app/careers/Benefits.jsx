import React from "react";

const Benefits = () => {
  const sections = [
    {
      title: "Flexible Working Hours",
      icon: "/rockcar.svg",
      description:
        "Embrace work-life harmony with hours tailored to your needs.",
    },
    {
      title: "Competency Building",
      icon: "/thuncar.svg",
      description:
        "Embrace work-life harmony with hours tailored to your needs.",
    },
  ];

  const additionalSections = [
    {
      title: "Zeal & Zest",
      icon: "/trocar.svg",
      description:
        "Embrace work-life harmony with hours tailored to your needs.",
    },
    {
      title: "Open-Book Policy",
      icon: "/excar.svg",
      description:
        "Embrace work-life harmony with hours tailored to your needs.",
    },
    {
      title: "Amazing Allies",
      icon: "/roucar.svg",
      description:
        "Embrace work-life harmony with hours tailored to your needs.",
    },
  ];

  return (
    <div>
      <div className="max-w-5xl my-28 mx-auto">
        <h1 className="text-6xl  text-[#0c0c0c] small text- font-semibold">
          The Building blocks of{" "}
          <span className="text-[#9381ff]">our culture</span>
        </h1>
        <p className="small text-lg text-[#0c0c0c] mt-6">
          We’re committed to our team’s well-being, creating a nurturing
          workspace with amenities that empower our work family to flourish,
          unleashing their full potential in a supportive atmosphere.
        </p>
        <div className="grid grid-cols-2 mt-12 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#ffffff] flex p-6 flex-col items-start justify-start rounded-[35px] h-auto py-6 w-full"
            >
              <img
                src={section.icon}
                alt={section.title}
                className="h-10 w-10"
              />
              <h1 className="text-2xl mt-4 small font-semibold text-[#0c0c0c]">
                {section.title}
              </h1>
              <p className="small text-[17px] mt-4">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 mt-6 gap-4">
          {additionalSections.map((section, index) => (
            <div
              key={index}
              className="bg-[#ffffff] flex p-6 flex-col items-start justify-start rounded-[35px] h-auto py-6 w-full"
            >
              <img src={section.icon} alt={section.title} className="h-8 w-8" />
              <h1 className="text-2xl mt-4 small font-semibold text-[#0c0c0c]">
                {section.title}
              </h1>
              <p className="small text-[17px] mt-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
