"use client";

const partners = [
  {
    name: "GC International",
    title: "Parent Company",
    image: "/partners/gc.png",
    link: "https://www.gallicassina.com",
  },
  {
    name: "Rotork",
    title: "Flow Control Solutions",
    image: "/partners/rotork.png",
    link: "https://www.rotork.com",
  },
  {
    name: "Dafram",
    title: "Ball Valve Manufacturing",
    image: "/partners/dafram.png",
    link: "https://www.dafram.it",
  },
  {
    name: "Bonomi Group",
    title: "Industrial Supply Chain",
    image: "/partners/bonomi.png",
    link: "https://www.bonomi.it/en/home",
  },
  {
    name: "Melesi",
    title: "Forged Fittings & Flanges",
    image: "/partners/melesi.png",
    link: "https://www.melesi.it/en",
  },
  {
    name: "Bonney Forge",
    title: "Valves & Fittings Manufacturer",
    image: "/partners/bonneyforge.png",
    link: "https://www.bonneyforge.com",
  },
  {
    name: "Quam",
    title: "Innovative Engineering Partner",
    image: "/partners/quam.png",
    link: "https://www.iamquam.it/",
  },
  {
    name: "Crane",
    title: "Process Flow Technologies",
    image: "/partners/cranecpe.png",
    link: "https://www.cranecpe.com",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center hover:opacity-80 transition"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-36 md:h-40 mb-3 object-contain"
              />
              <h3 className="text-base font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-500">{partner.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
