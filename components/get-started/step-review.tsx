"use client";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { GetStartedFormData, StepId } from "@/lib/get-started-types";

type Props = {
  data: GetStartedFormData;
  onEdit: (step: StepId) => void;
};

function ReviewRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4 py-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

function ReviewSection({
  title,
  step,
  onEdit,
  children,
}: {
  title: string;
  step: StepId;
  onEdit: (step: StepId) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={() => onEdit(step)}
        >
          <Pencil className="h-3 w-3 mr-1" />
          Edit
        </Button>
      </div>
      <Separator className="mb-2" />
      {children}
    </div>
  );
}

export function StepReview({ data, onEdit }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Double-check your details below. You can edit any section before
        submitting.
      </p>

      <ReviewSection title="Your Details" step={1} onEdit={onEdit}>
        <ReviewRow label="Name" value={`${data.firstName} ${data.lastName}`.trim()} />
        <ReviewRow label="Email" value={data.email} />
        <ReviewRow label="Phone" value={data.phone} />
      </ReviewSection>

      <ReviewSection title="Your Company" step={2} onEdit={onEdit}>
        <ReviewRow label="Company" value={data.companyName} />
        <ReviewRow label="Website" value={data.website || "—"} />
      </ReviewSection>

      <ReviewSection title="Your Project" step={3} onEdit={onEdit}>
        <ReviewRow label="Service" value={data.service} />
        <ReviewRow label="Budget" value={data.budget} />
        <ReviewRow label="Timeline" value={data.timeline} />
        {data.details && (
          <div className="pt-2">
            <p className="text-muted-foreground text-sm mb-1">Details</p>
            <p className="text-sm leading-relaxed">{data.details}</p>
          </div>
        )}
      </ReviewSection>
    </div>
  );
}