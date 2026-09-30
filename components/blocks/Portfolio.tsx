"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PortfolioProject, portfolioProjects } from "@/data/PortfolioProject";
import { Button } from "../ui/button";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-medium">Our Work</p>
          <h2
            id="portfolio-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Portfolio & Case Studies
          </h2>
          <p className="text-muted-foreground mt-4 text-pretty">
            Selected work showcasing our capability to deliver innovative
            solutions.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {portfolioProjects.map((study, i) => (
            <CaseStudyRow key={study.slug} study={study} index={i} />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <Link href={"/portfolio"}>
            <Button variant={"outline"}>
              View All Case Studies
              <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudyRow({
  study,
  index,
}: {
  study: PortfolioProject;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <article
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`group relative lg:col-span-7 ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="relative block overflow-hidden rounded-2xl border shadow-xl">
          <Image
            src={study.image}
            alt={study.imageAlt}
            width={900}
            height={620}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 55vw, 90vw"
          />
          {/* overlay reveal on hover */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <Link
              href={`/portfolio/${study.slug}`}
              className="m-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
            >
              Read Case Study
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <p className="text-primary text-sm font-medium">{study.category}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {study.title}
        </h3>
        <p className="text-muted-foreground mt-4 text-pretty">
          {study.summary}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={`/portfolio/${study.slug}`}
          className="group text-primary mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
        >
          Read Case Study
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </article>
  );
}
