"use client";

const partners = [
  {
    name: "Galli & Cassina",
    title: "Lubricated & Sleeved Plug Valve Manufacturing",
    image: "/partners/gc.png",
    url: "https://www.gallicassina.com/",
  },
  {
    name: "Bernard Controls",
    title: "Electric Actuators and Control Systems",
    image: "/partners/bernard.png",
    url: "https://www.bernardcontrols.com/en",
  },
  {
    name: "Dafram",
    title: "Ball Valve Manufacturing",
    image: "/partners/dafram.png",
    url: "https://www.dafram.it/",
  },
  {
    name: "Bonomi Group",
    title: "Industrial Supply Chain",
    image: "/partners/bonomi.png",
    url: "https://www.bonomiindustries.com/",
  },
  {
    name: "Melesi",
    title: "Forged Fittings & Flanges",
    image: "/partners/melesi.png",
    url: "https://www.melesi.it/en",
  },
  {
    name: "Bonney Forge",
    title: "Valves & Fittings Manufacturer",
    image: "/partners/bonneyforge.png",
    url: "https://bonneyforge.com/",
  },
  {
    name: "Quam",
    title: "Innovative Engineering Partner",
    image: "/partners/quam.png",
    url: "https://www.iamquam.it/",
  },
  {
    name: "Crane",
    title: "Process Flow Technologies",
    image: "/partners/cranecpe.png",
    url: "https://cranecpe.com/brand/xomox/",
  },
];

const lastPartner = {
  name: "Jiangsu Huaying Valves",
  title: "Valve Manufacturing",
  image: "/partners/HYV.png",
  url: "http://jshyv.com/en",
};

export default function PartnersSection() {
  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>

        {/* Main partner grid using CSS Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md"
              aria-label={`${partner.name} – ${partner.title}`}
            >
              <img
                src={partner.image}
                alt={partner.name}
                loading="lazy"
                className="h-20 mb-3 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <h3 className="text-sm font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-500">{partner.title}</p>
            </a>
          </div>
          ))}
        </div>

        {/* Centered final partner */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center justify-center p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
            <a
              href={lastPartner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md"
              aria-label={`${lastPartner.name} – ${lastPartner.title}`}
            >
              <img
                src={lastPartner.image}
                alt={lastPartner.name}
                loading="lazy"
                className="h-20 mb-3 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <h3 className="text-sm font-semibold text-gray-800">
                {lastPartner.name}
              </h3>
              <p className="text-xs text-gray-500">{lastPartner.title}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
