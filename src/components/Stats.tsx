// src/components/StatsSection.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix?: string;
  title: string;
}

const metrics: Stat[] = [
  { value: 4.2,  suffix: "/5", title: "Customer Satisfaction"      },
  { value: 92,   suffix: "%",  title: "Repeat Business Rate"       },
  { value: 9,    suffix: "+",  title: "Companies Represented"       },
  { value: 6,    suffix: "+",  title: "Countries Served"            },
  { value: 90,   suffix: "%",  title: "On-Time Delivery Rate"       },
  { value: 100,  suffix: "%",  title: "ISO-Certified Partners"      },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = containerRef.current?.querySelectorAll<HTMLSpanElement>(".counter");
    counters?.forEach(el => {
      const end = parseFloat(el.dataset.end || "0");
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          duration: 2,
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
      className="w-full px-6 md:px-12 py-16 bg-[#eceff2] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Delivering Excellence Across Every Metric
        </h2>
        <p className="text-base md:text-lg mb-12 leading-relaxed text-gray-600 max-w-3xl">
          From customer satisfaction to on-time delivery, we measure what matters so you get the reliability and quality you deserve.
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {metrics.map((stat, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition h-full flex flex-col items-center"
            >
              <div className="flex items-baseline">
                <span
                  className="counter text-4xl sm:text-5xl font-bold text-[#1e3a8a]"
                  data-end={stat.value}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-xl sm:text-2xl font-bold text-[#1e3a8a] ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#0054a4] text-center">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
