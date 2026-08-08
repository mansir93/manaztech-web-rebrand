import type { Metadata } from "next"
import { portfolioProjects } from "@/data/PortfolioProject"
import ProjectCard from "@/components/portfolio/ProjectCard";

const SITE_URL = "https://manaztech.com"
const PAGE_TITLE = "Portfolio & Case Studies"
const PAGE_DESCRIPTION =
  "Selected work from Manaz Technologies & Solutions — real projects across e-commerce, healthcare, and education, with the challenges we solved and the results delivered."

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Manaz Technologies & Solutions`,
    description: PAGE_DESCRIPTION,
  },
}

export default function PortfolioPage() {
  return (
    <>
      <header className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-primary">Our Work</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Portfolio & Case Studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-pretty">
            {PAGE_DESCRIPTION}
          </p>
        </div>
      </header>

      <section aria-label="Case studies" className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {portfolioProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}