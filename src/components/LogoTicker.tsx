import React from "react";

// import all images under public/Ticker (or Alt)
const modules = import.meta.glob("/public/Alt/*", { eager: true, as: "url" });
const logos = Object.entries(modules).map(([path, url]) => {
  const filename = path.split("/").pop()!;
  const alt = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  return { src: url as string, alt };
});
const duplicated = [...logos, ...logos];

export default function LogoTicker({ className = "" }: { className?: string }) {
  return (
    <div className={`pt-16 pb-8 bg-white overflow-hidden ${className}`}>
      <div className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 animate-scroll whitespace-nowrap hover:pause-on-hover">
        {duplicated.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="
              w-16 h-16
              sm:w-20 sm:h-20
              md:w-24 md:h-24
              lg:w-28 lg:h-28
              xl:w-32 xl:h-32
              object-contain
            "
          />
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
