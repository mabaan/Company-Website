export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="w-full px-6 sm:px-8 md:px-12 py-12 md:py-20 lg:py-32 bg-[#f3f6f9] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title & intro */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-gray-900">
          Why Choose GC International
        </h2>
        <p className="text-sm md:text-base mb-12 md:mb-20 leading-relaxed text-gray-600 max-w-3xl">
          We deliver reliability and excellence through global partnerships,
          certified quality, and fast execution. Our solutions are tailored to
          meet industrial challenges across the Middle East and beyond.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              icon: "/global.svg",
              title: "Global Partnerships",
              text: "We collaborate with world-class manufacturers and firms across continents.",
            },
            {
              icon: "/12.svg",
              title: "12+ Years of Expertise",
              text: "Globally trusted for more than a decade across industrial projects.",
            },
            {
              icon: "/certified.svg",
              title: "Strong Partnerships",
              text: "We represent ISO-certified European manufacturers of valves and actuators.",
            },
            {
              icon: "/engineer.svg",
              title: "Engineering Know-how",
              text: "Our engineers bring deep technical experience and insight to every project.",
            },
            {
              icon: "/mission.svg",
              title: "Clear Mission",
              text: "We ensure efficient, accurate, and cost-effective dealings at all times.",
            },
            {
              icon: "/valve.svg",
              title: "Comprehensive Solutions",
              text: "We deliver complete valve and actuator solutions, including customized packages.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4">
                <img
                  src={card.icon}
                  alt={card.title + " Icon"}
                  className="w-12 h-12 md:w-14 md:h-14"
                  loading="lazy"
                />
                <h3 className="font-semibold text-gray-800 text-lg md:text-xl">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
