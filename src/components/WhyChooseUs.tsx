export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="w-full px-6 md:px-12 py-20 bg-[#f3f6f9] text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Why Choose GC International
        </h2>
        <p className="text-base md:text-lg mb-10 leading-relaxed text-gray-600">
          We deliver reliability and excellence through global partnerships,
          certified quality, and fast execution. Our solutions are tailored to
          meet industrial challenges across the Middle East and beyond.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-500">
                {/* Replace with your desired icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <h3 className="font-semibold text-gray-800">
                Global Partnerships
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              We collaborate with world-class manufacturers and firms across
              continents.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-green-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <h3 className="font-semibold text-gray-800">
                Certified & Reliable
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              ISO-certified and quality-assured — our standards ensure trust.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-yellow-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <h3 className="font-semibold text-gray-800">Fast & Focused</h3>
            </div>
            <p className="text-gray-600 text-sm">
              We deliver results quickly and precisely without compromising
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
