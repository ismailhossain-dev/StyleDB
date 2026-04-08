import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center z-10">
        {/* Animated 404 Text */}
        <h1 className="text-9xl font-black text-indigo-600 animate-pulse">404</h1>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
          Page Not Found
        </h2>

        {/* Description Text */}
        <p className="text-base md:text-lg text-gray-500 mt-4 mb-10 max-w-lg mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable. Please click the button below to return home.
        </p>

        {/* Next.js Link Component */}
        <Link
          href="/"
          className="px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full 
                     shadow-xl hover:bg-indigo-700 hover:shadow-indigo-200 
                     transition-all duration-300 transform hover:-translate-y-1 inline-block"
        >
          Back to Homepage
        </Link>
      </div>

      {/* Background Graphic Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFound;
