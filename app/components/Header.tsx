"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 h-24">
      <div className="flex justify-between items-center px-16 h-full w-full max-w-screen-2xl mx-auto">
        <Link href="/" className="text-lg font-light tracking-[0.3em] text-neutral-900 uppercase font-headline-md">
          DORSETE MAIDSTONE LTD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-manrope tracking-[0.2em] uppercase text-xs font-semibold transition-colors duration-300 ${
                isActive(item.path)
                  ? "text-[#bfa05a] border-b border-[#bfa05a] pb-1"
                  : "text-neutral-500 hover:text-[#bfa05a]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          <span className="material-symbols-outlined text-neutral-900">menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-8 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className={`font-manrope tracking-[0.2em] uppercase text-xs font-semibold py-2 ${
                isActive(item.path)
                  ? "text-[#bfa05a]"
                  : "text-neutral-500 hover:text-[#bfa05a]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}