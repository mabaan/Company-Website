"use client";

const partners = [
  {
    name: "GC International",
    title: "Parent Company",
    image: "/partners/gc.png",
  },
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
    image: "/partners/bonomi.png",
  },
  {
    name: "Melesi",
    title: "Forged Fittings & Flanges",
    image: "/partners/melesi.png",
  },
  {
    name: "Bonney Forge",
    title: "Valves & Fittings Manufacturer",
    image: "/partners/bonneyforge.png",
  },
  {
    name: "Quam",
    title: "Innovative Engineering Partner",
    image: "/partners/quam.png",
  },
  {
    name: "Crane",
    title: "Process Flow Technologies",
    image: "/partners/cranecpe.png",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-32 mb-3 object-contain"
              />
              <h3 className="text-base font-semibold text-gray-800">
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
