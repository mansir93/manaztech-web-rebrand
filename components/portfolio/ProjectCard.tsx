import { portfolioProjects } from "@/data/PortfolioProject";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  project,
}: {
  project: (typeof portfolioProjects)[number];
  index: number;
}) {
  const isLive = project.livePreview && project.livePreview !== "#";

  return (
    <article className="group bg-card hover:shadow-primary/5 flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
        <p className="text-primary text-sm font-medium">{project.category}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-balance">
          {project.title}
        </h2>
        <p className="text-muted-foreground mt-3 text-sm text-pretty">
          {project.summary}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies used"
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

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <Link
            href={`/portfolio/${project.slug}`}
            className="group/link text-primary inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            Read case study
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
          {isLive && (
            <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Live site
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
