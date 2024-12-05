"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
import Button from "../Reusables/Button";

const Review = () => {
  const [startIndex, setStartIndex] = useState(0);
  const reviewRefs = useRef([]);

  const reviews = [
    {
      id: 1,
      text: `"We like their work, method, design skills, and the way they communicate."`,
      highlighted: "design skills",
      name: "Juniper Toloska",
      position: "CEO, Company",
    },
    {
      id: 2,
      text: `"The most impressive things about the company is their sensibility to the UI/UX which is very clean and user-friendly."`,
      highlighted: "impressive",
      name: "Antepola Joloska",
      position: "CFO, Company",
    },
    {
      id: 3,
      text: `"Their attention to detail raised our project to the next level."`,
      highlighted: "attention to detail",
      name: "Maximilian Mustermann",
      position: "Product Manager, TechCorp",
    },
    {
      id: 4,
      text: `"A remarkable experience with a fantastic team!"`,
      highlighted: "remarkable experience",
      name: "Elena Vostrov",
      position: "Designer, Creatify",
    },
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const displayedReviews = isMobile
    ? [reviews[startIndex]]
    : reviews.slice(startIndex, startIndex + 3);

  useEffect(() => {
    // Animate the transition
    gsap.fromTo(
      reviewRefs.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [startIndex]);

  return (
    <div className="items-center text-[#9381ff] relative">
      <div className="px-6 ">
        <h1 className="small flex items-center gap-2 pt-20 max-w-2xl mx-auto text-[17px] dark:text-[#ffffff] text-[#0c0c0c]">
          <span className="bg-[#0c0c0c] dark:bg-[#ffffff] w-2 h-2 rounded-full"></span>
          client testimonials & reviews
        </h1>
        <h1 className="small  max-w-7xl mx-auto text-[3em] lg:text-[11em] dark:text-[#ffffff]  text-[#0c0c0c] font-semibold">
          what our
        </h1>
        <div className="small  flex items-center text-[3em] justify-end max-w-7xl mx-auto text-end lg:text-[11em] -mt-2 lg:-mt-28 text-[#0c0c0c] dark:text-[#ffffff] font-semibold">
          <span className="lg:w-28 lg:mt-8 mt-2 w-12 h-12 lg:h-28 mr-4 lg:mr-10 flex justify-center items-center rounded-full bg-[#c2ff47]">
            <img
              src="/rwface.svg"
              alt="code"
              className="lg:w-16 w-8 h-8 lg:h-16"
            />
          </span>
          client <span className="text-[#0c0c0c] dark:text-[#ffffff] ml-3 lg:ml-6"> says</span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid w-full mt-10 grid-cols-1 overflow-hidden lg:grid-cols-4">
          {/* First Ratings Card */}
          <div className="w-full flex flex-col bg-white dark:bg-[#0c0c0c] p-3 border border-zinc-100 dark:border-zinc-900 items-center justify-center h-auto py-10 lg:h-[70svh]">
            <div className="flex flex-col my-4 items-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src="/star.svg"
                    alt="star"
                    className="w-3 h-3"
                  />
                ))}
              </div>
              <h1 className="text-sm flex items-center gap-1 mt-4 small dark:text-zinc-200 text-zinc-600">
                5.0<span className="text-[#989999]">from 69</span>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt=""
                  className="w-4 h-4"
                />
                <span className="text-[#989999]">reviews</span>
              </h1>
            </div>
            <h1 className="text-4xl my-6 text-center small dark:text-[#ffffff] text-[#0c0c0c]">
              People love
              <br /> us, and we love them
            </h1>
            <Button text="Read more Reviews" className="mt-10 w-fit px-6" />

            {/* Navigation Buttons Inside First Card for Large Devices */}
            {!isMobile && (
              <div className="flex justify-center gap-4 mt-12">
                <button
                  onClick={handlePrevious}
                  className="text-white  flex justify-center items-center bg-[#eeeeee] w-10 h-10 rounded-full disabled:opacity-50"
                  disabled={startIndex === 0}
                >
                  <img
                    src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
                    alt="Previous"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  onClick={handleNext}
                  className="text-white bg-[#eeeeee] flex justify-center items-center  w-10 h-10 rounded-full disabled:opacity-50"
                  disabled={startIndex >= reviews.length - 3}
                >
                  <img
                    src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
                    alt="Next"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            )}
          </div>

          {/* Review Cards */}
          {displayedReviews.map((review, index) => (
            <div
              key={review.id}
              ref={(el) => (reviewRefs.current[index] = el)}
              className="w-full flex flex-col justify-between bg-white dark:bg-[#0c0c0c] border border-zinc-100 dark:border-zinc-900 items-start p-10 h-[70svh]"
            >
              <div className="flex flex-col">
                <span className="uppercase small text-sm dark:text-gray-200 text-gray-400">
                  Review {review.id}
                </span>
                <h1 className="mt-6 text-3xl small font-semibold dark:text-zinc-500  text-[#b3b3b3]">
                  {review.text.split(review.highlighted)[0]}
                  <span className="text-[#0c0c0c] dark:text-[#ffffff]">{review.highlighted}</span>
                  {review.text.split(review.highlighted)[1]}
                </h1>
              </div>
              <div className="flex items-center gap-4 ">
                <span className="bg-[#D0FF71] small text-xl font-semibold text-[#0c0c0c] flex justify-center items-center w-14 h-14 rounded-full">
                  JT
                </span>
                <div className="flex flex-col">
                  <h1 className=" small text-xl dark:text-[#ffffff] text-[#0c0c0c]">
                    {review.name}
                  </h1>
                  <h1 className="text-lg small dark:text-zinc-300 text-[#b3b3b3]">
                    {review.position}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons for Mobile Devices */}
        {isMobile && (
          <div className="flex justify-center p-4 gap-4 mt-10">
            <button
              onClick={handlePrevious}
              className="text-white  flex justify-center items-center bg-[#eeeeee] w-14 h-14 rounded-full disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <img
                src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
                alt="Previous"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={handleNext}
              className="text-white  flex justify-center items-center bg-[#eeeeee]  w-14 h-14 rounded-full disabled:opacity-50"
              disabled={startIndex >= reviews.length - 1}
            >
              <img
                src="https://www.svgrepo.com/show/533621/arrow-sm-right.svg"
                alt="Next"
                className="w-8 h-8"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
