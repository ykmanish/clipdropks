"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BottomModal = ({ isOpen, onClose, service }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      gsap.to(modalRef.current, {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      document.body.classList.remove("overflow-hidden");
      gsap.to(modalRef.current, {
        duration: 0.5,
        y: "100%",
        opacity: 0,
        ease: "power2.in",
        onComplete: onClose,
      });
    }
  }, [isOpen, onClose]);

  console.log("Service in Modal:", service); // Debugging log

  return (
    <div className="p-6">
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-90 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={modalRef}
          className={`fixed bottom-0 left-0 right-0 h-[88vh] dark:bg-[#0c0c0c] bg-white overflow-y-scroll no-scrollbar transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } mx-5 rounded-[35px]`}
          style={{ marginBottom: "15px", marginTop: "15px" }}
        >
          <div className="flex justify-end items-center p-4">
            <button
              onClick={onClose}
              className="text-xs w-12 hover:scale-60 duration-500 transition-all flex justify-center items-center h-12 bg-black p-4 text-white rounded-full"
            >
              ✕
            </button>
          </div>

          {service ? (
            <>
              <div className="flex justify-center items-center  ">
                <div className="flex flex-col justify-center items-center  ">
                {/* <span
                style={{backgroundColor:service.bgcolor}}
                className={  `flex  items-center justify-center  rounded-full w-12 h-12 lg:w-24 lg:h-24`}>
                  <img
                    src={service.imgSrc}
                    alt="Web Development"
                    className="lg:w-8 w-4"
                  />
                </span> */}
                  <h1 className="text-7xl font-bold mt-12 small  text-[#0c0c0c]">
                    {service.title}
                  </h1>
                </div>

                {/* <div className="col-span-3  px-10 ">
                  <p className="text-[42px] small text-[#101010]">
                    {service.description}
                  </p>
                </div> */}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomModal;
