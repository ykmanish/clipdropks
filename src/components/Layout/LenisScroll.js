'use client'
// components/Layout/LenisScroll.js

import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

export default function LenisScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis scroll behavior
    const lenis = lenisRef.current?.lenis;

    function update(time) {
      lenis?.raf(time);  // Call the raf method on each frame
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId); // Clean up the animation frame on component unmount
  }, []);

  return (
    <ReactLenis options={{ autoRaf: true }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
