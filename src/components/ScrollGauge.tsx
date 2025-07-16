"use client";

import { useEffect, useRef } from "react";

export default function ScrollGauge() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGauge = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);

      if (fillRef.current) {
        fillRef.current.style.height = `${progress * 100}%`;
      }

      requestAnimationFrame(updateGauge);
    };

    requestAnimationFrame(updateGauge);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
      <div className="relative w-2 h-24 bg-gray-800 rounded-full overflow-hidden py-1">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-gray-500 opacity-30" />
        ))}
        <div
          ref={fillRef}
          className="absolute bottom-0 w-full bg-red-500 rounded-b"
        ></div>
      </div>
      <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">
        Scroll
      </span>
    </div>
  );
}
