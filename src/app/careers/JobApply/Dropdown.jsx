'use client';
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ items, selectedItem, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null); // Ref to detect clicks outside the dropdown

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (item) => {
    onSelect(item); // Call the onSelect function passed as a prop
    setIsOpen(false);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative mt-2" ref={dropdownRef}>
      {/* Selected item display */}
      <div
        className={`bg-[#ebebf0]/40 p-4 rounded-2xl flex justify-between items-center cursor-pointer`}
        onClick={toggleDropdown}
      >
        <span
          className={`small  ${
            selectedItem ? "text-[16px] text-[#0c0c0c]" : "text-[15px] text-zinc-500"
          } `}
        >
          {selectedItem || placeholder}
        </span>
        <img
          src="/downarr.svg"
          alt="down"
          className="h-6 w-6 inline float-right"
        />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg z-10">
          {/* Search input */}
          <div className="p-2 small border-b">
            <input
              type="text"
              className="w-full input placeholder:text-lg text-lg p-2 small"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Items list */}
          <ul className="max-h-60 small overflow-y-auto scrollbar-hide">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleItemSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
