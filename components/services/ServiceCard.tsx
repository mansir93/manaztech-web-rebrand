'use client'
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { services } from "@/lib/services-data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";


export default function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Learn more about ${service.title}`}
      >
        <span className="sr-only">View {service.title} details</span>
      </Link>

      {/* Image — bleeds to card edges, fixed aspect so the grid stays even */}
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />

        {/* number watermark now sits over the photo, in a corner with
            enough contrast via a soft gradient rather than raw text */}
        <span
          aria-hidden="true"
          className="absolute -right-2 -top-3 text-7xl font-bold text-white/10 mix-blend-overlay"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 pt-8">
        <h2 className="relative text-base font-semibold tracking-tight">
          {service.title}
        </h2>

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

        <Button
          variant="link"
          className="relative z-20 mt-4 inline-flex w-fit px-0"
        >
          Learn more
          <ArrowUpRight className="size-3.5" />
        </Button>
      </div>
    </motion.article>
  )
}