import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { blogs } from "@/data/blog"

const SITE_URL = "https://manaztech.com"

interface PageProps {
  params: Promise<{ slug: string }>
}

function getPostBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug)
}

// Pre-render every blog post at build time.
export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: "Post not found" }

  const title = post.title
  const description = post.description

  return {
    title,
    description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const currentIndex = blogs.findIndex((p) => p.slug === slug)
  const nextPost = blogs[(currentIndex + 1) % blogs.length]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: "Manaz Technologies & Solutions",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Manaz Technologies & Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="truncate text-foreground">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header>
            <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
              {post.keywords.map((kw) => (
                <li
                  key={kw}
                  className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {kw}
                </li>
              ))}
            </ul>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {post.description}
            </p>
          </header>

          {/* Hero image */}
          <figure className="mt-8 overflow-hidden rounded-2xl border shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </figure>

          {/* Body content — authored HTML from the data source */}
          <div
            className="prose prose-neutral dark:prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer nav */}
          <nav
            aria-label="Blog navigation"
            className="mt-14 flex items-center justify-between border-t pt-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All Articles
            </Link>
            <Link
              href={`/blog/${nextPost.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Next: {nextPost.title}
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      </article>
    </>
  )
}