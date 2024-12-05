import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-white h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* Main content section */}
          <div className="col-span-4 mt-8 items-center">
            <div className="grid p-6 lg:p-20 lg:grid-cols-6">
              <div className="lg:col-span-4">
                <h1 className="lg:text-7xl  lg:text-left  text-5xl text-[#0c0c0c] small font-semibold">
                  Let’s talk about
                  <br />
                  your <span className="text-[#9381ff]">dream</span>
                </h1>
                <div className="lg:text-2xl text-xl text-[#0c0c0c] flex gap-4 items-center  mt-10 lg:mt-16 small">
                  <div className="bg-white border border-zinc-300 flex justify-center items-center h-8 w-8 lg:h-12 lg:w-12 rounded-full">
                    <img
                      src="/phone.svg"
                      alt="chat"
                      className="lg:h-6 w-4 h-4 lg:w-6"
                    />
                  </div>
                  +44 123 456 7890
                </div>
                <div className="lg:text-2xl text-xl text-[#0c0c0c] flex gap-4 items-center mt-6 small">
                  <div className="bg-white border border-zinc-300 flex justify-center items-center h-8 w-8 lg:h-12 lg:w-12 rounded-full">
                    <img
                      src="/mail.svg"
                      alt="chat"
                      className="lg:h-6 w-4 h-4 lg:w-6"
                    />
                  </div>
                  contact@quantafile.com
                </div>
              </div>
              <div className="lg:col-span-2 hidden lg:block ml-6 mt-20">
                <h1 className="lg:text-2xl text-xl text-[#101010] small">
                  Shall we go ahead and
                  <br /> take the first step now?
                </h1>
                <img
                  src="https://thefinch.design/wp-content/themes/the-finch/assets/images/arrow.png"
                  alt="chat"
                  className="mt-6 hidden lg:block rotate-12"
                />

                <img
                  src="https://thefinch.design/wp-content/themes/the-finch/assets/images/sign.png"
                  alt="chat"
                  className="mt-6  "
                />
              </div>
            </div>

            {/* Services Menu - Only reordered on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8  block lg:hidden lg:order-none order-2">
              <div className="bg-zinc-300/20  flex justify-center items-center w-full h-24 lg:h-32">
                <h1 className="lg:text-4xl  text-2xl   lg:ml-20 text-black">
                  Our services
                </h1>
              </div>
              <div className="bg-zinc-300/40 flex justify-center items-center w-full h-24 lg:h-32">
                <h1 className="lg:text-4xl text-2xl small text-center lg:ml-20 text-black">
                  Pricing
                </h1>
              </div>
              <div className="bg-zinc-300/60 flex justify-center items-center w-full h-24 lg:h-32">
                <h1 className="lg:text-4xl text-2xl small text-center lg:ml-20 text-black">
                  Careers
                </h1>
              </div>
              <div className="bg-zinc-300/80 flex justify-center items-center w-full h-24 lg:h-32">
                <h1 className="lg:text-4xl text-2xl small text-center lg:ml-20 text-black">
                  About us
                </h1>
              </div>
              <div className="bg-zinc-300 flex justify-center items-center w-full h-24 lg:h-28">
                <h1 className="lg:text-4xl text-2xl small text-center lg:ml-20 text-black">
                  Contact us
                </h1>
              </div>
            </div>

            {/* Social Media Section - Reordered for mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 lg:order-none order-3">
              <div className="bg-transparent gap-3 border small border-zinc-100 h-12 lg:h-16 flex items-center justify-center">
                <img
                  src="https://www.svgrepo.com/show/331463/linkedin.svg"
                  alt="chat"
                  className="lg:h-6 h-4 w-4 lg:w-6"
                />
                <h2 className="lg:text-xl text-lg">LinkedIn</h2>
              </div>

              <div className="bg-transparent border gap-3 small border-zinc-100 h-12 lg:h-16 flex items-center justify-center">
                <img
                  src="https://quantafile.com/images/twitter.svg"
                  alt="chat"
                  className="lg:h-6 h-4 w-4 lg:w-6"
                />
                <h2 className="lg:text-xl text-lg">X</h2>
              </div>

              <div className="bg-transparent gap-3 border small border-zinc-100 h-12 lg:h-16 flex items-center justify-center">
                <img
                  src="https://www.svgrepo.com/show/448224/facebook.svg"
                  alt="chat"
                  className="lg:h-6 h-4 w-4 lg:w-6"
                />
                <h2 className="lg:text-xl text-lg">Facebook</h2>
              </div>

              <div className="bg-transparent gap-3 border small border-zinc-100 h-12 lg:h-16 flex items-center justify-center">
                <img
                  src="https://www.svgrepo.com/show/13639/instagram.svg"
                  alt="chat"
                  className="lg:h-6 h-4 w-4 lg:w-6"
                />
                <h2 className="lg:text-xl text-lg">Instagram</h2>
              </div>
            </div>

            {/* Copyright Section - Last for all screens */}
            <h1 className="text-center flex flex-col lg:flex-row justify-center gap-2 px-4 pb-10 lg:pb-0 text-[#0c0c0c] text-lg lg:text-lg mt-8 small lg:order-none order-4">
              Copyright © 2024, Quantafile
              <span className="hidden lg:block">|</span>
              <br className="block lg:hidden" />
              <span>
                <Link href="/Terms">Terms of Use</Link> •{" "}
                <Link href="/PrivacyPolicy">Privacy Policy</Link>
              </span>
            </h1>
          </div>

          {/* Right column (Services/Pricing, etc.) remains untouched for large screens */}
          <div className="flex flex-col lg:col-span-2 pt-20 mt-6 hidden lg:block">
            <div className="bg-zinc-300/20 flex justify-start items-center w-full h-32">
              <h1 className="text-4xl small ml-20 text-black">Our services</h1>
            </div>
            <div className="bg-zinc-300/40 flex justify-start items-center w-full h-32">
              <h1 className="text-4xl small ml-20 text-black">Pricing</h1>
            </div>
            <div className="bg-zinc-300/60 flex justify-start items-center w-full h-32">
              <h1 className="text-4xl small ml-20 text-black">Careers</h1>
            </div>
            <div className="bg-zinc-300/80 flex justify-start items-center w-full h-32">
              <h1 className="text-4xl small ml-20 text-black">About us</h1>
            </div>
            <div className="bg-zinc-300 flex justify-start items-center w-full h-28">
              <h1 className="text-4xl small ml-20 text-black">Contact us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
