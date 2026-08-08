import { portfolioProjects } from "@/data/PortfolioProject";
import { ArrowUpRight } from "lucide-react";
import Link from "next/dist/client/link";
import Image from "next/image";



export default function ProjectCard({
  project,
}: {
  project: (typeof portfolioProjects)[number]
  index: number
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={900}
          height={620}
          className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 90vw"
        />

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-primary">{project.category}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-balance">
          {project.title}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground text-pretty">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={project.livePreview}
          target="_blank"
          className="group/link mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-semibold text-primary"
        >
          Live preview
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  )
}