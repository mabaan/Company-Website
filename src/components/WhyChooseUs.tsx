export default function WhyChooseUs() {
  // Map SVG names for each card (in order)
  const svgIcons = [
    "global",
    "12",
    "certified",
    "engineer",
    "mission",
    "valve",
  ];

  const cardData = [
    {
      title: "Global Partnerships",
      desc: "We collaborate with world-class manufacturers and firms across continents.",
      iconAlt: "Global Partnerships Icon",
      border: "#0054a4",
    },
    {
      title: "12+ Years of Expertise",
      desc: "Globally trusted for more than a decade across industrial projects.",
      iconAlt: "12+ Years Icon",
      border: "#e41f26",
    },
    {
      title: "Strong Partnerships",
      desc: "We represent ISO-certified European manufacturers of valves and actuators.",
      iconAlt: "Certified Icon",
      border: "#003b71",
    },
    {
      title: "Engineering Know-how",
      desc: "Our engineers bring deep technical experience and insight to every project.",
      iconAlt: "Engineering Icon",
      border: "#0054a4",
    },
    {
      title: "Clear Mission",
      desc: "We ensure efficient, accurate, and cost-effective dealings at all times.",
      iconAlt: "Clear Mission Icon",
      border: "#e41f26",
    },
    {
      title: "Comprehensive Solutions",
      desc: "We deliver complete valve and actuator solutions, including customized packages.",
      iconAlt: "Valve Solutions Icon",
      border: "#003b71",
    },
  ];

  return (
    <section
      id="why"
      className="w-full px-4 sm:px-8 md:px-12 pb-16 sm:pb-20 md:pb-24 lg:pb-28 bg-[#f3f6f9] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title & intro */}
        <h2 className="text-4xl font-bold mb-8 text-[#003b71] text-left">
          Why Choose GC International
        </h2>
        <p className="text-lg md:text-xl mb-14 text-gray-600 font-normal leading-relaxed max-w-3xl text-left">
          We deliver reliability and excellence through global partnerships, certified quality, and fast execution. Our solutions are tailored to meet industrial challenges across the Middle East and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="bg-white/95 rounded-2xl shadow-lg border-t-4 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-200"
              style={{ borderTopColor: card.border }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754083433/gcintle/resume/${svgIcons[i]}.svg`}
                  alt={card.iconAlt}
                  className="w-12 h-12 drop-shadow"
                  loading="lazy"
                />
                <h3 className="font-bold text-[#003b71] text-lg">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
