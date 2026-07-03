import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function SystemDesignPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-[4.5rem] sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Graphics track"
          title="Browser graphics, planned gently."
          description="V0 stays readable and fast. GPU-powered pieces can arrive later as enhancement, not as a requirement."
        />
        <Card>
          <div className="flex flex-wrap gap-2">
            <Badge tone="cyan">WebGPU</Badge>
            <Badge tone="green">Particles</Badge>
            <Badge tone="amber">Fallbacks</Badge>
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[#fff8ec]">
            WebGPU Fireflies and Particle Playground
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
            The graphics track will explore particle simulations, procedural
            fields, and GPU-backed visual systems after the static portfolio is
            stable.
          </p>
          <Link
            href="/system-design"
            className="mt-5 inline-flex text-sm font-semibold text-[#ffe3ad] hover:text-[#fff8ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
          >
            View design notes
          </Link>
        </Card>
      </div>
    </section>
  );
}
