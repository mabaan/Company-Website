export default function Footer() {
  return (
    <footer className="bg-[#dfdfdf] text-slate-700 px-6 py-12 border-t border-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#0D47A1] mb-3">
            GC International FZCO
          </h2>
          <p className="mb-1">5EA, 520, PO Box 293777</p>
          <p className="mb-1">DAFZA, Dubai, U.A.E</p>
          <p className="mt-4 text-slate-500 italic">
            Connecting Vision to Reality.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#0D47A1] mb-3">Contact</h2>
          <p className="mb-1">Tel: +971 4 2566760</p>
          <p className="mb-1">Fax: +971 4 2566761</p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:gcintle@gmail.com"
              className="text-[#ED1C24] hover:underline font-medium"
            >
              gcintle@gmail.com
            </a>
          </p>
        </div>

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-[#0D47A1] mb-3">About</h2>
          <p className="mb-2">
            We supply pipeline products with a seamless flow of innovation and
            reliability.
          </p>
          <p className="text-slate-500 mt-4 text-sm">
            © {new Date().getFullYear()} GC International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
