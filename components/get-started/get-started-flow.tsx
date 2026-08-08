// Path: components/get-started/get-started-flow.tsx
"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProgressSteps } from "./progress-steps";
import { StepDetails } from "./step-details";
import { StepCompany } from "./step-company";
import { StepProject } from "./step-project";
import { StepReview } from "./step-review";
import {
  initialFormData,
  STEPS,
  validateStep,
  type GetStartedFormData,
  type StepId,
} from "@/lib/get-started-types";

// Your FormSubmit.co endpoint (email or hashed form ID).
const FORMSUBMIT_ACTION = "https://formsubmit.co/manaztechnology@gmail.com";

export function GetStartedFlow() {
  const [step, setStep] = useState<StepId>(1);
  const [data, setData] = useState<GetStartedFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(field: keyof GetStartedFormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function goNext() {
    if (step === 4) return;
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => (s + 1) as StepId);
  }

  function goBack() {
    if (step === 1) return;
    setErrors({});
    setStep((s) => (s - 1) as StepId);
  }

  function goToStep(target: StepId) {
    setErrors({});
    setStep(target);
  }

  return (
    <div className="w-full max-w-xl mx-auto space-y-8">
      <ProgressSteps currentStep={step} />

      <Card>
        <CardHeader>
          <CardTitle>{STEPS[step - 1].title}</CardTitle>
          <CardDescription>{STEPS[step - 1].description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={FORMSUBMIT_ACTION}
            method="POST"
            // onSubmit={handleFormSubmit}
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New project inquiry — ManazTech website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            {/* Hidden fields carry data collected on earlier steps so the
               single native form submission includes everything. */}
            <input type="hidden" name="First Name" value={data.firstName} />
            <input type="hidden" name="Last Name" value={data.lastName} />
            <input type="hidden" name="Email" value={data.email} />
            <input type="hidden" name="Phone" value={data.phone} />
            <input type="hidden" name="Company Name" value={data.companyName} />
            <input type="hidden" name="Website" value={data.website} />
            <input type="hidden" name="Service" value={data.service} />
            <input type="hidden" name="Project Details" value={data.details} />
            <input type="hidden" name="Budget" value={data.budget} />
            <input type="hidden" name="Timeline" value={data.timeline} />

            {step === 1 && (
              <StepDetails data={data} errors={errors} onChange={handleChange} />
            )}
            {step === 2 && (
              <StepCompany data={data} errors={errors} onChange={handleChange} />
            )}
            {step === 3 && (
              <StepProject data={data} errors={errors} onChange={handleChange} />
            )}
            {step === 4 && <StepReview data={data} onEdit={goToStep} />}

            <div className="flex items-center justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                disabled={step === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-1.5" />
                Back
              </Button>

              {step < 4 ? (
                <Button onClick={goNext}>
                  Continue
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              ) : (
                <Button type="submit">
                  Submit
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}