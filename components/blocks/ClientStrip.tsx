"use client"

import { motion } from "motion/react"

// Placeholder client names — swap for real client names/logo files.
// Kept as styled wordmarks rather than image logos until real assets exist.
const clients = [
  "Northbridge Capital",
  "Verdant Health",
  "Lumen Retail",
  "Atlas Logistics",
  "Kessel Education",
  "Ridgeline Bank",
]

export default function ClientStrip() {
  return (
    <section
      aria-labelledby="clients-heading"
      className=" bg-muted/20 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          id="clients-heading"
          className="text-center text-sm font-medium text-muted-foreground"
        >
          Trusted by teams across startups, healthcare, and enterprise
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {clients.map((name, i) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <span className="select-none text-center text-sm font-semibold tracking-tight text-muted-foreground/50 grayscale transition-all duration-300 hover:text-foreground hover:grayscale-0">
                {name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}