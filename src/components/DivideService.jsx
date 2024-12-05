'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DivideService = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".divide-service",
        start: "top top",
        end: "+=1000", // Use a larger distance to manage the scroll effect
        scrub: 1,
        pin: true,
        anticipatePin: 1, // Helps reduce white space during pinning
      }
    });

    tl.to(".branding", {
      y: "100%", // Move Branding section completely out of view
      duration: 1,
      ease: "none"
    })
    .fromTo(".uiux", {
      y: "100%", // Start UI/UX section from below
    }, {
      y: "0%", // End position in place
      duration: 1,
      ease: "none"
    }, "<"); // Align this animation with the previous one

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="divide-service">
      <div className="bg-[#ffede0] branding">
        <div className="max-w-4xl h-screen flex justify-center items-center mx-auto">
          <div className="grid items-center grid-cols-2 gap-4">
            <div>
              <h1 className="heading text-5xl text-[#0c0c0c]">UI/UX Design</h1>
              <p className="small text-md mt-3">
                We help you build engaging and user-friendly interfaces that
                enhance user experience. Our designs are tailored to your brand
                identity and target audience.
              </p>
              <button className="btn bg-transparent text-zinc-500 tracking-wide border px-6 border-[#cb997e] small mt-10 rounded-3xl text-sm">
                View More
              </button>
            </div>
            <div>
              <img
                src="https://assets.lummi.ai/assets/QmfKcDjrZraEdcRtbwFEqnvVgaqjykoCov3xgLevkmQR1g?auto=format&w=1500"
                alt="ui/ux"
                className="h-[70svh] rounded-[45px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d3d6f0] uiux">
        <div className="max-w-4xl h-screen flex justify-center items-center mx-auto">
          <div className="grid items-center grid-cols-2 gap-4">
            <div>
              <h1 className="heading text-5xl text-[#0c0c0c]">UI/UX Design</h1>
              <p className="small text-md mt-3">
                We help you build engaging and user-friendly interfaces that
                enhance user experience. Our designs are tailored to your brand
                identity and target audience.
              </p>
              <button className="btn bg-transparent text-zinc-500 tracking-wide border px-6 border-[#cb997e] small mt-10 rounded-3xl text-sm">
                View More
              </button>
            </div>
            <div>
              <img
                src="https://assets.lummi.ai/assets/QmfKcDjrZraEdcRtbwFEqnvVgaqjykoCov3xgLevkmQR1g?auto=format&w=1500"
                alt="ui/ux"
                className="h-[70svh] rounded-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DivideService;
