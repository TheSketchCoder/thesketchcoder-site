export type WorkbenchItem = {
  title: string;
  description: string;
  mode: "Tool" | "Builder" | "Playground";
};

export const workbenchItems: WorkbenchItem[] = [
  {
    title: "CSS Atmosphere Generator",
    description:
      "A visual control surface for composing glow, grain, depth, and responsive atmospheric layers.",
    mode: "Tool",
  },
  {
    title: "AI UI State Generator",
    description:
      "A state-mapping sketchpad for empty, loading, error, approval, and completed AI interaction states.",
    mode: "Tool",
  },
  {
    title: "Human Approval Flow Builder",
    description:
      "A pattern builder for reviewing, confirming, delaying, and undoing high-impact AI actions.",
    mode: "Builder",
  },
  {
    title: "AI Response Schema Designer",
    description:
      "A structured-output drafting tool for aligning interface states with predictable AI response shapes.",
    mode: "Builder",
  },
  {
    title: "WebGPU Particle Playground",
    description:
      "A future graphics playground for particle systems, compute shaders, and graceful fallback paths.",
    mode: "Playground",
  },
];
