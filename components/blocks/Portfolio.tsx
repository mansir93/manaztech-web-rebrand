"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

interface CaseStudy {
  slug: string
  title: string
  category: string
  summary: string
  image: string
  imageAlt: string
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full-stack marketplace solution",
    summary:
      "A scalable e-commerce platform with real-time inventory management, payment processing, and an advanced analytics dashboard built for a fast-growing marketplace.",
    image: "/portfolio/ecommerce-platform.png",
    imageAlt: "E-commerce platform dashboard showing product inventory and sales analytics",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    category: "Digital transformation for healthcare",
    summary:
      "A comprehensive patient management system with appointment scheduling, electronic health records, and telemedicine capabilities for a multi-clinic provider.",
    image: "/portfolio/healthcare-management-system.png",
    imageAlt: "Healthcare management system interface showing patient records and scheduling",
    tags: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    slug: "educational-platform",
    title: "Educational Platform",
    category: "Learning management system",
    summary:
      "An interactive learning platform with course management, progress tracking, and collaborative tools built for modern, remote-first education.",
    image: "/portfolio/educational-platform.png",
    imageAlt: "Educational platform interface showing course modules and student progress",
    tags: ["Next.js", "Express", "MySQL"],
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Our Work</p>
          <h2
            id="portfolio-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Portfolio & Case Studies
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Selected work showcasing our capability to deliver innovative
            solutions.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {caseStudies.map((study, i) => (
            <CaseStudyRow key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyRow({ study, index }: { study: CaseStudy; index: number }) {
  const reversed = index % 2 === 1

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
        <div
          className="relative block overflow-hidden rounded-2xl border shadow-xl"
          aria-label={`View ${study.title} case study`}
        >
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
            <span className="m-6 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
              View Case Study
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>

        {/* index tab */}
        <span
          aria-hidden="true"
          className="absolute -top-4 left-6 rounded-full border bg-background px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm"
        >
          {String(index + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <p className="text-sm font-medium text-primary">{study.category}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl text-balance">
          {study.title}
        </h3>
        <p className="mt-4 text-muted-foreground text-pretty">
          {study.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={`#`}
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          View Case Study
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </article>
  )
}