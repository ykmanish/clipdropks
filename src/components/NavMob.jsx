"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Button from "./Reusables/Button";
import ThemeToggle from "@/utils/ThemeToggle";
function NavMob() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      // Lock scrolling and animate open
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        duration: 0.5,
        x: "0%",
        ease: "power3.out",
      });
      gsap.fromTo(
        itemsRef.current,
        { y: 50, autoAlpha: 0 },
        {
          duration: 0.5,
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    } else {
      // Unlock scrolling and instantly reset menu position on close
      document.body.style.overflow = "auto";
      gsap.set(menuRef.current, { x: "100%" });
      gsap.set(itemsRef.current, { y: 50, autoAlpha: 0 });
    }
  }, [isOpen]);

  return (
    <div className="max-w-7xl block  lg:hidden mx-auto">
      <header
        className={`fixed max-w-7xl  ${
          isOpen ? "backdrop-blur-none  " : "backdrop-blur "
        } mx-auto top-0 w-full z-50 bg-transparent backdrop-blur  text-white p-4 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <span className="bg-black w-4 h-4 rounded-full"></span>
          <span className="bg-[#9381ff] w-4 h-4 rounded-full"></span>
          <div className="flex flex-col">
            <h1 className="small text-[#0c0c0c] text-lg">ClipDropks</h1>
          </div>
        </Link>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
        <ThemeToggle/>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-[#101010] dark:border-none bg-white border border-zinc-200 transition duration-300"
            onClick={toggleMenu}
          >
            <span className="text-sm dark:text-[#ffffff] text-[#0c0c0c]">☰</span>
          </button>
        </div>

        {/* Fullscreen Menu Overlay */}
        <div
          ref={menuRef}
          className={`fixed inset-0 bg-[#faf9f6] dark:bg-[#010202] text-black z-50`}
          style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          {/* Top bar with logo and close button */}
          <div className="flex justify-between items-center p-4 border-b dark:border-zinc-800 border-zinc-200">
            <Link href="/" className="flex items-center space-x-2">
              <span className="bg-black dark:bg-[#ffffff] w-4 h-4 rounded-full"></span>
              <span className="bg-[#9381ff] w-4 h-4 rounded-full"></span>
              <div className="flex flex-col">
                <h1 className="small dark:text-[#ffffff] text-[#0c0c0c] text-lg">ClipDropks</h1>
              </div>
            </Link>
            <button
              className="h-10 w-10 rounded-full border dark:text-[#ffffff] border-zinc-200 dark:border-zinc-700 text-[#0c0c0c]"
              onClick={toggleMenu}
            >
              ✕
            </button>
          </div>

          {/* Right side navigation links */}
          <div className="p-10 flex  lg:mt-0 lowercase flex-col items-start small font-bold justify-end flex-1 space-y-1 lg:space-y-0 text-5xl lg:text-8xl">
            {[
              "Home",
              "Events",
              "Services",
              "Careers",
              "About us",
              "Contact",
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-500 dark:text-[#ffffff] transition"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact details - moved to the bottom */}
          <div className="px-10 mt-3 flex flex-col items-start justify-end">
            <h2 className="text-purple-500 small text-xs mb-2">Get in touch</h2>
            <p className="lg:text-xl dark:text-[#ffffff] text-xl mb-2 small">
              contact@clipdropks.com
            </p>
            <p className="lg:text-4xl dark:text-[#ffffff] text-xl small mb-2">+44 20 1234 5678</p>
            
            <h1 className="small mt-5 dark:text-[#ffffff] text-xl">
              Ready to start a project with us?{" "}
            </h1>
            <Link href="/conta">
            <Button text="Start a project" className="w-fit mt-4 h-12 px-6 ">
              Let's Talk
            </Button>
          </Link>
          
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavMob;
