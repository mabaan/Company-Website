import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Install: npm install react-icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const links = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "G&C Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const filtered = links.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

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
          <a href="/" className="flex items-center gap-3">
            <img src="/GC Logo.png" alt="GC Logo" className="h-10 w-auto" />
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
            <div className="w-2/3">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border border-blue-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {query && (
                <div className="mt-2 bg-white text-base rounded-md shadow max-h-40 overflow-y-auto">
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-blue-50"
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                      >
                        {item.label}
                      </a>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">
                      No matches found.
                    </div>
                  )}
                </div>
              )}
            </div>

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
