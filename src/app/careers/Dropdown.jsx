'use client'
import React, { useState } from "react";

const locations = [
  "Athens",
  "Australia - Remote",
  "Bangalore",
  "Barcelona",
  "Executive",
  "France - Remote",
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredLocations(
      locations.filter((location) =>
        location.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="relative w-96">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="w-full placeholder:text-zinc-600 input-bordered flex items-center justify-between text-lg small text-left bg-[#ebebf0]/80 h-14 rounded-2xl p-3"
      >
        Location
        <img src="/downarr.svg" alt="down" className="h-6 w-6 inline float-right" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-4 z-10 w-full bg-white rounded-2xl shadow-lg">
          {/* Search Input */}
          <div className="p-3">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search"
              className="w-full p-2  border-b small focus:outline-none"
            />
          </div>

          {/* Location List */}
          <ul className="max-h-48 overflow-y-auto scrollbar-hide">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-100 small text-[#101010] cursor-pointer"
                  onClick={() => {
                    setSearchTerm(location);
                    setIsOpen(false);
                  }}
                >
                  {location}
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
