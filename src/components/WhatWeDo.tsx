"use client";

import { FaCogs, FaTools, FaDraftingCompass } from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      icon: <FaCogs size={32} className="text-blue-600" />,
      title: "Valves",
      description:
        "High-quality valves engineered for reliability in demanding environments.",
    },
    {
      icon: <FaTools size={32} className="text-blue-600" />,
      title: "Flanges",
      description:
        "Durable flange systems to ensure leak-proof connections across pipelines.",
    },
    {
      icon: <FaDraftingCompass size={32} className="text-blue-600" />,
      title: "Custom Solutions",
      description:
        "Tailor-made engineering solutions for unique flow control challenges.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
