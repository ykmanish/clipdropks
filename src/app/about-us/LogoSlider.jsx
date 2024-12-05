'use client'
// components/ImageSlider.js
import React, { useEffect, useRef } from 'react';

const images = [
  'https://www.svgrepo.com/show/303200/apple-watch-logo.svg',
  'https://www.svgrepo.com/show/303143/microsoft-logo.svg',
  'https://www.svgrepo.com/show/303141/spotify-1-logo.svg',
  'https://www.svgrepo.com/show/303236/whatsapp-logo.svg',
  'https://www.svgrepo.com/show/303151/slack-logo.svg',
  'https://www.svgrepo.com/show/303169/apple-music-logo.svg',
  'https://www.svgrepo.com/show/303172/linkedin-logo.svg',
];

const ImageSlider = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Change this value to adjust scroll speed

  useEffect(() => {
    const track = trackRef.current;

    // Set the width of the track to accommodate double the images
    const totalImages = images.length;
    const totalWidth = totalImages * 250; // Width of each image
    track.style.width = `${totalWidth * 2}px`;

    // Clone images for seamless looping
    images.forEach((src) => {
      const cloneImage = document.createElement('img');
      cloneImage.src = src;
      cloneImage.alt = 'Slide';
      cloneImage.style.width = '250px'; // Set to match the original image width
      cloneImage.style.height = '100px'; // Set to match the original image height
      track.appendChild(cloneImage);
    });

    const updateScroll = () => {
      // Move the track left by scrollSpeed
      const currentX = parseFloat(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
      track.style.transform = `translateX(${currentX - scrollSpeed}px)`;

      // If the track has moved completely left, reset it
      if (Math.abs(currentX) >= totalWidth) {
        track.style.transform = 'translateX(0)';
      }

      // Continue the animation
      animationRef.current = requestAnimationFrame(updateScroll);
    };

    animationRef.current = requestAnimationFrame(updateScroll);

    // Cleanup function to cancel the animation on unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-24 mb-28  mx-auto">
      <div ref={trackRef} className="flex justify-center dark:bg-[#ffffff] bg-white h-24  items-center gap-10" style={{ transition: 'transform 0s linear' }}>
        {images.map((src, index) => (
          <div key={index} className="h-full  w-60">
            <img src={src} alt={`Slide ${index}`} className="w-28 h-24 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
