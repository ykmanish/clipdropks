'use client'
// components/BubbleLayout.js
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const bubbles = [
  { text: 'NODE.JS, EXPRESS.JS, DJANGO', color: 'bg-pink-400', size: 120 },
  { text: 'MYSQL, FIREBASE', color: 'bg-pink-400', size: 80 },
  { text: 'REACT, VUE JS, NEXT JS', color: 'bg-pink-400', size: 160 },
  { text: 'RESEARCH & ANALYTICS', color: 'bg-yellow-400', size: 200 },
  { text: 'STRATEGY', color: 'bg-yellow-400', size: 240 },
  { text: 'BRAND IDENTITY', color: 'bg-yellow-400', size: 100 },
  { text: 'WEBFLOW', color: 'bg-pink-400', size: 140 },
  { text: 'TESTING', color: 'bg-yellow-400', size: 200 },
];

export default function BubbleLayout() {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } = Matter;
    const engine = Engine.create();
    engineRef.current = engine;

    // Create renderer (hidden, only used for physics engine calculations)
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent', // Make background transparent
      },
    });

    // Create bubble bodies and add them to the world
    bubbles.forEach((bubble, index) => {
      const radius = bubble.size / 2;
      const body = Bodies.circle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        radius,
        {
          restitution: 0.8, // Makes bubbles bouncy
          render: { fillStyle: bubble.color.replace('bg-', '') },
        }
      );
      bubblesRef.current[index] = body;
      World.add(engine.world, body);
    });

    // Add gravity to the world
    engine.world.gravity.y = 0.1; // Adjust gravity as needed

    // Add mouse control for dragging bubbles
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);

    // Update HTML element positions to match Matter.js bodies
    Events.on(engine, 'afterUpdate', () => {
      bubblesRef.current.forEach((body, index) => {
        const bubbleElement = sceneRef.current.querySelector(`#bubble-${index}`);
        if (bubbleElement) {
          bubbleElement.style.left = `${body.position.x - body.circleRadius}px`;
          bubbleElement.style.top = `${body.position.y - body.circleRadius}px`;
        }
      });
    });

    // Run the engine and renderer
    Engine.run(engine);
    Render.run(render);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div ref={sceneRef} className="relative w-full h-screen overflow-hidden">
      <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 font-bold text-3xl md:text-5xl text-center p-4">
        OUR WORK NOT BOUNDED BY BEAUTIFUL WEBSITES, CREATIVE VISUALS AND MOTION DESIGN
      </h1>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          id={`bubble-${index}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            position: 'absolute',
            top: '50%', // Initial placement, will be overwritten by Matter.js
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center alignment
          }}
          className={`rounded-full ${bubble.color} text-white flex items-center justify-center text-center font-bold`}
        >
          {bubble.text}
        </div>
      ))}
    </div>
  );
}
