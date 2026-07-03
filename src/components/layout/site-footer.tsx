import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#f6e9cf]/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-[#fff8ec]">
            {site.name}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#bda98a]">
            {site.tagline}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#bda98a] transition hover:text-[#ffe3ad] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
