import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-lg border border-[#6f563e]/45 bg-[#211a13]/82 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:rotate-[0.15deg] hover:border-[#f7bf62]/60 hover:bg-[#261d14]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#f7bf62]/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-full border border-[#f6e9cf]/10 opacity-40 transition group-hover:scale-110 group-hover:opacity-70" />
      {children}
    </article>
  );
}
