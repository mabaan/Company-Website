import { ArrowRight } from "lucide-react";

export default function JoinUsSection() {
  return (
    <section className="bg-[#f3f6f9] py-20 px-6 text-center text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Be a Part of Our Story
        </h2>
        <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-600">
          We're always looking for talented individuals to help us shape the
          future of industrial solutions across the globe.
        </p>
        <a
          href="/careers"
          className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C70E15] text-white font-medium px-6 py-3 rounded-full shadow-sm hover:shadow transition duration-300"
        >
          Explore Careers <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
