import React from "react";

const NavLink = ({ section, activeSection, label }) => {
  return (
    <li>
      <a
        href={`#${section}`}
        className={`block tracking-wide pl-2 border-l-4 ${
          activeSection === section
            ? "border-[#0c0c0c] dark:border-[#ffffff] text-[#0c0c0c] dark:text-[#ffffff] font-semibold"
            : "border-transparent dark:text-[#999999]"
        }`}
      >
        {label}
      </a>
    </li>
  );
};

export default NavLink;
