import React from "react";
import Button from "./Reusables/Button";

const Footopa = () => {
  return (
    <div className="bg-[#010202] h-auto">
      <div className="max-w-6xl gap-20 py-16 flex flex-col mx-auto">
        {/* Top Section: "Do you like what you see?" */}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="small text-5xl text-[#ffffff]">
              Do you like
              <br />
              what you see?
            </h1>
            <div className="flex mt-8 items-center gap-8">
              <Button text="Start a project" className="w-fit px-6" />
              <div className="flex flex-col">
                <p className="small text-zinc-50 text-xs">
                  5.0
                  <span className="text-slate-400 ml-2">from 69 reviews</span>
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
          {/* Navigation Links */}
          <div className="flex flex-col">
            <h1 className="small text-lg text-gray-400">Learn</h1>
            <h1 className="small text-lg mt-4 text-zinc-100">About</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">Testimonials</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">FAQs</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">Blog</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="small text-lg text-gray-400">Explore</h1>
            <h1 className="small text-lg mt-4 text-zinc-100">Home</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">Services</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">Careers</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">Events</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">Contact</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="small text-lg text-gray-400">Get in touch</h1>
            <h1 className="small text-lg mt-4 text-zinc-100">+91 1234567890</h1>
            <h1 className="small text-lg mt-4 text-zinc-100">+44 1234567890</h1>
            <h1 className="small text-lg mt-2 text-zinc-100">
              contact@quantafile.com
            </h1>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col justify-start text-zinc-100">
          <h1 className="small  text-5xl">Follow us on</h1>

          <div className="flex justify-between mt-12 ">
            <div className=" w-full flex justify-center gap-3 items-center border border-zinc-700 h-16">
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="https://www.svgrepo.com/show/494278/linkedin-round.svg"
                  alt="chat"
                  className=" h-5 w-5 object-cover "
                />
              </span>
              <p p className="small text-[#ffffff] text-xl">
                Linkedin
              </p>
            </div>
            <div className=" w-full flex justify-center gap-3 items-center border border-zinc-700 h-16">
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="/xlo.svg"
                  alt="chat"
                  className=" h-5 w-5 object-cover "
                />
              </span>
              <p p className="small text-[#ffffff] text-xl">
                X
              </p>
            </div>
            <div className=" w-full flex justify-center gap-3 items-center border border-zinc-700 h-16">
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="chat"
                  className=" h-5 w-5 object-cover "
                />
              </span>
              <p p className="small text-[#ffffff] text-xl">
                Github
              </p>
            </div>{" "}
            <div className=" w-full flex justify-center gap-3 items-center border border-zinc-700 h-16">
              <span className="bg-[#c2ff47] flex justify-center items-center rounded-full h-8  w-8">
                <img
                  src="https://www.svgrepo.com/show/512399/instagram-167.svg"
                  alt="chat"
                  className=" h-5 w-5 object-cover "
                />
              </span>
              <p p className="small text-[#ffffff] text-xl">
                Instagram
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center">
            <h1 className="small text-9xl text-[#ffffff]">
            Crafting since 2010
            </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Footopa;
