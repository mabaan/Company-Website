// src/components/CTASection.tsx
import dynamic from "next/dynamic";
import { Mail } from "lucide-react";
const ValveViewer = dynamic(() => import("./ValveViewer"), { ssr: false });

export default function CTASection() {
  return (
    <section
      id="cta"
      className="w-full px-4 md:px-12 py-24 md:py-40 bg-[#E5E7EB] text-darkText"
    >
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden shadow-lg bg-white/90 border border-[#e3e3e3]">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left: CTA Content */}
          <div className="py-12 px-6 md:py-20 md:px-12 z-10 relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#003b71] leading-tight">
              Ready to Partner with GC International?
            </h2>
            <p className="text-base md:text-lg mb-10 leading-relaxed text-[#1E293B] opacity-90">
              Let’s help you find the perfect industrial solution. Contact us to
              explore our range of valves, fittings, and custom engineering
              services.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C70E15] text-white font-semibold px-5 py-2.5 rounded-full shadow transition duration-300 text-base sm:text-lg"
              style={{
                boxShadow: "0 4px 18px 0 #e41f2620",
              }}
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
          {/* Right: ValveViewer (desktop/tablet only, fits area) */}
          <div
            className="
              relative flex items-center justify-center
              h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]
              w-full bg-transparent
              hidden md:flex
            "
          >
            <ValveViewer />
          </div>
        </div>
      </div>
    </section>
  );
}
