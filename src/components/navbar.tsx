import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Install: npm install react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  const links = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "GC Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] 
                   backdrop-blur-md shadow-md
                   px-4 sm:px-6 lg:px-8
                   md:max-w-screen-lg md:mx-auto md:mt-4 md:rounded-xl"
      >
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-8">
            <img src="/GC Transparent Logo.png" alt="GC Logo" className="h-10 w-auto" />
            <span className="text-blue-900 text-xl font-bold tracking-wide hidden sm:inline ">
              GC International
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium text-blue-800">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`hover:text-blue-600 transition duration-200 ${
                    path === link.href || (link.href !== "/" && path.startsWith(link.href))
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-blue-900 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-white text-blue-900 z-40"
        >
          <div className="flex flex-col gap-6 items-center justify-center h-full text-xl font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-blue-600 transition ${
                  path === link.href || (link.href !== "/" && path.startsWith(link.href))
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
