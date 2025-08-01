"use client";

import { FaCogs, FaTools, FaDraftingCompass } from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      icon: <FaCogs size={32} className="text-white" />,
      title: "Valves",
      description:
        "High-quality valves engineered for reliability in demanding environments.",
    },
    {
      icon: <FaTools size={32} className="text-white" />,
      title: "Flanges",
      description:
        "Durable flange systems to ensure leak-proof connections across pipelines.",
    },
    {
      icon: <FaDraftingCompass size={32} className="text-white" />,
      title: "Custom Solutions",
      description:
        "Tailor-made engineering solutions for unique flow control challenges.",
    },
  ];

  const iconBgColors = [
    "bg-gradient-to-tr from-[#0054a4] to-[#2f88e7]",
    "bg-gradient-to-tr from-[#e41f26] to-[#ee636b]",
    "bg-gradient-to-tr from-[#003b71] to-[#4182c1]",
  ];

  return (
    <section className="bg-[#f1f6fb] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1f2937]">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-white/90 border-t-4 shadow-xl shadow-[#003b7140] border-[#e41f26] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#003b7144] transition duration-300"
              style={{
                borderTopColor:
                  idx === 1 ? "#e41f26" : idx === 2 ? "#003b71" : "#0054a4",
              }}
            >
              {/* Icon in colored circle */}
              <div
                className={`mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-all duration-300
                ${iconBgColors[idx]} group-hover:scale-110 group-hover:shadow-2xl`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#003b71] drop-shadow-sm">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
