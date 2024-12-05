import React from "react";
import NavLink from "./NavLink";
import { sectionData } from "./sectionData";
import Button from "@/components/Reusables/Button";

const Sidebar = ({ activeSection }) => {
  return (
    <div className="relative lg:w-2/6">
      <div className="lg:sticky lg:top-28 rounded-3xl bg-[#efefef] dark:bg-[#101010] backdrop-blur p-4">
        <h1 className="text-sm small text-[#0c0c0c] dark:text-[#ffffff] pl-4 mb-4">Contents</h1>
        <nav>
          <ul className="space-y-4 small">
            {sectionData.map((section, index) => (
              <NavLink
                key={index}
                section={section.id}
                activeSection={activeSection}
                label={section.title} // Use the label from the object
              />
            ))}
          </ul>
        </nav>

        {/* Join LinkedIn Card */}
        <div className="sticky h-52  mt-8 bg-[#0c0c0c] overflow-hidden text-white rounded-2xl">
          <div className="flex gap-4  h-full">
            <img
              src="https://assets.lummi.ai/assets/QmS6DQSfvvLXRUrUo2JfHCFB6DYnerFzbpMQJ5wrZfLMxL?auto=format&w=1500"
              alt="LinkedIn Logo"
              className="w-24 h-full object-cover"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-md text-[#ffffff] small">Join us!</h1>
              <h1 className="text-3xl   mt-3  text-[#ffffff] small">
              Ready to delight your senses?


              </h1>
              <Button
                text="Apply for this role"
                rotate={true}
                
                customImage="/lbarrow.svg"
                className=" gap-3  py-3 px-6  text-[#0c0c0c] mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
