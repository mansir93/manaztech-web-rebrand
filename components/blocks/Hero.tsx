// Path: components/blocks/Hero.tsx
"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PreviewWindow from "../PreviewWindow";

// Fake "code lines" used to animate the left panel of the preview.

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-20"
    >
      {/* ambient background glow — subtle, single accent, not decorative overload */}
      <div
        aria-hidden="true"
        className="bg-primary/10 pointer-events-none absolute top-20 left-1/2 h-125 w-225 -translate-x-1/2 rounded-full blur-3xl"
      />

      <div className="flex flex-col items-center lg:flex-row">
        {/* Left: content */}
        <div className="relative flex flex-1 flex-col items-start justify-start">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-muted/50 text-muted-foreground mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
          >
            Transforming ideas into digital reality
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Custom software that grows with your{" "}
            <span className="text-primary">business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mt-5 max-w-lg text-lg text-pretty"
          >
            We build cutting-edge software solutions that drive real business
            results combining startup agility with enterprise-grade engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Right: animated app preview */}
        <div className="relative mt-12 w-full flex-1 lg:mt-0 lg:ml-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <PreviewWindow />
          </motion.div>

          {/* Hand-drawn style annotation + arrow pointing at the preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="pointer-events-none absolute top-10 -left-10 hidden -rotate-45 sm:block lg:-left-10"
            aria-hidden="true"
          >
            <svg
              width="110"
              height="70"
              viewBox="0 0 110 70"
              fill="none"
              className="text-primary"
            >
              <path
                d="M100 8C70 4 30 18 14 52"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 5"
              />
              <path
                d="M8 40L14 52L26 48"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
