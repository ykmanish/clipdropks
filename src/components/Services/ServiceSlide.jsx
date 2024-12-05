"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import BottomModal from "../BottomModal"; // Import your BottomModal
import { serviceData } from "./serviceData";
import Button from "../Reusables/Button";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const ServiceSlide = () => {
  const serviceCardsRef = useRef([]);
  const [selectedService, setSelectedService] = useState(null); // State to hold the selected service
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  const openModal = (service) => {
    console.log("Opening modal for service:", service); // Debugging log
    setSelectedService(service); // Set the selected service
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedService(null); // Clear selected service
  };

  useEffect(() => {
    serviceCardsRef.current = serviceCardsRef.current.slice(0, serviceData.length);
  
    serviceCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%", // Ensure the animation completes before exiting the viewport
            toggleActions: "play none none none", // Prevents reverse animation
          },
        }
      );
    });
  }, []);
  
  
 


  return (
    

    <div  className=" bg-[#eeeeee] dark:bg-[#0c0c0c] h-auto">
    <div className="grid grid-cols-1  gap-6 max-w-7xl mx-auto lg:grid-cols-5">
      {/* Left Section - Sticky */}
      <div className="lg:col-span-2 px-6 lg:px-0 lg:h-screen lg:sticky lg:top-0  flex flex-col lg:justify-center items-start ">
        <h1 className="small gap-2 mt-14 max-w-2xl items-center flex text-[17px] text-[#0c0c0c] dark:text-[#ffffff]">
          <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
          our services
        </h1>
        <h1 className="small  mt-10 font-semibold tracking-tight text-7xl lg:text-8xl uppercase dark:text-[#ffffff] text-[#0c0c0c]">
          what we’re good at
        </h1>
        <p className="small hidden lg:block text-sm lg:text-lg dark:text-zinc-200 text-[#0c0c0c] mt-10">
          Ready to take your business to the next level?
        </p>
        <Link href="/contact-us">
        <Button className="mt-4 px-6" text="Get in touch" /></Link>
      </div>

      {/* Right Section - Scrollable Content */}
      <div className="lg:col-span-3 overflow-y-auto">
        <div className="flex flex-col mt-16 lg:mt-32 mb-20">
          {serviceData.map((data, index) => (
            <div
              ref={(el) => (serviceCardsRef.current[index] = el)}
              key={data.id}
              onClick={() => openModal(data)}
            >
              <ServiceCard
                id={data.id}
                videoSrc={data.videoSrc}
                bgcolor={data.bgcolor}
                imgSrc={data.imgSrc}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Modal */}
    <BottomModal
      isOpen={isModalOpen}
      onClose={closeModal}
      service={selectedService}
    />
    </div>
  );
};

export default ServiceSlide;
