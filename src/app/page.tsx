import { Hero } from "@/components/sections/hero";
import { LabGrid } from "@/components/sections/lab-grid";
import { TopicBrowser } from "@/components/sections/topic-browser";
import { SystemDesignPreview } from "@/components/sections/system-design-preview";
import { WorkbenchPreview } from "@/components/sections/workbench-preview";
import { WritingPreview } from "@/components/sections/writing-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkbenchPreview />
      <WritingPreview />
      <LabGrid />
      <SystemDesignPreview />
      <TopicBrowser />
    </>
  );
}
