import { useState } from "react";
import { twMerge } from "tailwind-merge"; // Optional for class merging

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Company", href: "/company" },
    { label: "G&C Network Map", href: "/network" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-wide text-gray-800">
          GC International
        </div>
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={twMerge(
            "hidden sm:flex gap-6 text-gray-700 font-medium",
            isOpen &&
              "block absolute top-16 left-0 w-full bg-white p-4 sm:hidden"
          )}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
