import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "cyan" | "green" | "amber" | "neutral";
};

const tones = {
  cyan: "border-[#8ddfd3]/35 bg-[#8ddfd3]/12 text-[#d6fffa]",
  green: "border-[#b8df8d]/35 bg-[#b8df8d]/12 text-[#ecffd8]",
  amber: "border-[#f7bf62]/40 bg-[#f7bf62]/14 text-[#ffe3ad]",
  neutral: "border-[#f6e9cf]/16 bg-[#f6e9cf]/8 text-[#f6e9cf]",
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.72rem] font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
