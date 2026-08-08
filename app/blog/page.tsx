import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { blogs } from "@/data/blog"

const SITE_URL = "https://manaztech.com"
const PAGE_TITLE = "Blog & Insights"
const PAGE_DESCRIPTION =
  "Practical insights on software development, cloud infrastructure, mobile apps, and automation from the Manaz Technologies & Solutions team."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: "website",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
    images: ["/og-image.png"]
  },
}

export default function BlogPage() {
  return (
    <>
      <header className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-primary">Our Blog</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Blog & Insights
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {PAGE_DESCRIPTION}
          </p>
        </div>
      </header>

      <section aria-label="Blog posts" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <li key={post.id}>
                <article className="group h-full overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-6">
                      <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
                        {post.keywords.slice(0, 2).map((kw) => (
                          <li
                            key={kw}
                            className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                          >
                            {kw}
                          </li>
                        ))}
                      </ul>
                      <h2 className="mt-3 text-lg font-semibold tracking-tight text-balance">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground text-pretty line-clamp-2">
                        {post.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read article
                        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}