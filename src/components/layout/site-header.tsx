import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f6e9cf]/10 bg-[#15110d]/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-md font-mono text-sm font-semibold text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
        >
          TheSketchCoder<span className="text-[#f7bf62]"> Labs</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-[#d9c8ad] transition hover:bg-[#f6e9cf]/7 hover:text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-md border border-[#f6e9cf]/14 bg-[#f6e9cf]/7 px-3 py-2 text-sm font-medium text-[#ffe3ad] transition hover:border-[#f7bf62]/45 hover:bg-[#f7bf62]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
          >
            GitHub
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
