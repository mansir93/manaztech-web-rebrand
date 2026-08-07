"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Sparkles, HeartHandshake, Trophy } from "lucide-react"

const points = [
  {
    icon: Sparkles,
    title: "Innovation First",
    body: "We leverage cutting-edge technologies to create solutions that push boundaries and drive growth.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    body: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
  },
  {
    icon: Trophy,
    title: "Proven Excellence",
    body: "Our track record speaks for itself with successful projects across various industries.",
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border shadow-xl">
              <Image
                src="public/assets/modern-tech-team.jpg"
                alt="Manaz Technologies team collaborating on a client project"
                width={640}
                height={520}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>

            {/* floating stat card — small, single accessory, grounded to a real number */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 rounded-xl border bg-card px-5 py-4 shadow-lg sm:-right-8"
            >
              <p className="text-2xl font-semibold tracking-tight">5+</p>
              <p className="text-xs text-muted-foreground">
                Years building software
              </p>
            </motion.div>

            {/* ambient accent shape behind the image */}
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 -z-10 size-32 rounded-2xl bg-primary/10 blur-2xl"
            />
          </motion.div>

          {/*  Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-primary">
              About Manaz Technologies
            </p>
            <h2
              id="about-heading"
              className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl text-balance"
            >
              Forward-thinking technology,{" "}
              <span className="text-primary">built with intent</span>
            </h2>

            <div className="mt-5 space-y-4 text-muted-foreground text-pretty">
              <p>
                We&apos;re a technology company dedicated to delivering
                innovative solutions that empower businesses to thrive in
                the digital age. Every engagement starts with your real
                problem, not a template.
              </p>
              <p>
                From early-stage startups to established enterprises, we
                bring the same rigor: clear architecture, honest
                communication, and code built to last past launch day.
              </p>
            </div>

            <dl className="mt-8 space-y-5">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <dt className="font-semibold">{p.title}</dt>
                    <dd className="mt-0.5 text-sm text-muted-foreground text-pretty">
                      {p.body}
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}