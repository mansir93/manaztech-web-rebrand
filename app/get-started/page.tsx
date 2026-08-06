import { GetStartedSidePanel } from "@/components/get-started/side-panel";
import { GetStartedFlow } from "@/components/get-started/get-started-flow";

export const metadata = {
  title: "Get Started",
  description: "Tell us about your project and we'll get back to you within one business day.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen flex">
      <GetStartedSidePanel />

      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <GetStartedFlow />
      </div>
    </main>
  );
}