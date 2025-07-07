import { useScrollAnime } from "../hooks/useScrollAnime";

export default function FeatureBlock() {
  useScrollAnime(".fade-in");

  return (
    <section className="bg-light px-6 py-24 grid gap-16 md:grid-cols-2 max-w-6xl mx-auto">
      <div className="fade-in opacity-0">
        <h2 className="text-3xl font-bold text-gcBlue mb-4">
          Global Engineering Partners
        </h2>
        <p className="text-darkText">
          We work with Galli & Cassina, Bonney Forge, DAFRAM, and others to
          bring precision manufacturing to the Middle East.
        </p>
      </div>
      <div className="fade-in opacity-0">
        <img
          src="/images/gc-valves.png"
          alt="Pipeline Valves"
          className="rounded shadow"
        />
      </div>
    </section>
  );
}
