import { Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="w-full px-6 md:px-12 py-20 bg-[#E5E7EB] text-darkText"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: CTA Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0D47A1]">
            Ready to Partner with GC International?
          </h2>
          <p className="text-base md:text-lg mb-8 leading-relaxed text-[#1E293B]">
            Let’s help you find the perfect industrial solution. Contact us to
            explore our range of valves, fittings, and custom engineering
            services.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C70E15] text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>

        {/* Right: Empty Placeholder or Leave Empty */}
        <div></div>
      </div>
    </section>
  );
}
