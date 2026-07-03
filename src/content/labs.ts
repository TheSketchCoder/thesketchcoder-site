export type Lab = {
  title: string;
  description: string;
  status: "Concept" | "Prototype" | "Research";
  category: string;
  accent: "cyan" | "green" | "amber";
};

export const labs: Lab[] = [
  {
    title: "RoomWise AI",
    description:
      "AI-powered home design decision studio for comparing layouts, constraints, and material directions.",
    status: "Concept",
    category: "AI UX",
    accent: "cyan",
  },
  {
    title: "AI Command Palette",
    description:
      "Intent-based UI navigation experiment for turning fuzzy user goals into precise interface actions.",
    status: "Prototype",
    category: "Interaction",
    accent: "green",
  },
  {
    title: "Human Approval Flow",
    description:
      "Safe action patterns for AI interfaces that need confirmation, reversibility, and clear responsibility.",
    status: "Research",
    category: "AI Safety UX",
    accent: "amber",
  },
  {
    title: "WebGPU Fireflies",
    description:
      "GPU-powered particle simulation planned as a progressive enhancement for browser graphics experiments.",
    status: "Concept",
    category: "Browser Graphics",
    accent: "cyan",
  },
  {
    title: "Kolam Generator",
    description:
      "Procedural visual system inspired by symmetry, constraint-based drawing, and generative pattern rules.",
    status: "Prototype",
    category: "Generative UI",
    accent: "green",
  },
];
