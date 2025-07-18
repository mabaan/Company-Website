import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "G&C Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 text-white transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/GC Transparent Logo.png"
            alt="GC Logo"
            className="h-12 w-auto"
          />
          <span className="text-gcBlue text-xl font-bold tracking-wide hidden sm:inline">
            GC International
          </span>
        </a>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gcRed transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Full-Screen Overlay Nav */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-start pt-1 z-40">
          <div className="bg-black/80 w-full py-8 px-6 space-y-6 text-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block hover:text-gcRed transition text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-gray-400 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
