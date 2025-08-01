"use client";

import GradientCanvas from "./GradientCanvas";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] w-full flex items-center overflow-hidden px-4 sm:px-8 py-12 sm:py-20"
      style={{
        background: "#f3f6f9",
        position: "relative",
      }}
    >
      {/* Animated Gradient BG */}
      <div className="absolute inset-0 w-full h-full z-10" aria-hidden="true">
        <GradientCanvas />
      </div>

      {/* PIPE DOODLE as hero underlay, bottom-right corner */}
      <div
        className="absolute z-0" // ensures doodle is behind hero content
        style={{
          right: 0,
          bottom: "8vw",
          pointerEvents: "none",
          height: "180px",
          width: "340px",
          display: "flex",
          justifyContent: "flex-end",
        }}
        aria-hidden="true"
      >
        <img
          src="/11.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: 1, // 80% opacity for strong colors!
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-20">
        {/* Left: Text Content */}
        <div className="text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              color: "#f3f6f9",
              textShadow: "0 3px 18px #003b71, 0 1px 4px #e41f2666",
            }}
          >
            Seamless Innovation in Pipeline Solutions
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed max-w-xl mx-0"
            style={{
              color: "#f3f6f9",
              textShadow: "0 2px 16px #003b7199, 0 1px 4px #e41f2633",
            }}
          >
            GC International delivers high-performance valve, flange, and flow
            control systems to industrial sectors across the Middle East and
            beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a
              href="/contact"
              className="
                w-40 px-2 py-2 text-base
                sm:w-auto sm:px-6 sm:py-3 sm:text-lg
                rounded-full font-medium shadow transition
                bg-white/80 hover:bg-white text-[#e41f26] hover:text-white
                border-2 border-[#e41f26] hover:bg-[#e41f26]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e41f26]
                text-center
              "
              style={{
                fontWeight: 600,
                boxShadow: "0 4px 18px 0 #003b7122, 0 2px 8px 0 #e41f2622",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
        {/* Right intentionally left empty */}
      </div>
    </section>
  );
}