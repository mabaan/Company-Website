export default function CTASection() {
  return (
    <div className="bg-gcBlue text-white flex flex-col justify-center items-center text-center px-6 w-full h-full">
      <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
      <p className="text-lg max-w-xl mb-6">
        Ready to start your next pipeline project with us? Get in touch now.
      </p>
      <a
        href="mailto:gcintle@gmail.com"
        className="bg-white text-gcBlue px-6 py-3 rounded-full font-semibold shadow hover:brightness-110 transition"
      >
        Contact Us
      </a>
    </div>
  );
}
