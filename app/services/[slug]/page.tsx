import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services, getServiceBySlug } from "@/lib/services-data"

const SITE_URL = "https://manaztech.com"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Pre-render every service page at build time.
export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return { title: "Service not found" }

  const title = `${service.title} | Manaz Technologies & Solutions`
  const description = service.summary

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [{ url: service.image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()
  const currentIndex = services.findIndex((s) => s.slug === slug)
  const nextService = services[(currentIndex + 1) % services.length]

  // Structured data for search engines (schema.org Service)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: "Manaz Technologies & Solutions",
      url: SITE_URL,
    },
    areaServed: "Global",
    url: `${SITE_URL}/services/${service.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {service.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
              {service.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Related technologies">
              {service.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </header>

          {/* Hero image */}
          <figure className="mt-10 overflow-hidden rounded-2xl border shadow-xl">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
              sizes="(min-width: 1024px) 800px, 100vw"
            />
          </figure>

          {/* Overview */}
          <section aria-labelledby="overview-heading" className="mt-12">
            <h2 id="overview-heading" className="text-2xl font-semibold tracking-tight">
              Overview
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground text-pretty">
              {service.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Key features */}
          <section aria-labelledby="features-heading" className="mt-12">
            <h2 id="features-heading" className="text-2xl font-semibold tracking-tight">
              What&apos;s Included
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature.title} className="flex gap-3 rounded-xl border bg-card p-5">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold">{feature.title}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground text-pretty">
                      {feature.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </section>

          {/* Process */}
          <section aria-labelledby="process-heading" className="mt-12">
            <h2 id="process-heading" className="text-2xl font-semibold tracking-tight">
              How We Approach It
            </h2>
            <ol className="mt-6 space-y-4">
              {service.process.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span className="mt-1 text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Technologies */}
          <section aria-labelledby="tech-heading" className="mt-12">
            <h2 id="tech-heading" className="text-2xl font-semibold tracking-tight">
              Technologies We Use
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technology stack">
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border bg-muted/40 px-3.5 py-1.5 text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section
            aria-labelledby="cta-heading"
            className="mt-16 rounded-2xl border bg-primary/5 p-8 text-center sm:p-10"
          >
            <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight">
              Ready to start your {service.title.toLowerCase()} project?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground text-pretty">
              Tell us about your goals and we&apos;ll get back to you within 24
              hours.
            </p>
              <Link href="/#contact">
                <Button size="lg" className="mt-6 group">
                    Start a Conversation
                    <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
          </section>

          {/* Footer nav */}
          <nav
            aria-label="Service navigation"
            className="mt-12 flex items-center justify-between border-t pt-8"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All Services
            </Link>
            <Link
              href={`/services/${nextService.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Next: {nextService.title}
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      </article>
    </>
  )
}