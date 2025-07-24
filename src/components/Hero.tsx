import ValveViewer from "./ValveViewer";

export default function Hero() {
  return (
    <section className="bg-[#1E293B] text-white min-h-[90vh] px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Seamless Innovation in Pipeline Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-xl">
            GC International delivers high-performance valve, flange, and flow
            control systems to industrial sectors across the Middle East and
            beyond.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-[#ED1C24] hover:bg-[#C70E15] text-white px-6 py-3 rounded-full font-medium shadow transition"
            >
              Get in Touch
            </a>
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
