'use client'
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const CountrySelector = () => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "United Kingdom",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "United Kingdom",
    // Add more countries here
  ];
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="">
      <div className="label">
        <span className="label-text small text-[17px] small">
            Select your country
        </span>
      </div>
      <Dropdown
        items={countries}
        selectedItem={selectedCountry}
        placeholder="Select a country"
        onSelect={setSelectedCountry} // Function to handle the selection
      />
    </div>
  );
};

export default CountrySelector;
