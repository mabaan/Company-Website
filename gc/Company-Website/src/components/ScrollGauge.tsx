"use client";

import { useEffect, useState } from "react";

export default function ScrollGauge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const ratio = Math.min(scrollTop / scrollHeight, 1);
      setProgress(ratio);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
      <div className="relative w-2 h-24 bg-gray-800 rounded-full overflow-hidden flex flex-col justify-between py-1">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-gray-500 opacity-30" />
        ))}
        <div
          className="absolute bottom-0 w-full bg-red-500 rounded-b"
          style={{
            height: `${progress * 100}%`,
            transition: "height 0.2s ease",
          }}
        ></div>
      </div>
      <span className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">
        Scroll
      </span>
    </div>
  );
}
