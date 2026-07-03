import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function WritingPreview() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-[4.5rem] sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <SectionHeading
        eyebrow="Research notes"
        title="Short explanations before grand essays."
        description="MDX is ready for compact notes about patterns, tradeoffs, and small discoveries from the lab."
      />
      <Card>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f7bf62]">
          Draft shelf
        </p>
        <h3 className="mt-4 text-xl font-semibold text-[#fff8ec]">
          Research notes prepared for future posts
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
          Future writing stays focused on public experiments, interface
          patterns, and technical decisions without identity-linked background
          detail.
        </p>
        <div className="mt-5 grid gap-2 font-mono text-xs text-[#bda98a]">
          <span>01 / approval states for AI actions</span>
          <span>02 / command palettes as intent translators</span>
          <span>03 / graphics that degrade gracefully</span>
        </div>
        <Link
          href="/writing"
          className="mt-5 inline-flex text-sm font-semibold text-[#ffe3ad] hover:text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
        >
          Open writing
        </Link>
      </Card>
    </section>
  );
}
