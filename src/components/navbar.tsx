import { useState } from "react";
import SearchBar from "./SearchBar";
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
    <nav className="absolute top-0 left-0 w-full z-50">
      <div
        className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb]
             backdrop-blur-md shadow-md
             max-w-screen-xl mx-auto mt-4
             px-10 sm:px-14 lg:px-20
             rounded-2xl"
      >
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/GC Transparent Logo.png"
              alt="GC Logo"
              className="h-10 w-auto"
            />
            <span className="text-blue-900 text-xl font-bold tracking-wide hidden sm:inline">
              GC International
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium text-blue-800">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-blue-900 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white text-blue-900 z-40">
          <div className="flex flex-col gap-6 items-center justify-center h-full text-xl font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="w-2/3 mt-4">
              <SearchBar />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
