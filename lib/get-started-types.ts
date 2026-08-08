// Path: lib/get-started-types.ts
export type GetStartedFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  service: string;
  details: string;
  budget: string;
  timeline: string;
};

export const initialFormData: GetStartedFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  website: "",
  service: "",
  details: "",
  budget: "",
  timeline: "",
};

export type StepId = 1 | 2 | 3 | 4;

export const STEPS: { id: StepId; title: string; description: string }[] = [
  { id: 1, title: "Your Details", description: "Let's start with the basics" },
  { id: 2, title: "Your Company", description: "Tell us about your business" },
  { id: 3, title: "Your Project", description: "What are you looking to build" },
  { id: 4, title: "Review", description: "Check everything before you submit" },
];

export const SERVICE_OPTIONS = [
  "Web Design & Development",
  "Branding & Identity",
  "SEO & Marketing",
  "Product / SaaS Build",
  "Consulting",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under ₵5k",
  "₵5k - ₵10k",
  "₵10k - ₵20k",
  "₵20k - ₵50k",
  "₵50k+",
];

export const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "Just exploring",
];

export function validateStep(step: StepId, data: GetStartedFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!data.firstName.trim()) errors.firstName = "First name is required";
    if (!data.lastName.trim()) errors.lastName = "Last name is required";
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!data.phone.trim()) errors.phone = "Phone number is required";
  }

  if (step === 2) {
    if (!data.companyName.trim()) errors.companyName = "Company name is required";
  }

  if (step === 3) {
    if (!data.service.trim()) errors.service = "Please select a service";
    if (!data.details.trim()) errors.details = "Please add a few details about your project";
    if (!data.budget.trim()) errors.budget = "Please select a budget range";
    if (!data.timeline.trim()) errors.timeline = "Please select a timeline";
  }

  return errors;
}