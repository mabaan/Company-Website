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
      className="bg-light text-darkText flex flex-col justify-center items-center text-center px-4 md:px-8 w-full h-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gcBlue mb-10 opacity-0 why-item">
        Why Choose GC International
      </h2>
      <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-6xl w-full">
        <div className="why-item opacity-0 bg-white rounded shadow p-6">
          <img
            src="/images/global.svg"
            alt="Global"
            className="mb-4 h-10 w-10 mx-auto"
          />
          <h3 className="text-lg md:text-xl font-semibold text-gcBlue mb-2">
            Global Partnerships
          </h3>
          <p className="text-sm md:text-base">
            We collaborate with top-tier manufacturers and engineering firms
            worldwide.
          </p>
        </div>
        <div className="why-item opacity-0 bg-white rounded shadow p-6">
          <img
            src="/certified.svg"
            alt="Certified"
            className="mb-4 h-10 w-10 mx-auto"
          />
          <h3 className="text-lg md:text-xl font-semibold text-gcBlue mb-2">
            Certified & Reliable
          </h3>
          <p className="text-sm md:text-base">
            ISO-certified and quality-committed, our standards speak for
            themselves.
          </p>
        </div>
        <div className="why-item opacity-0 bg-white rounded shadow p-6">
          <img
            src="/speed.svg"
            alt="Speed"
            className="mb-4 h-10 w-10 mx-auto"
          />
          <h3 className="text-lg md:text-xl font-semibold text-gcBlue mb-2">
            Fast & Focused
          </h3>
          <p className="text-sm md:text-base">
            We deliver with agility and precision across the Middle East and
            beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
