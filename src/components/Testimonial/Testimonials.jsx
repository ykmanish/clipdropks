"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { testimonials } from "./testimonialData";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2); // Default to 2 cards for larger screens
  const cardsRef = useRef(null);

  const animateCards = (direction) => {
    const cardElements = cardsRef.current.children;
    if (direction === "next") {
      gsap.fromTo(
        cardElements,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else if (direction === "prev") {
      gsap.fromTo(
        cardElements,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      animateCards("prev");
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - visibleCards) {
      animateCards("next");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    // Update visible cards based on screen size
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 1024 ? 1 : 2);
    };

    // Set initial visible cards and add event listener for resize
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    animateCards("next"); // Initial animation when the component mounts
  }, []);

  return (
    <div className="relative">
      <div
        className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6  pt-16 pb-10 mx-auto"
        ref={cardsRef}
      >
        {testimonials
          .slice(currentIndex, currentIndex + visibleCards)
          .map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#ffffff] flex flex-col px-6 justify-between h-[240px] py-6 rounded-[35px] w-full"
              style={{ minHeight: "280px" }}
            >
              {/* Testimonial Text */}
              <div>
                <h1 className="lg:text-xl text-lg text-[#0c0c0c]  text-left small">
                  {testimonial.text}
                </h1>
              </div>

              {/* Fixed Position for the Name, Image, and Google Icon */}
              <div className="flex justify-between mt-6 items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt="feature1"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <h1 className="small text-xl font-semibold flex flex-col ml-2">
                    {testimonial.name}
                    <span className="small tracking-wide text-[#9381ff] text-sm">
                      {testimonial.role}
                    </span>
                  </h1>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="feature1"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Arrows below the cards */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex justify-center items-center w-14 h-14 rounded-full ${
            currentIndex === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <img
            src={currentIndex === 0 ? "/tdleftarr.svg" : "/tbleftarr.svg"}
            alt="previous"
            className="h-10 w-10 inline"
          />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - visibleCards}
          className={`flex justify-center items-center w-14 h-14 rounded-full ${
            currentIndex >= testimonials.length - visibleCards
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <img
            src={currentIndex >= testimonials.length - visibleCards ? "/tdrightarr.svg" : "/tbrightarr.svg"}
            alt="next"
            className="h-10 w-10 inline"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
