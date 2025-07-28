import React from "react";

interface Props {
  className?: string;
}

// Load all images from /public/Ticker at build time
const modules = import.meta.glob("/Ticker/*", {
  eager: true,
  as: "url",
});
const logos = Object.entries(modules).map(([path, url]) => {
  const parts = path.split("/");
  const filename = parts[parts.length - 1];
  const alt = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  return { src: url as string, alt };
});

const duplicated = [...logos, ...logos];

export default function LogoTicker({ className = "" }: Props) {
  return (
    <div className={"overflow-hidden py-6 bg-white " + className}>
      <div
        className="flex items-center gap-8 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]"
      >
        {duplicated.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
