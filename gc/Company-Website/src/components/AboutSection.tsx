import { useScrollAnime } from "../hooks/useScrollAnime";

export default function AboutSection() {
  useScrollAnime(".fade-in");

  return (
    <section className="bg-light px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-in opacity-0 text-3xl font-bold text-gcBlue mb-6 text-center">
          About GC International
        </h2>
        <p className="fade-in opacity-0 mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          fringilla neque.
        </p>
        <p className="fade-in opacity-0 mb-4 text-lg">
          Fusce gravida fermentum erat, sit amet congue purus efficitur non.
        </p>
        <ul className="fade-in opacity-0 list-disc pl-5 space-y-2 text-base">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Vestibulum ante ipsum primis</li>
          <li>Integer commodo justo ac massa</li>
        </ul>
      </div>
    </section>
  );
}
