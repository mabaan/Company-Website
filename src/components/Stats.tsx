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
  { value: 9,    suffix: "+",  title: "Companies Represented"      },
  { value: 6,    suffix: "+",  title: "Countries Served"           },
  { value: 90,   suffix: "%",  title: "On-Time Delivery Rate"      },
  { value: 100,  suffix: "%",  title: "ISO-Certified Partners"     },
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
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-[#003b71]">
          Delivering Excellence Across Every Metric
        </h2>
        <p className="text-sm md:text-base mb-10 leading-relaxed text-gray-600 max-w-3xl">
          From customer satisfaction to on-time delivery, we measure what matters so you get the reliability and quality you deserve.
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((stat, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition
                h-full flex flex-col items-center group"
            >
              <div className="flex items-baseline mb-2">
                <span
                  className="counter text-2xl sm:text-3xl font-bold text-[#e41f26] group-hover:scale-110 transition-transform"
                  data-end={stat.value}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-base sm:text-lg font-semibold text-[#e41f26] ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#003b71] text-center tracking-wide opacity-90">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
