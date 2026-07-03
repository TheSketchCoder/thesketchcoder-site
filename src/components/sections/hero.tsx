import { Button } from "@/components/ui/button";
import { CodeWindow } from "@/components/ui/code-window";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(247,191,98,0.13),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(141,223,211,0.08),transparent_30%)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f7bf62]">
            Field notes for experimental interfaces
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#fff8ec] sm:text-6xl">
            TheSketchCoder <span className="sketch-underline">Labs</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d9c8ad]">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/workbench">Open Workbench</Button>
            <Button href="/writing" variant="secondary">
              Read Research Notes
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-[#f7bf62]/10 blur-3xl" />
          <svg
            className="absolute -right-3 -top-5 h-24 w-24 text-[#f7bf62]/55"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M24 74c20-36 47-48 72-35M63 21c8 10 12 21 12 35M33 92c18-10 38-12 60-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <CodeWindow
            title="notebook.manifest"
            lines={[
              "brand: TheSketchCoder Labs",
              "mode: quiet_public_lab",
              "focus: ai_ux | systems | browser_graphics",
              "method: sketch -> prototype -> note",
              "v0: static_fast_accessible",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
