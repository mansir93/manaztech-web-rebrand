"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-neutral-900 via-neutral-950 to-black px-6 py-20 text-center shadow-2xl sm:px-12 sm:py-28">
        {/* animated grid backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[44px_44px]"
        />

        {/* drifting glow orbs */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-blue-500/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* content */}
        <div className="relative">
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
          >
            Ready to turn your idea into a{" "}
            <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              working product?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-white/60 text-pretty"
          >
            Tell us what you&apos;re building we&apos;ll get back to you within 24
            hours with a clear, honest read on scope and timeline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
              <Link href="/get-started">
                    <Button size="lg" className="group">
                        Start Your Project
                        <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
              </Link>
              {/* <Link href="#portfolio">
                    <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    >
                        View Our Work
                    </Button>
              </Link> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-xs text-white/40"
          >
            No commitment required · Free initial consultation
          </motion.p>
        </div>
      </div>
    </section>
  )
}