import ValveViewer from "./ValveViewer";

export default function Hero() {
  return (
    <section className="bg-[#1E293B] text-white min-h-[90vh] px-6 md:px-12 flex items-center py-16 lg:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          {/* Hero text with fade-in animation */}
          <div className="transition-opacity duration-700 ease-out opacity-100 transform translate-y-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Seamless Innovation in Pipeline Solutions
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              GC International delivers high-performance valve, flange, and flow
              control systems to industrial sectors across the Middle East and
              beyond.
            </p>
            
            {/* Two CTA buttons side-by-side */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="/contact"
                className="bg-[#ed1c24] hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium shadow transition"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="border border-[#ed1c24] text-[#ed1c24] px-8 py-4 rounded-lg hover:bg-[#ed1c24] hover:text-white font-medium transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

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
