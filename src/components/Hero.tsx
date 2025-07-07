export default function Hero() {
  return (
    <div className="w-full h-full bg-light flex flex-col justify-center items-center text-center px-4 md:px-8 relative">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gcBlue mb-4 max-w-3xl">
        Seamless Innovation in Pipeline Solutions
      </h1>
      <p className="text-base md:text-lg max-w-xl text-darkText mb-8">
        GC International connects vision to reality with world-class valve,
        flange, and flow control technology across the Middle East and beyond.
      </p>
      <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition">
        Explore Our Services
      </button>
    </div>
  );
}
