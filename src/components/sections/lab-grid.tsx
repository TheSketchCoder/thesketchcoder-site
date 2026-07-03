import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";
import { labs } from "@/content/labs";

export function LabGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-[4.5rem] sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Labs"
        title="Experiments with a narrow question."
        description="Each lab is framed as a useful inquiry, ready to become a prototype, writeup, or visual demo."
      />
      <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab, index) => (
          <Card key={lab.title}>
            <div className="flex items-center justify-between gap-3">
              <Badge tone={lab.accent}>{lab.category}</Badge>
              <span className="flex items-center gap-2 font-mono text-xs text-[#bda98a]">
                <StatusDot tone={lab.accent} />
                {lab.status}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#fff8ec]">
              {lab.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
              {lab.description}
            </p>
            <p className="mt-5 font-mono text-xs text-[#bda98a]">
              lab note #{String(index + 1).padStart(2, "0")}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
