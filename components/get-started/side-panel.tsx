import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "A dedicated point of contact from day one",
  "Clear timelines and transparent pricing",
  "Work tailored to your goals, not templates",
];

export function GetStartedSidePanel() {
  return (
    <div className="relative hidden overflow-hidden lg:flex lg:w-1/2 xl:w-2/5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
        <div>
          <span className="text-sm font-medium tracking-wide text-white uppercase">
            Get Started
          </span>
          <h1 className="mt-4 text-3xl leading-tight font-semibold text-balance text-white xl:text-4xl">
            Let&apos;s build something worth talking about.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
            Tell us a bit about you and your project. It takes about two
            minutes, and we&apos;ll get back to you within one business day.
          </p>
        </div>

        <ul className="mt-10 space-y-4">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="text-primary bg-primary/20 border-primary mt-0.5 h-10 w-10 shrink-0 rounded-md border p-2" />
              <span className="text-sm text-white">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs text-white/80">
          Your information is kept confidential and only used to prepare your
          proposal.
        </p>
      </div>
    </div>
  );
}
