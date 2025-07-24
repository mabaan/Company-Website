export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="w-full px-6 md:px-12 py-38 lg:py-52 bg-[#f3f6f9] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Why Choose GC International
        </h2>
        <p className="text-base md:text-lg mb-20 leading-relaxed text-gray-600 max-w-3xl">
          We deliver reliability and excellence through global partnerships,
          certified quality, and fast execution. Our solutions are tailored to
          meet industrial challenges across the Middle East and beyond.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src="/global.svg" alt="Global Partnerships Icon" className="w-10 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Global Partnerships
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We collaborate with world-class manufacturers and firms across continents.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src="/12.svg" alt="12+ Years Icon" className="w-10 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                12+ Years of Expertise
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Globally trusted for more than a decade across industrial projects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src="/certified.svg" alt="Certified Icon" className="w-10 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Strong Partnerships
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We represent ISO-certified European manufacturers of valves and actuators.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src="/engineer.svg" alt="Engineering Icon" className="w-10 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Engineering Know-how
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our engineers bring deep technical experience and insight to every project.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src="/mission.svg" alt="Clear Mission Icon" className="w-10 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Clear Mission
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We ensure efficient, accurate, and cost-effective dealings at all times.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src="/valve.svg" alt="Valve Solutions Icon" className="w-10 h-10" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Comprehensive Solutions
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We deliver complete valve and actuator solutions, including customized packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
