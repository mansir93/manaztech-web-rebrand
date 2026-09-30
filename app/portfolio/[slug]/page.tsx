import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioProjects, getProjectBySlug } from "@/data/PortfolioProject";

const SITE_URL = "https://manaztech.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render every case study at build time.
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Case study not found" };

  // The title template in app/layout.tsx already appends the company name, so
  // only supply the page-specific part here.
  const title = `${project.title} Case Study`;
  const ogTitle = `${title} | Manaz Technologies & Solutions`;
  const description = project.summary;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/portfolio/${project.slug}` },
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      images: [{ url: project.image }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();
  const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    portfolioProjects[(currentIndex + 1) % portfolioProjects.length];
  const isLive = project.livePreview && project.livePreview !== "#";

  // Structured data for search engines (schema.org CreativeWork).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: `${project.title} — ${project.category}`,
    description: project.summary,
    image: `${SITE_URL}${project.image}`,
    url: `${SITE_URL}/portfolio/${project.slug}`,
    creator: {
      "@type": "Organization",
      name: "Manaz Technologies & Solutions",
      url: SITE_URL,
    },
    about: project.technologies,
    keywords: project.tags.join(", "),
  };

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
            <ol className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/portfolio" className="hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {project.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header>
            <p className="text-primary text-sm font-medium">
              {project.category}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              {project.client}
            </p>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg text-pretty">
              {project.summary}
            </p>
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Related technologies"
            >
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </header>

          {/* Hero image */}
          <figure className="mt-10 overflow-hidden rounded-2xl border shadow-xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
              sizes="(min-width: 1024px) 800px, 100vw"
            />
          </figure>

          {/* Challenge */}
          <section aria-labelledby="challenge-heading" className="mt-12">
            <h2
              id="challenge-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              The Challenge
            </h2>
            <p className="text-muted-foreground mt-4 text-pretty">
              {project.challenge}
            </p>
          </section>

          {/* Solution */}
          <section aria-labelledby="solution-heading" className="mt-12">
            <h2
              id="solution-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Our Solution
            </h2>
            <p className="text-muted-foreground mt-4 text-pretty">
              {project.solution}
            </p>
          </section>

          {/* What shipped */}
          {project.results && project.results.length > 0 && (
            <section aria-labelledby="results-heading" className="mt-12">
              <h2
                id="results-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                What Shipped
              </h2>
              <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="bg-card rounded-xl border p-5"
                  >
                    <dt className="text-muted-foreground text-sm">
                      {result.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-pretty">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* Technologies */}
          <section aria-labelledby="tech-heading" className="mt-12">
            <h2
              id="tech-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Technologies We Used
            </h2>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Technology stack"
            >
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="bg-muted/40 rounded-full border px-3.5 py-1.5 text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          {/* Visit */}
          {isLive && (
            <section
              aria-labelledby="visit-heading"
              className="bg-primary/5 mt-16 rounded-2xl border p-8 text-center sm:p-10"
            >
              <h2
                id="visit-heading"
                className="text-2xl font-semibold tracking-tight"
              >
                See {project.title} in action
              </h2>
              <p className="text-muted-foreground mx-auto mt-2 max-w-md text-pretty">
                {project.summary}
              </p>
              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group mt-6">
                  Visit the live site
                  <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </section>
          )}

          {/* CTA */}
          <section
            aria-labelledby="cta-heading"
            className={`bg-primary/5 rounded-2xl border p-8 text-center sm:p-10 ${
              isLive ? "mt-6" : "mt-16"
            }`}
          >
            <h2
              id="cta-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Building something like this?
            </h2>
            <p className="text-muted-foreground mx-auto mt-2 max-w-md text-pretty">
              We design, build and ship web apps, mobile apps and cloud
              infrastructure. Tell us about your project and we&apos;ll get back
              to you within 24 hours.
            </p>
            <Link href="/get-started">
              <Button size="lg" className="group mt-6">
                Start a Conversation
                <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </section>

          {/* Footer nav */}
          <nav
            aria-label="Case study navigation"
            className="mt-12 flex items-center justify-between border-t pt-8"
          >
            <Link
              href="/portfolio"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <ArrowLeft className="size-4" />
              All Case Studies
            </Link>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Next: {nextProject.title}
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
