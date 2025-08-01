"use client";

import { useState, useEffect } from "react";

// Optimized image URLs (next-gen with f_auto, q_auto)
const rawImages = [
  "v1753875177/gcintle/resume/industry.jpg",
  "v1753875177/gcintle/resume/offshore.jpg",
  "v1753875175/gcintle/resume/valve3.jpg",
  "v1753875185/gcintle/resume/DIEZ.jpg",
  "v1753875178/gcintle/resume/valve2.png",
];

const images = rawImages.map(
  (path) =>
    `https://res.cloudinary.com/dxrwnc5g4/image/upload/f_auto,q_auto/${path}`
);

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedArrow, setClickedArrow] = useState<"prev" | "next" | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction: "prev" | "next") => {
    setClickedArrow(direction);
    setCurrentIndex((prev) =>
      direction === "prev"
        ? (prev - 1 + images.length) % images.length
        : (prev + 1) % images.length
    );
    setTimeout(() => setClickedArrow(null), 300);
  };

  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden bg-[#f5f7fa]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        loading={currentIndex === 0 ? "eager" : "lazy"}
        fetchPriority={currentIndex === 0 ? "high" : "auto"}
        className="absolute w-full h-full object-contain transition-opacity duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={() => handleArrowClick("prev")}
        aria-label="Previous Slide"
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg border border-gray-200 transition hover:scale-105 ${
          clickedArrow === "prev" ? "bg-blue-600" : "bg-white/90 hover:bg-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            clickedArrow === "prev" ? "text-white" : "text-gray-800"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => handleArrowClick("next")}
        aria-label="Next Slide"
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg border border-gray-200 transition hover:scale-105 ${
          clickedArrow === "next" ? "bg-blue-600" : "bg-white/90 hover:bg-white"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            clickedArrow === "next" ? "text-white" : "text-gray-800"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
