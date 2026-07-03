import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7bf62] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15110d]",
        variant === "primary"
          ? "bg-[#f7bf62] text-[#20150c] shadow-[0_8px_24px_rgba(247,191,98,0.18)] hover:bg-[#ffd180]"
          : "border border-[#f6e9cf]/18 bg-[#f6e9cf]/7 text-[#fff8ec] hover:border-[#f7bf62]/45 hover:bg-[#f6e9cf]/11",
      )}
    >
      {children}
    </Link>
  );
}
