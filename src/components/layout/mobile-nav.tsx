"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex min-h-10 items-center rounded-md border border-[#f6e9cf]/14 bg-[#f6e9cf]/7 px-3 text-sm font-medium text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        Menu
      </button>
      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-4 top-16 rounded-lg border border-[#f6e9cf]/14 bg-[#1a140f]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur"
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-[#d9c8ad] hover:bg-[#f6e9cf]/8 hover:text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-[#ffe3ad] hover:bg-[#f7bf62]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
            >
              GitHub
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
