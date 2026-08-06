"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { GetStartedFormData } from "@/lib/get-started-types";

type Props = {
  data: GetStartedFormData;
  errors: Record<string, string>;
  onChange: (field: keyof GetStartedFormData, value: string) => void;
};

export function StepCompany({ data, errors, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="companyName">Company name</Label>
        <Input
          id="companyName"
          placeholder="Acme Inc."
          value={data.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          aria-invalid={!!errors.companyName}
        />
        {errors.companyName && (
          <p className="text-sm text-destructive">{errors.companyName}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">
          Website <span className="text-muted-foreground font-normal">(optional)</span>
        </Label>
        <Input
          id="website"
          placeholder="https://acme.com"
          value={data.website}
          onChange={(e) => onChange("website", e.target.value)}
          aria-invalid={!!errors.website}
        />
        {errors.website && <p className="text-sm text-destructive">{errors.website}</p>}
      </div>
    </div>
  );
}