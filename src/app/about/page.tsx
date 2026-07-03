import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anonymous public positioning for TheSketchCoder Labs.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="An anonymous lab for technical experiments."
        description={site.tagline}
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="text-xl font-semibold text-[#fff8ec]">
            Public principles
          </h2>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-[#d9c8ad]">
            <p>
              TheSketchCoder Labs is a public surface for experiments, notes,
              and prototypes. The brand is intentionally separate from personal
              identity.
            </p>
            <p>
              The work focuses on calm AI-enabled interfaces, resilient frontend
              systems, and browser graphics that remain fast and accessible.
            </p>
            <p>
              V0 avoids analytics, authentication, databases, AI APIs, and
              WebGL/WebGPU runtime code. The priority is a polished static
              foundation.
            </p>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-[#fff8ec]">Current scope</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="cyan">AI UX</Badge>
            <Badge tone="green">System Design</Badge>
            <Badge tone="amber">Browser Graphics</Badge>
            <Badge>MDX Writing</Badge>
            <Badge>Static Site</Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
