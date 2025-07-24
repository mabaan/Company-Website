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
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-5">
              <img src="/global.svg" alt="Fast Icon" className="w-6 h-6" />

              <h3 className="font-semibold text-gray-800 text-lg">
                Global Partnerships
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We collaborate with world-class manufacturers and firms across
              continents.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-5">
              <img src="/certified.svg" alt="Fast Icon" className="w-6 h-6" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Certified & Reliable
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              ISO-certified and quality-assured — our standards ensure trust.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-5">
              <span>
                <img src="/speed.svg" alt="Fast Icon" className="w-6 h-6" />
              </span>
              <h3 className="font-semibold text-gray-800 text-lg">
                Fast & Focused
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We deliver results quickly and precisely without compromising
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
