import dynamic from "next/dynamic";

// Lazy-load ValveViewer only on client side
const ValveViewer = dynamic(() => import("./ValveViewer"), { ssr: false });

export default function Hero() {
  return (

    <section className="bg-[#1E293B] text-white min-h-[90vh] px-6 md:px-12 py-16 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Seamless Innovation in Pipeline Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            GC International delivers high-performance valve, flange, and flow
            control systems to industrial sectors across the Middle East and
            beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="bg-[#ED1C24] hover:bg-[#C70E15] text-white px-6 py-3 rounded-full font-medium shadow transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Valve Model (lazy-loaded, hidden on small screens) */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[320px] xl:h-[320px]">
            <ValveViewer />
          </div>
        </div>
      </div>
    </section>
  );
}