import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { workbenchItems } from "@/content/workbench";

export const metadata: Metadata = {
  title: "Workbench",
  description:
    "Tool and playground queue for TheSketchCoder Labs frontend experiments.",
};

export default function WorkbenchPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Workbench"
        title="Prototype tools for sharper interface thinking."
        description="A practical shelf of future utilities for CSS atmosphere, AI UI state, schema design, approval flows, and GPU particles."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workbenchItems.map((item) => (
          <Card key={item.title}>
            <Badge>{item.mode}</Badge>
            <h2 className="mt-5 text-xl font-semibold text-[#fff8ec]">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
