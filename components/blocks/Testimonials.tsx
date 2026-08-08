"use client"

import { motion } from "motion/react"
import { Heart, Repeat2, MessageCircle, BadgeCheck } from "lucide-react"

interface Testimonial {
  name: string
  handle: string
  role: string
  quote: string
  initials: string
  avatarColor: string
  likes: string
  reposts: string
}

const testimonials: Testimonial[] = [
  {
    name: "Charles Anderson",
    handle: "@charlesbuilds",
    role: "CEO",
    quote:
      "Manaz Technologies transformed our outdated system into a modern, efficient platform. Their team's expertise and dedication exceeded our expectations.",
    initials: "CA",
    avatarColor: "bg-rose-500",
    likes: "128",
    reposts: "24",
  },
  {
    name: "Michael Aseidu",
    handle: "@m_aseidu",
    role: "Founder",
    quote:
      "Outstanding development team with incredible attention to detail. They delivered our mobile app on time and within budget. Highly recommended!",
    initials: "MA",
    avatarColor: "bg-blue-500",
    likes: "96",
    reposts: "18",
  },
  {
    name: "Amanda",
    handle: "@amanda_cto",
    role: "CTO",
    quote:
      "Professional, innovative, and reliable. Manaz Technologies helped us scale our operations with their cloud solutions. True technology partners.",
    initials: "A",
    avatarColor: "bg-violet-500",
    likes: "142",
    reposts: "31",
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">
            Client Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Testimonials & Social Proof
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            What our clients say about working with Manaz Technologies &
            Solutions.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.li
              key={t.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <PostCard testimonial={t} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Styled to always read as a dark "X" post card, independent of the
// site's own light/dark theme — this is a deliberate visual quote,
// not a themed component.
function PostCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-white/10 bg-black p-5 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <header className="flex items-start gap-3">
        <span
          className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${t.avatarColor}`}
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <cite className="truncate text-[15px] font-semibold not-italic">
              {t.name}
            </cite>
            <BadgeCheck
              className="size-4 shrink-0 fill-sky-500 text-black"
              aria-label="Verified"
            />
          </div>
          <p className="truncate text-sm text-white/50">
            {t.handle} · {t.role}
          </p>
        </div>
        {/* X logo mark */}
        <svg
          viewBox="0 0 24 24"
          className="size-4 shrink-0 fill-white/40"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </header>

      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/90 text-pretty">
        {t.quote}
      </p>

      <footer className="mt-4 flex items-center gap-5 border-t border-white/10 pt-3 text-white/50">
        <span className="flex items-center gap-1.5 text-xs">
          <MessageCircle className="size-4" aria-hidden="true" />
        </span>
        <span className="flex items-center gap-1.5 text-xs">
          <Repeat2 className="size-4" aria-hidden="true" />
          {t.reposts}
        </span>
        <span className="flex items-center gap-1.5 text-xs">
          <Heart className="size-4" aria-hidden="true" />
          {t.likes}
        </span>
      </footer>
    </blockquote>
  )
}