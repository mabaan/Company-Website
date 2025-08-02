import React from "react";

// List of logo base names (without .png extension)
const logoNames = [
  "ADNOC-removebg-preview",
  "aramco-removebg-preview",
  "BAPCO-removebg-preview",
  "bernard",
  "bonneyforge",
  "bonomi",
  "cranecpe",
  "dafram",
  "gc",
  "HYV",
  "koc-removebg-preview",
  "melesi",
  "PDO-removebg-preview",
  "petronas-removebg-preview",
  "QP-removebg-preview",
  "quam",
  "SNOC-removebg-preview",
];

// Map names to Cloudinary URLs and alt text
const logos = logoNames.map(name => ({
  src: `https://res.cloudinary.com/dxrwnc5g4/image/upload/gcintle/resume/${name}.png`,
  alt: name.replace(/[-_]/g, " ").replace(/removebg preview/gi, "").trim(),
}));

// Duplicate for seamless infinite scroll
const duplicated = [...logos, ...logos];

export default function LogoTicker({ className = "" }: { className?: string }) {
  return (
    <div className={`py-8 bg-white overflow-x-hidden ${className}`}>
      <div
        className="group relative flex items-center w-max animate-ticker gap-10 sm:gap-16 md:gap-20 lg:gap-24"
        tabIndex={0}
        aria-label="Trusted by our partners"
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
        onTouchStart={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
        onTouchEnd={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
        style={{ width: "max-content", minWidth: "100vw" }}
      >
        {duplicated.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            draggable={false}
            className="
              h-16 w-auto
              sm:h-20
              md:h-28
              lg:h-32
              xl:h-40
              object-contain
              inline-block
              transition-transform duration-200 hover:scale-105
              select-none
            "
            style={{ maxWidth: "260px" }}
          />
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
          will-change: transform;
        }
        .group:hover,
        .group:focus,
        .group:active {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
