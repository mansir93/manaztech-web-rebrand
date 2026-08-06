"use client"

import React from "react"
import { motion } from "motion/react"
import { Zap, ShieldCheck, Layers } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Lightning Fast Development",
    body: "Rapid prototyping and agile processes that get your product to market faster than traditional approaches.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    body: "Bank-level security protocols and compliance standards keep your data and applications protected.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    body: "Future-proof solutions designed to grow with you from startup MVP to enterprise scale.",
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Why Choose Us</p>
          <h2
            id="why-us-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Why Choose Manaz Technologies?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            We combine startup agility with enterprise expertise to deliver
            exceptional results.
          </p>
        </div>

        {/* connecting line behind the cards — ties the three together
            without implying they're sequential steps */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-border to-transparent md:block"
          />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                // middle card sits slightly raised — breaks the flat grid
                // without turning it into a "01/02/03" sequence
                className={`group relative rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 ${
                  i === 1 ? "md:-mt-6" : ""
                }`}
              >
                {/* glow ring that appears on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl bg-linear-to-b from-primary/6 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="size-6" strokeWidth={1.75} />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground text-pretty">
                  {item.body}
                </p>

                {/* connector node — sits on the line for the two outer cards */}
                {i !== 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-8.25 left-1/2 hidden size-2 -translate-x-1/2 rounded-full bg-primary/40 md:block"
                    style={{ display: "none" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}