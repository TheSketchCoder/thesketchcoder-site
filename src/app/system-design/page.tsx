import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { systemDesignTopics } from "@/content/system-design";

export const metadata: Metadata = {
  title: "System Design",
  description:
    "System design notes for AI UX, frontend architecture, and browser graphics.",
};

export default function SystemDesignPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="System design"
        title="Architecture notes for experimental interfaces."
        description="A place for clear tradeoffs, diagrams, and implementation boundaries across AI UX and browser-native graphics."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {systemDesignTopics.map((topic) => (
          <Card key={topic.title}>
            <div className="flex flex-wrap gap-2">
              {topic.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#fff8ec]">
              {topic.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#d9c8ad]">
              {topic.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
