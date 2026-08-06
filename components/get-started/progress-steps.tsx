"use client";

import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { STEPS, type StepId } from "@/lib/get-started-types";
import { cn } from "@/lib/utils";

export function ProgressSteps({ currentStep }: { currentStep: StepId }) {
  const percentage = (currentStep / STEPS.length) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">
          Step {currentStep} of {STEPS.length}
        </span>
        <span className="text-muted-foreground">
          {STEPS[currentStep - 1].title}
        </span>
      </div>

      <Progress value={percentage} className="h-2" />

      <div className="hidden sm:flex items-center justify-between pt-1">
        {STEPS.map((step, idx) => {
          const isComplete = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full border text-xs font-medium transition-colors",
                    isComplete && "bg-primary border-primary text-primary-foreground",
                    isActive && "border-primary text-primary",
                    !isComplete && !isActive && "border-muted-foreground/30 text-muted-foreground"
                  )}
                >
                  {isComplete ? <Check className="h-3.5 w-3.5" /> : step.id}
                </div>
                <span
                  className={cn(
                    "text-[11px] whitespace-nowrap",
                    isActive ? "text-foreground font-medium" : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-px flex-1 mx-2 -mt-4.5",
                    isComplete ? "bg-primary" : "bg-muted-foreground/20"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}