import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { workbenchItems } from "@/content/workbench";

export function WorkbenchPreview() {
  return (
    <section className="border-y border-[#f6e9cf]/10 bg-[#f6e9cf]/[0.025]">
      <div className="mx-auto max-w-6xl px-4 py-[4.5rem] sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Workbench"
            title="Tools that start as working notes."
            description="Generators, builders, and playgrounds shaped around one useful question at a time."
          />
          <Link
            href="/workbench"
            className="text-sm font-semibold text-[#ffe3ad] hover:text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
          >
            View workbench
          </Link>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {workbenchItems.map((item, index) => (
            <Card className="lg:p-4" key={item.title}>
              <p className="mb-4 font-mono text-xs text-[#bda98a]">
                sketch {String(index + 1).padStart(2, "0")}
              </p>
              <Badge>{item.mode}</Badge>
              <h3 className="mt-4 text-base font-semibold text-[#fff8ec]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
