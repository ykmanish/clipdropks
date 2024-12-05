"use client";
import React from "react";
import Link from "next/link";
import useScrollAnimation from "./useScrollAnimation";
import Button from "./Reusables/Button";
import Input from "./Reusables/Input";

const Footer = () => {
  const backgroundImage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1642270057580-1b5d62982bea?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "fill",
  };

  const getCardRef = useScrollAnimation();

  return (
    <div ref={getCardRef} className=" h-auto h py-6 bg-[#ffffff] dark:bg-[#010202] dark:border-t dark:border-zinc-900 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 m-6 lg:m-0 lg:grid-cols-5 items-center gap-6">
          <div className="flex lg:col-span-3 flex-col">
            <div className="flex mt-3 lg:mt-16 flex-col">
              <h1 className="small text-4xl lg:text-7xl dark:text-[#ffffff] text-[#0c0c0c]">
                Let’s talk about
                <br />
                your vision
              </h1>
              <div className="flex mt-8 items-center gap-8">
                <Link href="/contact-us">
                <Button text="Start a project" className="w-fit px-6" /></Link>
                <div className="flex flex-col">
                  <p className="small dark:text-[#ffffff] text-[#0c0c0c] text-xs">
                    5.0
                    <span className="text-[#989999] ml-2">from 69 reviews</span>
                  </p>
                  <div className="flex mt-2 gap-2">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt=""
                      className="w-4 h-4"
                    />
                    <div className="flex">
                      <img src="/star.svg" alt="" className="w-4 h-4" />
                      <img src="/star.svg" alt="" className="w-4 h-4" />
                      <img src="/star.svg" alt="" className="w-4 h-4" />
                      <img src="/star.svg" alt="" className="w-4 h-4" />
                      <img src="/star.svg" alt="" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-16 mt-10 flex flex-col items-start justify-end">
              <h2 className="text-[#0c0c0c] dark:text-[#ffffff] uppercase small text-sm mb-8">
                Get in touch
              </h2>
              <div className="lg:text-2xl flex items-center gap-6 mb-4 dark:text-[#ffffff] text-[#0c0c0c] text-xl  small">
                <img
                  src="/footermailb.svg"
                  alt="chat"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <h1>contact@clipdropks.com</h1>
              </div>
              <div className="lg:text-2xl flex items-center gap-6 mb-4 dark:text-[#ffffff] text-[#0c0c0c] text-xl  small">
                <img
                  src="/footercallb.svg"
                  alt="chat"
                  className="lg:h-6 w-5 h-5 lg:w-6"
                />
                <h1 className="flex items-center">+44 123 456 7890</h1>
              </div>
            </div>
          </div>
          <div className="flex p-4 lg:p-6 justify-center items-center lg:col-span-2 border backdrop-blur-2xl dark:border-zinc-900 border-zinc-200 rounded-[35px] w-full   h-auto py-10 flex-col">
            <h2 className="text-[#0c0c0c] dark:text-[#ffffff] small text-sm mb-4">
              Be the first to know
            </h2>
            {/* text-transparent text-center  bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-orange-600 */}
            <h1 className="small text-3xl lg:text-4xl text-center dark:text-[#ffffff] text-[#0c0c0c]">
              Subsrcibe to our newsletter for updates
            </h1>
            <Input
              type="email"
              label="Your Email Address"
              className="  small text-[#0c0c0c] dark:border-zinc-900 text-lg  h-14  w-full mt-10 "
            />
            <div className="flex justify-center">
              <Button text="Subscribe" className="w-fit px-6 h-12 mt-6" />
            </div>
          </div>
        </div>
        <div className="flex mt-6  lg:justify-between lg:flex-row flex-col">
          <div className="flex justify-center items-center gap-8">
            <h1 className="small  lg:text-[16px] text-[16px]  dark:text-gray-300 text-[#0c0c0c]">
              Home
            </h1>
            <h1 className="small   text-[16px]  dark:text-gray-300 text-[#0c0c0c]">Events</h1>
            <h1 className="small   text-[16px]  dark:text-gray-300  text-[#0c0c0c]">Careers</h1>
            <h1 className="small   text-[16px]  dark:text-gray-300  text-[#0c0c0c]">About</h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-6  justify-center lg:mt-0 mt-6 items-center ">
            <h1 className="small mb-6 lg:mb-0 mt-3 lg:mt-0 lg:text-[16px] text-xs dark:text-[#ffffff] text-[#0c0c0c]">
              See What We’re up to
            </h1>
            <div className="flex justify-center items-center gap-5 lg:gap-6">
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="https://www.svgrepo.com/show/494278/linkedin-round.svg"
                  alt="chat"
                  className=" h-4 w-4 object-cover "
                />
              </span>
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="/xlo.svg"
                  alt="chat"
                  className=" h-4 w-4 object-cover "
                />
              </span>
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="chat"
                  className=" h-4 w-4 object-cover "
                />
              </span>
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="https://www.svgrepo.com/show/512399/instagram-167.svg"
                  alt="chat"
                  className=" h-4 w-4 object-cover "
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex my-6 lg:my-0 justify-center">
          <h1 className="small text-[2em] lg:text-[8.1em] font-bold tracking-tight dark:text-[#ffffff] text-[#0c0c0c]">
            Developing since 2020
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
            <h1 className="mt-6 text-center lg:text-left">
              <span className="text-[#0c0c0c] dark:text-[#ffffff] font-semibold small tracking-wide text-sm lg:text-[18px]">
                ClipDropks.
              </span>
            </h1>
            <div className="flex gap-4">
              <h1 className="text-center lg:mt-6 lg:text-left">
                <span className="text-[#989999] small text-sm lg:text-[13px]">
                  &copy; ClipDropks 2024
                </span>
              </h1>
              <span className="text-[#989999] block lg:hidden">|</span>
              <h1 className="text-center lg:mt-6 lg:text-left">
                <span className="text-[#989999] small text-sm lg:text-[13px]">
                  All Rights Reserved
                </span>
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-6 mt-4 lg:mt-0">
            <h1 className="text-center lg:mt-6 lg:text-left">
              <span className="text-[#989999] small text-sm lg:text-[13px]">
                Privacy Policy
              </span>
            </h1>
            <span className="text-[#989999] block lg:hidden">|</span>
            <h1 className="text-center lg:mt-6 lg:text-left">
              <span className="text-[#989999] small text-sm lg:text-[13px]">
                Terms and Conditions
              </span>
            </h1>
            <span className="text-[#989999] block lg:hidden">|</span>
            <h1 className="text-center lg:mt-6 lg:text-left">
              <span className="text-[#989999] small text-sm lg:text-[13px]">
                Disclaimer
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
