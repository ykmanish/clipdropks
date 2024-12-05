"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Section from "./Section";
import Icon from "./Icon";
import { sectionData } from "./sectionData";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row">
      <Sidebar activeSection={activeSection} />

      <div className="w-full small lg:w-3/4 space-y-8">
        {sectionData.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            className={section.className || ""}
          >
            {Array.isArray(section.content)
              ? section.content.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <p
                        key={index}
                        className="small mt-6 dark:text-gray-100 text-lg text-[#0c0c0c]"
                      >
                        {item}
                      </p>
                    );
                  } else if (typeof item === "object") {
                    return (
                      <p
                        key={index}
                        className="flex dark:text-gray-100  gap-2 mt-3 text-lg text-[#0c0c0c] font-light items-center"
                      >
                        <Icon />
                        {item.text}
                      </p>
                    );
                  }
                  return null;
                })
              : null}
            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full object-cover mt-8 mb-14 h-[60svh] rounded-[35px]"
              />
            )}
          </Section>
        ))}
      </div>
    </div>
  );
}
