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


          {/* GC International Centered on Mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
            <span className="font-extrabold text-lg tracking-tight whitespace-nowrap leading-none">
              <span className="text-blue-900">GC&nbsp;</span>
              <span className="text-[#e41f26]">International</span>
            </span>
          </div>

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
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          fixed inset-0 z-50
          bg-[#bbdefb]/95 backdrop-blur-sm
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Top row: logo/title (center) and close button (right) */}
        <div className="relative flex items-center justify-center h-20 w-full border-b border-[#90caf9]">
          <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <img
              src="https://res.cloudinary.com/dxrwnc5g4/image/upload/v1753901040/gcintle/resume/GC_Transparent_Logo.png"
              alt="GC Logo"
              className="h-7 w-auto"
            />
            <span className="font-extrabold text-lg tracking-tight whitespace-nowrap leading-none">
              <span className="text-blue-900">GC&nbsp;</span>
              <span className="text-[#e41f26]">International</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-[#003b71] hover:text-[#e41f26] transition"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Mobile nav links */}
        <div className="flex-1 flex flex-col gap-6 items-center justify-center px-4 py-6 overflow-y-auto">
          {links.map((link) => {
            const isActive =
              path &&
              (path === link.href ||
                (link.href !== "/" && path.startsWith(link.href)));

            return (
              <a
                key={link.href}
                href={link.href}
                className={`no-underline hover:no-underline transition text-xl
                  ${isActive ? "text-[#e41f26] font-extrabold" : "text-[#003b71] font-semibold"}`}
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
