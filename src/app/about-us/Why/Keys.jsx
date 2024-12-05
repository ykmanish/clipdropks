'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Keys = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Animate each card individually
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { y: 100 },  // Start position below the view
        { 
          y: 0, 
          duration: 0.1,  // Further reduced duration for faster movement
          ease: 'power2.out', 
          scrollTrigger: {
            trigger: card,
            start: "top bottom", 
            end: "bottom top", 
            scrub: 2,  // Decreased scrub value for a snappier feel
            toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
          },
        });
    });
  }, []);

  return (
    <div >
      <div className='grid grid-cols-2 mt-10 justify-center items-center'>
        
        <div ref={el => cardsRef.current[0] = el} className='bg-[#8773fb]  px-4 flex justify-center items-center w-full h-20 lg:h-24'>
          <h1 className='small text-2xl lg:text-4xl text-[#ffffff]'>
            Consistency
          </h1>
        </div>
        <div ref={el => cardsRef.current[1] = el} className='bg-[#0c0c0c]  flex justify-center items-center w-full h-20 lg:h-24'>
          <h1 className='small text-2xl lg:text-4xl text-[#ffffff]'>
            Adaptability
          </h1>
        </div>
        <div ref={el => cardsRef.current[2] = el} className='bg-[#015bff]  flex justify-center items-center w-full h-20 lg:h-24'>
          <h1 className='small text-2xl lg:text-4xl text-[#ffffff]'>
            Usability
          </h1>
        </div>
        <div ref={el => cardsRef.current[3] = el} className='bg-[#00c49a]   flex justify-center items-center w-full h-20 lg:h-24'>
          <h1 className='small text-2xl lg:text-4xl text-[#ffffff]'>
            Integrity
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Keys;
