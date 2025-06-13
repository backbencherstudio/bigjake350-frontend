"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = ["Home", "About", "Resources", "FAQ", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (item: string) => {
    if (item.toLowerCase() === "home") {
      return pathname === "/";
    }
    return pathname === `/${item.toLowerCase()}`;
  };

  return (
    <nav className="w-full border-b border-gray-300  py-4 bg-white sticky top-0 z-50">
      <div className="container px-5 2xl:px-0 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-semibold font-serif text-green-700">NOTARY NEXUS</h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-base">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={`transition-colors duration-200 font-medium ${isActive(item) ? "text-[#3e813e]  border-b border-[#3e813e]" : "hover:text-teal-600"
                  }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col items-start gap-3 px-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={`block py-1 transition-colors duration-200 ${isActive(item) ? "text-[#3e813e]" : ""
                  }`}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
