export type SystemDesignTopic = {
  title: string;
  description: string;
  tags: string[];
};

export const systemDesignTopics: SystemDesignTopic[] = [
  {
    title: "Human-in-the-loop AI Interfaces",
    description:
      "Designing product flows where AI can propose actions while people keep control over commitment.",
    tags: ["approval", "undo", "intent"],
  },
  {
    title: "Frontend State Boundaries",
    description:
      "Modeling UI state, derived data, async status, and interaction history without overfitting the first prototype.",
    tags: ["state", "events", "resilience"],
  },
  {
    title: "Progressive Graphics Architecture",
    description:
      "Planning WebGPU and canvas experiences that still load quickly and communicate clearly without advanced GPU support.",
    tags: ["fallbacks", "performance", "graphics"],
  },
];
