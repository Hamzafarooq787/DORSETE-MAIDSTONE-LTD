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
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100 h-20 md:h-24">
      <div className="flex justify-between items-center px-6 md:px-16 h-full w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm md:text-base font-light tracking-[0.3em] text-neutral-900 uppercase font-sans"
        >
          DORSETE MAIDSTONE LTD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-sans tracking-[0.2em] uppercase text-xs font-semibold transition-colors duration-300 ${
                isActive(item.path)
                  ? "text-primary border-b border-primary pb-1"
                  : "text-neutral-500 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-neutral-900">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className={`font-sans tracking-[0.2em] uppercase text-xs font-semibold py-2 ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-neutral-500 hover:text-primary"
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