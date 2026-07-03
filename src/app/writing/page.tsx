import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "MDX-ready writing area for TheSketchCoder Labs technical notes.",
};

const placeholders = [
  "Designing approval states for AI interfaces",
  "A small taxonomy of intent-based command palettes",
  "Planning browser graphics as progressive enhancement",
];

export default function WritingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Writing"
        title="Technical notes, without personal disclosure."
        description="The writing surface is ready for MDX posts. V0 uses placeholders until public essays are drafted."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {placeholders.map((title) => (
          <Card key={title}>
            <Badge tone="amber">Planned MDX</Badge>
            <h2 className="mt-5 text-lg font-semibold text-[#fff8ec]">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
              Placeholder entry for a future article focused on public technical
              ideas and experiment design.
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
