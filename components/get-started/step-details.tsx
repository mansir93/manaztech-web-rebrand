"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { GetStartedFormData } from "@/lib/get-started-types";

type Props = {
  data: GetStartedFormData;
  errors: Record<string, string>;
  onChange: (field: keyof GetStartedFormData, value: string) => void;
};

export function StepDetails({ data, errors, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            placeholder="Ama"
            value={data.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            placeholder="Owusu"
            value={data.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="ama@company.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+233 20 000 0000"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
      </div>
    </div>
  );
}