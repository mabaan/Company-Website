"use client";

import { useState, useEffect } from "react";

const images = [
  "/factory/industry.jpg",
  "/factory/offshore.jpg",
  "/factory/valve3.jpg",
  "/factory/DIEZ.jpg",
  "/factory/factory3.jpg",
  "/factory/valve2.png",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedArrow, setClickedArrow] = useState<"prev" | "next" | null>(
    null
  );

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction: "prev" | "next") => {
    setClickedArrow(direction);

    if (direction === "prev") {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }

    setTimeout(() => setClickedArrow(null), 300); // reset after 300ms
  };

  return (
    <section className="relative w-full aspect-[16/6] overflow-hidden bg-[#f5f7fa]">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
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
