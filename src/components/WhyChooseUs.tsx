import { useEffect, useRef } from "react";
import { getAnime } from "../lib/getAnime";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          const anime = await getAnime();

          anime({
            targets: sectionRef.current.querySelectorAll(".why-item"),
            opacity: [0, 1],
            translateY: [60, 0],
            delay: anime.stagger(200),
            duration: 800,
            easing: "easeOutCubic",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f5f5f5_40%,_#0054a4_100%)] text-black"
    >
      {/* Left Side: Text and Cards */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 opacity-0 why-item text-left">
          Why Choose GC International
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          <div className="why-item opacity-0 bg-white rounded-xl shadow p-6">
            <img src="/global.svg" alt="Global" className="mb-4 h-10 w-10" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Global Partnerships
            </h3>
            <p className="text-sm md:text-base">
              We collaborate with top-tier manufacturers and engineering firms
              worldwide.
            </p>
          </div>

          <div className="why-item opacity-0 bg-white rounded-xl shadow p-6">
            <img
              src="/certified.svg"
              alt="Certified"
              className="mb-4 h-10 w-10"
            />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Certified & Reliable
            </h3>
            <p className="text-sm md:text-base">
              ISO-certified and quality-committed, our standards speak for
              themselves.
            </p>
          </div>

          <div className="why-item opacity-0 bg-white rounded-xl shadow p-6">
            <img src="/speed.svg" alt="Speed" className="mb-4 h-10 w-10" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Fast & Focused
            </h3>
            <p className="text-sm md:text-base">
              We deliver with agility and precision across the Middle East and
              beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Placeholder or Valve */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {/* You can optionally pass in <ValveViewer /> here or leave blank */}
        <div className="w-full max-w-[400px] aspect-square bg-white/20 rounded-xl shadow-inner flex items-center justify-center">
          <img
            src="/images/valve-placeholder.svg"
            alt="Valve"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
}
