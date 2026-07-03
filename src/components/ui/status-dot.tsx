import { cn } from "@/lib/cn";

type StatusDotProps = {
  tone?: "cyan" | "green" | "amber";
};

const tones = {
  cyan: "bg-[#8ddfd3] shadow-[#8ddfd3]/35",
  green: "bg-[#b8df8d] shadow-[#b8df8d]/35",
  amber: "bg-[#f7bf62] shadow-[#f7bf62]/35",
};

export function StatusDot({ tone = "cyan" }: StatusDotProps) {
  return (
    <span
      className={cn("size-2 rounded-full shadow-[0_0_16px]", tones[tone])}
      aria-hidden="true"
    />
  );
}
