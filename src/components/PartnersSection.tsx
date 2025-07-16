"use client";

const partners = [
  {
    name: "Rotork",
    title: "Flow Control Solutions",
    image: "/partners/rotork.png",
  },
  {
    name: "Dafram",
    title: "Ball Valve Manufacturing",
    image: "/partners/dafram.png",
  },
  {
    name: "Bonomi Group",
    title: "Industrial Supply Chain",
    image: "/partners/bonomi.jpg",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="w-24 h-24 relative mb-4">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-500">{partner.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
