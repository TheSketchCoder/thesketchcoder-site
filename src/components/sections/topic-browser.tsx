import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const topics = [
  {
    label: "AI-enabled UX",
    href: "/labs",
    note: "Interfaces that make intent, review, and control visible.",
    tone: "cyan" as const,
  },
  {
    label: "System Design",
    href: "/system-design",
    note: "Tradeoffs, boundaries, and diagrams for frontend systems.",
    tone: "amber" as const,
  },
  {
    label: "Browser Graphics",
    href: "/labs",
    note: "Procedural visuals and GPU plans with static fallbacks.",
    tone: "green" as const,
  },
  {
    label: "Writing",
    href: "/writing",
    note: "Compact field notes that explain what each experiment teaches.",
    tone: "neutral" as const,
  },
];

export function TopicBrowser() {
  return (
    <section className="border-t border-[#f6e9cf]/10 bg-[#f6e9cf]/[0.025]">
      <div className="mx-auto max-w-6xl px-4 py-[4.5rem] sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse by topic"
          title="Pick a thread, then follow the notes."
          description="The site is organized around questions rather than a timeline, keeping the public brand focused and anonymous."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62]"
            >
              <Card className="h-full">
                <Badge tone={topic.tone}>{topic.label}</Badge>
                <p className="mt-5 text-sm leading-6 text-[#d9c8ad]">
                  {topic.note}
                </p>
                <p className="mt-6 font-mono text-xs text-[#ffe3ad]">
                  browse thread -&gt;
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
