"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Understand",
    body: "Deep dive into your business requirements, goals, and challenges. We listen, analyze, and define the project scope together.",
  },
  {
    icon: PenTool,
    title: "Design",
    body: "Create detailed architecture, user experience designs, and technical specifications. Collaborative planning ensures alignment with your vision.",
  },
  {
    icon: Code2,
    title: "Develop",
    body: "Agile development with regular updates and feedback loops. Quality code, rigorous testing, and continuous integration throughout.",
  },
  {
    icon: Rocket,
    title: "Deliver",
    body: "Seamless deployment, comprehensive documentation, and ongoing support. Your success is our success, beyond project completion.",
  },
]

export default function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Our Process</p>
          <h2
            id="process-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Process & How We Work
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Our proven methodology ensures successful project delivery, every
            time.
          </p>
        </div>

        <ol ref={containerRef} className="relative mt-20 space-y-14 sm:space-y-20">
          {/* track (full length, faint) */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          />
          {/* progress fill, animated with scroll */}
          <motion.div
            aria-hidden="true"
            style={{ height: lineHeight }}
            className="absolute left-6 top-2 w-px bg-primary sm:left-1/2 sm:-translate-x-1/2"
          />

          {steps.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[number]
  index: number
}) {
  const Icon = step.icon
  const reversed = index % 2 === 1

  return (
    <li
      className={`relative flex flex-col gap-4 pl-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0 ${
        reversed ? "" : ""
      }`}
    >
      {/* number node on the timeline */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute left-0 top-0 z-10 flex size-12 items-center justify-center rounded-full border-2 border-primary bg-background font-semibold text-primary sm:left-1/2 sm:-translate-x-1/2"
      >
        {index + 1}
      </motion.div>

      {/* content — alternates sides on sm+, stacks on mobile */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`rounded-2xl border bg-card p-6 ${
          reversed ? "sm:order-2 sm:col-start-2" : "sm:order-1 sm:col-start-1 sm:text-right"
        }`}
      >
        <div
          className={`flex items-center gap-3 ${
            reversed ? "" : "sm:flex-row-reverse"
          }`}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4.5" strokeWidth={1.75} />
          </span>
          <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground text-pretty">
          {step.body}
        </p>
      </motion.div>

      {/* empty spacer column so the alternating card sits on the correct side */}
      <div className="hidden sm:block" aria-hidden="true" />
    </li>
  )
}