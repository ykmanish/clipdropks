import React, { useRef } from 'react';

const ServiceCard = ({ id, imgSrc, title, bgcolor, videoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from the beginning
      videoRef.current.play(); // Play the video
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
    }
  };

  return (
    <div className='lg:px-8 '>
      <div
        className="rounded-full cursor-pointer w-full group relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          className="absolute hidden  inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Black Overlay */}
        {/* <div className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div> */}

        <div className="lg:grid border-b border-gray-300 dark:border-gray-900 flex  max-w-7xl mx-auto px-6 justify-between lg:grid-cols-5 items-center w-full py-6 relative z-10">
          <div className="col-span-1 hidden lg:block flex justify-start">
            <span className="dark:text-zinc-200 text-zinc-600 font-semibold small text-xl">
              0{id}
            </span>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col lg:flex-row lg:items-center justify-start items-start lg:space-x-10">
              
              <div className="flex lg:mt-0 mt-4 flex-col">
                
                <h1 className="lg:text-3xl text-2xl font- small text-[#0c0c0c] dark:text-[#ffffff]">
                  {title}
                </h1>
                <p className="mt-2 text-gray-500 dark:text-zinc-400 text-sm lg:text-lg small ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1  flex justify-end">
            <span className='bg-[#c2ff47] h-7 w-7 lg:w-10 flex justify-center items-center lg:h-10 rounded-full'>
           
            <img
              src="/lbarrow.svg"
              alt="Arrow White"
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
