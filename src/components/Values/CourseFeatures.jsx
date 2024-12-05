import React from "react";
import CourseCard from "./CourseCard";
import { features } from "./featureData";
const CourseFeatures = () => {
  return (
    
    <div class="" id="Features">

   
    <div className="max-w-7xl  mx-auto">
      <div class="pt-20">
        <div class="xl:container m-auto px-3 text-gray-600 md:px-12 xl:px-6">
          <div class="pb-16 space-y-2 text-center">
          <h1 className="text-5xl text-[#0c0c0c] heading">Our core values</h1>
        <p className="mt-3 small text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.
        </p>
          </div>
          <div class="grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              features.map((feature) => (
                <CourseCard
                id={feature.id}
                  key={feature.id}
                  imgSrc={feature.imgSrc}
                  title={feature.title}
                  description={feature.description}
                />  
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseFeatures;
