"use client";
import React, { useState } from "react";
import BottomModal from "./BottomModal";
const BottomTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="fixed bottom-0 z-10 left-1/2 transform -translate-x-1/2 py-4">
        <div className="bg-black/60 flex justify-center border border-zinc-600  items-center backdrop-blur-xl rounded-[25px] w-[28svw] h-20">
          <h1
            onClick={openModal}
            className="small text-xl text-zinc-100 hover:text-white duration-500 transition-all text-center cursor-pointer"
          >
            Who we are
          </h1>
        </div>
      </div>
      <BottomModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default BottomTab;
