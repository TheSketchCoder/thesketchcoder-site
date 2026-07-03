import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";
import { labs } from "@/content/labs";

export const metadata: Metadata = {
  title: "Labs",
  description:
    "Prototype index for TheSketchCoder Labs experiments in AI UX and browser graphics.",
};

export default function LabsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Labs"
        title="Experiment cards for future public builds."
        description="A static index of planned prototypes and research threads. Each item can grow into a case study, demo, or technical note."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {labs.map((lab) => (
          <Card key={lab.title}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge tone={lab.accent}>{lab.category}</Badge>
              <span className="flex items-center gap-2 font-mono text-xs text-[#bda98a]">
                <StatusDot tone={lab.accent} />
                {lab.status}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-semibold text-[#fff8ec]">
              {lab.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
              {lab.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
