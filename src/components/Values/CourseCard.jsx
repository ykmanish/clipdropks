import React from "react";
import Link from "next/link";
import Image from "next/image";
const CourseCard = ({ imgSrc, title, description,id }) => {
  return (
    <>
      <div class="bg-zinc-50 hover:scale-105 duration-500 transition-all w-full h-auto py-3 rounded-[35px]">
        <div class="p-6">
          
          <h1 class="heading text-center text-[#0c0c0c]  text-3xl">
            {title}
          </h1>
        </div>
        <Image
        width={500}
        height={500}
          src={imgSrc}
          alt="feature1"
          class="w-full h-auto object-cover"
        />
        <p class="p-6 small">
          {description}
        </p>
      </div>
    </>
  );
};

export default CourseCard;
