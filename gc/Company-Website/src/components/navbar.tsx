// src/components/Navbar.tsx
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
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="GC Logo" className="h-8 w-auto" />
          <span className="text-gcBlue text-xl font-bold tracking-wide hidden sm:inline">
            GC International
          </span>
        </a>

        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
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
        <div className="sm:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-xl font-medium z-40">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gcBlue hover:text-gcRed transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-8 text-gray-500 text-sm"
          >
            Close
          </button>
        </div>
      )}
    </nav>
  );
}
