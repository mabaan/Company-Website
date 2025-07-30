import ValveViewer from "./ValveViewer";
import AnimateIn from "./AnimateIn"; // fade-in & slide-up helper

export default function Hero() {
  return (
    <section
      className="bg-[#1E293B] text-white min-h-[90vh] px-6 md:px-12 py-16 lg:py-32 flex items-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <AnimateIn>
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Seamless Innovation in Pipeline Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto">
              GC International delivers high-performance valve, flange, and flow
              control systems to industrial sectors across the Middle East and
              beyond.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              {/* Primary CTA */}
              <a
                href="/contact"
                className="bg-[#ed1c24] hover:bg-red-600 text-white px-8 py-4 rounded-lg transition"
              >
                Get Started
              </a>
              {/* Secondary CTA */}
              <a
                href="#why"
                className="border border-[#ed1c24] text-[#ed1c24] px-8 py-4 rounded-lg hover:bg-[#ed1c24] hover:text-white transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Right: Valve Model */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] 2xl:w-[320px] 2xl:h-[320px]">
            <ValveViewer />
          </div>
        </div>
      </div>
    </section>
  );
}
