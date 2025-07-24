// components/BecomePartnerSection.tsx
import { Phone } from "lucide-react";

export default function BecomePartnerSection() {
  return (
    <section className="bg-gray-200 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become One of Our Partners
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          We represent and collaborate with world-class manufacturers across the
          globe. If you're looking to expand your industrial reach across the
          Middle East and beyond, we'd love to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#ED1C24] hover:bg-[#C70E15] text-white font-medium px-6 py-3 rounded-full shadow-sm hover:shadow transition duration-300"
        >
          Contact Us <Phone className="w-5 h-5" />{" "}
        </a>
      </div>
    </section>
  );
}
