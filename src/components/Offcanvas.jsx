'use client'
import { useState } from 'react';

const OffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to toggle off-canvas menu */}
      <button
        className="p-2 bg-blue-600 text-white rounded-md"
        onClick={toggleMenu}
      >
        Open Menu
      </button>

      {/* Overlay for the off-canvas */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Off-canvas menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center bg-gray-800 text-white">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="text-white" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OffCanvas;
