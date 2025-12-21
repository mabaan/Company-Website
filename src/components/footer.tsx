// src/components/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#dfdfdf] text-slate-700 px-6 py-12 border-t border-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#0D47A1] mb-3 flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754140895/gcintle/resume/location.svg"
              alt=""
              className="inline h-5 w-5"
            />
            GC International FZCO
          </h2>
          <div className="mb-2">
            <p>Office 5EA, Building 520, PO Box 293777</p>
            <p>Dubai Airport Freezone, Dubai, U.A.E</p>
          </div>
          {/* View on Google Maps: underline always, red, bold only on hover */}
          <a
            href="https://maps.app.goo.gl/LkACcuJoydHVnRat7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#e41f26] text-base leading-tight underline transition-all duration-150 hover:font-bold focus:font-bold"
            style={{ display: "inline-block", marginTop: "4px" }}
          >
            View on Google Maps
          </a>
          <p className="mt-4 text-slate-500 italic">
            Connecting Vision to Reality.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-[#0D47A1] mb-3 flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754140895/gcintle/resume/contact.svg"
              alt=""
              className="inline h-5 w-5"
            />
            Contact
          </h2>
          <p className="mb-1">Tel: <span className="font-medium">+971 4 2566760</span></p>
          <p className="mb-1">Fax: <span className="font-medium">+971 4 2566761</span></p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:contact@gcintle.com"
              className="text-[#e41f26] font-medium underline transition-all duration-150 hover:font-bold focus:font-bold"
            >
              contact@gcintle.com
            </a>
          </p>
        </div>

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-[#0D47A1] mb-3 flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1754140895/gcintle/resume/about.svg"
              alt=""
              className="inline h-5 w-5"
            />
            About
          </h2>
          <p className="mb-2">
            We supply pipeline products with a seamless flow of innovation and
            reliability.
          </p>
          <p className="text-slate-500 mt-4 text-sm">
            &copy; {new Date().getFullYear()} GC International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
