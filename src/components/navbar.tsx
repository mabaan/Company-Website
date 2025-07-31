import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Optional, unused in current layout

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
    }
  }, []);

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
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png"
              alt="GC Logo"
              className="h-10 w-auto"
            />
            <span className="text-blue-900 text-xl font-bold tracking-wide hidden sm:inline">
              GC International
            </span>
          </a>

          {/* GC International Centered on Mobile */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <span
              className="font-extrabold text-lg tracking-tight"
              style={{
                letterSpacing: "0.02em",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                color: "#1e3a8a",
              }}
            >
              GC International
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium text-[#1e3a8a]">
            {links.map((link) => {
              const isActive =
                path &&
                (path === link.href ||
                  (link.href !== "/" && path.startsWith(link.href)));

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`no-underline hover:no-underline hover:text-blue-600 transition duration-200 ${
                      isActive ? "text-blue-600 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
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
      <div
        className={`
    fixed top-0 left-0 w-full h-screen z-50
    bg-[#bbdefb]/95
    backdrop-blur-sm text-white
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0" : "-translate-y-full"}
  `}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl text-white"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* GC International Centered in Mobile Menu */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <span
            className="font-extrabold text-2xl tracking-tight"
            style={{
              letterSpacing: "0.02em",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              color: "#1e3a8a",
            }}
          >
            GC International
          </span>
        </div>

        {/* Menu content */}
        <div className="flex flex-col gap-6 items-center justify-center h-full text-xl font-semibold tracking-wide">
          {links.map((link) => {
            const isActive =
              path &&
              (path === link.href ||
                (link.href !== "/" && path.startsWith(link.href)));

            return (
              <a
                key={link.href}
                href={link.href}
                className={`no-underline hover:no-underline transition ${
                  isActive ? "text-white font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}