"use client"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/services-data"

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Our Services</p>
          <h2
            id="services-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Services & Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Comprehensive technology services designed to accelerate your
            digital journey.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = service.icon
  // cycle the accent so cards aren't visually identical row after row
  const accent = index % 3

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
    >
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Learn more about ${service.title}`}
      >
        <span className="sr-only">View {service.title} details</span>
      </Link>

      {/* big faint index number in the corner — a small typographic
          accessory instead of decoration everywhere */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 text-7xl font-bold text-foreground/4 transition-colors duration-300 group-hover:text-primary/6"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        aria-hidden="true"
        className={`relative flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
          accent === 0
            ? "bg-primary/10 text-primary"
            : accent === 1
              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              : "bg-violet-500/10 text-violet-600 dark:text-violet-400"
        }`}
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </div>

      <h3 className="relative mt-4 text-base font-semibold tracking-tight">
        {service.title}
      </h3>

      <p className="relative mt-2 text-sm text-muted-foreground text-pretty line-clamp-2">
        {service.summary}
      </p>

      <div className="relative mt-auto flex flex-wrap gap-1.5 pt-4">
        {service.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/services/${service.slug}`} className="relative z-20 mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Learn more
        <ArrowUpRight className="size-3.5" />
      </Link>
    </motion.article>
  )
}