import React, { useState, useEffect } from 'react';

const NoftFoundPage = () => {
  // State to track the mouse position (x, y coordinates)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to add and clean up the mousemove event listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update state with the new mouse position
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Attach the event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this runs once on mount and once on unmount

  // Calculate the radial gradient string for the mask image
  const maskStyle = {
    // Dynamically set the center of the radial gradient using the mouse position
    maskImage: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 150px)`,
    WebkitMaskImage: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 150px)`,
  };

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main content hidden by default, revealed by spotlight */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-8xl font-bold mb-4  p-4 bg-gradient-to-tr bg-clip-text text-transparent from bg-red-300 via-indigo-500 to bg-emerald-300 ">Page Not Found</h1>
        <p className="text-3xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        {/* Using a regular anchor tag for navigation, but in a real React app, you'd likely use <Link> from react-router-dom */}
        <a href="/" className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition duration-200">
          Go Home
        </a>
      </div>

      {/* Dark overlay with dynamic spotlight mask */}
      <div
        id="overlay"
        className="absolute inset-0 bg-black  z-20 pointer-events-none"
        // Apply the dynamic mask style
        style={maskStyle}
      />
    </div>
  );
};

export default NoftFoundPage;