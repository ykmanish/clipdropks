'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ClientPop = () => {
  const logosRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    logosRef.current.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        { scale: 0, opacity: 0 }, // Initial hidden state
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: logo,
            start: "top 80%", // Start animation earlier
            toggleActions: "play reverse play reverse", // Play when scrolled down, reverse when scrolled up
          },
        }
      );
    });

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="client-pop">
      <div className="max-w-4xl mx-auto flex flex-col justify-center ">
        <h1 className="mb-10 small text-center max-w-4xl mx-auto text-3xl text-[#0c0c0c]">
          We transform ideas into visually stunning designs that leave a lasting
          impact. You can take our clients’ word for it!
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10 ">
          <img
            ref={(el) => (logosRef.current[0] = el)}
            src="https://www.svgrepo.com/show/303665/apple-11-logo.svg"
            alt="client1"
            className="w-40 h-40"
          />
          <img
            ref={(el) => (logosRef.current[1] = el)}
            src="https://www.svgrepo.com/show/303132/coca-cola-logo.svg"
            alt="client2"
            className="w-40 h-40"
          />
          <img
            ref={(el) => (logosRef.current[2] = el)}
            src="https://www.svgrepo.com/show/303141/spotify-1-logo.svg"
            alt="client3"
            className="w-40 h-40"
          />
          <img
            ref={(el) => (logosRef.current[3] = el)}
            src="https://www.svgrepo.com/show/303151/slack-logo.svg"
            alt="client4"
            className="w-40 h-40"
          />
          
          
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 ">
          <img
            ref={(el) => (logosRef.current[4] = el)}
            src="https://www.svgrepo.com/show/303665/apple-11-logo.svg"
            alt="client1"
            className="w-40 h-40"
          />
          <img
            ref={(el) => (logosRef.current[5] = el)}
            src="https://www.svgrepo.com/show/303132/coca-cola-logo.svg"
            alt="client2"
            className="w-40 h-40"
          />
          <img
            ref={(el) => (logosRef.current[6] = el)}
            src="https://www.svgrepo.com/show/303141/spotify-1-logo.svg"
            alt="client3"
            className="w-40 h-40"
          />
          
          
          
        </div>
      </div>
    </div>
  );
};

export default ClientPop;
