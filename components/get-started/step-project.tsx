"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  type GetStartedFormData,
} from "@/lib/get-started-types";

type Props = {
  data: GetStartedFormData;
  errors: Record<string, string>;
  onChange: (field: keyof GetStartedFormData, value: string) => void;
};

export function StepProject({ data, errors, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="service">Service you&apos;re interested in</Label>
        <Select value={data.service} onValueChange={(v) => onChange("service", v ?? "")}>
          <SelectTrigger id="service" aria-invalid={!!errors.service}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project details</Label>
        <Textarea
          id="details"
          placeholder="Tell us a bit about what you're looking to build..."
          rows={4}
          value={data.details}
          onChange={(e) => onChange("details", e.target.value)}
          aria-invalid={!!errors.details}
        />
        {errors.details && <p className="text-sm text-destructive">{errors.details}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget</Label>
          <Select value={data.budget} onValueChange={(v) => onChange("budget", v ?? "")}>
            <SelectTrigger id="budget" aria-invalid={!!errors.budget}>
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {BUDGET_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && <p className="text-sm text-destructive">{errors.budget}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Timeline</Label>
          <Select value={data.timeline} onValueChange={(v) => onChange("timeline", v ?? "")}>
            <SelectTrigger id="timeline" aria-invalid={!!errors.timeline}>
              <SelectValue placeholder="Select a timeline" />
            </SelectTrigger>
            <SelectContent>
              {TIMELINE_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="text-sm text-destructive">{errors.timeline}</p>
          )}
        </div>
      </div>
    </div>
  );
}