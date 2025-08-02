import { useEffect, useState } from "react";

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
    { label: "Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop + mobile header */}
      <div
        className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb]
                   backdrop-blur-md shadow-md
                   px-4 sm:px-6 lg:px-8
                   md:max-w-screen-lg md:mx-auto md:mt-4 md:rounded-xl"
      >
        <div className="flex justify-between items-center py-4 relative">
          {/* Logo (left, text shifted right on desktop) */}
          <a
            href="/"
            className="flex items-center gap-0 no-underline hover:no-underline"
          >
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png"
              alt="GC Logo"
              className="h-10 w-auto"
            />
            {/* Desktop text only, shifted further right */}
            <span className="text-xl font-bold tracking-wide hidden md:inline ml-12">
              <span className="text-blue-900">GC&nbsp;</span>
              <span className="text-[#e41f26]">International</span>
            </span>
          </a>

          {/* GC International Centered on Mobile (now clickable) */}
          <a
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 md:hidden font-extrabold text-lg tracking-tight whitespace-nowrap leading-none no-underline hover:no-underline"
            style={{ zIndex: 10 }}
          >
            <span className="text-blue-900">GC&nbsp;</span>
            <span className="text-[#e41f26]">International</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex gap-8 text-[#1e3a8a]">
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
                      isActive
                        ? "text-[#e41f26] font-extrabold"
                        : "font-semibold"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-blue-900 text-2xl focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ----- Mobile Sidebar Menu (improved) ----- */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[98]"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80vw] max-w-xs z-[99]
        bg-[#222533] shadow-2xl transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col`}
        style={{ minWidth: 280 }}
      >
        {/* Top: logo + GC International (gap-12, GC in #003b71) + close */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#333]">
          <a
            href="/"
            className="flex items-center gap-12 no-underline hover:no-underline"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png"
              alt="GC Logo"
              className="h-7 w-auto"
            />
            <span className="font-extrabold text-lg tracking-tight whitespace-nowrap leading-none text-white">
              <span style={{ color: "#3686d3" }}>GC&nbsp;</span>
              <span className="text-[#e41f26]">International</span>
            </span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-[#90caf9] hover:text-[#e41f26] transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col gap-2 py-6 px-7 overflow-y-auto">
          {links.map((link) => {
            const isActive =
              path &&
              (path === link.href ||
                (link.href !== "/" && path.startsWith(link.href)));
            return (
              <a
                key={link.href}
                href={link.href}
                className={`no-underline block rounded-lg px-3 py-3 text-base font-semibold
                  transition ${
                    isActive
                      ? "text-[#e41f26] bg-[#272b36] font-extrabold"
                      : "text-white hover:bg-[#272b36] hover:text-[#e41f26]"
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
