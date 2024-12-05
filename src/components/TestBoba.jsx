'use client'
import React, { useState } from 'react';
import { gsap } from 'gsap';

const TestBoba = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // GSAP animation for cards
  const handleMouseEnter = (index) => {
    setHoveredCard(index);
    gsap.to('.card', { opacity: 0.5, duration: 0.3 });
    gsap.to(`.card-${index}`, { opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    gsap.to('.card', { opacity: 1, duration: 0.3 });
  };

  return (
    <div>
      <section className="ezy__epgrid10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="absolute top-0 right-0">
          <img
            src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_10_shape1.png"
            alt=""
          />
        </div>

        <div className="container relative px-4 mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
            Popular Products
          </h2>
          <div className="grid grid-cols-12 gap-6 mt-12">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div
                  className={`bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-xl p-4 pb-0 card card-${index}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-gray-100 dark:bg-slate-700 rounded flex justify-center items-center min-h-[265px] relative p-12 w-full">
                    <img
                      src={`https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_${index + 7}.png`}
                      alt=""
                      className="max-w-full h-auto"
                    />
                  </div>
                  <div className="py-6 px-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <a href="#!">
                          <h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
                            Baby Truck
                          </h6>
                        </a>
                        <span className="text-sm text-yellow-500">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">$676</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestBoba;
