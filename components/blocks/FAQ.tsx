import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope, but most MVPs launch in 6-10 weeks and larger enterprise builds run 3-6 months. We'll give you a realistic estimate after the initial requirements workshop, not before.",
  },
  {
    question: "How do you price a project?",
    answer:
      "Fixed-scope projects are quoted as a flat price after discovery. Ongoing or evolving work runs on a monthly retainer. We avoid open-ended hourly billing since it puts the risk on you, not us.",
  },
  {
    question: "Do you work with early-stage startups or only enterprises?",
    answer:
      "Both. We scope engagements to match where you are lean MVP for a pre-seed startup looks very different from a phased modernization for an enterprise, and we price and staff accordingly.",
  },
  {
    question: "Who owns the code and IP after the project ships?",
    answer:
      "You do. Every contract assigns full IP ownership of custom code to you on final payment. We're also happy to sign an NDA before any detailed discussion of your project.",
  },
  {
    question: "What happens after launch do you offer support?",
    answer:
      "Yes. Every project includes a post-launch support window, and most clients move to an ongoing maintenance retainer afterward for monitoring, updates, and small feature work.",
  },
  {
    question: "Can you work with our existing codebase or team?",
    answer:
      "Regularly. We can slot in alongside an existing engineering team, take over a legacy codebase, or integrate with systems you're already running a technical audit is usually the first step.",
  },
]

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Common Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Answers to what most clients ask before starting a project.
            Don&apos;t see yours just ask us directly.
          </p>
        </div>

        <Accordion className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}