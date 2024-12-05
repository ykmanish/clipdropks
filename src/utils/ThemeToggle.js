"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    setCurrentTheme(theme === "system" ? systemTheme : theme);
  }, [systemTheme, theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  // Ensure that the component does not render until currentTheme is set
  if (currentTheme === null) {
    return null;
  }

  const altText = currentTheme === "dark" ? "Moon" : "Sun";
  return (
    <div className={currentTheme === "dark" ? "dark" : ""}>
      {/* Your component content */}
      <div className="flex items-center ">
        <input onClick={toggleTheme} defaultChecked={currentTheme === "dark"} type="checkbox" className="toggle  " />

        <img src={`${
          currentTheme === "dark"
            ? "/wmoon.svg"
            : "/bmoon.svg"
        }`} 

        alt="moon" className="w-5 ml-2 h-5" />
      </div>
    </div>
  );
};

export default ThemeToggle;
