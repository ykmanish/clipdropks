import React from "react";

const HeroCards = () => {
  return (
    <div className="container mx-auto">
      <div className="grid mt-16 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group overflow-hidden">
          <div className="rounded-[35px] duration-500 transition-all flex flex-col justify-center items-center overflow-hidden border border-zinc-300 bg-white h-60 relative">
            {/* Image */}
            <img
              src="/end.svg"
              alt="icon"
              className="w-24 h-24 mb-4 transition-transform duration-500  transform group-hover:-translate-y-36"
            />
            {/* Heading */}
            <h1 className="heading text-black text-center text-3xl group-hover:text-[#9381ff]  transition-transform duration-500 transform group-hover:-translate-y-24 ">
              End-to-End Digital<br/>Solutions
            </h1>
            {/* Paragraph */}
            <p className="absolute inset-x-0 bottom-0 px-4 py-2 h-full  bg-[#f8f7ff] small text-xl  text-center text-gray-700  transition-transform duration-500 transform translate-y-full group-hover:translate-y-32">
            Complete digital services from design to deployment, tailored to drive innovation and growth.

            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group overflow-hidden">
          <div className="rounded-[35px] duration-500 transition-all flex flex-col justify-center items-center overflow-hidden border border-zinc-300 bg-white h-60 relative">
            {/* Image */}
            <img
              src="/world.svg"
              alt="icon"
              className="w-24 h-24 mb-4 transition-transform duration-500 transform group-hover:-translate-y-36"
            />
            {/* Heading */}
            <h1 className="heading text-black text-center group-hover:text-[#9381ff] text-3xl transition-transform duration-500 transform group-hover:-translate-y-24">
              Secure Your Digital<br/>World
            </h1>
            {/* Paragraph */}
            <p className="absolute inset-x-0 bottom-0 px-4 py-2 h-full  bg-[#f8f7ff] small text-xl  text-center text-gray-700  transition-transform duration-500 transform translate-y-full group-hover:translate-y-32">
            Safeguard your online identity and valuable assets with advanced security solutions.



            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group overflow-hidden">
          <div className="rounded-[35px] duration-500 transition-all flex flex-col justify-center items-center overflow-hidden border border-zinc-300 bg-white h-60 relative">
            {/* Image */}
            <img
              src="/user.svg"
              alt="icon"
              className="w-24 h-24 mb-4 transition-transform duration-500 transform group-hover:-translate-y-36"
            />
            {/* Heading */}
            <h1 className="heading text-black text-center group-hover:text-[#9381ff] text-3xl transition-transform duration-500 transform group-hover:-translate-y-24">
              Engaging User<br/>Experiences
            </h1>
            {/* Paragraph */}
            <p className="absolute inset-x-0 bottom-0 px-4 py-2 h-full  bg-[#f8f7ff] small text-xl  text-center text-gray-700  transition-transform duration-500 transform translate-y-full group-hover:translate-y-32">
            Create memorable interactions that captivate users and elevate your brand’s impact.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
