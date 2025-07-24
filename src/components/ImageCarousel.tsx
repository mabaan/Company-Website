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

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full aspect-[16/6] overflow-hidden bg-[#f5f7fa]">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="absolute w-full h-full object-contain transition-opacity duration-500"
      />

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
