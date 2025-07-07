export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            GC International FZCO
          </h2>
          <p className="mb-1">5EA, 520, PO Box 293777</p>
          <p className="mb-1">DAFZA, Dubai, U.A.E</p>
          <p className="mt-3 text-gray-400">Connecting Vision to Reality.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
          <p className="mb-1">Tel: +971 4 2566760</p>
          <p className="mb-1">Fax: +971 4 2566761</p>
          <p>
            Email:{" "}
            <a href="mailto:gcintle@gmail.com" className="underline">
              gcintle@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">About</h2>
          <p className="mb-1">
            We supply pipeline products with a seamless flow of innovation and
            reliability.
          </p>
          <p className="text-gray-400 mt-3">
            © {new Date().getFullYear()} GC International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
