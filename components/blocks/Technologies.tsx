"use client"

import { motion } from "motion/react"

interface TechCategory {
  label: string
  items: string[]
  accent: string
}

const categories: TechCategory[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    accent: "text-primary",
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Express", "Django", "FastAPI"],
    accent: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    accent: "text-violet-600 dark:text-violet-400",
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    accent: "text-emerald-600 dark:text-emerald-400",
  },
]

export default function Technologies() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Technology Stack</p>
          <h2
            id="technologies-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Technologies & Expertise
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            A cutting-edge technology stack powering next-generation
            solutions.
          </p>
        </div>

        <div className="relative mt-16 space-y-4">
          {/* fade masks so the marquee reads as "flowing off-screen",
              not abruptly clipped */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-32"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-32"
          />

          {categories.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3 rounded-2xl border bg-card py-4 sm:flex-row sm:items-center sm:gap-6 sm:py-5"
            >
              <h3
                className={`shrink-0 pl-5 text-sm font-semibold sm:w-40 sm:pl-6 ${category.accent}`}
              >
                {category.label}
              </h3>

              {/* marquee track — duplicated content, alternating direction per row */}
              <div className="group overflow-hidden sm:flex-1">
                <ul
                  className={`flex w-max shrink-0 items-center gap-3 pr-3 motion-safe:animate-[marquee_28s_linear_infinite] group-hover:paused ${
                    i % 2 === 1 ? "shimmer-reverse" : ""
                  }`}
                  aria-label={`${category.label} technologies`}
                >
                  {[...category.items, ...category.items].map((item, idx) => (
                    <li
                      key={`${item}-${idx}`}
                      aria-hidden={idx >= category.items.length}
                      className="shrink-0 rounded-full border bg-muted/40 px-4 py-2 text-sm font-medium whitespace-nowrap"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}