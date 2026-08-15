import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import FAQ from "@/components/blocks/FAQ";
import { ArrowRight, Eye, Target } from "lucide-react";
import { values } from "@/data/values";
import { milestones } from "@/data/milestones";

const SITE_URL = "https://manaztech.com"
const PAGE_TITLE = "About Us"
const PAGE_DESCRIPTION =
  "Manaz Technologies & Solutions is a technology company building custom software, mobile apps, and cloud infrastructure for startups and enterprises. Learn about our story, values, and approach."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "about Manaz Technologies",
    "software development company",
    "custom software company Ghana",
    "digital transformation partner",
    "technology consulting company",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
  },
}





export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Manaz Technologies & Solutions",
      url: SITE_URL,
      description: PAGE_DESCRIPTION,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-primary">About Us</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Forward-thinking technology, built with intent
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
              We&apos;re a technology company dedicated to delivering innovative
              software solutions that empower startups and enterprises to
              thrive in the digital age.
            </p>
          </div>
        </header>

        <section aria-labelledby="story-heading" className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border shadow-xl">
                  <Image
                    src="/assets/modern-tech-team.jpg"
                    alt="Manaz Technologies & Solutions team collaborating on a client project"
                    width={640}
                    height={520}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </div>
              </div>

              <div>
                <h2
                  id="story-heading"
                  className="text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  Our Story
                </h2>
                <div className="mt-5 space-y-4 text-muted-foreground text-pretty">
                  <p>
                    Manaz Technologies & Solutions was founded on a simple
                    observation: most businesses don&apos;t need more software,
                    they need software built around how they actually work.
                    Too many technology projects start with a template and
                    force the business to adapt to it. We start with the
                    business and build the technology to fit.
                  </p>
                  <p>
                    What began as custom development work for individual
                    startups has grown into a full-service technology
                    practice, spanning software development, mobile and web
                    applications, cloud infrastructure, IT consulting,
                    automation, and digital transformation — each treated as
                    part of one coherent engineering discipline rather than
                    disconnected service lines.
                  </p>
                  <p>
                    Today, we partner with founders validating a first idea
                    and enterprises modernizing systems that have run for a
                    decade — bringing the same rigor to both: clear
                    architecture, honest communication, and code built to
                    last past launch day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section
          aria-labelledby="mission-heading"
          className="border-y bg-muted/20 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="mission-heading" className="sr-only">
              Our Mission and Vision
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-8">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  Our Mission
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty">
                  To make enterprise-grade software engineering accessible to
                  businesses of every size — helping startups build their
                  first product right, and helping established companies
                  modernize without disrupting what already works.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-8">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  Our Vision
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty">
                  To be the technology partner businesses return to for
                  every stage of growth — not a vendor hired once, but a
                  long-term collaborator trusted with increasingly critical
                  systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section aria-labelledby="values-heading" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-primary">What We Stand For</p>
              <h2
                id="values-heading"
                className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Our Core Values
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                The principles that guide every engagement, from a two-week
                MVP to a year-long enterprise partnership.
              </p>
            </div>

            <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <dt className="mt-4 font-semibold">{value.title}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground text-pretty">
                    {value.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="journey-heading"
          className="border-y bg-muted/20 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-primary">Our Journey</p>
              <h2
                id="journey-heading"
                className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                How We Got Here
              </h2>
            </div>

            <ol className="mt-14 space-y-10">
              {milestones.map((milestone) => (
                <li key={milestone.title} className="flex gap-5">
                  <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-semibold text-primary">
                    {milestone.year.slice(0, 2)}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {milestone.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {milestone.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <FAQ />

        <section
          aria-labelledby="about-cta-heading"
          className="py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              id="about-cta-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Want to work with a team that thinks this way?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
              Tell us about your project and we&apos;ll get back to you within 24
              hours.
            </p>
              <Link href="/contact">
                <Button size="lg" className="mt-7 group">
                    Start a Conversation
                    <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
          </div>
        </section>
      </article>
    </>
  )
}