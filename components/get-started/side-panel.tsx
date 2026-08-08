import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "A dedicated point of contact from day one",
  "Clear timelines and transparent pricing",
  "Work tailored to your goals, not templates",
];

export function GetStartedSidePanel() {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 xl:w-2/5 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/50" aria-hidden="true" />

      <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">
        <div>
          <span className="text-sm font-medium tracking-wide uppercase">
            Get Started
          </span>
          <h1 className="mt-4 text-3xl xl:text-4xl font-semibold leading-tight text-balance">
            Let&apos;s build something worth talking about.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-md">
            Tell us a bit about you and your project. It takes about two
            minutes, and we&apos;ll get back to you within one business day.
          </p>
        </div>

        <ul className="space-y-4 mt-10">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-10 w-10 shrink-0 mt-0.5 text-primary bg-primary/10 p-2 rounded-md" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-background/60 mt-10">
          Your information is kept confidential and only used to prepare
          your proposal.
        </p>
      </div>
    </div>
  );
}