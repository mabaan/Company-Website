import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix?: string;
  title: string;
  icon: string;
}

const metrics: Stat[] = [
  {
    value: 4.2,
    suffix: "/5",
    title: "Customer Satisfaction",
    icon: "customer-satisfaction",
  },
  {
    value: 100,
    suffix: "%",
    title: "ISO-Certified Partners",
    icon: "ISO",
  },
  {
    value: 90,
    suffix: "%",
    title: "On-Time Delivery Rate",
    icon: "delivery-rate",
  },
  {
    value: 6,
    suffix: "+",
    title: "Countries Served",
    icon: "countries-served",
  },
  {
    value: 9,
    suffix: "+",
    title: "Companies Represented",
    icon: "companies-represented",
  },
  {
    value: 92,
    suffix: "%",
    title: "Repeat Business Rate",
    icon: "repeat-buisness",
  },
];

// Assign a distinct, brand-harmonious border color to each card
const borderColors = [
  "#41a1ea", // Customer Satisfaction (blue)
  "#1cb09e", // ISO-Certified Partners (teal)
  "#7782aa", // On-Time Delivery Rate (steel blue)
  "#f9c846", // Countries Served (gold)
  "#5761c2", // Companies Represented (blue-violet)
  "#fd8879", // Repeat Business Rate (coral)
];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = containerRef.current?.querySelectorAll<HTMLSpanElement>(".counter");
    counters?.forEach((el, idx) => {
      const end = parseFloat(el.dataset.end || "0");
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          duration: 1.6,
          delay: idx * 0.09,
          ease: "power1.out",
          snap: { innerText: 0.1 },
          onUpdate: () => {
            const num = parseFloat(el.innerText);
            el.textContent = Number.isInteger(end)
              ? Math.floor(num).toString()
              : num.toFixed(1);
          },
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    });
  }, []);

  return (
    <section
      id="metrics"
      className="w-full px-4 md:px-12 py-16 bg-[#eceff2] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-[#003b71] text-left">
          Delivering Excellence Across Every Metric
        </h2>
        <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-600 max-w-3xl text-left font-normal">
          From customer satisfaction to on-time delivery, we measure what matters so you get the reliability and quality you deserve.
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {metrics.map((stat, i) => (
            <div
              key={i}
              className="p-7 bg-white/95 rounded-2xl shadow-lg border-t-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-200 flex flex-col items-center group"
              style={{
                borderTopColor: borderColors[i],
              }}
            >
              <div className="mb-5">
                <img
                  src={`https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754083433/gcintle/resume/${stat.icon}.svg`}
                  alt={stat.title + " Icon"}
                  className="w-14 h-14 drop-shadow-md group-hover:scale-110 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <div className="flex items-baseline mb-2">
                <span
                  className="counter text-3xl font-bold text-[#e41f26] group-hover:scale-110 transition-transform"
                  data-end={stat.value}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-lg font-semibold text-[#e41f26] ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#003b71] text-center tracking-wide opacity-90">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
