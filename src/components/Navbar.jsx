"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import OffCanvas from "./Offcanvas";
import Button from "../components/Reusables/Button";
import ThemeToggle from "@/utils/ThemeToggle";
const Navbar = () => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Careers", path: "/careers" },
    { title: "Blog", path: "/event-hacka" },
    { title: "About", path: "/about-us" },
  ];

  return (
    <div className="text-base  hidden lg:block lg:text-sm fixed top-0 left-0 right-0 bg-transparent backdrop-blur  z-50">
      <div
        className={`items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:justify-between lg:px-8 lg:static ${
          state ? "h-full inset-x-0" : ""
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between  lg:py-5 lg:w-1/3">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            

            <div className="flex items-center gap-2">
            <span className="bg-[#21b0fe] w-5 h-5 rounded-full"></span>
            <span className="bg-[#c2ff47] w-5 h-5 rounded-full"></span>
            <h1 className="small font-bold dark:text-[#ffffff] text-xl">ClipDropks</h1>
            </div>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Section */}
        <div
          className={`nav-menu flex-1 pb-6 border-b lg:border-none mt-8  max-h-screen lg:flex lg:items-center lg:justify-center lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center  justify-center space-y-6 lg:flex lg:space-x-12 lg:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  onClick={() => setState(!state)}
                  href={item.path}
                  className="block text-[16px] small dark:text-[#ffffff] text-gray-50 hover:text-gray-900"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button Section */}
        <div className="hidden lg:flex lg:items-center lg:gap-4 lg:w-1/3 lg:justify-end">
          <Link href="/contact-us">
            <Button text="Start a project" className="w-fit px-3 ">
              Let's Talk
            </Button>
          </Link>

          <ThemeToggle/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
