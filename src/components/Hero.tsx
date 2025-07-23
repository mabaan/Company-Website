import ValveViewer from "./ValveViewer";

export default function Hero() {
  return (
    <section className="bg-[#1E293B] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            {/* <a
              href="/solutions"
              className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#1E293B] transition"
            >
              View Solutions
            </a> */}
          </div>
        </div>

        {/* Right: Valve Model */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[400px] h-[400px]">
            <ValveViewer />
          </div>
        </div>
      </div>
    </section>
  );
}
