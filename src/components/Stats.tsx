import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  {
    value: 12,
    title: "Years of Expertise",
    description: "Over 12 Years Serving the Middle East",
  },
  {
    value: 9,
    title: "Global Reach",
    description: "Representing 9 International Manufacturers",
  },
  {
    value: 6,
    title: "Countries Worldwide",
    description: "Deliveries to clients across the globe",
  },
  {
    value: 90,
    title: "Speed & Reliability",
    description: "90% On-Time Delivery Rate",
  },
  {
    value: 100,
    title: "Quality & Compliance",
    description: "100% of Our Partners Are ISO 9001 Certified",
  },
  {
    value: 4,
    title: "Customer Satisfaction",
    description: "4/5 Average Rating from Client Surveys",
    extra: "92% Repeat-Business Rate",
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const counters = containerRef.current?.querySelectorAll<HTMLSpanElement>(
      ".counter"
    );
    if (!counters) return;

    counters.forEach((el) => {
      const end = parseFloat(el.getAttribute("data-end") || "0");
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: () => {
            el.textContent = Math.floor(Number(el.innerText)).toString();
          },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#0f4f7c] py-16 px-4 text-white">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {metrics.map((stat, i) => (
          <div key={i} className="p-6 rounded-lg bg-white/10 text-center">
            <span className="counter text-4xl sm:text-5xl font-bold" data-end={stat.value}>
              0
            </span>
            <p className="mt-2 text-xl font-semibold">{stat.title}</p>
            <p className="text-sm opacity-80 mt-1">{stat.description}</p>
            {stat.extra && <p className="text-sm opacity-80">{stat.extra}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
